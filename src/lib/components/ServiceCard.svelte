<script>
    export let service;
    let isHovered = false;
    let imageError = false;

    function handleImageError() {
      imageError = true;
    }
  </script>
  
  <div 
    class="service-card bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 {isHovered ? 'shadow-xl -translate-y-2' : ''}"
    on:mouseenter={() => isHovered = true}
    on:mouseleave={() => isHovered = false}
    on:focus={() => isHovered = true}
    on:blur={() => isHovered = false}
    tabindex="0"
  >
    <div class="relative aspect-[3/4] overflow-hidden bg-gray-50">
      {#if !imageError}
        <img 
          src={service.image} 
          alt={service.name} 
          class="w-full h-full object-contain transition-transform duration-500 {isHovered ? 'scale-105' : ''}"
          loading="lazy"
          width="400"
          height="300"
          on:error={handleImageError}
        />
      {:else}
        <!-- Fallback colored background with service name -->
        <div class="w-full h-full bg-gold/20 flex items-center justify-center">
          <span class="text-xl font-bold text-black">{service.name}</span>
        </div>
      {/if}
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <span class="absolute bottom-3 right-3 bg-gold text-black px-3 py-1 rounded-full text-sm font-bold">KSh {service.price}</span>
    </div>
    
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 font-playfair">{service.name}</h3>
      <p class="text-gray-600 mb-4 font-lato font-light">{service.description}</p>
      <div class="flex justify-end">
        <a 
          href="/book?service={encodeURIComponent(service.name)}" 
          class="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all flex items-center space-x-1 focus:ring-2 focus:ring-black focus:outline-none"
          aria-label="Book {service.name} service"
        >
          <span>Book Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>

<style>
  .text-gold {
    color: #D4AF37;
  }
  .bg-gold {
    background-color: #D4AF37;
  }
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  .-translate-y-2 {
    transform: translateY(-0.5rem);
  }
  .scale-105 {
    transform: scale(1.05);
  }
</style>