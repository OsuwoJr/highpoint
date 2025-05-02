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
      name: "Normal Braids",
      price: 1200,
      description: "Classic three-strand braids that are neat, durable, and perfect for everyday wear. Ideal for a clean and protective look.",
      image: "/images/normal.jpeg"
    },
    {
      name: "Knotless Braids",
      price: 1500,
      description: "Pain-free, natural-looking braids that start with your own hair, reducing tension on the scalp and offering a lightweight feel.",
      image: "/images/knotless.jpeg"
    },
    {
      name: "Goddess Braids",
      price: 2000,
      description: "Thick, elegant cornrow-style braids that are styled close to the scalp. Perfect for a regal and stylish appearance.",
      image: "/images/goddess.jpeg"
    },
    {
      name: "Boho Braids",
      price: 1700,
      description: "Bohemian-inspired braids with curly strands left out for a soft, carefree vibe that blends neatness with natural flow.",
      image: "/images/boho.jpeg"
    },
    {
      name: "Loose Braids",
      price: 1500,
      description: "Single or multiple loosely done braids for a laid-back, voluminous style that frames the face beautifully.",
      image: "/images/loose.jpeg"
    },
    {
      name: "Twist Outs",
      price: 600,
      description: "Two-strand twists undone to create defined, bouncy curls for a natural, soft afro-textured look",
      image: "/images/twistouts.jpeg"
    },
    {
      name: "Marley Twist",
      price: 1500,
      description: "Thick, textured twists using Marley hair extensions, giving a bold, afro-inspired look full of volume and length.",
      image: "/images/marley.jpeg"
    },
    {
      name: "Coco Twists",
      price: 2500,
      description: "Luxurious twists with a smooth, rope-like finish. Perfect for those who love a clean, defined protective style.",
      image: "/images/coco.jpeg"
    },
    {
      name: "Spring Twist",
      price: 2500,
      description: "Lightweight, springy twists with a coily texture. This low-maintenance style gives a fun and youthful look",
      image: "/images/spring.jpeg"
    },
    {
      name: "Passion Twist",
      price: 2500,
      description: "Soft, shiny twists with a wavy texture. A trendy and romantic look ideal for any season.",
      image: "/images/passion.jpeg"
    },
    {
      name: "Ghanaians",
      price: 1500,
      description: "Feed-in cornrows with intricate designs inspired by Ghanaian culture. Neat, sleek, and perfect for all occasions.",
      image: "/images/ghanaians.jpeg"
    },
    {
      name: "Half Lines",
      price: 2000,
      description: "A stylish combination of cornrows at the front and free-flowing braids at the back, blending structure with freedom.",
      image: "/images/halflines.jpeg"
    },
    
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