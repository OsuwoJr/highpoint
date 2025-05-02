<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Salon images for slideshow
  const salonImages = [
    '/images/gallery/salon.jpg',
    '/images/gallery/salon1.jpg'
  ];
  
  let currentImageIndex = 0;
  let fadeOut = false;
  
  // Function to cycle salon images
  function cycleImages() {
    fadeOut = true;
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % salonImages.length;
      fadeOut = false;
    }, 1000); // Fade out time
  }
  
  // Start image cycling when component mounts
  onMount(() => {
    // Cycle images every 5 seconds
    const interval = setInterval(cycleImages, 5000);
    
    // Clean up interval when component is destroyed
    return () => clearInterval(interval);
  });
  
  // Handle image loading errors
  function handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
    const parent = imgElement.parentElement;
    
    if (parent) {
      // Create fallback element
      const fallback = document.createElement('div');
      fallback.className = 'w-full h-full bg-secondary/20 flex items-center justify-center';
      
      const text = document.createElement('span');
      text.className = 'text-xl font-bold text-primary';
      text.textContent = imgElement.alt || 'Team Member';
      
      fallback.appendChild(text);
      parent.appendChild(fallback);
    }
  }
</script>

<svelte:head>
  <title>About Us | Belle Royale</title>
  <meta name="description" content="Learn about Belle Royale's expert stylists, our commitment to sustainable beauty, and our salon's story and values.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-primary text-light py-12 md:py-16 px-4 hero-section">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-3xl md:text-5xl font-bold font-playfair mb-4 fade-in-up">About <span class="text-gold font-cormorant italic">Belle Royale</span></h1>
      <p class="text-base md:text-lg font-lato font-light max-w-2xl mx-auto fade-in-up" style="animation-delay: 0.2s;">
        <strong>Where luxury meets sustainability, and beauty meets intention.</strong> Our team of expert stylists is passionate about creating stunning, long-lasting hairstyles using eco-friendly techniques and carefully chosen, planet-conscious products.
      </p>
    </div>
  </div>
  
  <!-- Our Story Section -->
  <section class="py-12 md:py-16 px-4 bg-light">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-10 md:mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Journey</span>
        <h2 class="text-2xl md:text-3xl font-bold mt-2 mb-4 font-playfair text-primary">Our Story</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div>
          <div class="w-full rounded-lg shadow-xl overflow-hidden" style="height: 300px; font-size: 0; line-height: 0;">
            <img 
              src={salonImages[currentImageIndex]} 
              alt="Belle Royale Salon Interior" 
              class="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              class:opacity-0={fadeOut}
              class:opacity-100={!fadeOut}
              style="display: block; vertical-align: top; margin: 0; padding: 0;"
              loading="eager"
              on:error={handleImageError}
            />
          </div>
        </div>
        
        <div>
          <p class="text-dark mb-6 font-lato">
            Founded in 2018 by the one and only <strong>Juliet Juma</strong>, Belle Royale was born from a vision to redefine the salon experience—delivering stunning, long-lasting results without wasting precious time. Juliet noticed how traditional salons often took hours with no guarantee of quality that lasts, and she set out to change that.
          </p>
          <p class="text-dark mb-6 font-lato">
            Belle Royale blends luxury with efficiency, ensuring every client receives top-tier treatment that fits into their busy schedule. From precision techniques to premium products, everything we do is designed to make your style last longer and shine brighter.
          </p>
          <p class="text-dark font-lato">
            We're also deeply committed to sustainability. Every aspect of our salon—from eco-friendly products to smart waste practices—is guided by a respect for our planet. Belle Royale is proof that beauty, speed, quality, and environmental consciousness can coexist beautifully.
          </p>
        </div>
        
      </div>
    </div>
  </section>
  


  
  <!-- Values Section -->
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Principles</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair text-primary">Our Core Values</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div class="text-center p-6 bg-light rounded-lg shadow-md hover:shadow-secondary/30 transition-all">
          <div class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3 text-primary">Sustainable Beauty</h3>
          <p class="text-dark font-lato">
            We're committed to minimizing our environmental impact while maximizing beautiful results with eco-friendly products and practices.
          </p>
        </div>
        
        <div class="text-center p-6 bg-light rounded-lg shadow-md hover:shadow-secondary/30 transition-all">
          <div class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3 text-primary">Excellence</h3>
          <p class="text-dark font-lato">
            We strive for perfection in every cut, color, and style, ensuring our clients leave feeling confident and beautiful.
          </p>
        </div>
        
        <div class="text-center p-6 bg-light rounded-lg shadow-md hover:shadow-secondary/30 transition-all">
          <div class="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3 text-primary">Transparency</h3>
          <p class="text-dark font-lato">
            We believe in honest pricing, clear communication, and educating our clients about the products and techniques we use.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-12 md:py-16 px-4 bg-primary text-light">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-2xl md:text-3xl font-bold font-playfair mb-4 md:mb-6">Experience the <span class="text-gold font-cormorant italic">Belle Royale</span> Difference</h2>
      <p class="mb-6 md:mb-8 font-lato font-light text-base md:text-lg max-w-2xl mx-auto">
        Ready to transform your hair with our expert team? Book your appointment today and discover 
        what makes Belle Royale the sustainable luxury salon of choice.
      </p>
      
      <a href="/book" class="btn-cta">
        Claim Your Throne
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </section>
</main>

<style>
  .bg-light {
    background-color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  
  
  .transition-opacity {
    transition: opacity 1s ease-in-out;
  }
  
  .opacity-0 {
    opacity: 0;
  }
  
  .opacity-100 {
    opacity: 1;
  }
  
  .bg-secondary\/20 {
    background-color: rgba(255, 182, 193, 0.2);
  }
  
  .hover\:shadow-secondary\/30:hover {
    box-shadow: 0 10px 15px -3px rgba(255, 182, 193, 0.3), 0 4px 6px -2px rgba(255, 182, 193, 0.15);
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .text-dark {
    color: var(--color-dark);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-cormorant {
    font-family: 'Cormorant Garamond', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  
  .btn-cta {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: bold;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
  }
  
  .btn-cta:hover {
    transform: scale(1.1);
    background-color: var(--color-light);
    box-shadow: 0 0 15px rgba(255, 182, 193, 0.5);
  }
  
  /* Hero section animations */
  .hero-section {
    position: relative;
    overflow: hidden;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(42, 45, 124, 0.8) 0%, rgba(42, 45, 124, 1) 70%);
    z-index: 0;
  }
  
  .hero-section > div {
    position: relative;
    z-index: 1;
  }
  
  .fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Responsive improvements */
  @media (max-width: 640px) {
    .btn-cta {
      width: 100%;
      justify-content: center;
    }
  }
</style> 