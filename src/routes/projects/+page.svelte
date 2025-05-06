<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  
  let timestamp = Date.now(); // For cache busting
  let projectImages: Record<number, Record<string, {loaded: boolean, error: boolean}>> = {};
  let loadingStates: Record<number, boolean> = {};
  
  // Filter functionality
  let categories = ['All', 'Residential', 'Commercial', 'Institutional'];
  let selectedCategory = 'All';
  
  const projects = [
    {
      id: 1,
      title: 'Skyline House',
      location: 'Ngong, Kajiado',
      category: 'Residential',
      images: ['/images/projects/skyline-house.jpg'],
      description: 'A modern family home with panoramic views of the Ngong Hills, designed to integrate with the natural landscape.'
    },
    {
      id: 2,
      title: 'Kagundo Mansionette',
      location: 'Kagundo, Machakos',
      category: 'Residential',
      images: ['/images/projects/kagundo-mansion.jpg'],
      description: 'Elegant 5-bedroom mansionette built with sustainability in mind, combining luxury living with eco-friendly features.'
    },
    {
      id: 3,
      title: 'La Finca',
      location: 'Naivasha, Nakuru',
      category: 'Residential',
      images: ['/images/projects/la-finca.jpg'],
      description: 'Spanish-inspired villa on a 2-acre property with private gardens, pool, and sustainable farm elements.'
    },
    {
      id: 4,
      title: 'Kiambu Business Center',
      location: 'Kiambu Town',
      category: 'Commercial',
      images: ['/images/projects/kiambu-center.jpg'],
      description: 'Modern commercial complex featuring retail spaces, offices, and a rooftop restaurant in the heart of Kiambu.'
    },
    {
      id: 5,
      title: 'Karen House Renovation',
      location: 'Karen, Nairobi',
      category: 'Residential',
      images: ['/images/projects/karen-renovation.jpg'],
      description: 'Complete renovation of a colonial-era home, preserving its historical character while adding modern amenities.'
    },
    {
      id: 6,
      title: 'Embassy Guest House',
      location: 'Gigiri, Nairobi',
      category: 'Institutional',
      images: ['/images/projects/guest-house.jpg'],
      description: 'Luxurious diplomatic guest house with high-end finishes, custom furniture, and top-tier security features.'
    },
    {
      id: 7,
      title: 'Nairobi Warehouse',
      location: 'Industrial Area, Nairobi',
      category: 'Commercial',
      images: ['/images/projects/warehouse.jpg'],
      description: 'State-of-the-art warehouse facility with advanced logistics infrastructure and sustainable design elements.'
    }
  ];
  
  function filterProjects() {
    if (selectedCategory === 'All') {
      return projects;
    }
    return projects.filter(project => project.category === selectedCategory);
  }
  
  function handleImageLoad(projectId: number, imageUrl: string) {
    projectImages = { 
      ...projectImages, 
      [projectId]: { 
        ...(projectImages[projectId] || {}), 
        [imageUrl]: { loaded: true, error: false } 
      } 
    };
    loadingStates = { ...loadingStates, [projectId]: false };
  }
  
  function handleImageError(projectId: number, imageUrl: string) {
    console.error(`Failed to load image for project ${projectId}: ${imageUrl}`);
    projectImages = { 
      ...projectImages, 
      [projectId]: { 
        ...(projectImages[projectId] || {}), 
        [imageUrl]: { loaded: false, error: true } 
      } 
    };
  }
  
  function retryImage(projectId: number, imageUrl: string) {
    timestamp = Date.now();
    projectImages = { 
      ...projectImages, 
      [projectId]: { 
        ...(projectImages[projectId] || {}), 
        [imageUrl]: { loaded: false, error: false } 
      } 
    };
    
    const img = new Image();
    img.src = `${imageUrl}?v=${timestamp}`;
    img.onload = () => handleImageLoad(projectId, imageUrl);
    img.onerror = () => handleImageError(projectId, imageUrl);
  }
  
  // Initialize loadingStates
  projects.forEach(project => {
    loadingStates[project.id] = true;
  });
  
  // Preload project images
  onMount(() => {
    // Preload all project images
    projects.forEach(project => {
      project.images.forEach(imageUrl => {
        const img = new Image();
        img.src = `${imageUrl}?v=${timestamp}`;
        img.onload = () => handleImageLoad(project.id, imageUrl);
        img.onerror = () => handleImageError(project.id, imageUrl);
      });
    });
    
    // Animation on scroll
    if (typeof IntersectionObserver !== 'undefined') {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          observer.observe(el);
          // Make elements visible right away
          el.classList.add('is-visible');
        });
      }, 100);
    }
  });
