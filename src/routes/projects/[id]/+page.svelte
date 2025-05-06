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
        '/images/projects/skyline-house-3.jpg',
      ],
      description: 'A modern 4-bedroom family home with panoramic views of the Ngong Hills. This project exemplifies our commitment to integrating contemporary architecture with the natural landscape. The large windows and open floor plan maximize the breathtaking views while maintaining energy efficiency through strategic design.',
      challenge: 'The sloping terrain presented initial challenges for foundation work, requiring specialized engineering solutions to ensure structural integrity while preserving the natural landscape.',
      solution: 'Our team implemented a stepped foundation design that worked with the natural contours of the land rather than against them. This approach minimized environmental impact and created unique multi-level living spaces that enhanced the home's connection to its surroundings.',
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
        '/images/projects/kagundo-mansion-3.jpg',
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
        '/images/projects/la-finca-3.jpg',
      ],
      description: 'A countryside retreat with modern amenities and traditional Kenyan influences. This project blends contemporary living with rural charm, creating a peaceful sanctuary that honors local architectural heritage.',
      challenge: 'Creating a home that would function as both a working farm property and a comfortable residence with modern amenities, while respecting the rural context and traditional building practices.',
      solution: 'Our design incorporated traditional Kenyan architectural elements with modern construction techniques. We created distinct zones for living and farm operations, connected by beautiful landscaped pathways. The home's orientation maximizes natural light and passive heating/cooling.',
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
        '/images/projects/casa-bosco-3.jpg',
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
        '/images/projects/kiambu-center-3.jpg',
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
        '/images/projects/riverside-apartments-3.jpg',
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
        '/images/projects/warehouse-3.jpg',
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
        '/images/projects/karen-renovation-3.jpg',
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
        '/images/projects/guest-house-3.jpg',
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
                alt={`${currentProject.title} - Image ${i+1}`} 
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/50 hover:bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all"
            on:click={nextImage}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <!-- Image Counter -->
          <div class="absolute bottom-4 right-4 bg-primary/70 text-white px-3 py-1 rounded-full text-sm z-10">
            {currentImageIndex + 1} / {currentProject.images.length}
          </div>
        </div>
        
        <!-- Thumbnail Navigation -->
        <div class="flex space-x-2 overflow-x-auto pb-4">
          {#each currentProject.images as image, i}
            <button 
              class="w-24 h-16 flex-shrink-0 overflow-hidden border-2 {currentImageIndex === i ? 'border-gold' : 'border-transparent hover:border-gold/50'} transition-all"
              on:click={() => currentImageIndex = i}
              aria-label={`View image ${i+1}`}
            >
              <img src={image} alt="" class="w-full h-full object-cover" />
            </button>
          {/each}
        </div>
      </div>
    </section>
    
    <!-- Project Details -->
    <section class="py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2">
            <div class="animate-on-scroll mb-12">
              <h2 class="text-3xl font-bold mb-6 font-montserrat">Project Overview</h2>
              <p class="text-lg text-secondary font-raleway mb-8">{currentProject.description}</p>
              
              <div class="mb-8">
                <h3 class="text-xl font-bold mb-4 font-montserrat">The Challenge</h3>
                <p class="text-secondary font-raleway">{currentProject.challenge}</p>
              </div>
              
              <div>
                <h3 class="text-xl font-bold mb-4 font-montserrat">Our Solution</h3>
                <p class="text-secondary font-raleway">{currentProject.solution}</p>
              </div>
            </div>
            
            <div class="animate-on-scroll">
              <h2 class="text-3xl font-bold mb-6 font-montserrat">Materials Used</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {#each currentProject.materials as material}
                  <div class="flex items-start">
                    <span class="text-gold mr-2">•</span>
                    <p class="font-raleway">{material}</p>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          
          <div class="lg:col-span-1">
            <div class="bg-light p-8 animate-on-scroll">
              <h2 class="text-2xl font-bold mb-6 font-montserrat border-b border-gray-200 pb-2">Project Details</h2>
              
              <div class="mb-4">
                <h3 class="text-lg font-bold font-montserrat text-primary">Client</h3>
                <p class="font-raleway text-secondary">{currentProject.client}</p>
              </div>
              
              <div class="mb-4">
                <h3 class="text-lg font-bold font-montserrat text-primary">Location</h3>
                <p class="font-raleway text-secondary">{currentProject.location}</p>
              </div>
              
              <div class="mb-4">
                <h3 class="text-lg font-bold font-montserrat text-primary">Category</h3>
                <p class="font-raleway text-secondary">{currentProject.category}</p>
              </div>
              
              <div class="mb-4">
                <h3 class="text-lg font-bold font-montserrat text-primary">Completed</h3>
                <p class="font-raleway text-secondary">{currentProject.completionDate}</p>
              </div>
              
              <div class="mb-8">
                <h3 class="text-lg font-bold font-montserrat text-primary">Duration</h3>
                <p class="font-raleway text-secondary">{currentProject.duration}</p>
              </div>
              
              <h3 class="text-lg font-bold font-montserrat text-primary mb-4">Key Features</h3>
              <ul class="list-none space-y-2">
                {#each currentProject.features as feature}
                  <li class="flex items-center">
                    <span class="text-gold text-lg mr-2">✓</span>
                    <span class="font-raleway text-secondary">{feature}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-16 px-4 bg-primary text-white">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Inspired by This Project?</h2>
        <p class="mb-8 text-lg font-raleway">
          Let's discuss how we can bring your own vision to life. Our team is ready to create your dream home or commercial space.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/quote" class="bg-gold hover:bg-opacity-90 text-primary px-8 py-3 font-bold">Get A Quote</a>
          <a href="/projects" class="border-2 border-white hover:border-gold hover:text-gold px-8 py-3 font-bold">View More Projects</a>
        </div>
      </div>
    </section>
  {:else}
    <!-- 404 - Project Not Found -->
    <section class="py-32 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6 font-montserrat">Project Not Found</h1>
        <p class="mb-8 text-lg font-raleway text-secondary">
          The project you're looking for doesn't exist or has been removed.
        </p>
        <a href="/projects" class="bg-gold text-primary px-8 py-3 font-bold">View All Projects</a>
      </div>
    </section>
  {/if}
</main>

<style>
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .text-secondary {
    color: var(--color-secondary);
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .hover\:border-gold\/50:hover {
    border-color: rgba(255, 140, 0, 0.5);
  }
  
  .hover\:border-gold:hover {
    border-color: var(--color-gold);
  }
  
  .hover\:text-gold:hover {
    color: var(--color-gold);
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
  
  .animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
</style> 