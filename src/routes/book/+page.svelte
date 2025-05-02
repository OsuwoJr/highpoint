<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  // The page store is no longer needed for this functionality
  
  // Get the service from URL query params if available
  let selectedService = '';
  let selectedCategory = '';
  let selectedDate = '';
  let selectedTime = '';
  let currentStep = 1;
  let whatsappNumber = "+254704800614";
  
  interface Service {
    id: string;
    name: string;
    price: number | string;
    duration: number | string;
    description: string;
    image: string;
    popular?: boolean;
    consultation?: boolean;
  }
  
  interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    services: Service[];
  }
  
  // Define service categories and services - synced with services page
  const serviceCategories: ServiceCategory[] = [
    {
      id: 'cuts',
      name: 'Cuts & Styling',
      description: 'Precision cuts and styling tailored to enhance your natural features',
      services: [
        { 
          id: 'precision-cut',
          name: 'Precision Cut', 
          price: 12350, 
          duration: 60,
          description: 'Expert haircut personalized to your face shape, hair texture, and lifestyle needs.',
          image: '/images/precision-cut.jpg',
          popular: true
        },
        { 
          id: 'bridal-style',
          name: 'Bridal Style', 
          price: 32500, 
          duration: 150,
          description: 'Complete bridal hair styling including consultation, trial run, and day-of styling for your special day.',
          image: '/images/bridal.jpg',
          popular: false
        },
        { 
          id: 'blowout',
          name: 'Luxury Blowout', 
          price: 9750, 
          duration: 45,
          description: 'Professional blow dry styling with premium products for smooth, voluminous hair that lasts for days.',
          image: '/images/blowout.jpg',
          popular: true
        }
      ]
    },
    {
      id: 'braiding',
      name: 'Braiding',
      description: 'Expert braiding services for all hair types and styles',
      services: [
        { 
          id: 'normal-braids',
          name: 'Normal Braids', 
          price: 1200, 
          duration: 180,
          description: 'Classic three-strand braids that are neat, durable, and perfect for everyday wear. Ideal for a clean and protective look.',
          image: '/images/normalbraids.jpg',
          popular: true
        },
        { 
          id: 'knotless-braids',
          name: 'Knotless Braids', 
          price: 1500, 
          duration: 240,
          description: 'Pain-free, natural-looking braids that start with your own hair, reducing tension on the scalp and offering a lightweight feel.',
          image: '/images/knotlessbraids.jpg',
          popular: true
        },
        { 
          id: 'goddess-braids',
          name: 'Goddess Braids', 
          price: 2000, 
          duration: 180,
          description: 'Thick, elegant cornrow-style braids that are styled close to the scalp. Perfect for a regal and stylish appearance.',
          image: '/images/goddessbraids.jpg',
          popular: false
        },
        { 
          id: 'boho-braids',
          name: 'Boho Braids', 
          price: 1700, 
          duration: 210,
          description: 'Bohemian-inspired braids with curly strands left out for a soft, carefree vibe that blends neatness with natural flow.',
          image: '/images/boho.jpg',
          popular: false
        },
        { 
          id: 'loose-braids',
          name: 'Loose Braids', 
          price: 1500, 
          duration: 150,
          description: 'Single or multiple loosely done braids for a laid-back, voluminous style that frames the face beautifully.',
          image: '/images/loosebraids.jpg',
          popular: false
        }
      ]
    },
    {
      id: 'twists',
      name: 'Twists & Coils',
      description: 'Beautiful twist styles for texture, volume, and protection',
      services: [
        { 
          id: 'marley-twist',
          name: 'Marley Twist', 
          price: 15000, 
          duration: 240,
          description: 'Thick, textured twists using Marley hair extensions, giving a bold, afro-inspired look full of volume and length.',
          image: '/images/marleytwist.jpg',
          popular: true
        },
        { 
          id: 'coco-twists',
          name: 'Coco Twists', 
          price: 25000, 
          duration: 300,
          description: 'Luxurious twists with a smooth, rope-like finish. Perfect for those who love a clean, defined protective style.',
          image: '/images/coco.jpg',
          popular: false
        },
        { 
          id: 'spring-twist',
          name: 'Spring Twist', 
          price: 2500, 
          duration: 210,
          description: 'Lightweight, springy twists with a coily texture. This low-maintenance style gives a fun and youthful look.',
          image: '/images/springtwist.jpg',
          popular: false
        },
        { 
          id: 'passion-twist',
          name: 'Passion Twist', 
          price: 2500, 
          duration: 210,
          description: 'Soft, shiny twists with a wavy texture. A trendy and romantic look ideal for any season.',
          image: '/images/passiontwist.jpg',
          popular: true
        },
        { 
          id: 'twist-outs',
          name: 'Twist Outs', 
          price: 600, 
          duration: 60,
          description: 'Two-strand twists undone to create defined, bouncy curls for a natural, soft afro-textured look.',
          image: '/images/twistouts.jpg',
          popular: false
        }
      ]
    },
    {
      id: 'cornrows',
      name: 'Cornrows & Lines',
      description: 'Sleek cornrow styles with intricate designs and patterns',
      services: [
        { 
          id: 'ghanaians',
          name: 'Ghanaians', 
          price: 1500, 
          duration: 120,
          description: 'Feed-in cornrows with intricate designs inspired by Ghanaian culture. Neat, sleek, and perfect for all occasions.',
          image: '/images/ghanaians.jpg',
          popular: true
        },
        { 
          id: 'half-liners',
          name: 'Half Liners', 
          price: 2000, 
          duration: 150,
          description: 'A stylish combination of cornrows at the front and free-flowing braids at the back, blending structure with freedom.',
          image: '/images/halfliners.jpg',
          popular: false
        }
      ]
    },
    {
      id: 'treatments',
      name: 'Hair Treatments',
      description: 'Rejuvenate and transform your hair with our specialized treatments',
      services: [
        { 
          id: 'deep-conditioning',
          name: 'Deep Conditioning', 
          price: 11050, 
          duration: 60,
          description: 'Intensive hydrating treatment that repairs damaged hair and restores moisture using premium organic products.',
          image: '/images/deep-conditioning.jpg',
          popular: true
        },
        { 
          id: 'hair-treatment',
          name: 'Hair Treatment', 
          price: 15000, 
          duration: 90,
          description: 'Specialized protein, hot oil, or custom treatment formulated to address your specific hair concerns and restore health.',
          image: '/images/hair-treatment.jpg',
          popular: false
        },
        { 
          id: 'keratin',
          name: 'Keratin/Botox Treatment', 
          price: 39000, 
          duration: 180,
          description: 'Smoothing treatment that eliminates frizz, reduces curl, and adds incredible shine that lasts for months.',
          image: '/images/keratin.jpg',
          popular: true
        },
        { 
          id: 'scalp-treatment',
          name: 'Scalp Treatment', 
          price: 8000, 
          duration: 45,
          description: 'Targeted treatment to address scalp issues like dryness, flaking, or irritation while promoting hair growth and health.',
          image: '/images/scalp-treatment.jpg',
          popular: false
        }
      ]
    },
    {
      id: 'color',
      name: 'Coloring Services',
      description: 'Transform your look with our premium, eco-friendly color services',
      services: [
        { 
          id: 'balayage',
          name: 'Balayage', 
          price: 26000, 
          duration: 120,
          description: 'Hand-painted highlights that create a naturally sun-kissed look with less maintenance than traditional foils.',
          image: '/images/balayage.jpg',
          popular: true
        },
        { 
          id: 'eco-color',
          name: 'Eco Color', 
          price: 19500, 
          duration: 90,
          description: 'Organic, plant-based hair color using sustainable ingredients that are gentle on hair while providing vibrant, long-lasting results.',
          image: '/images/eco-color.jpg',
          popular: false
        },
        { 
          id: 'color-correction',
          name: 'Color Correction', 
          price: 'KSh 32500+', 
          duration: '180+',
          description: 'Expert color correction to fix uneven tones, brassy shades, or botched home coloring jobs. Price varies based on complexity.',
          image: '/images/color-correction.jpg',
          popular: false,
          consultation: true
        },
        { 
          id: 'hair-dyeing',
          name: 'Hair Coloring/Dyeing', 
          price: 18000, 
          duration: 120,
          description: 'Full or partial hair coloring to achieve your desired shade and look, using quality products for optimal results.',
          image: '/images/hair-dyeing.jpg',
          popular: true
        }
      ]
    },
    {
      id: 'styling',
      name: 'Styling Tools & Enhancements',
      description: 'Professional styling services to perfect your look',
      services: [
        { 
          id: 'washing',
          name: 'Hair Washing & Conditioning', 
          price: 2500, 
          duration: 30,
          description: 'Thorough cleansing and conditioning with premium products tailored to your hair type for a fresh, clean start.',
          image: '/images/washing.jpg',
          popular: true
        },
        { 
          id: 'blowdry-iron',
          name: 'Blow-Dry & Flat Ironing', 
          price: 3500, 
          duration: 60,
          description: 'Professional blow-drying and straightening for sleek, smooth hair with minimal heat damage.',
          image: '/images/blowdry.jpg',
          popular: false
        },
        { 
          id: 'silk-press',
          name: 'Silk Press', 
          price: 4500, 
          duration: 90,
          description: 'Transformative straightening technique that leaves natural hair silky-smooth with incredible shine and movement.',
          image: '/images/silk-press.jpg',
          popular: true
        },
        { 
          id: 'extensions',
          name: 'Hair Extensions/Weaves', 
          price: 52000, 
          duration: 240,
          description: 'Premium quality extensions using ethically-sourced hair for added length and volume with a natural look.',
          image: '/images/extensions.jpg',
          popular: false,
          consultation: true
        },
        { 
          id: 'dreadlocks',
          name: 'Dreadlocks/Retwisting', 
          price: 12000, 
          duration: 180,
          description: 'Expert installation or maintenance of dreadlocks, ensuring clean, neat locks with proper tension and care.',
          image: '/images/dreadlocks.jpg',
          popular: false
        }
      ]
    }
  ];
  
  // Combine all services for easy access
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryId: category.id,
      categoryName: category.name
    }))
  );

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
  
  // Get service details from ID
  $: selectedServiceDetails = selectedService 
    ? allServices.find(service => service.id === selectedService)
    : null;
  
  // Function to format date
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  };
  
  // Function to create WhatsApp booking message
  const createWhatsAppLink = (): string => {
    if (!selectedService) return '';
    
    const service = selectedServiceDetails;
    if (!service) return '';
    
    let message = `Hello, I'd like to book a ${service.name} appointment`;
    
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
    
    const service = selectedServiceDetails;
    if (!service) return '';
    
    let params = new URLSearchParams();
    params.set('service', service.name || '');
    params.set('category', service.categoryName || '');
    
    if (selectedDate) {
      params.set('date', selectedDate);
    }
    
    if (selectedTime) {
      params.set('time', selectedTime);
    }
    
    if (service.price) {
      params.set('price', service.price.toString());
    }
    
    return `/book/confirmation?${params.toString()}`;
  };
  
  // Next step in booking flow (skipping stylist step - now only 2 steps)
  const nextStep = (): void => {
    if (currentStep === 1) {
      currentStep = 3; // Skip to step 3 (date & time)
    }
  };
  
  // Previous step in booking flow
  const prevStep = (): void => {
    if (currentStep === 3) {
      currentStep = 1; // Go back to step 1 (service selection)
    }
  };
  
  onMount(() => {
    // Get service from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    
    if (serviceParam) {
      // Find matching service by name (case insensitive)
      const matchedService = allServices.find(
        service => service.name.toLowerCase() === decodeURIComponent(serviceParam).toLowerCase()
      );
      
      if (matchedService) {
        selectedService = matchedService.id;
        selectedCategory = matchedService.categoryId;
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
  <meta name="description" content="Book your hair appointment at Belle Royale salon. Choose your service and preferred time.">
</svelte:head>

<Header />

<div class="bg-light min-h-screen pt-24 px-4">
  <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
    <!-- Header -->
    <div class="bg-primary text-light py-8 px-6">
      <h1 class="text-3xl font-bold font-playfair mb-2">Book Your Appointment</h1>
      <p class="font-lato font-light">Complete the steps below to schedule your visit</p>
      
      <!-- Progress Steps - Updated to show only 2 steps -->
      <div class="flex items-center justify-between mt-8 max-w-md mx-auto">
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center {currentStep === 1 ? 'bg-gold text-black' : 'bg-gray-700 text-white'} font-bold">1</div>
          <span class="text-sm mt-2 {currentStep === 1 ? 'text-gold' : 'text-gray-400'}">Service</span>
        </div>
        <div class="flex-1 h-1 {currentStep === 3 ? 'bg-gold' : 'bg-gray-700'}"></div>
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 rounded-full flex items-center justify-center {currentStep === 3 ? 'bg-gold text-black' : 'bg-gray-700 text-white'} font-bold">2</div>
          <span class="text-sm mt-2 {currentStep === 3 ? 'text-gold' : 'text-gray-400'}">Date & Time</span>
        </div>
      </div>
    </div>
    
    <!-- Step 1: Service Selection -->
    {#if currentStep === 1}
      <div class="p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Select a Service</h2>
        
        <!-- Category Tabs -->
        <div class="flex flex-wrap mb-6 border-b border-gray-200">
          <button 
            class="px-4 py-2 mr-2 mb-2 {selectedCategory === '' ? 'bg-gold text-black' : 'bg-gray-100 hover:bg-gray-200'} rounded-t-lg font-medium transition-colors"
            on:click={() => selectedCategory = ''}
          >
            All Services
          </button>
          
          {#each serviceCategories as category}
            <button 
              class="px-4 py-2 mr-2 mb-2 {selectedCategory === category.id ? 'bg-gold text-black' : 'bg-gray-100 hover:bg-gray-200'} rounded-t-lg font-medium transition-colors"
              on:click={() => selectedCategory = category.id}
            >
              {category.name}
            </button>
          {/each}
        </div>
        
        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each serviceCategories.filter(c => selectedCategory === '' || c.id === selectedCategory) as category}
            {#if selectedCategory !== ''}
              <div class="col-span-full mb-2">
                <p class="text-gray-600 italic">{category.description}</p>
              </div>
            {/if}
            
            {#each category.services as service}
              <button 
                class="p-4 border rounded-lg text-left flex flex-col h-full transition-all {selectedService === service.id ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-200 hover:border-gold/50'}"
                on:click={() => selectedService = service.id}
                aria-selected={selectedService === service.id}
              >
                <div class="flex justify-between items-start">
                  <h3 class="text-lg font-bold">{service.name}</h3>
                  <span class="text-gold font-bold">
                    {#if typeof service.price === 'number'}
                      KSh {service.price}
                    {:else}
                      {service.price}
                    {/if}
                  </span>
                </div>
                <div class="mt-1 text-sm text-gray-500">{category.name}</div>
                <div class="mt-2 text-gray-600 text-sm">Duration: {typeof service.duration === 'string' ? service.duration : `${Math.floor(Number(service.duration) / 60)}h ${Number(service.duration) % 60 ? `${Number(service.duration) % 60}min` : ''}`}</div>
                
                {#if service.popular}
                  <div class="mt-2">
                    <span class="inline-block bg-gold/20 text-black text-xs px-2 py-1 rounded-full">Popular</span>
                  </div>
                {/if}
                
                {#if service.consultation}
                  <div class="mt-2">
                    <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Consultation Required</span>
                  </div>
                {/if}
              </button>
            {/each}
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
    
    <!-- Step 3: Date & Time Selection (Step 2 removed, keeping step 3 number for simplicity) -->
    {#if currentStep === 3}
      <div class="p-6 md:p-10">
        <h2 class="text-2xl font-bold mb-6 font-playfair">Select Date & Time</h2>
        
        {#if selectedServiceDetails}
          <div class="bg-gold/10 rounded-lg p-4 mb-6">
            <h3 class="font-bold mb-2">Selected Service: {selectedServiceDetails.name}</h3>
            <p class="text-sm text-gray-700 mb-2">{selectedServiceDetails.description}</p>
            <div class="flex justify-between items-center">
              <div class="text-sm">
                <span class="font-semibold">Category:</span> {selectedServiceDetails.categoryName}
              </div>
              <div class="text-gold font-bold">
                {#if typeof selectedServiceDetails.price === 'number'}
                  KSh {selectedServiceDetails.price}
                {:else}
                  {selectedServiceDetails.price}
                {/if}
              </div>
            </div>
          </div>
        {/if}
        
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
                <li><strong>Service:</strong> {selectedServiceDetails?.name} ({typeof selectedServiceDetails?.price === 'number' ? `KSh ${selectedServiceDetails?.price}` : selectedServiceDetails?.price})</li>
                <li><strong>Category:</strong> {selectedServiceDetails?.categoryName}</li>
                <li><strong>Date:</strong> {formatDate(selectedDate)}</li>
                <li><strong>Time:</strong> {selectedTime}</li>
                <li><strong>Duration:</strong> {typeof selectedServiceDetails?.duration === 'string' ? selectedServiceDetails?.duration : `${Math.floor(Number(selectedServiceDetails?.duration) / 60)}h ${Number(selectedServiceDetails?.duration) % 60 ? `${Number(selectedServiceDetails?.duration) % 60}min` : ''}`}</li>
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
              href="https://calendar.app.google/JZRx3W6uSt2ws8Uc6"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-white border border-gold hover:bg-gold/10 text-gray-800 px-4 py-3 rounded-lg font-bold transition-all flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
              </svg>
              Book with Google Calendar
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