<script>
    export let service;
    let isHovered = false;
    let imageError = false;

    function handleImageError() {
      imageError = true;
    }
  </script>
  
  <div 
    class="service-card bg-white overflow-hidden shadow-lg transition-all duration-300 {isHovered ? 'shadow-xl -translate-y-2' : ''}"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    on:focus={() => isHovered = true}
    on:blur={() => isHovered = false}
    tabindex="0"
  >
    <div class="relative aspect-video overflow-hidden bg-gold/10">
      {#if !imageError}
        <img 
          src={service.image} 
          alt={service.name} 
          class="w-full h-full object-cover transition-transform duration-500 {isHovered ? 'scale-105' : ''}"
          loading="lazy"
          width="400"
          height="300"
          on:error={handleImageError}
        />
      {:else}
        <!-- Fallback colored background with service name -->
        <div class="w-full h-full bg-gold/20 flex items-center justify-center">
          <span class="text-xl font-bold text-primary">{service.name}</span>
        </div>
      {/if}
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 font-montserrat">{service.name}</h3>
      <p class="text-black mb-4 font-raleway">{service.description}</p>
      <div class="flex justify-end">
        <a 
          href="/quote?service={encodeURIComponent(service.name)}" 
          class="bg-gold text-black px-5 py-2 hover:bg-black hover:text-gold transition-all flex items-center space-x-1 focus:ring-2 focus:ring-gold focus:outline-none border border-gold"
          aria-label="Get a quote for {service.name} service"
        >
          <span>Get a Quote</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>

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
  .text-secondary {
    color: var(--color-secondary);
  }
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  .-translate-y-2 {
    transform: translateY(-0.5rem);
  }
  .scale-105 {
    transform: scale(1.05);
  }
</style>