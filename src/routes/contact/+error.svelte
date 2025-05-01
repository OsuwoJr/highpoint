<script>
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Error | LUXE Hair</title>
  <meta name="description" content="Something went wrong. Please try again or contact us directly.">
</svelte:head>

<Header />

<main class="pt-24 pb-20 min-h-screen">
  <div class="max-w-3xl mx-auto px-4 py-16 text-center">
    <div class="bg-black text-white p-10 rounded-xl shadow-xl">
      <h1 class="text-4xl font-playfair font-bold mb-6">
        <span class="text-gold">Oops!</span> Something went wrong
      </h1>
      
      <p class="text-xl mb-8 font-lato font-light">
        {$page.error?.message || 'We encountered an error while processing your request.'}
      </p>
      
      <div class="flex flex-col md:flex-row justify-center gap-4 mt-8">
        <a href="/" class="bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black px-6 py-3 rounded-full font-bold transition-colors">
          Return to Homepage
        </a>
        
        <a href="/contact" class="bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full font-bold transition-colors">
          Try Again
        </a>
      </div>
    </div>
    
    <div class="mt-12">
      <p class="text-gray-600 font-lato">
        If you continue to experience issues, please contact us directly:
      </p>
      <div class="flex justify-center items-center space-x-6 mt-4">
        <a href="tel:+12125551234" class="flex items-center text-gray-700 hover:text-gold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (212) 555-1234
        </a>
        
        <a href="mailto:info@luxehair.com" class="flex items-center text-gray-700 hover:text-gold transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          info@luxehair.com
        </a>
      </div>
    </div>
  </div>
</main>

<style>
  .text-gold {
    color: #D4AF37;
  }
  
  .bg-gold {
    background-color: #D4AF37;
  }
  
  .hover\:bg-gold-dark:hover {
    background-color: #B8860B;
  }
  
  .border-gold {
    border-color: #D4AF37;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
</style> 