<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Booking details will come from URL params
  interface BookingDetails {
    service: string;
    stylist: string;
    date: string;
    time: string;
  }
  
  let bookingDetails: BookingDetails = {
    service: '',
    stylist: '',
    date: '',
    time: ''
  };
  
  onMount(() => {
    // Get booking details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    bookingDetails = {
      service: urlParams.get('service') || '',
      stylist: urlParams.get('stylist') || '',
      date: urlParams.get('date') || '',
      time: urlParams.get('time') || ''
    };
  });
  
  // Format date for display
  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };
</script>

<svelte:head>
  <title>Booking Confirmed | Belle Royale</title>
  <meta name="description" content="Your appointment at Belle Royale has been confirmed.">
</svelte:head>

<Header />

<div class="bg-light min-h-screen pt-24 px-4">
  <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <div class="bg-gold text-black py-8 px-6 text-center">
      <div class="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 class="text-3xl font-bold font-playfair mb-2">Booking Confirmed!</h1>
      <p class="font-lato">Thank you for choosing Belle Royale</p>
    </div>
    
    <div class="p-6 md:p-10">
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Your Appointment Details</h2>
        
        <div class="border-b pb-4 mb-4">
          <p class="text-gray-600 mb-1 text-sm">Service</p>
          <p class="font-bold text-lg">{bookingDetails.service || 'N/A'}</p>
        </div>
        
        {#if bookingDetails.stylist}
          <div class="border-b pb-4 mb-4">
            <p class="text-gray-600 mb-1 text-sm">Stylist</p>
            <p class="font-bold text-lg">{bookingDetails.stylist}</p>
          </div>
        {/if}
        
        <div class="border-b pb-4 mb-4">
          <p class="text-gray-600 mb-1 text-sm">Date</p>
          <p class="font-bold text-lg">{bookingDetails.date ? formatDate(bookingDetails.date) : 'N/A'}</p>
        </div>
        
        <div>
          <p class="text-gray-600 mb-1 text-sm">Time</p>
          <p class="font-bold text-lg">{bookingDetails.time || 'N/A'}</p>
        </div>
      </div>
      
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 class="font-bold mb-3 text-lg">What to expect</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            Please arrive 15 minutes before your appointment for consultation
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm2 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>
            We've sent a calendar invitation to your email
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Need to reschedule? Call us at (212) 555-1234
          </li>
        </ul>
      </div>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-between">
        <a href="/" class="border border-primary hover:bg-primary hover:text-light px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Return to Home
        </a>
        
        <a href="/gallery" class="bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full font-bold flex items-center justify-center transition-colors">
          Browse Gallery
        </a>
      </div>
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
  
  .hover\:bg-gold-dark:hover {
    background-color: #B79526;
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
</style> 