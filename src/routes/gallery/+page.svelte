<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Gallery categories
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'color', name: 'Color Transformations' },
    { id: 'cuts', name: 'Haircuts' },
    { id: 'styling', name: 'Styling' },
    { id: 'bridal', name: 'Bridal' }
  ];
  
  // Gallery items
  const galleryItems = [
    {
      id: 1,
      image: '/images/gallery/color1.jpg',
      title: 'Blonde Transformation',
      description: 'From dark brown to honey blonde balayage',
      category: 'color',
      featured: true,
      stylist: 'Alex Morgan'
    },
    {
      id: 2,
      image: '/images/gallery/color2.jpg',
      title: 'Rose Gold',
      description: 'Subtle rose gold highlights on natural brunette',
      category: 'color',
      featured: false,
      stylist: 'Taylor Kim'
    },
    {
      id: 3,
      image: '/images/gallery/cut1.jpg',
      title: 'Textured Bob',
      description: 'Modern textured bob with face-framing layers',
      category: 'cuts',
      featured: true,
      stylist: 'Casey Brown'
    },
    {
      id: 4,
      image: '/images/gallery/cut2.jpg',
      title: 'Pixie Cut',
      description: 'Bold pixie cut with textured top',
      category: 'cuts',
      featured: false,
      stylist: 'Casey Brown'
    },
    {
      id: 5,
      image: '/images/gallery/style1.jpg',
      title: 'Beach Waves',
      description: 'Effortless beach waves for medium to long hair',
      category: 'styling',
      featured: true,
      stylist: 'Jordan Smith'
    },
    {
      id: 6,
      image: '/images/gallery/style2.jpg',
      title: 'Sleek Blowout',
      description: 'Polished straight blowout with added volume',
      category: 'styling',
      featured: false,
      stylist: 'Alex Morgan'
    },
    {
      id: 7,
      image: '/images/gallery/bridal1.jpg',
      title: 'Romantic Updo',
      description: 'Soft romantic updo with loose tendrils',
      category: 'bridal',
      featured: true,
      stylist: 'Taylor Kim'
    },
    {
      id: 8,
      image: '/images/gallery/bridal2.jpg',
      title: 'Modern Bridal',
      description: 'Contemporary half-up style with braided details',
      category: 'bridal',
      featured: false,
      stylist: 'Jordan Smith'
    },
    {
      id: 9,
      image: '/images/gallery/color3.jpg',
      title: 'Caramel Highlights',
      description: 'Sun-kissed caramel highlights on dark hair',
      category: 'color',
      featured: false,
      stylist: 'Alex Morgan'
    },
    {
      id: 10,
      image: '/images/gallery/cut3.jpg',
      title: 'Long Layers',
      description: 'Face-framing layers with added volume',
      category: 'cuts',
      featured: false,
      stylist: 'Casey Brown'
    },
    {
      id: 11,
      image: '/images/gallery/style3.jpg',
      title: 'Vintage Waves',
      description: 'Classic Hollywood-inspired waves',
      category: 'styling',
      featured: false,
      stylist: 'Jordan Smith'
    },
    {
      id: 12,
      image: '/images/gallery/bridal3.jpg',
      title: 'Boho Bridal',
      description: 'Bohemian-inspired bridal style with floral accents',
      category: 'bridal',
      featured: true,
      stylist: 'Taylor Kim'
    },
  ];
  
  // State
  let activeCategory = 'all';
  let filteredItems = [...galleryItems];
  let expandedItem = null;
  
  // Functions
  function filterGallery(category) {
    activeCategory = category;
    filteredItems = category === 'all' 
      ? [...galleryItems]
      : galleryItems.filter(item => item.category === category);
  }
  
  function handleImageError(event) {
    const img = event.target;
    img.style.display = 'none';
    
    const parent = img.parentElement;
    const placeholder = document.createElement('div');
    placeholder.className = 'w-full h-full bg-gold/20 flex flex-col items-center justify-center p-4 text-center';
    
    const icon = document.createElement('div');
    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mb-2 text-black/70" fill="none" viewBox="0 0 24 24" stroke="currentWeight"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>';
    
    const text = document.createElement('span');
    text.className = 'text-sm font-bold text-black';
    text.textContent = img.alt || 'Image placeholder';
    
    placeholder.appendChild(icon);
    placeholder.appendChild(text);
    parent.appendChild(placeholder);
  }
  
  // Set featured items on mount
  onMount(() => {
    // Create gallery directory and placeholder if it doesn't exist
    try {
      const mkdirCommand = 'mkdir -p static/images/gallery';
      
      // Create placeholder file with instructions
      const placeholderPath = 'static/images/gallery/README.md';
      const placeholderContent = `# Gallery Images

This directory should contain the following images for the gallery:

- color1.jpg, color2.jpg, color3.jpg - Hair color transformations
- cut1.jpg, cut2.jpg, cut3.jpg - Haircut styles
- style1.jpg, style2.jpg, style3.jpg - Hair styling examples  
- bridal1.jpg, bridal2.jpg, bridal3.jpg - Bridal hairstyles

Please add high-quality images with the following specifications:
- Resolution: At least 1000px wide
- Aspect ratio: 3:4 (portrait) works best
- Format: JPG or WebP (preferred for better compression)
- Size: Optimize for web (under 300KB per image)
`;
      
      // We can't actually run this code in the browser, but we're adding it as a hint for what needs to be done
      console.log('Note: Create gallery directory at /static/images/gallery/ and add placeholder images');
    } catch (e) {
      console.error('Could not create placeholder directory', e);
    }
  });
  
  // Track visible items for animation
  $: visibleItems = filteredItems;
