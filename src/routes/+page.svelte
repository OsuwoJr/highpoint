<script>
  import Hero from '$lib/components/Hero.svelte';
  import Header from '$lib/components/Header.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import { onMount } from 'svelte';
  
  let isIntersecting = {};
  
  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const id = entry.target.id;
          if (id) {
            isIntersecting = {
              ...isIntersecting,
              [id]: entry.isIntersecting
            };
          }
        });
      }, { 
        rootMargin: '0px', 
        threshold: 0.1 
      });
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }
  });
  
  const services = [
    {
      name: "Balayage",
      price: 200,
      description: "Hand-painted highlights for natural dimension",
      image: "/images/balayage.jpg"
    },
    {
      name: "Eco Color",
      price: 150,
      description: "Organic, plant-based hair color that's gentle on hair",
      image: "/images/eco-color.jpg"
    },
    {
      name: "Precision Cut",
      price: 95,
      description: "Tailored haircut to enhance your natural features",
      image: "/images/precision-cut.jpg"
    },
    {
      name: "Bridal Style",
      price: 250,
      description: "Complete bridal hair styling for your special day",
      image: "/images/bridal.jpg"
    },
    {
      name: "Keratin Treatment",
      price: 300,
      description: "Smooth, frizz-free hair that lasts for months",
      image: "/images/keratin.jpg"
    },
    {
      name: "Hair Extensions",
      price: 400,
      description: "Premium quality extensions for added length and volume",
      image: "/images/extensions.jpg"
    }
  ];
</script>

<Header />

<main id="main-content">
  <Hero />
  
  <!-- Services Section -->
  <section id="services" class="py-20 px-4 max-w-6xl mx-auto bg-light-gray">
    <div class="text-center mb-16 animate-on-scroll" id="services-heading">
      <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Expertise</span>
      <h2 class="text-4xl font-bold mt-2 mb-4 font-playfair">Our Signature Services</h2>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
      <p class="mt-6 text-gray-600 max-w-2xl mx-auto font-lato font-light">
        Experience our award-winning services delivered by expert stylists using sustainable, luxury products
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, i}
        <div class="animate-on-scroll" id="service-{i}" style="transition-delay: {i * 100}ms">
          <ServiceCard {service} />
        </div>
      {/each}
    </div>
  </section>

  <!-- AR Try-On Section -->
  <section class="bg-black text-white py-24 relative overflow-hidden" id="ar-tryon">
    <!-- Background pattern -->
    <div class="absolute inset-0 opacity-10">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="white" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    
    <div class="max-w-4xl mx-auto text-center px-4 relative z-10">
      <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Virtual Experience</span>
      <h2 class="text-4xl font-bold mt-2 mb-6 font-playfair">Try Before You Dye</h2>
      <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
      
      <p class="mb-10 font-lato font-light text-lg max-w-2xl mx-auto">
        Our augmented reality technology lets you see how different hair colors will look on you before making a commitment. Find your perfect match with zero risk.
      </p>
      
      <button class="bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Launch AR Color Try-On
      </button>
      
      <div class="mt-8 text-sm text-gray-400">
        Works with your device's camera. No app download required.
      </div>
    </div>
  </section>
</main>

<style>
  :global(body) {
    font-family: 'Lato', sans-serif;
    color: #333;
  }
  
  .text-gold {
    color: #D4AF37;
  }
  
  .bg-gold {
    background-color: #D4AF37;
  }
  
  .bg-light-gray {
    background-color: #F5F5F5;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  :global(.animate-on-scroll.is-visible) {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<script context="module">
  // This script updates the DOM to reflect intersection changes
  // It runs in the browser
  if (typeof window !== 'undefined') {
    setTimeout(() => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible');
        }
      });
      
      // Setup scroll event listener to check visibility
      window.addEventListener('scroll', () => {
        document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('is-visible');
          }
        });
      }, { passive: true });
    }, 100);
  }
</script>