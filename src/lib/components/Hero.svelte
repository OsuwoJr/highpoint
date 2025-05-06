<script lang="ts">
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    let videoLoaded = false;
    let videoError = false;
    let currentSlide = 0;
    let intervalId: number;
    let isMobile = false;
    
    // Images array for the slideshow (fallback if video fails)
    const backgroundImages = [
      '/images/construction1.jpg',
      '/images/construction2.jpg'
    ];
  
    onMount(() => {
      // Check if mobile device
      checkIfMobile();
      
      // Add resize event listener
      window.addEventListener('resize', checkIfMobile);
      
      // Start slideshow rotation only if video has an error
      if (videoError) {
        startSlideshow();
      }
      
      // Cleanup on component destruction
      return () => {
        if (intervalId) clearInterval(intervalId);
        window.removeEventListener('resize', checkIfMobile);
      };
    });

    function startSlideshow() {
      if (intervalId) clearInterval(intervalId);
      
      intervalId = setInterval(() => {
        currentSlide = (currentSlide + 1) % backgroundImages.length;
      }, 5000); // Change slide every 5 seconds
    }

    function checkIfMobile() {
      isMobile = window.innerWidth < 768;
    }
    
    // Handle video loading errors
    function handleVideoError() {
      videoError = true;
      startSlideshow();
    }
    
    function handleVideoLoaded() {
      videoLoaded = true;
    }
</script>
  
