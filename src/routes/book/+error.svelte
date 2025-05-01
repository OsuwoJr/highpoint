<div class="min-h-screen bg-light-gray flex flex-col items-center justify-center p-4">
  <div class="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden">
    <div class="bg-gold text-black py-6 px-6 text-center">
      <h1 class="text-3xl font-bold font-playfair mb-2">Booking Error</h1>
      <p class="font-lato font-light">There was an issue with your booking request</p>
    </div>
    
    <div class="p-6 md:p-8">
      <p class="text-center text-gray-600 mb-6">
        We're having trouble with our booking system at the moment. 
        Please try again or contact us directly to schedule your appointment.
      </p>
      
      <div class="bg-gray-50 p-5 rounded-lg mb-6">
        <h3 class="font-bold mb-3">Contact Us</h3>
        <ul class="space-y-2">
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21.01 3 14.25 3 6V5z" />
            </svg>
            <a href="tel:+12125551234" class="hover:underline">212-555-1234</a>
          </li>
          <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:bookings@luxehair.com" class="hover:underline">bookings@luxehair.com</a>
          </li>
        </ul>
      </div>
      
      <div class="flex flex-col gap-4 mt-8">
        <a href="/" class="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Return to Home
        </a>
        
        <a href="/book" class="border border-gold hover:bg-gold/10 text-black px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Try Again
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .text-gold {
    color: var(--color-gold, #D4AF37);
  }
  
  .bg-gold {
    background-color: var(--color-gold, #D4AF37);
  }
  
  .hover\:bg-gold\/10:hover {
    background-color: rgba(212, 175, 55, 0.1);
  }
  
  .border-gold {
    border-color: var(--color-gold, #D4AF37);
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