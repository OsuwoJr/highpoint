<script lang="ts">
  import { onMount } from 'svelte';
  
  let scrollY;
  let isScrolled = false;
  let isMenuOpen = false;
  
  onMount(() => {
    window.addEventListener('scroll', () => {
      scrollY = window.scrollY;
      isScrolled = scrollY > 50;
    });
  });

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<header class="fixed w-full z-50 transition-all duration-300 {isScrolled ? 'bg-primary/95 shadow-lg py-2' : 'bg-primary/80 py-4'}">
  <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
    <a href="/" class="text-light font-playfair text-2xl font-bold flex items-center" aria-label="Home">
      <span class="font-playfair italic text-light">Belle</span>
      <span class="text-gold font-cormorant italic">Royale</span>
    </a>
    
    <!-- Mobile menu button -->
    <button 
      class="md:hidden text-light focus:outline-none" 
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      on:click={toggleMenu}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
        {#if isMenuOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
    
    <!-- Desktop navigation -->
    <nav class="hidden md:block">
      <ul class="flex space-x-6 text-light">
        <li><a href="/" class="nav-link text-light relative" aria-current="page">Home</a></li>
        <li><a href="/services" class="nav-link text-light relative">Services</a></li>
        <li><a href="/gallery" class="nav-link text-light relative">Gallery</a></li>
        <li><a href="/about" class="nav-link text-light relative">About</a></li>
        <li><a href="/book" class="book-btn">Book Now</a></li>
        <li><a href="/contact" class="nav-link text-light relative">Contact</a></li>
      </ul>
    </nav>
  </div>

  <!-- Mobile navigation menu -->
  {#if isMenuOpen}
    <div class="md:hidden bg-primary/95 shadow-lg">
      <nav class="px-4 py-3">
        <ul class="flex flex-col space-y-3 text-light">
          <li><a href="/" class="mobile-nav-link text-light block py-2" on:click={closeMenu}>Home</a></li>
          <li><a href="/services" class="mobile-nav-link text-light block py-2" on:click={closeMenu}>Services</a></li>
          <li><a href="/gallery" class="mobile-nav-link text-light block py-2" on:click={closeMenu}>Gallery</a></li>
          <li><a href="/about" class="mobile-nav-link text-light block py-2" on:click={closeMenu}>About</a></li>
          <li><a href="/contact" class="mobile-nav-link text-light block py-2" on:click={closeMenu}>Contact</a></li>
          <li class="pt-2">
            <a href="/book" class="mobile-book-btn block text-center" on:click={closeMenu}>Book Now</a>
          </li>
        </ul>
      </nav>
    </div>
  {/if}
</header>

<style>
  .text-gold {
    color: var(--color-gold);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-primary\/80 {
    background-color: rgba(42, 45, 124, 0.8);
  }
  
  .bg-primary\/95 {
    background-color: rgba(42, 45, 124, 0.95);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-cormorant {
    font-family: 'Cormorant Garamond', serif;
  }
  
  .italic {
    font-style: italic;
  }
  
  .nav-link {
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-gold);
    transition: width 0.3s ease-in;
  }
  
  .nav-link:hover {
    color: var(--color-gold);
  }
  
  .nav-link:hover::after {
    width: 100%;
  }
  
  .mobile-nav-link {
    position: relative;
    transition: color 0.3s ease;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(229, 228, 226, 0.1);
  }
  
  .mobile-nav-link:hover {
    color: var(--color-gold);
    padding-left: 0.5rem;
  }
  
  .book-btn {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
  }
  
  .book-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
    background-color: var(--color-light);
  }
  
  .mobile-book-btn {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    font-weight: bold;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    transition: all 0.3s ease;
    margin-top: 0.5rem;
  }
  
  .mobile-book-btn:hover {
    background-color: var(--color-light);
    box-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
  }
</style> 