<div class="relative hero-container overflow-hidden">
  <!-- Video Background -->
  <div class="absolute inset-0 w-full h-full z-[1]" style="opacity: {videoError ? '0' : '1'}">
    <video
      autoplay
      muted
      loop
      playsinline
      class="w-full h-full object-cover"
      on:error={handleVideoError}
      on:loadeddata={handleVideoLoaded}
    >
      <source src="/video/hero.mp4" type="video/mp4" />
      <!-- Video fallback handled by error event -->
    </video>
  </div>
  
  <!-- Background Images Slideshow (fallback) -->
  {#if videoError}
    {#each backgroundImages as image, i}
      <div 
        class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out bg-cover bg-center z-[1]"
        style="opacity: {currentSlide === i ? '1' : '0'}"
      >
        <img 
          src={image} 
          alt="Highpoint Construction Site" 
          class="w-full h-full object-cover"
          style="object-position: center center;"
        />
      </div>
    {/each}
  {/if}
  
  <!-- Fallback background if images fail to load -->
  {#if videoError && backgroundImages.length === 0}
    <div class="absolute inset-0 bg-black z-[1]"></div>
  {/if}

  <!-- Construction animated overlay elements -->
  <div class="construction-overlay z-[2]">
    <div class="blueprint-grid"></div>
    <div class="beam beam-1"></div>
    <div class="beam beam-2"></div>
    <div class="beam beam-3"></div>
    <div class="compass"></div>
  </div>

  <!-- Overlay to enhance text readability -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 z-[3]"></div>

  <!-- Content -->
  <div class="relative z-10 h-full flex flex-col justify-center items-center text-center px-4" in:fade={{ duration: 800 }}>
    <h1 class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 font-montserrat leading-tight">
      <span class="text-gold">Building Kenya's Future</span>
    </h1>
    <p class="text-white text-base sm:text-lg md:text-2xl mb-6 md:mb-8 max-w-xl md:max-w-2xl font-raleway font-light">
      Creating exceptional homes and buildings that stand the test of time.
    </p>
    <p class="text-white text-base sm:text-base md:text-xl mb-10 max-w-xl md:max-w-2xl font-raleway font-light">
      From architectural design to construction, we're transforming Kenya's urban and rural landscapes with innovative, sustainable, and beautiful buildings built to last.
    </p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a 
        href="/quote" 
        class="bg-gold hover:bg-black text-black px-6 py-3 md:px-8 md:py-4 rounded-none text-base md:text-lg font-bold transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none shadow-lg uppercase tracking-wider"
        aria-label="Get a quote for your project"
      >
        Get A Quote
      </a>
      <a 
        href="/projects" 
        class="bg-transparent border-2 border-white hover:border-gold text-white hover:text-gold px-6 py-3 md:px-8 md:py-4 rounded-none text-base md:text-lg font-bold transition-all transform hover:translate-y-[-2px] focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none shadow-lg uppercase tracking-wider"
        aria-label="View our portfolio"
      >
        See Our Work
      </a>
    </div>
  </div>
  
  <!-- Slideshow Navigation Dots (only shown if video fails and we're using the image slideshow) -->
  {#if videoError}
    <div class="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
      {#each backgroundImages as _, i}
        <button 
          class="w-2 h-2 md:w-3 md:h-3 rounded-full transition-all {currentSlide === i ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white'}"
          aria-label="Go to slide {i+1}"
          on:click={() => currentSlide = i}
        ></button>
      {/each}
    </div>
  {/if}
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
  
  /* Ensure images and video fill their container */
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Construction animations */
  .construction-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 1;
  }
  
  .blueprint-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 140, 0, 0.4) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 140, 0, 0.4) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 40s linear infinite;
  }
  
  @keyframes gridMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
  
  .beam {
    position: absolute;
    background-color: rgba(255, 152, 0, 0.9);
    border: 3px solid rgba(255, 204, 0, 1);
    box-shadow: 0 0 15px rgba(255, 204, 0, 0.8);
  }
  
  .beam-1 {
    width: 200px;
    height: 25px;
    top: 35%;
    left: -200px;
    transform: rotate(45deg);
    animation: beamSlide1 15s linear infinite;
  }
  
  .beam-2 {
    width: 250px;
    height: 25px;
    top: 60%;
    right: -250px;
    transform: rotate(-30deg);
    animation: beamSlide2 18s linear infinite;
    animation-delay: 2s;
  }
  
  .beam-3 {
    width: 180px;
    height: 25px;
    bottom: 25%;
    left: -180px;
    transform: rotate(15deg);
    animation: beamSlide3 12s linear infinite;
    animation-delay: 5s;
  }
  
  @keyframes beamSlide1 {
    0% { left: -200px; }
    50% { left: 100%; }
    50.01% { left: -200px; }
    100% { left: -200px; }
  }
  
  @keyframes beamSlide2 {
    0% { right: -250px; }
    50% { right: 100%; }
    50.01% { right: -250px; }
    100% { right: -250px; }
  }
  
  @keyframes beamSlide3 {
    0% { left: -180px; }
    50% { left: 100%; }
    50.01% { left: -180px; }
    100% { left: -180px; }
  }
  
  .compass {
    position: absolute;
    bottom: 15%;
    right: 10%;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 4px solid rgba(255, 255, 255, 0.9);
    background: radial-gradient(circle, rgba(255, 140, 0, 0.3) 0%, rgba(255, 140, 0, 0) 70%);
    animation: rotate 20s linear infinite;
    box-shadow: 0 0 20px rgba(255, 140, 0, 0.7);
  }
  
  .compass::before, .compass::after {
    content: '';
    position: absolute;
    background-color: rgba(255, 204, 0, 1);
  }
  
  .compass::before {
    top: 50%;
    left: 10%;
    right: 10%;
    height: 4px;
    transform-origin: center;
    animation: rotate 10s linear infinite;
  }
  
  .compass::after {
    top: 10%;
    bottom: 10%;
    left: 50%;
    width: 4px;
    transform-origin: center;
    animation: rotate 15s linear infinite reverse;
  }
  
  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  .text-gold {
    color: var(--color-gold);
  }
  .bg-gold {
    background-color: var(--color-gold);
  }
  .hover\:bg-gold-dark:hover {
    background-color: #E67E00;
  }
  .focus\:ring-gold:focus {
    --tw-ring-color: var(--color-gold);
  }
  .hover\:text-gold:hover {
    color: var(--color-gold);
  }
  .hover\:border-gold:hover {
    border-color: var(--color-gold);
  }
  .hover\:bg-black:hover {
    background-color: #000000;
  }
</style>