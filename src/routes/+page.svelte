<script lang="ts">
  import Hero from '$lib/components/Hero.svelte';
  import Header from '$lib/components/Header.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import { onMount } from 'svelte';
  
  let isIntersecting = {};
  
  // Media toggle state
  let showVideo = false;
  let mediaTimer: ReturnType<typeof setInterval>;
  
  // Function to toggle between image and video at intervals
  function startMediaToggle() {
    // Initial toggle
    toggleMedia();
    
    // Set up interval to toggle every 15 seconds
    mediaTimer = setInterval(toggleMedia, 15000);
  }
  
  function toggleMedia() {
    showVideo = !showVideo;
  }
  
  // Preload images
  function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(src);
      img.onerror = () => reject(src);
    });
  }
  
  onMount(() => {
    // Preload project images
    const projectImages = [
      '/images/projects/skyline-house.jpg',
      '/images/projects/skyline-house-2.jpg',
      '/images/projects/skyline-house-3.jpg',
      '/images/projects/kagundo-mansion.jpg',
      '/images/projects/la-finca.jpg',
      '/images/projects/kiambu-center.jpg',
      '/images/projects/karen-renovation.jpg',
      '/images/projects/guest-house.jpg',
      '/images/projects/warehouse.jpg'
    ];
    
    Promise.all(projectImages.map(src => preloadImage(src)))
      .then(() => console.log('All project images preloaded'))
      .catch(err => console.error('Failed to preload some images:', err));
      
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
    
    // Start the media toggle
    startMediaToggle();
    
    // Clear interval when component is destroyed
    return () => {
      if (mediaTimer) clearInterval(mediaTimer);
    };
  });
  
  const services = [
    {
      name: "Architectural Design",
      description: "Innovative and functional designs that blend modern aesthetics with Kenyan heritage.",
      image: "/images/architectural-design.jpg"
    },
    {
      name: "Home Construction",
      description: "We build beautiful, durable homes with quality materials and craftsmanship.",
      image: "/images/home-construction.jpg"
    },
    {
      name: "Home Renovation",
      description: "Breathe new life into your existing home with modern upgrades.",
      image: "/images/renovation.jpg"
    },
    {
      name: "Project Management",
      description: "Relax while we handle the details and ensure everything stays on track.",
      image: "/images/project-management.jpg"
    },
    {
      name: "Structural Design",
      description: "Precision engineering for a solid foundation and durable construction.",
      image: "/images/structural-design.jpg"
    },
    {
      name: "Valuation Services",
      description: "Accurate property assessments to guide your investments.",
      image: "/images/valuation.jpg"
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed Nationwide', description: "We've successfully designed and built over 150 residential and commercial projects across Kenya, from urban centers to scenic rural locations." },
    { number: '97%', label: 'Client Satisfaction Rate', description: "Our clients love our work. 97% of them rate our services as excellent, highlighting our commitment to quality and transparency." },
    { number: '4-6 Months', label: 'Average Project Completion', description: "We deliver projects on time. Our streamlined process ensures most residential projects are completed within 4-6 months." },
    { number: '20+', label: 'Years of Combined Team Experience', description: "Our team of architects, engineers, and builders brings over 20 years of combined experience to every project." }
  ];

  const testimonials = [
    {
      quote: "I trusted Highpoint with my project while living in Canada, and they didn't disappoint. They respected my budget, timeline, and vision. Seeing my home completed was a dream come true.",
      name: "Wambui Kamau",
      location: "Toronto, Canada",
      image: "/images/testimonials/profile1.jpg"
    },
    {
      quote: "Being in Qatar, I worried about overseeing my renovation project back home. Highpoint delivered beyond my expectations. They were transparent, reliable, and made the whole process smooth.",
      name: "Njoroge Maina",
      location: "Doha, Qatar",
      image: "/images/testimonials/profile2.jpg"
    },
    {
      quote: "I wanted to build a modern house in Kisumu while working in the US. Highpoint took care of everything, from design to construction. Their communication was excellent, and the final result blew me away!",
      name: "Atieno Odhiambo",
      location: "Houston, USA",
      image: "/images/testimonials/profile3.jpg"
    }
  ];
</script>

<Header />

<main id="main-content">
  <Hero />
  
  <!-- Problem Statement Section -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-5xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-8 font-montserrat">Exceptional Construction Shouldn't Be This Complicated.</h2>
      <p class="text-lg mb-10 text-black font-raleway">
        You want a beautiful, well-built property in Kenya, but the process feels overwhelming. Finding reliable builders, managing costs, and ensuring quality construction can be challenging. What if there was a simpler way?
      </p>
      <a href="/contact" class="btn-primary inline-block">Talk to an Expert</a>
    </div>
  </section>
  
  <!-- Stats Section -->
  <section class="py-16 px-4 bg-primary text-white">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each stats as stat, i}
        <div class="animate-on-scroll" id="stat-{i}">
          <div class="text-center p-6">
            <h3 class="text-gold text-4xl md:text-5xl font-bold mb-2 font-montserrat">{stat.number}</h3>
            <p class="text-xl font-semibold mb-4 font-montserrat">{stat.label}</p>
            <p class="text-sm text-white font-raleway">{stat.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
  
  <!-- Value Proposition -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2 mb-8 md:mb-0 relative">
        {#if showVideo}
          <video 
            src="/videos/construction-team.mp4" 
            autoplay 
            muted
            class="rounded shadow-lg w-full h-full object-cover"
            style="min-height: 300px;"
          ></video>
        {:else}
          <img 
            src="/images/construction-team.jpg" 
            alt="Highpoint construction team" 
            class="rounded shadow-lg w-full h-full object-cover"
          />
        {/if}
        
        <!-- Toggle Button -->
        <button 
          class="absolute bottom-4 right-4 bg-primary/70 text-white p-2 rounded-full hover:bg-primary transition-colors"
          on:click={toggleMedia}
          aria-label={showVideo ? "Show image" : "Play video"}
        >
          {#if showVideo}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          {:else}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          {/if}
        </button>
      </div>
      <div class="md:w-1/2">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">We Handle Everything, So You Don't Have To.</h2>
        <p class="mb-6 text-black font-raleway">
          At Highpoint, we take care of the entire building process—from design to handing you the keys. Our experienced team ensures your project is built to the highest standards, on time, and within budget, anywhere in Kenya.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div class="flex items-start">
            <span class="text-gold text-2xl mr-2">✓</span>
            <p class="font-semibold">Architectural Designs That Inspire</p>
          </div>
          <div class="flex items-start">
            <span class="text-gold text-2xl mr-2">✓</span>
            <p class="font-semibold">Quality Construction</p>
          </div>
          <div class="flex items-start">
            <span class="text-gold text-2xl mr-2">✓</span>
            <p class="font-semibold">No hidden costs</p>
          </div>
          <div class="flex items-start">
            <span class="text-gold text-2xl mr-2">✓</span>
            <p class="font-semibold">Stress-Free Project Management</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Services Section -->
  <section id="services" class="py-20 px-4 max-w-6xl mx-auto">
    <div class="text-center mb-16 animate-on-scroll" id="services-heading">
      <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Our Services</span>
      <h2 class="text-4xl font-bold mt-2 mb-4 font-montserrat">Everything You Need Under One Roof</h2>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
      <p class="mt-6 text-black max-w-2xl mx-auto font-raleway">
        From architectural design to construction completion, our comprehensive services ensure a seamless building experience.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each services as service, i}
        <div class="animate-on-scroll" id="service-{i}" style="transition-delay: {i * 100}ms">
          <ServiceCard {service} />
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href="/services" class="btn-primary">View All Services</a>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-20 px-4 bg-light relative overflow-hidden">
    <!-- Background decoration elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48"></div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="text-center mb-16 animate-on-scroll" id="process-heading">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">How We Work</span>
        <h2 class="text-4xl font-bold mt-2 mb-4 font-montserrat">Our Proven 4-Step Process</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
        <p class="mt-6 text-black max-w-2xl mx-auto font-raleway">
          We've refined our process to ensure a seamless, stress-free experience from start to finish.
        </p>
      </div>
      
      <div class="relative">
        <!-- Connection Line (Desktop) -->
        <div class="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gold/10 via-gold/30 to-gold/10 -translate-y-1/2 z-0"></div>
        
        <!-- Connection dots between steps -->
        <div class="hidden lg:flex absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-4 h-4 rounded-full bg-gold"></div>
        </div>
        <div class="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-4 h-4 rounded-full bg-gold"></div>
        </div>
        <div class="hidden lg:flex absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 z-20">
          <div class="w-4 h-4 rounded-full bg-gold"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <div class="group bg-white p-8 shadow-lg rounded-sm border-t-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll" id="process-1" style="transition-delay: 100ms">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <div class="text-gold text-4xl font-bold mb-4 text-center group-hover:scale-110 transition-transform duration-300">01</div>
            <h3 class="text-xl font-bold mb-3 font-montserrat text-center">Consultation & Planning</h3>
            <p class="text-black font-raleway text-center">We start with a conversation to understand your goals, style, budget, and timeline. Whether you're in Kenya or abroad, we'll make sure we're on the same page.</p>
          </div>
          
          <div class="group bg-white p-8 shadow-lg rounded-sm border-t-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll" id="process-2" style="transition-delay: 200ms">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
            </div>
            <div class="text-gold text-4xl font-bold mb-4 text-center group-hover:scale-110 transition-transform duration-300">02</div>
            <h3 class="text-xl font-bold mb-3 font-montserrat text-center">Custom Design</h3>
            <p class="text-black font-raleway text-center">Our architects create innovative, functional designs tailored to your needs. You'll receive detailed plans and 3D visualizations of your future project.</p>
          </div>
          
          <div class="group bg-white p-8 shadow-lg rounded-sm border-t-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll" id="process-3" style="transition-delay: 300ms">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
            <div class="text-gold text-4xl font-bold mb-4 text-center group-hover:scale-110 transition-transform duration-300">03</div>
            <h3 class="text-xl font-bold mb-3 font-montserrat text-center">Building & Construction</h3>
            <p class="text-black font-raleway text-center">Our skilled team handles the entire construction process with precision and care, using high-quality materials and keeping you updated throughout.</p>
          </div>
          
          <div class="group bg-white p-8 shadow-lg rounded-sm border-t-4 border-gold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-on-scroll" id="process-4" style="transition-delay: 400ms">
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div class="text-gold text-4xl font-bold mb-4 text-center group-hover:scale-110 transition-transform duration-300">04</div>
            <h3 class="text-xl font-bold mb-3 font-montserrat text-center">Handover & Aftercare</h3>
            <p class="text-black font-raleway text-center">We hand you the keys to your completed property, ensuring every detail meets your expectations with ongoing support afterward.</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <a href="/services#process" class="btn-primary inline-flex items-center group">
          <span>Learn More About Our Process</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
  
  <!-- Testimonials Section -->
  <section class="py-20 px-4 bg-primary">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Testimonials</span>
        <h2 class="text-4xl font-bold mt-2 mb-4 font-montserrat text-white">Building Kenya's Future, One Project at a Time</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
        <p class="mt-6 text-light max-w-2xl mx-auto font-raleway">
          Trusted by Kenyans Everywhere Around the World.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {#each testimonials as testimonial, i}
          <div class="bg-white p-8 rounded shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-gold mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  class="w-full h-full object-cover"
                  on:error={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = '/images/testimonials/placeholder.jpg';
                  }}
                />
              </div>
              <div>
                <p class="font-semibold font-montserrat">{testimonial.name}</p>
                <p class="text-gray-600 font-raleway text-sm">{testimonial.location}</p>
              </div>
            </div>
            <div class="text-gold text-4xl mb-4">"</div>
            <p class="mb-6 font-raleway text-black">{testimonial.quote}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Your Dream Project Is Just a Click Away</h2>
      <p class="mb-8 text-lg text-black font-raleway">
        Let's make your vision of an exceptional building a reality. Our team is ready to guide you every step of the way.
      </p>
      <a href="/quote" class="btn-primary inline-block">Get A Quote</a>
    </div>
  </section>
</main>

<style>
  :global(body) {
    font-family: 'Raleway', sans-serif;
    color: #000;
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
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

  .btn-primary {
    background-color: var(--color-gold);
    color: #000000;
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    font-weight: bold;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .btn-primary:hover {
    background-color: #000000;
    color: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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