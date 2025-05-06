<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  
  // Project categories
  const categories = ['All', 'Residential', 'Commercial', 'Renovation'];
  let activeCategory = 'All';
  
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Skyline House',
      location: 'Ngong, Kajiado',
      category: 'Residential',
      image: '/images/projects/skyline-house.jpg',
      description: 'A modern 4-bedroom family home with panoramic views of the Ngong Hills.',
      features: ['4 Bedrooms', 'Open Floor Plan', 'Solar Power', 'Rainwater Harvesting'],
      completionDate: 'March 2023'
    },
    {
      id: 2,
      title: 'Kagundo Mansionette',
      location: 'Kagundo, Machakos',
      category: 'Residential',
      image: '/images/projects/kagundo-mansion.jpg',
      description: 'Elegant 5-bedroom mansionette built with sustainability in mind.',
      features: ['5 Bedrooms', 'Home Office', 'Eco-friendly Design', 'Garden'],
      completionDate: 'November 2022'
    },
    {
      id: 3,
      title: 'La Finca del Cielo',
      location: 'Kieni, Nyeri',
      category: 'Residential',
      image: '/images/projects/la-finca.jpg',
      description: 'A countryside retreat with modern amenities and traditional Kenyan influences.',
      features: ['3 Bedrooms', 'Farm Integration', 'Indoor-Outdoor Living', 'Local Materials'],
      completionDate: 'July 2022'
    },
    {
      id: 4,
      title: 'Casa del Bosco',
      location: 'Runda, Nairobi',
      category: 'Residential',
      image: '/images/projects/casa-bosco.jpg',
      description: 'Luxury forest-side home with extensive use of natural materials.',
      features: ['6 Bedrooms', 'Swimming Pool', 'Home Theatre', 'Smart Home System'],
      completionDate: 'January 2023'
    },
    {
      id: 5,
      title: 'Kiambu Business Center',
      location: 'Kiambu Town',
      category: 'Commercial',
      image: '/images/projects/kiambu-center.jpg',
      description: 'Modern office complex with retail spaces on the ground floor.',
      features: ['3 Floors', '12 Office Units', '5 Retail Spaces', 'Parking Garage'],
      completionDate: 'May 2022'
    },
    {
      id: 6,
      title: 'Riverside Apartments',
      location: 'Thika Road, Nairobi',
      category: 'Residential',
      image: '/images/projects/riverside-apartments.jpg',
      description: 'Contemporary apartment complex with 24 units of varying sizes.',
      features: ['24 Units', 'Rooftop Garden', 'Gym', 'Security System'],
      completionDate: 'December 2021'
    },
    {
      id: 7,
      title: 'Athi River Warehouse',
      location: 'Athi River',
      category: 'Commercial',
      image: '/images/projects/warehouse.jpg',
      description: 'State-of-the-art warehouse facility with offices and loading docks.',
      features: ['5000 sq.m Space', 'Office Block', '6 Loading Bays', 'Security System'],
      completionDate: 'August 2022'
    },
    {
      id: 8,
      title: 'Karen Bungalow Renovation',
      location: 'Karen, Nairobi',
      category: 'Renovation',
      image: '/images/projects/karen-renovation.jpg',
      description: 'Complete renovation of a 1970s bungalow, modernizing while preserving character.',
      features: ['Structural Repairs', 'Modern Kitchen', 'Expanded Living Areas', 'Energy Efficiency Upgrades'],
      completionDate: 'April 2022'
    },
    {
      id: 9,
      title: 'Gigiri Guest House',
      location: 'Gigiri, Nairobi',
      category: 'Residential',
      image: '/images/projects/guest-house.jpg',
      description: 'Compact but luxurious guest house built for diplomatic visitors.',
      features: ['2 Bedrooms', 'Self-contained', 'Minimalist Design', 'Garden View'],
      completionDate: 'February 2023'
    }
  ];
  
  // Filtered projects based on active category
  $: filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  // Set the active category
  function setCategory(category: string): void {
    activeCategory = category;
  }
  
  onMount(() => {
    // Make all animation elements visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
    
    // Animation for elements when they come into view
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

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Section -->
  <section class="relative py-24 px-4 bg-primary text-light hero-section">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">Our Projects</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto font-raleway mb-8">
        Explore our portfolio of completed residential and commercial construction projects across Kenya.
      </p>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
    </div>
  </section>
  
  <!-- Project Filtering -->
  <section class="py-12 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        {#each categories as category}
          <button 
            class="px-6 py-2 border-2 transition-all {activeCategory === category ? 'border-gold bg-gold text-primary font-bold' : 'border-primary text-primary hover:border-gold hover:text-gold'}"
            on:click={() => setCategory(category)}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredProjects as project}
          <div class="animate-on-scroll bg-white shadow-lg overflow-hidden group">
            <div class="relative overflow-hidden h-64">
              <img 
                src={project.image} 
                alt={project.title} 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-primary bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={`/projects/${project.id}`} class="bg-gold text-primary px-6 py-2 font-bold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Project
                </a>
              </div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold font-montserrat">{project.title}</h3>
                <span class="text-gold text-sm font-semibold px-2 py-1 border border-gold">{project.category}</span>
              </div>
              <p class="text-secondary mb-4 font-raleway">{project.location}</p>
              <p class="text-gray-700 mb-4 font-raleway">{project.description}</p>
              <p class="text-secondary text-sm font-raleway">Completed: {project.completionDate}</p>
            </div>
          </div>
        {/each}
      </div>
      
      <!-- Empty State -->
      {#if filteredProjects.length === 0}
        <div class="text-center py-16">
          <p class="text-xl text-secondary font-raleway">No projects found in this category.</p>
        </div>
      {/if}
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-primary text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Ready to Build Your Dream Project?</h2>
      <p class="mb-8 text-lg font-raleway">
        Let's bring your vision to life with our expert design and construction team.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/quote" class="bg-gold hover:bg-opacity-90 text-primary px-8 py-3 font-bold">Get A Quote</a>
        <a href="/contact" class="border-2 border-white hover:border-gold hover:text-gold px-8 py-3 font-bold">Contact Us</a>
      </div>
    </div>
  </section>
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
  
  /* Hero section styles */
  .hero-section {
    position: relative;
    overflow: hidden;
    background-image: url('/images/projects/projects-hero.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  
  .hero-section > div {
    position: relative;
    z-index: 1;
  }
  
  /* Animation styles */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Make animations visible immediately for reduced motion preference */
  @media (prefers-reduced-motion) {
    .animate-on-scroll {
      opacity: 1;
      transform: translateY(0);
      transition: none;
    }
  }
</style> 