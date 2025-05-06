<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  
  // Project data (in a real app, this would come from a database or API)
  const projects = [
    {
      id: 1,
      title: 'Skyline House',
      location: 'Ngong, Kajiado',
      category: 'Residential',
      images: [
        '/images/projects/skyline-house.jpg',
        '/images/projects/skyline-house1.jpg',
        '/images/projects/skyline-house2.jpg'
      ],
      description: 'A modern 4-bedroom family home with panoramic views of the Ngong Hills. This project exemplifies our commitment to integrating contemporary architecture with the natural landscape. The large windows and open floor plan maximize the breathtaking views while maintaining energy efficiency through strategic design.',
      challenge: 'The sloping terrain presented initial challenges for foundation work, requiring specialized engineering solutions to ensure structural integrity while preserving the natural landscape.',
      solution: 'Our team implemented a stepped foundation design working with the natural contours of the land. This minimized environmental impact and created unique multi-level spaces that enhanced the connection to surroundings.',
      features: ['4 Bedrooms', 'Open Floor Plan', 'Solar Power', 'Rainwater Harvesting', 'Home Office', 'Outdoor Entertainment Area'],
      materials: ['Locally Sourced Stone', 'Sustainable Timber', 'Energy-Efficient Glass', 'Eco-Friendly Insulation'],
      completionDate: 'March 2023',
      client: 'The Kamau Family',
      duration: '8 months'
    },
    {
      id: 2,
      title: 'Kagundo Mansionette',
      location: 'Kagundo, Machakos',
      category: 'Residential',
      images: [
        '/images/projects/kagundo-mansion.jpg',
        '/images/projects/kagundo-mansion1.jpg',
        '/images/projects/kagundo-mansion2.jpg'
      ],
      description: 'Elegant 5-bedroom mansionette built with sustainability in mind. This family home combines luxury living with eco-friendly features, creating a comfortable and environmentally responsible dwelling.',
      challenge: 'The client requested a spacious family home that would maintain low energy consumption despite its size and the local climate conditions.',
      solution: 'We designed the home with passive cooling principles, incorporating shaded verandas, strategic window placement for cross-ventilation, and thermal mass to regulate temperature fluctuations naturally. These features were complemented with solar power and rainwater harvesting systems.',
      features: ['5 Bedrooms', 'Home Office', 'Eco-friendly Design', 'Garden', 'Double Garage', 'Servant Quarters'],
      materials: ['Compressed Earth Blocks', 'Bamboo Flooring', 'Recycled Metal Roofing', 'Low-VOC Paints'],
      completionDate: 'November 2022',
      client: 'Dr. and Mrs. Ndegwa',
      duration: '10 months'
    },
    {
      id: 3,
      title: 'La Finca del Cielo',
      location: 'Kieni, Nyeri',
      category: 'Residential',
      images: [
        '/images/projects/la-finca.jpg',
        '/images/projects/la-finca1.jpg',
        '/images/projects/la-finca2.jpg'
      ],
      description: 'A countryside retreat with modern amenities and traditional Kenyan influences. This project blends contemporary living with rural charm, creating a peaceful sanctuary that honors local architectural heritage.',
      challenge: 'Creating a home that would function as both a working farm property and a comfortable residence with modern amenities, while respecting the rural context and traditional building practices.',
      solution: 'Our design incorporated traditional Kenyan architectural elements with modern construction techniques. We created distinct zones for living and farm operations, connected by beautiful landscaped pathways. The home\'s orientation maximizes natural light and passive heating/cooling.',
      features: ['3 Bedrooms', 'Farm Integration', 'Indoor-Outdoor Living', 'Local Materials', 'Wood-burning Fireplace', 'Farm Office'],
      materials: ['Local Stone', 'Eucalyptus Timber', 'Clay Tiles', 'Hand-crafted Details'],
      completionDate: 'July 2022',
      client: 'The Wainaina Family',
      duration: '7 months'
    },
    
    {
      id: 4,
      title: 'Kiambu Business Center',
      location: 'Kiambu Town',
      category: 'Commercial',
      images: [
        '/images/projects/kiambu-center.jpg',
        '/images/projects/kiambu-center1.jpg',
        '/images/projects/kiambu-center2.jpg'
      ],
      description: 'Modern office complex with retail spaces on the ground floor. This mixed-use development provides versatile commercial space with contemporary design that stands out in the growing Kiambu business district.',
      challenge: 'Creating a versatile commercial building in a rapidly developing area that would meet the needs of diverse businesses while establishing a strong architectural identity.',
      solution: 'We designed a flexible floor plan that can accommodate various business types, with modular office spaces that can be combined or separated as needed. The retail ground floor features high visibility and foot traffic, while upper floors provide quiet, professional environments.',
      features: ['3 Floors', '12 Office Units', '5 Retail Spaces', 'Parking Garage', 'Fiber Internet', 'Central HVAC'],
      materials: ['Structural Steel', 'Curtain Wall Glass', 'Polished Concrete', 'Acoustic Ceilings'],
      completionDate: 'May 2022',
      client: 'Kiambu Investments Ltd.',
      duration: '11 months'
    },
    
    {
      id: 7,
      title: 'Athi River Warehouse',
      location: 'Athi River',
      category: 'Commercial',
      images: [
        '/images/projects/warehouse.jpg',
        '/images/projects/warehouse1.jpg',
        '/images/projects/warehouse2.jpg'
      ],
      description: 'State-of-the-art warehouse facility with offices and loading docks. This industrial project provides efficient logistics operations with modern management facilities and strategic location for distribution.',
      challenge: 'Designing an industrial facility that would accommodate heavy machinery and goods movement while maintaining an efficient workflow and comfortable working conditions in a hot climate.',
      solution: 'We implemented a high-roof design with natural ventilation systems and thermal insulation to regulate temperature without excessive energy use. The layout separates office spaces from warehouse operations while maintaining visual connection for management oversight.',
      features: ['5000 sq.m Space', 'Office Block', '6 Loading Bays', 'Security System', 'Staff Facilities', 'Truck Yard'],
      materials: ['Steel Structure', 'Insulated Panels', 'Reinforced Concrete', 'Epoxy Flooring'],
      completionDate: 'August 2022',
      client: 'East Africa Distribution Co.',
      duration: '9 months'
    },
    {
      id: 5,
      title: 'Karen Bungalow Renovation',
      location: 'Karen, Nairobi',
      category: 'Renovation',
      images: [
        '/images/projects/karen-renovation.jpg',
        '/images/projects/karen-renovation1.jpg',
        '/images/projects/karen-renovation2.jpg'
      ],
      description: 'Complete renovation of a 1970s bungalow, modernizing while preserving character. This project demonstrates how thoughtful renovation can transform an outdated home into a contemporary living space without losing its original charm.',
      challenge: 'Updating a 50-year-old home to modern standards and contemporary aesthetics while preserving its historical character and addressing structural issues.',
      solution: 'We carefully assessed the property\'s condition and preserved key architectural elements while completely updating systems and finishes. The floor plan was opened up to improve flow and light, with new extensions that complement the original design language.',
      features: ['Structural Repairs', 'Modern Kitchen', 'Expanded Living Areas', 'Energy Efficiency Upgrades', 'New Master Suite', 'Garden Redesign'],
      materials: ['Restored Hardwood', 'Quartz Countertops', 'Designer Tiles', 'Custom Cabinetry'],
      completionDate: 'April 2022',
      client: 'Mr. and Mrs. Chen',
      duration: '6 months'
    },
    {
      id: 6,
      title: 'Embassy Guest House',
      location: 'Gigiri, Nairobi',
      category: 'Institutional',
      images: [
        '/images/projects/guest-house.jpg',
        '/images/projects/guest-house1.jpg',
        '/images/projects/guest-house2.jpg'
      ],
      description: 'Compact but luxurious guest house built for diplomatic visitors. This project showcases how thoughtful design can maximize functionality and comfort in a limited footprint, creating a private retreat for international guests.',
      challenge: 'Creating a fully-featured luxury accommodation in a limited space that would meet the expectations of international diplomatic visitors and provide privacy within a larger compound.',
      solution: 'We designed a space-efficient floor plan with high-end finishes and custom furniture to maximize functionality without sacrificing comfort. The building incorporates soundproofing and privacy features, with its own dedicated entrance and garden area.',
      features: ['2 Bedrooms', 'Self-contained', 'Minimalist Design', 'Garden View', 'Private Entrance', 'Home Office'],
      materials: ['Imported Marble', 'Cedar Wood', 'Designer Fixtures', 'Smart Glass'],
      completionDate: 'February 2023',
      client: 'International Diplomatic Mission',
      duration: '5 months'
    }
  ];
  
  // Get current project based on URL parameter
  $: currentProject = projects.find(p => p.id.toString() === $page.params.id);
  $: currentImageIndex = 0;
  
  // Image loading tracking
  let imagesLoaded = false;
  let imageErrors: Record<string, boolean> = {};
  let loadedImages: Record<string, boolean> = {};
  let timestamp = Date.now(); // Use timestamp for cache busting
  
  function handleImageError(src: string): void {
    console.error(`Failed to load image: ${src}`);
    imageErrors = { ...imageErrors, [src]: true };
  }
  
  function handleImageLoad(src: string): void {
    console.log(`Image loaded successfully: ${src}`);
    loadedImages = { ...loadedImages, [src]: true };
    
    // Check if all images are loaded
    if (currentProject) {
      const allLoaded = currentProject.images.every(img => loadedImages[img]);
      if (allLoaded) {
        imagesLoaded = true;
      }
    }
  }
  
  // Preload images
  function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = `${src}?v=${timestamp}`;
      img.onload = () => {
        handleImageLoad(src);
        resolve(src);
      };
      img.onerror = () => {
        handleImageError(src);
        reject(src);
      };
    });
  }
  
  function nextImage() {
    if (currentProject) {
      currentImageIndex = (currentImageIndex + 1) % currentProject.images.length;
    }
  }
  
  function prevImage() {
    if (currentProject) {
      currentImageIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length;
    }
  }
  
  // Animation on scroll
  onMount(() => {
    // Preload all project images if we have a current project
    if (currentProject) {
      Promise.all(currentProject.images.map(src => preloadImage(src)))
        .then(() => {
          console.log('All project detail images preloaded');
          imagesLoaded = true;
        })
        .catch(err => console.error('Failed to preload some images:', err));
    }

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

<Header />

<main id="main-content">
  {#if currentProject}
    <!-- Hero Section -->
    <section class="relative bg-primary py-32 px-4">
      <div class="absolute inset-0 bg-black opacity-40"></div>
      <div class="relative z-10 max-w-6xl mx-auto text-center text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 font-montserrat">{currentProject.title}</h1>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-xl font-raleway">
          {currentProject.location} | {currentProject.category} Project
        </p>
      </div>
    </section>
    
    <!-- Image Gallery -->
    <section class="py-16 px-4 bg-light">
      <div class="max-w-6xl mx-auto">
        <div class="relative overflow-hidden h-[60vh] mb-4 border border-gray-200">
          <!-- Loading indicator -->
          {#if !imagesLoaded}
            <div class="absolute inset-0 z-20 flex items-center justify-center bg-gray-200">
              <div class="text-center">
                <div class="w-16 h-16 border-4 border-gray-300 border-t-gold rounded-full animate-spin mx-auto mb-4"></div>
                <p class="text-gray-600">Loading project images...</p>
              </div>
            </div>
          {/if}
          
          {#each currentProject.images as image, i}
            <div 
              class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
              style="opacity: {currentImageIndex === i ? '1' : '0'};"
            >
              <img 
                src={`${image}?v=${timestamp}`}
                alt="{currentProject.title} - Image {i+1}" 
                class="w-full h-full object-cover"
                width="1200"
                height="800"
                loading="eager"
                on:error={() => handleImageError(image)}
                on:load={() => handleImageLoad(image)}
              />
              
              <!-- Fallback if image fails to load -->
              {#if imageErrors[image]}
                <div class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center p-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-lg font-bold">{currentProject.title}</p>
                    <p>Image could not be loaded</p>
                    <button 
                      class="mt-4 px-4 py-2 bg-primary text-white hover:bg-primary/80 transition-colors"
                      on:click={() => {
                        timestamp = Date.now();
                        imageErrors[image] = false;
                        preloadImage(image);
                      }}
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              {/if}
            </div>
          {/each}
          
          <!-- Navigation Arrows -->
          <button 
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary/50 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all"
            on:click={prevImage}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/50 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all"
            on:click={nextImage}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        <!-- Thumbnails -->
        <div class="flex space-x-2 overflow-x-auto pb-4">
          {#each currentProject.images as image, i}
            <button 
              class="h-20 w-32 flex-shrink-0 overflow-hidden {currentImageIndex === i ? 'ring-2 ring-gold' : 'ring-1 ring-gray-200'}"
              on:click={() => currentImageIndex = i}
              aria-label="View image {i+1}"
            >
              <div class="w-full h-full relative">
                <img 
                  src={`${image}?v=${timestamp}`} 
                  alt="{currentProject.title} thumbnail {i+1}" 
                  class="w-full h-full object-cover"
                  width="128"
                  height="80"
                  loading="eager"
                  on:error={() => handleImageError(image)}
                />
                
                {#if imageErrors[image]}
                  <div class="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                {/if}
              </div>
            </button>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Project Details -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Left Column - Description -->
          <div class="lg:col-span-2">
            <h2 class="text-3xl font-bold mb-6 text-primary font-montserrat">Project Overview</h2>
            <p class="text-gray-700 mb-8 leading-relaxed">{currentProject.description}</p>
            
            <div class="mb-10">
              <h3 class="text-2xl font-bold mb-4 text-primary font-montserrat">The Challenge</h3>
              <p class="text-gray-700 mb-6 leading-relaxed">{currentProject.challenge}</p>
              
              <h3 class="text-2xl font-bold mb-4 text-primary font-montserrat">Our Solution</h3>
              <p class="text-gray-700 leading-relaxed">{currentProject.solution}</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Features -->
              <div class="animate-on-scroll" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out;">
                <h3 class="text-xl font-bold mb-4 text-primary font-montserrat">Key Features</h3>
                <ul class="space-y-2">
                  {#each currentProject.features as feature}
                    <li class="flex items-start">
                      <span class="text-gold mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span>{feature}</span>
                    </li>
                  {/each}
                </ul>
              </div>
              
              <!-- Materials -->
              <div class="animate-on-scroll" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; transition-delay: 200ms;">
                <h3 class="text-xl font-bold mb-4 text-primary font-montserrat">Materials Used</h3>
                <ul class="space-y-2">
                  {#each currentProject.materials as material}
                    <li class="flex items-start">
                      <span class="text-gold mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span>{material}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Right Column - Project Info -->
          <div class="bg-light p-8 animate-on-scroll" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; transition-delay: 400ms;">
            <h3 class="text-xl font-bold mb-6 text-primary font-montserrat">Project Details</h3>
            
            <div class="space-y-4">
              <div>
                <p class="text-gold font-semibold">Client</p>
                <p>{currentProject.client}</p>
              </div>
              
              <div>
                <p class="text-gold font-semibold">Location</p>
                <p>{currentProject.location}</p>
              </div>
              
              <div>
                <p class="text-gold font-semibold">Project Type</p>
                <p>{currentProject.category}</p>
              </div>
              
              <div>
                <p class="text-gold font-semibold">Completion Date</p>
                <p>{currentProject.completionDate}</p>
              </div>
              
              <div>
                <p class="text-gold font-semibold">Duration</p>
                <p>{currentProject.duration}</p>
              </div>
            </div>
            
            <div class="mt-8">
              <a href="/contact" class="block w-full bg-gold text-black text-center py-3 font-bold hover:bg-black hover:text-white transition-colors">
                Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related Projects -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-8 text-primary font-montserrat text-center">Similar Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each projects.filter(p => p.category === currentProject.category && p.id !== currentProject.id).slice(0, 3) as project}
            <a href="/projects/{project.id}" class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="h-60 overflow-hidden">
                <img src={project.images[0]} alt={project.title} class="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-primary font-montserrat">{project.title}</h3>
                <p class="text-sm text-gray-500 mb-3">{project.location}</p>
                <p class="text-gray-700 line-clamp-3">{project.description}</p>
              </div>
            </a>
          {/each}
        </div>
        
        <div class="mt-10 text-center">
          <a href="/projects" class="inline-flex items-center text-gold hover:text-gold-dark font-medium">
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  {:else}
    <div class="py-32 px-4 text-center">
      <h1 class="text-3xl font-bold text-primary mb-4">Project Not Found</h1>
      <p class="mb-8">The project you're looking for doesn't exist or has been removed.</p>
      <a href="/projects" class="inline-flex items-center bg-gold hover:bg-gold-dark text-white py-2 px-6 rounded">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>
        Back to Projects
      </a>
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
  
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  
  
  .ring-gold {
    --tw-ring-color: var(--color-gold);
  }

  /* Add more explicit styles to ensure image container displays properly */
  .relative {
    position: relative;
  }
  
  .absolute {
    position: absolute;
  }
  
  .inset-0 {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style> 