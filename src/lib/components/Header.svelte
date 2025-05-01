<script>
  import { onMount } from 'svelte';
  
  let scrollY;
  let isScrolled = false;
  
  onMount(() => {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 50;
    });
  });
</script>

<header class="fixed w-full z-50 transition-all duration-300 {isScrolled ? 'bg-black/90 shadow-lg py-2' : 'bg-transparent py-4'}">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <a href="/" class="text-white font-playfair text-2xl font-bold flex items-center" aria-label="Home">
      <span class="text-gold">LUXE</span>Hair
    </a>
    
    <nav>
      <ul class="flex space-x-6 text-white">
        <li><a href="/" class="hover:text-gold transition-colors" aria-current="page">Home</a></li>
        <li><a href="/services" class="hover:text-gold transition-colors">Services</a></li>
        <li><a href="/gallery" class="hover:text-gold transition-colors">Gallery</a></li>
        <li><a href="/about" class="hover:text-gold transition-colors">About</a></li>
        <li><a href="/book" class="hover:text-gold transition-colors font-bold">Book Now</a></li>
        <li><a href="/contact" class="hover:text-gold transition-colors">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

<style>
  .text-gold {
    color: #D4AF37;
  }
  .hover\:text-gold:hover {
    color: #D4AF37;
  }
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
</style> 