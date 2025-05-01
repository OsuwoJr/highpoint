<script>
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Contact form state
  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  };
  
  let formSubmitted = false;
  let formError = false;
  
  // Available services for dropdown
  const services = [
    { id: '', name: 'Select a service (optional)' },
    { id: 'balayage', name: 'Balayage' },
    { id: 'eco-color', name: 'Eco Color' },
    { id: 'precision-cut', name: 'Precision Cut' },
    { id: 'bridal-style', name: 'Bridal Style' },
    { id: 'keratin', name: 'Keratin Treatment' },
    { id: 'extensions', name: 'Hair Extensions' }
  ];
  
  // Handle form submission
  function handleSubmit() {
    // In a real application, you would send this data to your backend
    // For now, we'll just simulate a successful submission
    try {
      // Simulate API call
      setTimeout(() => {
        formSubmitted = true;
        formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          service: ''
        };
      }, 1000);
    } catch (error) {
      formError = true;
    }
  }
</script>

<svelte:head>
  <title>Contact Us | LUXE Hair</title>
  <meta name="description" content="Get in touch with LUXE Hair salon. Contact us for appointments, questions about our services, or to join our team.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-black text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-playfair mb-4">Contact <span class="text-gold">Us</span></h1>
      <p class="text-lg font-lato font-light max-w-2xl mx-auto">
        Have questions or want to book an appointment? Reach out to our team.
      </p>
    </div>
  </div>
  
  <!-- Contact Info & Form Section -->
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold font-playfair mb-6">Get In Touch</h2>
          
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="bg-gold/20 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-playfair mb-2">Location</h3>
                <p class="text-gray-600 font-lato">
                  123 Beauty Lane<br>
                  New York, NY 10001
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold/20 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-playfair mb-2">Hours</h3>
                <p class="text-gray-600 font-lato">
                  Monday - Friday: 9:00 AM - 8:00 PM<br>
                  Saturday: 9:00 AM - 6:00 PM<br>
                  Sunday: 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold/20 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-playfair mb-2">Phone</h3>
                <p class="text-gray-600 font-lato">
                  <a href="tel:+12125551234" class="hover:text-gold transition-colors">(212) 555-1234</a>
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold/20 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-playfair mb-2">Email</h3>
                <p class="text-gray-600 font-lato">
                  <a href="mailto:info@luxehair.com" class="hover:text-gold transition-colors">info@luxehair.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Social Media Links -->
          <div class="mt-10">
            <h3 class="text-xl font-bold font-playfair mb-4">Follow Us</h3>
            <div class="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="bg-gold/20 p-3 rounded-full text-gold hover:bg-gold hover:text-white transition-colors">
                <span class="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="bg-gold/20 p-3 rounded-full text-gold hover:bg-gold hover:text-white transition-colors">
                <span class="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="bg-gold/20 p-3 rounded-full text-gold hover:bg-gold hover:text-white transition-colors">
                <span class="sr-only">Pinterest</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
              
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="bg-gold/20 p-3 rounded-full text-gold hover:bg-gold hover:text-white transition-colors">
                <span class="sr-only">TikTok</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-light-gray p-8 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold font-playfair mb-6">Send Us a Message</h2>
          
          {#if formSubmitted}
            <div class="bg-eco-green/20 text-eco-green p-4 rounded-md mb-6">
              <p class="font-bold">Thank you for your message!</p>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          {/if}
          
          {#if formError}
            <div class="bg-red-100 text-red-700 p-4 rounded-md mb-6">
              <p class="font-bold">There was an error sending your message.</p>
              <p>Please try again later or contact us directly by phone.</p>
            </div>
          {/if}
          
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div>
              <label for="name" class="block text-gray-700 font-bold mb-2">Name *</label>
              <input 
                type="text" 
                id="name" 
                bind:value={formData.name} 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div>
              <label for="email" class="block text-gray-700 font-bold mb-2">Email *</label>
              <input 
                type="email" 
                id="email" 
                bind:value={formData.email} 
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-gray-700 font-bold mb-2">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                bind:value={formData.phone}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
            
            <div>
              <label for="service" class="block text-gray-700 font-bold mb-2">Service of Interest</label>
              <select 
                id="service" 
                bind:value={formData.service}
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              >
                {#each services as service}
                  <option value={service.id}>{service.name}</option>
                {/each}
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-gray-700 font-bold mb-2">Message *</label>
              <textarea 
                id="message" 
                bind:value={formData.message} 
                required
                rows="5"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Map Section -->
  <section class="py-16 px-4 bg-light-gray">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Find Us</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair">Our Location</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="bg-white p-4 rounded-lg shadow-md">
        <!-- Map placeholder - In a real application, you would use a Google Maps embed or similar -->
        <div class="h-[400px] bg-gold/10 flex items-center justify-center">
          <div class="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gold/50 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <p class="text-gray-600 font-bold">Map loading...</p>
            <p class="text-gray-500 mt-2">
              LUXE Hair Salon<br>
              123 Beauty Lane, New York, NY 10001
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Join Our Team CTA -->
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <div class="bg-black text-white p-12 rounded-xl relative overflow-hidden">
        <!-- Decorative background pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 L 40 20 M 20 0 L 20 40" stroke="white" stroke-width="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div class="relative z-10">
          <h2 class="text-3xl font-bold font-playfair mb-4">Join Our Team</h2>
          <p class="text-lg font-lato font-light max-w-2xl mx-auto mb-8">
            Are you a passionate stylist committed to sustainable beauty? We're always looking for 
            talented individuals to join our team. Send us your portfolio and resume.
          </p>
          
          <a 
            href="mailto:careers@luxehair.com" 
            class="bg-gold hover:bg-gold-dark text-black font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            careers@luxehair.com
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .bg-light-gray {
    background-color: #F5F5F5;
  }
  
  .text-gold {
    color: #D4AF37;
  }
  
  .bg-gold {
    background-color: #D4AF37;
  }
  
  .hover\:bg-gold-dark:hover {
    background-color: #B8860B;
  }
  
  .bg-eco-green {
    background-color: #5D8C66;
  }
  
  .text-eco-green {
    color: #5D8C66;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-lato {
    font-family: 'Lato', sans-serif;
  }
</style> 