</script>

<Header />

<main id="main-content">
  <!-- Hero Section -->
  <section class="relative bg-cover bg-center py-32 px-4" style="background-image: url('/images/projects/projects-hero.jpg')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 max-w-6xl mx-auto text-center text-white">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 font-montserrat">Our Projects</h1>
      <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
      <p class="text-xl md:text-2xl font-raleway">
        Building Excellence Across Kenya
      </p>
    </div>
  </section>
  
  <!-- Projects Section -->
  <section class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Filter -->
      <div class="mb-12 flex flex-wrap justify-center gap-2 z-20 relative filter-buttons">
        {#each categories as category}
          <button 
            class="px-4 py-2 rounded-md transition-colors {selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-100 hover:bg-gray-200'}" 
            on:click={() => selectedCategory = category}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        {/each}
      </div>
      
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
        {#each filterProjects() as project, i}
          <div class="animate-on-scroll" style="opacity: 1; transform: translateY(0); transition: all 0.6s ease-out; transition-delay: {i * 100}ms;">
            <a href="/projects/{project.id}" class="project-card group block bg-white shadow-lg h-full hover:shadow-xl transition-all duration-300 relative z-10">
              <div class="relative overflow-hidden h-64 image-container">
                <!-- Loading state -->
                {#if loadingStates[project.id]}
                  <div class="project-card-loading absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                    <div class="w-10 h-10 border-4 border-gray-300 border-t-gold rounded-full animate-spin"></div>
                  </div>
                {/if}
                
                <!-- Main image -->
                <img 
                  src={`${project.images[0]}?v=${timestamp}`} 
                  alt={project.title} 
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  width="600"
                  height="400"
                  loading="eager"
                  on:load={() => handleImageLoad(project.id, project.images[0])}
                  on:error={() => handleImageError(project.id, project.images[0])}
                />
                
                <!-- Error fallback -->
                {#if projectImages[project.id] && projectImages[project.id][project.images[0]] && projectImages[project.id][project.images[0]].error}
                  <div class="project-card-error absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center z-20 p-4">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p class="text-base">{project.title}</p>
                      <button 
                        class="mt-2 px-3 py-1 bg-primary text-white text-sm hover:bg-primary/80 transition-colors"
                        on:click|preventDefault={() => retryImage(project.id, project.images[0])}
                      >
                        Retry
                      </button>
                    </div>
                  </div>
                {/if}
                
                <div class="absolute bottom-0 left-0 bg-primary text-white py-1 px-3 font-medium">
                  {project.category}
                </div>
              </div>
              
              <div class="p-6">
                <h2 class="text-xl font-bold mb-2 font-montserrat text-primary">{project.title}</h2>
                <p class="text-gold font-medium mb-3">{project.location}</p>
                <p class="text-gray-600 mb-4">{project.description}</p>
                <div class="mt-auto">
                  <span class="text-primary font-bold inline-flex items-center group-hover:text-gold transition-colors">
                    View Project 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        {/each}
      </div>
      
      <!-- Empty state -->
      {#if filterProjects().length === 0}
        <div class="text-center py-16">
          <p class="text-xl text-gray-500">No projects found in the {selectedCategory} category.</p>
        </div>
      {/if}
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-primary text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-6 font-montserrat">Ready to Start Your Own Project?</h2>
      <p class="mb-8 font-raleway">
        Let's create something exceptional together. Whether you're looking to build a new home, office, or renovate an existing property, we're here to help.
      </p>
      <a href="/quote" class="bg-gold text-black py-3 px-8 font-bold hover:bg-white transition-colors">
        Get a Free Quote
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
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-primary {
    color: var(--color-primary);
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
  
  /* Fix for z-index issues */
  main {
    position: relative;
    z-index: 1;
  }
  
  .grid {
    position: relative;
    z-index: 5;
  }
</style>