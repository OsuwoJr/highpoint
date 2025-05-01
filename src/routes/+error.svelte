<div class="min-h-screen bg-light-gray flex flex-col items-center justify-center p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
    <div class="bg-black text-white py-6 px-6 text-center">
      <h1 class="text-3xl font-bold font-playfair mb-2">Error</h1>
      <p class="font-lato font-light">Something went wrong</p>
    </div>
    
    <div class="p-6 md:p-8">
      <div class="flex justify-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      </div>
      
      <p class="text-center text-gray-600 mb-6">We're experiencing some technical difficulties. Please try again later.</p>
      
      <div class="flex flex-col gap-4 mt-8">
        <a href="/" class="bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Return to Home
        </a>
        
        <a href="/book" class="border border-black hover:bg-black hover:text-white px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Book an Appointment
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-gold {
    background-color: var(--color-gold, #D4AF37);
  }
  
  .hover\:bg-gold-dark:hover {
    background-color: var(--color-gold-dark, #B79526);
  }
  
  .bg-light-gray {
    background-color: var(--color-light-gray, #F5F5F5);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
</style> 