</script>

<svelte:head>
  <title>Gallery | LUXE Hair</title>
  <meta name="description" content="Browse our gallery of stunning hair transformations, cuts, colors, and styles created by our expert stylists.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-black text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-playfair mb-4">Our <span class="text-gold">Gallery</span></h1>
      <p class="text-lg font-lato font-light max-w-2xl mx-auto">
        Browse our collection of stunning transformations created by our talented team of stylists.
      </p>
    </div>
  </div>
  
  <!-- Filter Categories -->
  <div class="bg-light-gray py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex flex-wrap justify-center gap-2 md:gap-4">
        {#each categories as category}
          <button
            class="px-4 py-2 rounded-full transition-colors font-medium text-sm
                  {activeCategory === category.id ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}"
            on:click={() => filterGallery(category.id)}
            aria-pressed={activeCategory === category.id}
          >
            {category.name}
          </button>
        {/each}
      </div>
    </div>
  </div>
  
  <!-- Gallery Grid -->
  <div class="max-w-6xl mx-auto px-4 py-12">
    {#if filteredItems.length === 0}
      <div class="text-center py-12">
        <p class="text-gray-500 text-lg">No images found in this category.</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredItems as item (item.id)}
          <div 
            class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group"
            on:click={() => expandedItem = item}
            on:keydown={(e) => e.key === 'Enter' && (expandedItem = item)}
            role="button"
            tabindex="0"
          >
            <div class="relative h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                on:error={handleImageError}
              />
              
              {#if item.featured}
                <div class="absolute top-3 right-3 bg-gold text-black text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </div>
              {/if}
              
              <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-4 px-4 transform translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                <h3 class="text-white font-bold text-lg">{item.title}</h3>
                <p class="text-white/80 text-sm mt-1">{item.description}</p>
                <p class="text-gold text-xs mt-2">By {item.stylist}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <!-- Instagram Section -->
  <section class="bg-black py-16 px-4 text-white">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-flex items-center justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 fill-current text-white">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </div>
      
      <h2 class="text-3xl font-bold font-playfair mb-4">Follow Our Work</h2>
      <p class="text-gray-300 max-w-2xl mx-auto mb-8">
        See our latest work and get inspired for your next visit. Follow us on Instagram for daily hair inspiration, behind-the-scenes content, and exclusive offers.
      </p>
      
      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" class="bg-white text-black px-8 py-3 rounded-full font-bold inline-flex items-center hover:bg-gray-200 transition-colors">
        @luxehairsalon
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="bg-gold py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold font-playfair mb-4 text-black">Ready For Your Transformation?</h2>
      <p class="text-black/80 mb-8 max-w-2xl mx-auto font-lato">
        Book your appointment today and let our expert stylists help you find your perfect look.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/book" class="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center justify-center hover:bg-gray-800 transition-colors">
          Book Now
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="/contact" class="bg-transparent border-2 border-black text-black px-8 py-4 rounded-full font-bold inline-flex items-center justify-center hover:bg-black/10 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </section>
  
  <!-- Image Viewer Modal -->
  {#if expandedItem}
    <div
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 transition-opacity"
      on:click={() => expandedItem = null}
      on:keydown={(e) => e.key === 'Escape' && (expandedItem = null)}
      role="dialog"
      aria-modal="true"
      tabindex="0"
    >
      <div class="max-w-4xl w-full max-h-[90vh] relative" on:click|stopPropagation>
        <button
          class="absolute -top-12 right-0 text-white hover:text-gold"
          on:click={() => expandedItem = null}
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div class="md:w-2/3 relative">
            <img
              src={expandedItem.image}
              alt={expandedItem.title}
              class="w-full h-full object-cover"
              on:error={handleImageError}
            />
          </div>
          
          <div class="p-6 md:p-8 md:w-1/3 flex flex-col">
            <div>
              <h2 class="text-2xl font-bold font-playfair mb-2">{expandedItem.title}</h2>
              <p class="text-gray-600 mb-4">{expandedItem.description}</p>
              
              <div class="mb-6">
                <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Stylist</h3>
                <p class="font-medium">{expandedItem.stylist}</p>
              </div>
              
              <div class="mb-6">
                <h3 class="text-sm uppercase tracking-wider text-gray-500 mb-2">Service Type</h3>
                <p class="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {categories.find(c => c.id === expandedItem.category)?.name || expandedItem.category}
                </p>
              </div>
            </div>
            
            <div class="mt-auto">
              <a
                href={`/book?service=${encodeURIComponent(expandedItem.title.split(' ')[0])}`}
                class="w-full bg-black text-white py-3 rounded-full font-bold flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                Book This Look
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>

<style>
  .text-gold {
    color: var(--color-gold);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .hover\:text-gold:hover {
    color: var(--color-gold);
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .bg-eco-green, .text-eco-green {
    color: var(--color-eco-green);
  }
  
  .bg-eco-green\/20 {
    background-color: rgba(129, 193, 75, 0.2);
  }
  
  .bg-light-gray {
    background-color: var(--color-light-gray);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
</style> 