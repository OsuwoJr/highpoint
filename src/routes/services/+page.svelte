<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  interface Service {
    id: string;
    name: string;
    price: number | string;
    duration: number | string;
    description: string;
    image: string;
    popular?: boolean;
    consultation?: boolean;
  }
  
  interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    services: Service[];
  }
  
  // Define service categories and services
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'cuts',
      name: 'Cuts & Styling',
      description: 'Precision cuts and styling tailored to enhance your natural features',
      services: [
        { 
          id: 'precision-cut',
          name: 'Precision Cut', 
          price: 4350, 
          duration: 60,
          description: 'Expert haircut personalized to your face shape, hair texture, and lifestyle needs.',
          image: '/images/precisionhaircut.jpeg',
          popular: true
        },
        { 
          id: 'bridal-style',
          name: 'Bridal Style', 
          price: 12500, 
          duration: 150,
          description: 'Complete bridal hair styling including consultation, trial run, and day-of styling for your special day.',
          image: '/images/bridal.jpeg',
          popular: false
        },
        { 
          id: 'blowout',
          name: 'Luxury Blowout', 
          price: 2750, 
          duration: 45,
          description: 'Professional blow dry styling with premium products for smooth, voluminous hair that lasts for days.',
          image: '/images/luxuryblowout.jpeg',
          popular: true
        }
      ]
    },
    {
      id: 'braiding',
      name: 'Braiding',
      description: 'Expert braiding services for all hair types and styles',
      services: [
        { 
          id: 'normal-braids',
          name: 'Normal Braids', 
          price: 1200, 
          duration: 180,
          description: 'Classic three-strand braids that are neat, durable, and perfect for everyday wear. Ideal for a clean and protective look.',
          image: '/images/normal.jpeg',
          popular: true
        },
        { 
          id: 'knotless-braids',
          name: 'Knotless Braids', 
          price: 1500, 
          duration: 240,
          description: 'Pain-free, natural-looking braids that start with your own hair, reducing tension on the scalp and offering a lightweight feel.',
          image: '/images/knotless.jpeg',
          popular: true
        },
        { 
          id: 'goddess-braids',
          name: 'Goddess Braids', 
          price: 2000, 
          duration: 180,
          description: 'Thick, elegant cornrow-style braids that are styled close to the scalp. Perfect for a regal and stylish appearance.',
          image: '/images/goddess.jpeg',
          popular: false
        },
        { 
          id: 'boho-braids',
          name: 'Boho Braids', 
          price: 1700, 
          duration: 210,
          description: 'Bohemian-inspired braids with curly strands left out for a soft, carefree vibe that blends neatness with natural flow.',
          image: '/images/boho.jpeg',
          popular: false
        },
        { 
          id: 'loose-braids',
          name: 'Loose Braids', 
          price: 1500, 
          duration: 150,
          description: 'Single or multiple loosely done braids for a laid-back, voluminous style that frames the face beautifully.',
          image: '/images/loose.jpeg',
          popular: false
        }
      ]
    },
    {
      id: 'twists',
      name: 'Twists & Coils',
      description: 'Beautiful twist styles for texture, volume, and protection',
      services: [
        { 
          id: 'marley-twist',
          name: 'Marley Twist', 
          price: 1500, 
          duration: 240,
          description: 'Thick, textured twists using Marley hair extensions, giving a bold, afro-inspired look full of volume and length.',
          image: '/images/marley.jpeg',
          popular: true
        },
        { 
          id: 'coco-twists',
          name: 'Coco Twists', 
          price: 2500, 
          duration: 300,
          description: 'Luxurious twists with a smooth, rope-like finish. Perfect for those who love a clean, defined protective style.',
          image: '/images/coco.jpeg',
          popular: false
        },
        { 
          id: 'spring-twist',
          name: 'Spring Twist', 
          price: 2500, 
          duration: 210,
          description: 'Lightweight, springy twists with a coily texture. This low-maintenance style gives a fun and youthful look.',
          image: '/images/spring.jpeg',
          popular: false
        },
        { 
          id: 'passion-twist',
          name: 'Passion Twist', 
          price: 2500, 
          duration: 210,
          description: 'Soft, shiny twists with a wavy texture. A trendy and romantic look ideal for any season.',
          image: '/images/passion.jpeg',
          popular: true
        },
        { 
          id: 'twist-outs',
          name: 'Twist Outs', 
          price: 600, 
          duration: 60,
          description: 'Two-strand twists undone to create defined, bouncy curls for a natural, soft afro-textured look.',
          image: '/images/twistouts.jpeg',
          popular: false
        }
      ]
    },
    {
      id: 'cornrows',
      name: 'Cornrows & Lines',
      description: 'Sleek cornrow styles with intricate designs and patterns',
      services: [
        { 
          id: 'ghanaians',
          name: 'Ghanaians', 
          price: 1500, 
          duration: 120,
          description: 'Feed-in cornrows with intricate designs inspired by Ghanaian culture. Neat, sleek, and perfect for all occasions.',
          image: '/images/ghanaians.jpeg',
          popular: true
        },
        { 
          id: 'half-lines',
          name: 'Half Lines', 
          price: 2000, 
          duration: 150,
          description: 'A stylish combination of cornrows at the front and free-flowing braids at the back, blending structure with freedom.',
          image: '/images/halflines.jpeg',
          popular: false
        }
      ]
    },
    {
      id: 'treatments',
      name: 'Hair Treatments',
      description: 'Rejuvenate and transform your hair with our specialized treatments',
      services: [
        { 
          id: 'deep-conditioning',
          name: 'Deep Conditioning', 
          price: 5000, 
          duration: 60,
          description: 'Intensive hydrating treatment that repairs damaged hair and restores moisture using premium organic products.',
          image: '/images/deepconditioning.jpeg',
          popular: true
        },
        { 
          id: 'hair-treatment',
          name: 'Hair Treatment', 
          price: 3000, 
          duration: 90,
          description: 'Specialized protein, hot oil, or custom treatment formulated to address your specific hair concerns and restore health.',
          image: '/images/hairtreatment1.jpeg',
          popular: false
        },
        { 
          id: 'keratin',
          name: 'Keratin/Botox Treatment', 
          price: 9000, 
          duration: 180,
          description: 'Smoothing treatment that eliminates frizz, reduces curl, and adds incredible shine that lasts for months.',
          image: '/images/keratin.jpeg',
          popular: true
        },
        { 
          id: 'scalp-treatment',
          name: 'Scalp Treatment', 
          price: 8000, 
          duration: 45,
          description: 'Targeted treatment to address scalp issues like dryness, flaking, or irritation while promoting hair growth and health.',
          image: '/images/scalp.jpeg',
          popular: false
        }
      ]
    },
    {
      id: 'color',
      name: 'Coloring Services',
      description: 'Transform your look with our premium, eco-friendly color services',
      services: [
        { 
          id: 'balayage',
          name: 'Balayage', 
          price: 6000, 
          duration: 120,
          description: 'Hand-painted highlights that create a naturally sun-kissed look with less maintenance than traditional foils.',
          image: '/images/balayage.jpg',
          popular: true
        },
        { 
          id: 'eco-color',
          name: 'Eco Color', 
          price: 9500, 
          duration: 90,
          description: 'Organic, plant-based hair color using sustainable ingredients that are gentle on hair while providing vibrant, long-lasting results.',
          image: '/images/eco.jpeg',
          popular: false
        },
        { 
          id: 'color-correction',
          name: 'Color Correction', 
          price: 'KSh 2500+', 
          duration: '180+',
          description: 'Expert color correction to fix uneven tones, brassy shades, or botched home coloring jobs. Price varies based on complexity.',
          image: '/images/correction.jpeg',
          popular: false,
          consultation: true
        },
        { 
          id: 'hair-dyeing',
          name: 'Hair Coloring/Dyeing', 
          price: 1000, 
          duration: 120,
          description: 'Full or partial hair coloring to achieve your desired shade and look, using quality products for optimal results.',
          image: '/images/dye.jpeg',
          popular: true
        }
      ]
    },
    {
      id: 'styling',
      name: 'Styling Tools & Enhancements',
      description: 'Professional styling services to perfect your look',
      services: [
        { 
          id: 'washing',
          name: 'Hair Washing & Conditioning', 
          price: 2500, 
          duration: 30,
          description: 'Thorough cleansing and conditioning with premium products tailored to your hair type for a fresh, clean start.',
          image: '/images/washing.jpeg',
          popular: true
        },
        { 
          id: 'blowdry-iron',
          name: 'Blow-Dry & Flat Ironing', 
          price: 3500, 
          duration: 60,
          description: 'Professional blow-drying and straightening for sleek, smooth hair with minimal heat damage.',
          image: '/images/blowdry.jpeg',
          popular: false
        },
        { 
          id: 'silk-press',
          name: 'Silk Press', 
          price: 4500, 
          duration: 90,
          description: 'Transformative straightening technique that leaves natural hair silky-smooth with incredible shine and movement.',
          image: '/images/silk.jpeg',
          popular: true
        },
        { 
          id: 'extensions',
          name: 'Hair Extensions/Weaves', 
          price: 12000, 
          duration: 240,
          description: 'Premium quality extensions using ethically-sourced hair for added length and volume with a natural look.',
          image: '/images/extension.jpeg',
          popular: false,
          consultation: true
        },
        { 
          id: 'dreadlocks',
          name: 'Dreadlocks/Retwisting', 
          price: 2000, 
          duration: 180,
          description: 'Expert installation or maintenance of dreadlocks, ensuring clean, neat locks with proper tension and care.',
          image: '/images/dreadlocks.jpeg',
          popular: false
        }
      ]
    }
  ];
  
  // Track which service is expanded for mobile view
  let expandedServiceId: string | null = null;
  
  // Toggle expanded service on mobile
  function toggleService(serviceId: string): void {
    expandedServiceId = expandedServiceId === serviceId ? null : serviceId;
  }
  
  // Handle image loading errors
  function handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
    const parent = imgElement.parentElement;
    
    if (parent) {
      // Create fallback element
      const fallback = document.createElement('div');
      fallback.className = 'w-full h-full bg-gold/20 flex items-center justify-center';
      
      const text = document.createElement('span');
      text.className = 'text-xl font-bold text-black';
      text.textContent = imgElement.alt || 'Service';
      
      fallback.appendChild(text);
      parent.appendChild(fallback);
    }
  }
