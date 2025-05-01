<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let videoLoaded = false;
    let videoError = false;
    let currentSlide = 0;
    let intervalId;
    let isMobile = false;
    
    // Images array for the slideshow
    const backgroundImages = [
      '/images/gallery/salon.jpg',
      '/images/gallery/salon1.jpg'
    ];
  
    onMount(() => {
      // Set videoLoaded to true after component mounts to ensure proper rendering
      videoLoaded = true;
      
      // Check if mobile device
      checkIfMobile();
      
      // Add resize event listener
      window.addEventListener('resize', checkIfMobile);
      
      // Start slideshow rotation
      intervalId = setInterval(() => {
        currentSlide = (currentSlide + 1) % backgroundImages.length;
      }, 5000); // Change slide every 5 seconds
      
      // Cleanup interval on component destruction
      return () => {
        if (intervalId) clearInterval(intervalId);
        window.removeEventListener('resize', checkIfMobile);
      };
    });

    function checkIfMobile() {
      isMobile = window.innerWidth < 768;
    }
    
    // Handle video loading errors
    function handleVideoError() {
      videoError = true;
    }
</script>
  
<div class="relative hero-container overflow-hidden">
  <!-- Background Images Slideshow -->
  {#each backgroundImages as image, i}
    <div 
      class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center"
      style="opacity: {currentSlide === i ? '1' : '0'}; z-index: {currentSlide === i ? '1' : '0'}"
    >
      <img 
        src={image} 
        alt="Belle Royale Salon" 
        class="w-full h-full object-cover"
        style="object-position: center center;"
      />
    </div>
  {/each}
  
  <!-- Fallback background if images fail to load -->
  {#if backgroundImages.length === 0}
    <div class="absolute inset-0 bg-black"></div>
  {/if}

  <!-- Overlay to enhance text readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-[2]"></div>

  <!-- Content -->
  <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4" in:fade={{ duration: 800 }}>
    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 font-playfair leading-tight">
      <span class="text-gold">Belle</span> Royale
    </h1>
    <p class="text-white text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl md:max-w-2xl font-lato font-light">
      Luxury sustainable haircare for the modern individual
    </p>
    <a 
      href="/book" 
      class="bg-gold hover:bg-gold-dark text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-bold transition-all transform hover:scale-105 focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none shadow-lg"
      aria-label="Book your appointment now"
    >
      Claim Your Throne
    </a>
  </div>
  
  <!-- Slideshow Navigation Dots -->
  <div class="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
    {#each backgroundImages as _, i}
      <button 
        class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all {currentSlide === i ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white'}"
        aria-label="Go to slide {i+1}"
        on:click={() => currentSlide = i}
      ></button>
    {/each}
  </div>
</div>
  
<style>
  .hero-container {
    height: 100vh;
    width: 100%;
    position: relative;
  }

  @media (max-width: 640px) {
    .hero-container {
      height: 100vh; /* Full viewport height on mobile */
    }
  }
  
  /* Ensure images fill their container */
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  .text-gold {
    color: var(--color-gold);
  }
  .bg-gold {
    background-color: var(--color-gold);
  }
  .bg-gold-dark {
    background-color: #B79526;
  }
  .focus\:ring-gold:focus {
    --tw-ring-color: var(--color-gold);
  }
</style>