<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  interface Service {
    id: string;
    name: string;
    description: string;
    shortDescription: string;
    image: string;
    popular?: boolean;
    features: string[];
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
      id: 'architectural',
      name: 'Architectural Services',
      description: 'Expert architectural design solutions for residential and commercial projects',
      services: [
        { 
          id: 'custom-design',
          name: 'Custom Home Design', 
          shortDescription: 'Bespoke architectural designs tailored to your lifestyle and preferences.',
          description: 'Our custom home design service transforms your vision into practical, beautiful living spaces. We collaborate closely with you to understand your lifestyle, aesthetic preferences, and functional needs, creating a home that reflects your personality while optimizing space, light, and flow.',
          image: '/images/services/custom-design.jpg',
          popular: true,
          features: [
            '3D visualization of your future home',
            'Comprehensive floor plans and elevations',
            'Material selection guidance',
            'Sustainable design options',
            'Local building code compliance'
          ]
        },
        { 
          id: 'renovation-design',
          name: 'Renovation Design', 
          shortDescription: 'Transform your existing space with thoughtful architectural redesign.',
          description: 'Breathe new life into your existing property with our renovation design services. Our architects specialize in reimagining spaces while preserving character and enhancing functionality. From single room transformations to whole-house remodels, we\'ll help you maximize your property\'s potential.',
          image: '/images/services/renovation-design.jpg',
          popular: false,
          features: [
            'Existing structure assessment',
            'Space optimization solutions',
            'Historical preservation expertise',
            'Budget-conscious design options',
            'Phased renovation planning'
          ]
        },
        { 
          id: 'commercial-design',
          name: 'Commercial Architecture', 
          shortDescription: 'Functional, impressive commercial spaces designed for your business needs.',
          description: 'Our commercial architecture service delivers spaces that work as hard as you do. We design offices, retail spaces, warehouses, and mixed-use developments that balance aesthetics, functionality, and business objectives, creating environments that enhance productivity and make a statement about your brand.',
          image: '/images/services/commercial-design.jpg',
          popular: true,
          features: [
            'Space planning and workflow optimization',
            'Brand integration into physical space',
            'Accessibility and safety compliance',
            'Sustainable commercial solutions',
            'Future expansion planning'
          ]
        }
      ]
    },
    {
      id: 'construction',
      name: 'Construction Services',
      description: 'High-quality construction with attention to detail and superior craftsmanship',
      services: [
        { 
          id: 'new-build',
          name: 'New Home Construction', 
          shortDescription: 'Complete construction services for your custom-designed home.',
          description: 'From foundation to finishing touches, our construction team brings your architectural plans to life with precision and care. We manage every aspect of the building process, ensuring quality materials, expert craftsmanship, and attention to detail that results in a beautiful, durable home that exceeds expectations.',
          image: '/images/services/new-build.jpg',
          popular: true,
          features: [
            'Foundation and structural work',
            'Framing and roofing',
            'Plumbing and electrical installation',
            'Interior finishing and cabinetry',
            'Exterior finishing and landscaping'
          ]
        },
        { 
          id: 'renovation',
          name: 'Home Renovation', 
          shortDescription: 'Expert renovation to modernize and enhance your existing property.',
          description: 'Our renovation construction service transforms outdated or inefficient spaces into modern, functional areas that meet your current needs. Whether refreshing a kitchen, adding a master suite, or completely renovating an older home, our skilled team ensures minimal disruption while delivering outstanding results.',
          image: '/images/services/renovation.jpg',
          popular: true,
          features: [
            'Structural modifications',
            'Kitchen and bathroom remodels',
            'Room additions and extensions',
            'System upgrades (electrical, plumbing, HVAC)',
            'Interior and exterior finishes'
          ]
        },
        { 
          id: 'commercial-construction',
          name: 'Commercial Construction', 
          shortDescription: 'Professional construction for office buildings, retail spaces, and more.',
          description: 'Our commercial construction services deliver high-quality business spaces on schedule and within budget. From office buildings to retail spaces and warehouses, we handle all aspects of the commercial construction process with the same attention to detail and quality control that distinguishes our residential work.',
          image: '/images/services/commercial-construction.jpg',
          popular: false,
          features: [
            'Site preparation and foundation work',
            'Steel and concrete structural elements',
            'Commercial electrical and mechanical systems',
            'Interior build-outs and finishing',
            'Parking areas and landscaping'
          ]
        }
      ]
    },
    {
      id: 'project-management',
      name: 'Project Management',
      description: 'Comprehensive project oversight ensuring quality, timeliness, and budget adherence',
      services: [
        { 
          id: 'full-project',
          name: 'Full Project Management', 
          shortDescription: 'End-to-end oversight of your construction project from concept to completion.',
          description: 'Our full project management service takes the stress out of building by handling every aspect of your project. From initial planning through design and construction to final handover, our experienced project managers coordinate all professionals, monitor quality, track budgets, and maintain schedules, keeping you informed while you focus on your daily life.',
          image: '/images/services/full-project.jpg',
          popular: true,
          features: [
            'Contractor selection and coordination',
            'Schedule development and management',
            'Budget oversight and cost control',
            'Quality assurance inspections',
            'Regular progress reporting'
          ]
        },
        { 
          id: 'owner-rep',
          name: 'Owner Representation', 
          shortDescription: 'Professional representation of your interests throughout the construction process.',
          description: 'As your owner representative, we advocate for your interests throughout the construction process. This service is ideal for clients who are geographically distant or have limited time to oversee their projects. We act as your eyes and ears on-site, ensuring decisions align with your vision and that quality standards are maintained.',
          image: '/images/services/owner-rep.jpg',
          popular: false,
          features: [
            'Regular site inspections and documentation',
            'Decision-making on owner\'s behalf',
            'Quality and compliance verification',
            'Issue resolution and problem-solving',
            'Direct communication with contractors'
          ]
        },
        { 
          id: 'diaspora',
          name: 'Diaspora Building Services', 
          shortDescription: 'Specialized management for Kenyans building from abroad.',
          description: 'Our diaspora building service is tailored specifically for Kenyans living abroad who want to build back home. We understand the unique challenges of remote property development and provide enhanced communication, trustworthy oversight, and complete transparency. Build your Kenyan dream home with confidence, no matter where you live.',
          image: '/images/services/diaspora.jpg',
          popular: true,
          features: [
            'Digital progress tracking and reporting',
            'International consultation scheduling',
            'Secure payment management',
            'Land acquisition assistance',
            'Local regulatory compliance'
          ]
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Services',
      description: 'Specialized professional services to ensure structural integrity and compliance',
      services: [
        { 
          id: 'structural-engineering',
          name: 'Structural Engineering', 
          shortDescription: 'Expert structural design ensuring safety and durability of your building.',
          description: 'Our structural engineering services provide the technical foundation for safe, durable buildings. Our engineers design structural systems that efficiently bear loads while complementing architectural designs. From foundation design to retrofitting existing structures, we deliver solutions that meet code requirements and stand the test of time.',
          image: '/images/services/structural-engineering.jpg',
          popular: false,
          features: [
            'Structural calculations and analysis',
            'Foundation design',
            'Seismic and wind resistance planning',
            'Structural inspection and assessment',
            'Reinforcement design and detailing'
          ]
        },
        { 
          id: 'quantity-surveying',
          name: 'Quantity Surveying', 
          shortDescription: 'Detailed cost estimation and financial planning for construction projects.',
          description: 'Our quantity surveying service provides accurate cost estimations, material quantification, and financial planning for construction projects. We help you understand the full financial scope of your project, identify cost-saving opportunities, and create detailed bills of quantities that prevent budget overruns and ensure transparency.',
          image: '/images/services/quantity-surveying.jpg',
          popular: true,
          features: [
            'Detailed bills of quantities',
            'Cost planning and estimation',
            'Tender document preparation',
            'Construction cost analysis',
            'Value engineering recommendations'
          ]
        },
        { 
          id: 'property-valuation',
          name: 'Property Valuation', 
          shortDescription: 'Professional assessment of property value for various purposes.',
          description: 'Our property valuation service provides accurate, professional assessments of property value for mortgages, sales, insurance, or investment purposes. Our certified valuers analyze market conditions, property features, and comparable sales to determine fair market value, giving you confidence in your property decisions.',
          image: '/images/services/property-valuation.jpg',
          popular: false,
          features: [
            'Residential property valuation',
            'Commercial property assessment',
            'Land valuation',
            'Investment property analysis',
            'Valuation reports for financial institutions'
          ]
        }
      ]
    },
    {
      id: 'interiors',
      name: 'Interior Services',
      description: 'Transform your space with professional interior design and finishing',
      services: [
        { 
          id: 'interior-design',
          name: 'Interior Design', 
          shortDescription: 'Creative interior solutions that reflect your style and enhance functionality.',
          description: 'Our interior design service creates harmonious, functional spaces that reflect your personality and lifestyle. We consider spatial flow, lighting, color psychology, and material selection to design interiors that are both beautiful and practical. From single rooms to entire homes, we transform spaces into places you\'ll love to live.',
          image: '/images/services/interior-design.jpg',
          popular: true,
          features: [
            'Space planning and layout design',
            'Color scheme development',
            'Material and finish selection',
            'Furniture and accessory recommendation',
            'Lighting design'
          ]
        },
        { 
          id: 'kitchen-bath',
          name: 'Kitchen & Bath Design', 
          shortDescription: 'Specialized design for the most important rooms in your home.',
          description: 'Our kitchen and bathroom design service focuses on the most functional and frequently used spaces in your home. We combine aesthetics with practicality, creating kitchens and bathrooms that work efficiently while making a design statement. From space planning to fixture selection, we optimize layout and flow for your lifestyle.',
          image: '/images/services/kitchen-bath.jpg',
          popular: true,
          features: [
            'Ergonomic layout planning',
            'Cabinetry design and selection',
            'Countertop and fixture specification',
            'Storage solutions',
            'Lighting and ventilation planning'
          ]
        },
        { 
          id: 'furnishing',
          name: 'Furnishing & Styling', 
          shortDescription: 'Complete furnishing solutions to bring your space to life.',
          description: 'Our furnishing and styling service puts the finishing touches on your space, transforming an empty house into a welcoming home. We source and arrange furniture, select artwork and accessories, and add the personal touches that reflect your style. Perfect for new homes or refreshing existing spaces, we create interiors that impress and comfort.',
          image: '/images/services/furnishing.jpg',
          popular: false,
          features: [
            'Furniture procurement and placement',
            'Art and accessory selection',
            'Custom furnishing solutions',
            'Textile selection (curtains, rugs, upholstery)',
            'Final styling and arrangement'
          ]
        }
      ]
    }
  ];
  
  // Initialize state
  let activeCategory = serviceCategories[0];
  let activeService = activeCategory.services[0];
  let imageLoadErrors: Record<string, boolean> = {};
  
  function setCategory(category: ServiceCategory) {
    activeCategory = category;
    activeService = category.services[0];
  }
  
  function selectService(service: Service) {
    activeService = service;
  }
  
  function handleImageError(imagePath: string) {
    console.error(`Failed to load image: ${imagePath}`);
    imageLoadErrors = { ...imageLoadErrors, [imagePath]: true };
  }
  
  onMount(() => {
    // Fix: Make all animation elements visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
    
    // Also set up the intersection observer for future scrolling
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }
  });
