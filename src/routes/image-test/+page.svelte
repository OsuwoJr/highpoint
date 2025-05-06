<script>
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  
  let imageStatuses = {};
  
  onMount(() => {
    // Image checking will happen with onError and onLoad handlers
  });
  
  function handleImageLoad(path) {
    console.log(`Image loaded successfully: ${path}`);
    imageStatuses[path] = 'loaded';
  }
  
  function handleImageError(path) {
    console.error(`Failed to load image: ${path}`);
    imageStatuses[path] = 'error';
  }
</script>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <div class="max-w-6xl mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">Image Test Page</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <div class="bg-white p-4 border border-gray-200 rounded">
        <h2 class="text-xl font-bold mb-4">skyline-house.jpg</h2>
        <div class="h-64 bg-gray-100 relative overflow-hidden">
          <img
            src="/images/projects/skyline-house.jpg"
            alt="Skyline House"
            class="w-full h-full object-cover"
            on:load={() => handleImageLoad('/images/projects/skyline-house.jpg')}
            on:error={() => handleImageError('/images/projects/skyline-house.jpg')}
          />
        </div>
        <p class="mt-2 text-sm">
          Status: 
          {#if imageStatuses['/images/projects/skyline-house.jpg'] === 'loaded'}
            <span class="text-green-600 font-bold">✓ Loaded</span>
          {:else if imageStatuses['/images/projects/skyline-house.jpg'] === 'error'}
            <span class="text-red-600 font-bold">✗ Failed to load</span>
          {:else}
            <span class="text-gray-600">Loading...</span>
          {/if}
        </p>
      </div>
      
      <div class="bg-white p-4 border border-gray-200 rounded">
        <h2 class="text-xl font-bold mb-4">architectural-design.jpg</h2>
        <div class="h-64 bg-gray-100 relative overflow-hidden">
          <img
            src="/images/architectural-design.jpg"
            alt="Architectural Design"
            class="w-full h-full object-cover"
            on:load={() => handleImageLoad('/images/architectural-design.jpg')}
            on:error={() => handleImageError('/images/architectural-design.jpg')}
          />
        </div>
        <p class="mt-2 text-sm">
          Status: 
          {#if imageStatuses['/images/architectural-design.jpg'] === 'loaded'}
            <span class="text-green-600 font-bold">✓ Loaded</span>
          {:else if imageStatuses['/images/architectural-design.jpg'] === 'error'}
            <span class="text-red-600 font-bold">✗ Failed to load</span>
          {:else}
            <span class="text-gray-600">Loading...</span>
          {/if}
        </p>
      </div>
      
      <div class="bg-white p-4 border border-gray-200 rounded">
        <h2 class="text-xl font-bold mb-4">favicon.png</h2>
        <div class="h-64 bg-gray-100 relative overflow-hidden">
          <img
            src="/favicon.png"
            alt="Favicon"
            class="w-auto h-auto max-h-full max-w-full mx-auto"
            on:load={() => handleImageLoad('/favicon.png')}
            on:error={() => handleImageError('/favicon.png')}
          />
        </div>
        <p class="mt-2 text-sm">
          Status: 
          {#if imageStatuses['/favicon.png'] === 'loaded'}
            <span class="text-green-600 font-bold">✓ Loaded</span>
          {:else if imageStatuses['/favicon.png'] === 'error'}
            <span class="text-red-600 font-bold">✗ Failed to load</span>
          {:else}
            <span class="text-gray-600">Loading...</span>
          {/if}
        </p>
      </div>
    </div>
    
    <div class="mb-8">
      <h2 class="text-xl font-bold mb-4">Image Load Summary</h2>
      <pre class="bg-gray-100 p-4 rounded overflow-auto">
        {JSON.stringify(imageStatuses, null, 2)}
      </pre>
    </div>
    
    <div class="bg-yellow-100 p-4 rounded mb-8">
      <h2 class="text-xl font-bold mb-2">Available Project Images</h2>
      <ul class="list-disc pl-5">
        <li>/images/projects/skyline-house.jpg</li>
        <li>/images/projects/skyline-house-2.jpg</li>
        <li>/images/projects/skyline-house-3.jpg</li>
        <li>/images/projects/kagundo-mansion.jpg</li>
        <li>/images/projects/la-finca.jpg</li>
        <li>/images/projects/kiambu-center.jpg</li>
        <li>/images/projects/karen-renovation.jpg</li>
        <li>/images/projects/guest-house.jpg</li>
        <li>/images/projects/warehouse.jpg</li>
        <li>/images/projects/projects-hero.jpg</li>
      </ul>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {#each [
        '/images/projects/skyline-house.jpg',
        '/images/projects/skyline-house-2.jpg',
        '/images/projects/skyline-house-3.jpg',
        '/images/projects/kagundo-mansion.jpg',
        '/images/projects/la-finca.jpg',
        '/images/projects/kiambu-center.jpg',
        '/images/projects/karen-renovation.jpg',
        '/images/projects/guest-house.jpg',
        '/images/projects/warehouse.jpg',
        '/images/projects/projects-hero.jpg'
      ] as path, i}
        <div class="bg-white p-2 border border-gray-200 rounded">
          <div class="h-32 bg-gray-100 relative overflow-hidden">
            <img
              src={path}
              alt={`Project Image ${i+1}`}
              class="w-full h-full object-cover"
              on:load={() => handleImageLoad(path)}
              on:error={() => handleImageError(path)}
            />
          </div>
          <p class="mt-1 text-xs truncate">{path.split('/').pop()}</p>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  pre {
    white-space: pre-wrap;
    word-break: break-all;
  }
</style> 