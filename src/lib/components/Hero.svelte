<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let videoLoaded = false;
    let videoError = false;
  
    onMount(() => {
      // Set videoLoaded to true after component mounts to ensure proper rendering
      videoLoaded = true;
    });

    // Handle video loading errors
    function handleVideoError() {
      videoError = true;
    }
</script>
  
<div class="relative h-screen overflow-hidden">
  <!-- Background Video - Optimized for performance with preload="metadata" -->
  {#if videoLoaded && !videoError}
    <video 
      autoplay 
      muted 
      loop 
      playsinline
      class="absolute inset-0 w-full h-full object-cover opacity-80"
      preload="metadata"
      aria-hidden="true"
      on:error={handleVideoError}
    >
      <source src="/videos/salon-ambiance.mp4" type="video/mp4">
    </video>
  {/if}
  
  <!-- Fallback background if video fails to load -->
  {#if videoError || !videoLoaded}
    <div class="absolute inset-0 bg-black"></div>
  {/if}

  <!-- Overlay to enhance text readability -->
  <div class="absolute inset-0 bg-black/30"></div>

  <!-- Content -->
  <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4" in:fade={{ duration: 800 }}>
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 font-playfair leading-tight">
      Where <span class="text-gold">Art</span> Meets Hair
    </h1>
    <p class="text-white text-xl mb-8 max-w-2xl font-lato font-light">
      Luxury sustainable haircare for the modern individual
    </p>
    <a 
      href="/book" 
      class="bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none"
      aria-label="Book your appointment now"
    >
      Book Now
    </a>
  </div>
</div>
  
<style>
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  .text-gold {
    color: #D4AF37;
  }
  .bg-gold {
    background-color: #D4AF37;
  }
  .bg-gold-dark {
    background-color: #B79526;
  }
  .focus\:ring-gold:focus {
    --tw-ring-color: #D4AF37;
  }
</style>