</script>

<svelte:head>
  <title>Our Services | Highpoint Construction</title>
  <meta name="description" content="Explore our comprehensive construction and architectural services, from custom home design to full project management for Kenyan residents and diaspora.">
</svelte:head>

<Header />

<main id="main-content" class="relative z-1">
  <!-- Hero Banner -->
  <section class="bg-primary text-white py-16 px-4 relative">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">Our Services</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto font-raleway mb-8">
        Comprehensive construction and design solutions for your dream project
      </p>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
    </div>
  </section>
  
  <!-- Services Section -->
  <section class="py-16 px-4 bg-light relative z-2">
    <div class="max-w-6xl mx-auto relative z-5">
      <!-- Service Categories -->
      <div class="text-center mb-12 animate-on-scroll">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">What We Offer</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 font-montserrat text-primary">Our Specialized Services</h2>
        <p class="text-gray-700 max-w-3xl mx-auto mb-10 font-raleway">
          We provide a full range of construction and architectural services to meet your every need, 
          from initial concept to project completion.
        </p>
      </div>
      
      <!-- Category Selection -->
      <div class="filter-buttons-container relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 filter-buttons">
          {#each serviceCategories as category, i}
            <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0);">
              <div 
                class="service-card bg-white p-6 shadow-lg border-b-4 h-full flex flex-col transition-all hover:shadow-xl cursor-pointer {activeCategory.id === category.id ? 'border-gold' : 'border-transparent hover:border-gold'}"
                on:click={() => setCategory(category)}
                on:keydown={(e) => e.key === 'Enter' && setCategory(category)}
                tabindex="0"
                role="button"
                aria-pressed={activeCategory.id === category.id}
              >
                <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">{category.name}</h3>
                <p class="text-gray-600 font-raleway flex-grow">{category.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Service Listings -->
      <div class="service-listings mb-12 relative z-10">
        <h3 class="text-2xl font-bold mb-6 font-montserrat text-primary">{activeCategory.name}</h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {#each activeCategory.services as service}
            <div 
              class="service-card bg-white shadow-lg transition-all hover:shadow-xl {activeService.id === service.id ? 'ring-2 ring-gold' : ''}"
              on:click={() => selectService(service)}
              on:keydown={(e) => e.key === 'Enter' && selectService(service)}
              tabindex="0"
              role="button"
              aria-pressed={activeService.id === service.id}
            >
              <div class="relative h-48 overflow-hidden image-container">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  on:error={() => handleImageError(service.image)}
                />
                
                {#if imageLoadErrors[service.image]}
                  <div class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center z-10 p-4">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p class="text-base">Image Not Available</p>
                    </div>
                  </div>
                {/if}
                
                {#if service.popular}
                  <div class="absolute top-0 right-0 bg-gold text-white py-1 px-3 text-sm font-medium">
                    Popular
                  </div>
                {/if}
              </div>
              
              <div class="p-6">
                <h4 class="text-xl font-bold mb-2 font-montserrat text-primary">{service.name}</h4>
                <p class="text-gray-600 mb-4 font-raleway">{service.shortDescription}</p>
                <div class="flex justify-between items-center mt-auto">
                  <span class="text-sm font-medium text-gold">View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
      
      <!-- Selected Service Details -->
      <div class="bg-white p-8 shadow-lg animate-on-scroll service-detail-card relative z-5" style="opacity: 1; transform: translateY(0);">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4 font-montserrat text-primary">{activeService.name}</h3>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <p class="text-gray-700 mb-6 font-raleway leading-relaxed">{activeService.description}</p>
            
            <h4 class="text-lg font-bold mb-3 font-montserrat text-primary">Key Features</h4>
            <ul class="space-y-2 mb-6">
              {#each activeService.features as feature}
                <li class="flex items-start">
                  <span class="text-gold mr-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            
            <a href="/quote" class="inline-block bg-gold text-black font-bold py-3 px-6 hover:bg-black hover:text-white transition-colors">
              Request a Quote
            </a>
          </div>
          
          <div class="image-container rounded-lg overflow-hidden shadow-lg h-[400px]">
            <img 
              src={activeService.image} 
              alt={activeService.name} 
              class="w-full h-full object-cover"
              on:error={() => handleImageError(activeService.image)}
            />
            
            {#if imageLoadErrors[activeService.image]}
              <div class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center p-6">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="text-xl font-medium mb-2">{activeService.name}</p>
                  <p>Image not available</p>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Process Section -->
  <section class="py-16 px-4 bg-primary text-white relative z-2">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 animate-on-scroll" style="opacity: 1; transform: translateY(0);">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">How We Work</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 font-montserrat">Our Process</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0); transition-delay: 100ms">
          <div class="text-gold text-4xl font-bold mb-4">01</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat">Consultation</h3>
          <p class="font-raleway">
            We begin by understanding your vision, requirements, budget, and timeline to establish a strong foundation for your project.
          </p>
        </div>
        
        <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0); transition-delay: 200ms">
          <div class="text-gold text-4xl font-bold mb-4">02</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat">Design</h3>
          <p class="font-raleway">
            Our architects create detailed designs that align with your vision while ensuring functionality, efficiency, and compliance.
          </p>
        </div>
        
        <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0); transition-delay: 300ms">
          <div class="text-gold text-4xl font-bold mb-4">03</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat">Construction</h3>
          <p class="font-raleway">
            Our skilled team brings your design to life with quality materials, meticulous craftsmanship, and attention to every detail.
          </p>
        </div>
        
        <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0); transition-delay: 400ms">
          <div class="text-gold text-4xl font-bold mb-4">04</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat">Handover</h3>
          <p class="font-raleway">
            We complete final inspections, address any concerns, and proudly hand over your finished project, ready for you to enjoy.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-light relative z-2">
    <div class="max-w-4xl mx-auto text-center animate-on-scroll" style="opacity: 1; transform: translateY(0);">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-primary">Ready to Start Your Project?</h2>
      <p class="text-gray-700 mb-8 font-raleway">
        Contact us today for a consultation and let's bring your vision to life. Whether you're in Kenya or abroad, 
        we're here to make your construction journey smooth and successful.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/quote" class="bg-gold text-black font-bold py-3 px-8 hover:bg-black hover:text-white transition-colors">
          Get a Quote
        </a>
        <a href="/contact" class="bg-primary text-white font-bold py-3 px-8 hover:bg-gold hover:text-black transition-colors">
          Contact Us
        </a>
      </div>
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
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  
  .ring-gold {
    --tw-ring-color: var(--color-gold);
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  
  
  /* Service card specific styles */
  .service-card {
    position: relative;
    z-index: 5;
    isolation: isolate;
  }
  
  .service-card img {
    position: relative;
    z-index: 2;
  }
  
  .service-detail-card {
    position: relative;
    z-index: 5;
  }
  
  .image-container {
    position: relative;
    overflow: hidden;
  }
  
  /* Fixed visibility for services page */
  .filter-buttons-container {
    position: relative;
    isolation: isolate;
  }
  
  .filter-buttons {
    position: relative;
    z-index: 20;
  }
  
  .service-listings {
    position: relative;
    z-index: 10;
  }
  
  /* Remove any potential overlays */
  main::before,
  main::after,
  section::before,
  section::after {
    content: none !important;
  }
  
  /* Fix for z-index stacking context */
  main {
    isolation: isolate;
  }
  
  section {
    isolation: isolate;
  }
</style>
