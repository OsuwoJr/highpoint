<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  // The page store is no longer needed for this functionality
  
  // Get the service from URL query params if available
  let selectedService = '';
  let selectedStylist = '';
  let selectedDate = '';
  let selectedTime = '';
  let currentStep = 1;
  let whatsappNumber = "+12125551234";
  
  interface Service {
    id: string;
    name: string;
    price: number;
    duration: number;
  }
  
  interface Stylist {
    id: string;
    name: string;
    specialties: string[];
    image: string;
  }
  
  // Services offered
  const services: Service[] = [
    { id: 'balayage', name: 'Balayage', price: 200, duration: 120 },
    { id: 'eco-color', name: 'Eco Color', price: 150, duration: 90 },
    { id: 'precision-cut', name: 'Precision Cut', price: 95, duration: 60 },
    { id: 'bridal-style', name: 'Bridal Style', price: 250, duration: 150 },
    { id: 'keratin', name: 'Keratin Treatment', price: 300, duration: 180 },
    { id: 'extensions', name: 'Hair Extensions', price: 400, duration: 240 }
  ];
  
  // Stylists
  const stylists: Stylist[] = [
    { id: 'alex', name: 'Alex Morgan', specialties: ['balayage', 'eco-color'], image: '/images/stylist-alex.jpg' },
    { id: 'taylor', name: 'Taylor Kim', specialties: ['precision-cut', 'bridal-style'], image: '/images/stylist-taylor.jpg' },
    { id: 'jordan', name: 'Jordan Smith', specialties: ['keratin', 'extensions'], image: '/images/stylist-jordan.jpg' },
    { id: 'casey', name: 'Casey Brown', specialties: ['balayage', 'precision-cut'], image: '/images/stylist-casey.jpg' }
  ];
  
  // Available time slots
  const generateTimeSlots = (): string[] => {
    const slots: string[] = [];
    for (let hour = 9; hour <= 19; hour++) {
      if (hour !== 12) { // Exclude lunch hour
        slots.push(`${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`);
        if (hour !== 19) slots.push(`${hour % 12 || 12}:30 ${hour < 12 ? 'AM' : 'PM'}`);
      }
    }
    return slots;
  };
  
  const timeSlots = generateTimeSlots();
  
  // Filtered stylists based on selected service
  $: filteredStylists = selectedService 
    ? stylists.filter(stylist => stylist.specialties.includes(selectedService))
    : stylists;
  
  // Get service name from ID
  $: serviceName = selectedService 
    ? services.find(service => service.id === selectedService)?.name 
    : '';
  
  // Get service price from ID
  $: servicePrice = selectedService 
    ? services.find(service => service.id === selectedService)?.price 
    : 0;
  
  // Function to format date
  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };
  
  // Function to create Google Calendar link
  const createGoogleCalendarLink = (): string => {
    if (!selectedService || !selectedDate || !selectedTime) return '';
    
    const service = services.find(s => s.id === selectedService);
    if (!service) return '';
    
    const dateTime = new Date(`${selectedDate}T${selectedTime.split(' ')[0]}`);
    const endDateTime = new Date(dateTime.getTime() + service.duration * 60000);
    
    const startDate = dateTime.toISOString().replace(/-|:|\.\d+/g, '');
    const endDate = endDateTime.toISOString().replace(/-|:|\.\d+/g, '');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Belle Royale - ${service.name} Appointment`)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(`Your ${service.name} appointment with ${selectedStylist ? stylists.find(s => s.id === selectedStylist)?.name : 'our stylist'}. Price: $${service.price}`)}&location=${encodeURIComponent('123 Beauty Lane, New York, NY 10001')}`;
  };
  
  // Function to create WhatsApp booking message
  const createWhatsAppLink = (): string => {
    if (!selectedService) return '';
    
    let message = `Hello, I'd like to book a ${serviceName} appointment`;
    
    if (selectedStylist) {
      const stylist = stylists.find(s => s.id === selectedStylist);
      message += ` with ${stylist ? stylist.name : ''}`;
    }
    
    if (selectedDate) {
      message += ` on ${formatDate(selectedDate)}`;
      
      if (selectedTime) {
        message += ` at ${selectedTime}`;
      }
    }
    
    return `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  };
  
  // Create confirmation page link
  const createConfirmationLink = (): string => {
    if (!selectedService) return '';
    
    let params = new URLSearchParams();
    params.set('service', serviceName || '');
    
    if (selectedStylist) {
      const stylist = stylists.find(s => s.id === selectedStylist);
      if (stylist) {
        params.set('stylist', stylist.name);
      }
    }
    
    if (selectedDate) {
      params.set('date', selectedDate);
    }
    
    if (selectedTime) {
      params.set('time', selectedTime);
    }
    
    return `/book/confirmation?${params.toString()}`;
  };
  
  // Next step in booking flow
  const nextStep = (): void => {
    if (currentStep < 3) {
      currentStep++;
    }
  };
  
  // Previous step in booking flow
  const prevStep = (): void => {
    if (currentStep > 1) {
      currentStep--;
    }
  };
  
  onMount(() => {
    // Get service from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
      // Find matching service by name (case insensitive)
      const matchedService = services.find(
        service => service.name.toLowerCase() === serviceParam.toLowerCase()
      );
      
      if (matchedService) {
        selectedService = matchedService.id;
      }
    }
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    selectedDate = tomorrow.toISOString().split('T')[0];
  });
</script>

<svelte:head>
  <title>Book Your Appointment | Belle Royale</title>
  <meta name="description" content="Book your hair appointment at Belle Royale salon. Choose your service, stylist, and preferred time.">
</svelte:head>

<Header />

<div class="bg-light min-h-screen pt-24 px-4">
  <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Header -->
    <div class="bg-primary text-light py-8 px-6">
      <h1 class="text-3xl font-bold font-playfair mb-2">Book Your Appointment</h1>
      <p class="font-lato font-light">Complete the steps below to schedule your visit</p>
      
      <!-- Progress Steps -->
      <div class="flex items-center justify-between mt-8 max-w-md mx-auto">
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center {currentStep >= 1 ? 'bg-gold text-black' : 'bg-gray-700 text-white'} font-bold">1</div>
          <span class="text-sm mt-2 {currentStep >= 1 ? 'text-gold' : 'text-gray-400'}">Service</span>
        </div>
        <div class="flex-1 h-1 {currentStep >= 2 ? 'bg-gold' : 'bg-gray-700'}"></div>
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center {currentStep >= 2 ? 'bg-gold text-black' : 'bg-gray-700 text-white'} font-bold">2</div>
          <span class="text-sm mt-2 {currentStep >= 2 ? 'text-gold' : 'text-gray-400'}">Stylist</span>
        </div>
        <div class="flex-1 h-1 {currentStep >= 3 ? 'bg-gold' : 'bg-gray-700'}"></div>
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center {currentStep >= 3 ? 'bg-gold text-black' : 'bg-gray-700 text-white'} font-bold">3</div>
          <span class="text-sm mt-2 {currentStep >= 3 ? 'text-gold' : 'text-gray-400'}">Date & Time</span>
        </div>
      </div>
    </div>
    
    <!-- Step 1: Service Selection -->
    {#if currentStep === 1}
      <div class="p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Select a Service</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each services as service}
            <button 
              class="p-4 border rounded-lg text-left flex flex-col h-full transition-all {selectedService === service.id ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}"
              on:click={() => selectedService = service.id}
              aria-selected={selectedService === service.id}
            >
              <div class="flex justify-between items-start">
                <h3 class="text-lg font-bold">{service.name}</h3>
                <span class="text-gold font-bold">${service.price}</span>
              </div>
              <div class="mt-2 text-gray-600 text-sm">Duration: {Math.floor(service.duration / 60)}h {service.duration % 60 ? `${service.duration % 60}min` : ''}</div>
            </button>
          {/each}
        </div>
        
        <div class="mt-8 flex justify-end">
          <button 
            class="bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            disabled={!selectedService}
            on:click={nextStep}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    {/if}
    
    <!-- Step 2: Stylist Selection -->
    {#if currentStep === 2}
      <div class="p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Choose Your Stylist</h2>
        
        {#if filteredStylists.length === 0}
          <p class="text-gray-600">No stylists available for this service. Please select a different service.</p>
        {:else}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each filteredStylists as stylist}
              <button 
                class="border rounded-lg text-left flex items-start p-4 transition-all {selectedStylist === stylist.id ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}"
                on:click={() => selectedStylist = stylist.id}
                aria-selected={selectedStylist === stylist.id}
              >
                <div class="w-16 h-16 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                  <!-- Add a fallback for when images don't load -->
                  <div class="w-full h-full flex items-center justify-center bg-gold/20 text-black font-bold">
                    {stylist.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold">{stylist.name}</h3>
                  <p class="text-sm text-gray-600 mt-1">
                    Specializes in: {stylist.specialties.map(s => services.find(service => service.id === s)?.name).join(', ')}
                  </p>
                </div>
              </button>
            {/each}
          </div>
        {/if}
        
        <div class="mt-8 flex justify-between">
          <button 
            class="border border-primary hover:bg-primary hover:text-light px-6 py-3 rounded-full font-bold flex items-center transition-colors"
            on:click={prevStep}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Back
          </button>
          
          <button 
            class="bg-gold hover:bg-gold-dark text-black px-6 py-3 rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            disabled={!selectedStylist}
            on:click={nextStep}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    {/if}
    
    <!-- Step 3: Date & Time Selection -->
    {#if currentStep === 3}
      <div class="p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Select Date & Time</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Date Selection -->
          <div>
            <label for="date-select" class="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input 
              id="date-select"
              type="date" 
              class="w-full p-3 border border-gray-300 rounded-lg focus:border-gold focus:ring-gold"
              bind:value={selectedDate}
              min={new Date().toISOString().split('T')[0]}
              max={new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0]}
            />
            {#if selectedDate}
              <p class="mt-2 text-sm text-gray-600">{formatDate(selectedDate)}</p>
            {/if}
          </div>
          
          <!-- Time Selection -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <div class="grid grid-cols-3 gap-2">
              {#each timeSlots as time}
                <button
                  class="p-2 border rounded text-center text-sm transition-all {selectedTime === time ? 'bg-gold text-black border-gold' : 'border-gray-300 hover:border-gold'}"
                  on:click={() => selectedTime = time}
                >
                  {time}
                </button>
              {/each}
            </div>
          </div>
        </div>
        
        <!-- Booking Options -->
        <div class="mt-10 border-t pt-8">
          <h3 class="text-xl font-bold mb-4 font-playfair">Complete Your Booking</h3>
          
          {#if selectedService && selectedDate && selectedTime}
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 class="font-bold">Booking Summary:</h4>
              <ul class="mt-2 space-y-1 text-sm">
                <li><strong>Service:</strong> {serviceName} (${servicePrice})</li>
                {#if selectedStylist}
                  <li><strong>Stylist:</strong> {stylists.find(s => s.id === selectedStylist).name}</li>
                {/if}
                <li><strong>Date:</strong> {formatDate(selectedDate)}</li>
                <li><strong>Time:</strong> {selectedTime}</li>
              </ul>
            </div>
          {/if}
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <!-- Direct Booking -->
            <a 
              href={createConfirmationLink()}
              class="bg-primary hover:bg-primary/80 text-light px-4 py-3 rounded-lg font-bold transition-all disabled:opacity-50 flex items-center justify-center"
              class:pointer-events-none={!selectedService || !selectedDate || !selectedTime}
              aria-disabled={!selectedService || !selectedDate || !selectedTime}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
              </svg>
              Confirm Booking
            </a>
            
            <!-- Google Calendar -->
            <a 
              href={createGoogleCalendarLink()}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 px-4 py-3 rounded-lg font-bold transition-all disabled:opacity-50 flex items-center justify-center disabled:pointer-events-none"
              class:pointer-events-none={!selectedService || !selectedDate || !selectedTime}
              aria-disabled={!selectedService || !selectedDate || !selectedTime}
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              Add to Google Calendar
            </a>
            
            <!-- WhatsApp -->
            <a 
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-lg font-bold transition-all disabled:opacity-50 flex items-center justify-center disabled:pointer-events-none"
              class:pointer-events-none={!selectedService}
              aria-disabled={!selectedService}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              Book via WhatsApp
            </a>
          </div>
        </div>
        
        <div class="mt-8 flex justify-start">
          <button 
            class="border border-primary hover:bg-primary hover:text-light px-6 py-3 rounded-full font-bold flex items-center transition-colors"
            on:click={prevStep}
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Back
          </button>
        </div>
      </div>
    {/if}
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
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .border-primary {
    border-color: var(--color-primary);
  }
  
  .hover\:bg-primary:hover {
    background-color: var(--color-primary);
  }
  
  .hover\:text-light:hover {
    color: var(--color-light);
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
  
  .focus\:ring-gold:focus {
    --tw-ring-color: var(--color-gold);
  }
  
  .focus\:border-gold:focus {
    border-color: var(--color-gold);
  }
</style> 