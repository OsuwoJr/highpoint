<script>
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
        '/images/projects/skyline-house-2.jpg',
        '/images/projects/skyline-house-3.jpg'
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
        '/images/projects/kagundo-mansion-2.jpg',
        '/images/projects/kagundo-mansion-3.jpg'
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
        '/images/projects/la-finca-2.jpg',
        '/images/projects/la-finca-3.jpg'
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
      title: 'Casa del Bosco',
      location: 'Runda, Nairobi',
      category: 'Residential',
      images: [
        '/images/projects/casa-bosco.jpg',
        '/images/projects/casa-bosco-2.jpg',
        '/images/projects/casa-bosco-3.jpg'
      ],
      description: 'Luxury forest-side home with extensive use of natural materials. This premium residence seamlessly integrates with its wooded surroundings while providing state-of-the-art amenities for comfortable family living.',
      challenge: 'The densely wooded site required careful planning to preserve mature trees while creating a spacious, light-filled home with modern luxury amenities.',
      solution: 'We conducted a detailed arborist survey and designed the home around existing trees, incorporating them as natural features of the property. The multi-level design follows the natural topography, with floor-to-ceiling windows that bring the forest indoors.',
      features: ['6 Bedrooms', 'Swimming Pool', 'Home Theatre', 'Smart Home System', 'Wine Cellar', 'Outdoor Kitchen'],
      materials: ['Natural Stone', 'Hardwood Timber', 'Granite Countertops', 'Glass Walls'],
      completionDate: 'January 2023',
      client: 'The Odhiambo Family',
      duration: '14 months'
    },
    {
      id: 5,
      title: 'Kiambu Business Center',
      location: 'Kiambu Town',
      category: 'Commercial',
      images: [
        '/images/projects/kiambu-center.jpg',
        '/images/projects/kiambu-center-2.jpg',
        '/images/projects/kiambu-center-3.jpg'
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
      id: 6,
      title: 'Riverside Apartments',
      location: 'Thika Road, Nairobi',
      category: 'Residential',
      images: [
        '/images/projects/riverside-apartments.jpg',
        '/images/projects/riverside-apartments-2.jpg',
        '/images/projects/riverside-apartments-3.jpg'
      ],
      description: 'Contemporary apartment complex with 24 units of varying sizes. This project delivers modern urban living with shared amenities and efficient use of space, catering to professionals and small families in the growing Thika Road corridor.',
      challenge: 'Maximizing the number of units while creating comfortable living spaces with adequate natural light, ventilation and privacy on a constrained urban site.',
      solution: 'We employed a thoughtful layout that optimizes space usage while ensuring each unit receives natural light from multiple directions. The building incorporates communal areas on the rooftop and ground floor to enhance resident experience and build community.',
      features: ['24 Units', 'Rooftop Garden', 'Gym', 'Security System', 'Underground Parking', 'Children\'s Play Area'],
      materials: ['Reinforced Concrete', 'Ceramic Tiles', 'Soundproof Walls', 'Stainless Steel Accents'],
      completionDate: 'December 2021',
      client: 'Nairobi Urban Developments',
      duration: '18 months'
    },
    {
      id: 7,
      title: 'Athi River Warehouse',
      location: 'Athi River',
      category: 'Commercial',
      images: [
        '/images/projects/warehouse.jpg',
        '/images/projects/warehouse-2.jpg',
        '/images/projects/warehouse-3.jpg'
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
      id: 8,
      title: 'Karen Bungalow Renovation',
      location: 'Karen, Nairobi',
      category: 'Renovation',
      images: [
        '/images/projects/karen-renovation.jpg',
        '/images/projects/karen-renovation-2.jpg',
        '/images/projects/karen-renovation-3.jpg'
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
      id: 9,
      title: 'Gigiri Guest House',
      location: 'Gigiri, Nairobi',
      category: 'Residential',
      images: [
        '/images/projects/guest-house.jpg',
        '/images/projects/guest-house-2.jpg',
        '/images/projects/guest-house-3.jpg'
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
        <div class="relative overflow-hidden h-[60vh] mb-4">
          {#each currentProject.images as image, i}
            <div 
              class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
              style="opacity: {currentImageIndex === i ? '1' : '0'};"
            >
              <img 
                src={image} 
                alt="{currentProject.title} - Image {i+1}" 
                class="w-full h-full object-cover"
              />
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
              <img src={image} alt="{currentProject.title} thumbnail {i+1}" class="w-full h-full object-cover"/>
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
              <div class="animate-on-scroll" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; transition-delay: 0.2s;">
                <h3 class="text-xl font-bold mb-4 text-primary font-montserrat">Materials Used</h3>
                <ul class="space-y-2">
                  {#each currentProject.materials as material}
                    <li class="flex items-start">
                      <span class="text-gold mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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
          <div class="lg:col-span-1">
            <div class="bg-gray-50 p-6 rounded-lg mb-8 shadow-sm">
              <h3 class="text-xl font-bold mb-4 text-primary font-montserrat">Project Details</h3>
              
              <div class="space-y-4">
                <div>
                  <p class="text-sm text-gray-500">Client</p>
                  <p class="font-medium">{currentProject.client}</p>
                </div>
                
                <div>
                  <p class="text-sm text-gray-500">Location</p>
                  <p class="font-medium">{currentProject.location}</p>
                </div>
                
                <div>
                  <p class="text-sm text-gray-500">Project Type</p>
                  <p class="font-medium">{currentProject.category}</p>
                </div>
                
                <div>
                  <p class="text-sm text-gray-500">Completion Date</p>
                  <p class="font-medium">{currentProject.completionDate}</p>
                </div>
                
                <div>
                  <p class="text-sm text-gray-500">Duration</p>
                  <p class="font-medium">{currentProject.duration}</p>
                </div>
              </div>
            </div>
            
            <!-- CTA -->
            <div class="bg-primary p-6 rounded-lg text-white animate-on-scroll" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease-out; transition-delay: 0.4s;">
              <h3 class="text-xl font-bold mb-4 font-montserrat">Want a similar project?</h3>
              <p class="mb-6">Contact us today to discuss your construction needs and get a free consultation.</p>
              <a href="/contact" class="block text-center bg-gold hover:bg-white hover:text-primary transition-colors py-3 px-6 rounded-md font-medium">Contact Us</a>
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
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }
  
  .animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 