</script>

<svelte:head>
  <title>Services | Belle Royale</title>
  <meta name="description" content="Explore our complete range of luxury, sustainable hair services including eco-friendly color, precision cuts, and premium treatments.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-black text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-playfair mb-4">Our <span class="text-gold">Services</span></h1>
      <p class="text-lg font-lato font-light max-w-2xl mx-auto">
        Premium hair services using sustainable, eco-friendly products.
        All services include a thorough consultation to ensure we deliver exactly what you envision.
      </p>
    </div>
  </div>
  
  <!-- Eco Promise -->
  <section class="bg-light-gray py-12 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="inline-block bg-eco-green text-white px-4 py-1 rounded-full text-sm uppercase tracking-wider mb-4">Eco-Friendly</div>
      <h2 class="text-3xl font-bold font-playfair mb-4">Our Sustainability Promise</h2>
      <p class="text-gray-700 mb-8 font-lato">
        All our color services use plant-based, low-chemical formulations that are gentle on your hair and the environment.
        We've partnered with <span class="font-semibold">Green Circle Salons</span> to recycle 95% of our salon waste.
      </p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div class="p-4">
          <div class="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 class="font-bold text-sm">Recycled Packaging</h3>
        </div>
        
        <div class="p-4">
          <div class="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 class="font-bold text-sm">Cruelty-Free</h3>
        </div>
        
        <div class="p-4">
          <div class="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="font-bold text-sm">Vegan Options</h3>
        </div>
        
        <div class="p-4">
          <div class="w-12 h-12 bg-eco-green/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-eco-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <h3 class="font-bold text-sm">Low Water Usage</h3>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Service Categories -->
  {#each serviceCategories as category, categoryIndex}
    <section class="py-16 px-4 {categoryIndex % 2 === 1 ? 'bg-light-gray' : ''}" id={category.id}>
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold font-playfair mb-3">{category.name}</h2>
          <p class="text-gray-600 max-w-2xl mx-auto font-lato">{category.description}</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {#each category.services as service}
            <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
              <!-- Service Image -->
              <div class="relative aspect-[3/4] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  class="w-full h-full object-contain bg-gray-50"
                  loading="lazy"
                  on:error={handleImageError}
                />
                
                {#if service.popular}
                  <div class="absolute top-2 right-2 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </div>
                {/if}
              </div>
              
              <!-- Service Details -->
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="text-xl font-bold font-playfair">{service.name}</h4>
                  <div class="text-right">
                    <div class="text-gold font-bold">
                      {#if typeof service.price === 'number'}
                      KSh {service.price}
                      {:else}
                      {service.price}
                      {/if}
                    </div>
                    <p class="text-gray-500 text-sm">{typeof service.duration === 'string' ? service.duration : `${Math.floor(Number(service.duration) / 60)}h ${Number(service.duration) % 60 ? `${Number(service.duration) % 60}min` : ''}`}</p>
                  </div>
                </div>
                
                <!-- Mobile View: Show toggle button -->
                <button 
                  class="w-full text-left text-gray-600 mb-4 lg:hidden"
                  on:click={() => toggleService(service.id)}
                  aria-expanded={expandedServiceId === service.id}
                >
                  <div class="flex justify-between items-center">
                    <span class="text-sm underline">Service details</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform {expandedServiceId === service.id ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <!-- Service Description: Hidden on mobile unless expanded -->
                <div class="{expandedServiceId !== service.id ? 'hidden lg:block' : ''} mb-4">
                  <p class="text-gray-600 text-sm mb-4">{service.description}</p>
                  
                  {#if service.consultation}
                    <div class="bg-gold/10 p-3 rounded-lg text-xs text-gray-700 mb-4">
                      Requires a consultation before booking. Our specialists will assess your hair needs for the best possible results.
                    </div>
                  {/if}
                </div>
                
                <a 
                  href="/book?service={encodeURIComponent(service.name)}"
                  class="bg-black text-white rounded-full px-5 py-2 text-sm font-bold inline-flex items-center hover:bg-gray-800 transition-colors"
                >
                  Book Now
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/each}
  
  <!-- FAQ Section -->
  <section class="py-16 px-4 bg-black text-white">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold font-playfair mb-12 text-center">Frequently Asked Questions</h2>
      
      <div class="space-y-6">
        <div class="bg-black/30 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-3 font-playfair">How should I prepare for my appointment?</h3>
          <p class="text-gray-300 font-lato font-light">For color services, we recommend coming with clean, dry hair. For cuts, slightly dirty hair is fine. Arrive 15 minutes early for a thorough consultation with your stylist.</p>
        </div>
        
        <div class="bg-black/30 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-3 font-playfair">What is your cancellation policy?</h3>
          <p class="text-gray-300 font-lato font-light">We require 24-hour notice for cancellations. Late cancellations or no-shows may be charged 50% of the service price.</p>
        </div>
        
        <div class="bg-black/30 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-3 font-playfair">How often should I get a haircut?</h3>
          <p class="text-gray-300 font-lato font-light">For short styles, every 4-6 weeks is ideal. Medium length hair can go 6-8 weeks, while longer styles can last 8-12 weeks between cuts.</p>
        </div>
        
        <div class="bg-black/30 p-6 rounded-lg">
          <h3 class="text-xl font-bold mb-3 font-playfair">Do you offer services for all hair types?</h3>
          <p class="text-gray-300 font-lato font-light">Yes! Our stylists are trained to work with all hair types and textures, from straight to coily. We have specialized services for each hair type.</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-gold">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold font-playfair mb-4 text-black">Ready to Transform Your Look?</h2>
      <p class="text-black/80 mb-8 max-w-2xl mx-auto font-lato">
        Book your appointment today and experience the perfect blend of artistry, sustainability, and luxury.
      </p>
      <a href="/book" class="bg-black text-white px-8 py-4 rounded-full font-bold inline-flex items-center hover:bg-gray-800 transition-colors">
        Book Your Appointment
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </section>
</main>

<style>
  .text-gold {
    color: var(--color-gold);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .bg-eco-green {
    background-color: var(--color-eco-green);
  }
  
  .text-eco-green {
    color: var(--color-eco-green);
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
