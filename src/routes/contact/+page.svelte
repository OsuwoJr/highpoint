<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Form data
  let formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  
  // Form state
  let isSubmitting = false;
  let formSubmitted = false;
  let formError = '';
  
  // Office locations
  const officeLocations = [
    {
      name: 'Nairobi Headquarters',
      address: 'Highpoint Tower, 5th Floor',
      street: 'Ngong Road',
      city: 'Nairobi, Kenya',
      phone: '+254 712 345 678',
      email: 'info@highpoint-construction.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
      mapUrl: 'https://maps.google.com/?q=Ngong+Road+Nairobi+Kenya'
    },
    {
      name: 'Mombasa Office',
      address: 'Azure Building, 2nd Floor',
      street: 'Nyali Road',
      city: 'Mombasa, Kenya',
      phone: '+254 723 456 789',
      email: 'mombasa@highpoint-construction.com',
      hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
      mapUrl: 'https://maps.google.com/?q=Nyali+Road+Mombasa+Kenya'
    }
  ];
  
  // Handle form submission
  async function handleSubmit() {
    isSubmitting = true;
    formError = '';
    
    try {
      // In a real implementation, this would connect to a backend API
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      formSubmitted = true;
      formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
    } catch (error) {
      formError = 'There was an error submitting your message. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact Us | Highpoint Construction</title>
  <meta name="description" content="Get in touch with Highpoint Construction for your building and renovation needs in Kenya. We're here to answer your questions and help you start your project.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-primary text-light py-16 px-4 relative">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h1 class="text-4xl md:text-5xl font-bold font-montserrat mb-4">Contact <span class="text-gold">Us</span></h1>
      <p class="text-xl max-w-2xl mx-auto font-raleway">
        Have questions about your construction project? Get in touch with our team of experts.
      </p>
    </div>
  </div>
  
  <!-- Office Locations Section -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold font-montserrat mb-4">Our Offices</h2>
        <p class="text-black max-w-3xl mx-auto font-raleway">
          Visit us at one of our locations to discuss your project in person, or reach out through our contact channels.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each officeLocations as office}
          <div class="bg-white p-6 shadow-lg">
            <h3 class="text-xl font-bold font-montserrat mb-3">{office.name}</h3>
            <div class="mb-4">
              <p class="font-raleway text-black">{office.address}</p>
              <p class="font-raleway text-black">{office.street}</p>
              <p class="font-raleway text-black">{office.city}</p>
            </div>
            
            <div class="space-y-2 mb-4">
              <div class="flex items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:{office.phone}" class="hover:text-gold transition-colors font-raleway">{office.phone}</a>
              </div>
              
              <div class="flex items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:{office.email}" class="hover:text-gold transition-colors font-raleway">{office.email}</a>
              </div>
              
              <div class="flex items-center text-black">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gold mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="font-raleway">{office.hours}</span>
              </div>
            </div>
            
            <a 
              href={office.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center text-gold hover:underline font-montserrat font-semibold"
            >
              View on Map
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Contact Form Section -->
  <section class="py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div>
          <h2 class="text-3xl font-bold font-montserrat mb-6">Get In Touch</h2>
          
          <div class="space-y-8">
            <div class="flex items-start">
              <div class="bg-gold p-3 mr-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-montserrat mb-2">Headquarters</h3>
                <p class="text-black font-raleway">
                  Highpoint Tower, 5th Floor<br>
                  Ngong Road<br>
                  Nairobi, Kenya
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold p-3 mr-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-montserrat mb-2">Business Hours</h3>
                <p class="text-black font-raleway">
                  Monday - Friday: 8:00 AM - 5:00 PM<br>
                  Saturday: 9:00 AM - 1:00 PM<br>
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold p-3 mr-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-montserrat mb-2">Phone</h3>
                <p class="text-black font-raleway">
                  <a href="tel:+254712345678" class="hover:text-gold transition-colors">+254 712 345 678</a>
                </p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-gold p-3 mr-4 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold font-montserrat mb-2">Email</h3>
                <p class="text-black font-raleway">
                  <a href="mailto:info@highpoint-construction.com" class="hover:text-gold transition-colors">info@highpoint-construction.com</a>
                </p>
              </div>
            </div>
          </div>
          
          <!-- Social Media Links -->
          <div class="mt-10">
            <h3 class="text-xl font-bold font-montserrat mb-4">Connect With Us</h3>
            <div class="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="bg-gold p-3 rounded-full text-white hover:bg-black transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="bg-gold p-3 rounded-full text-white hover:bg-black transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="bg-gold p-3 rounded-full text-white hover:bg-black transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="bg-gold p-3 rounded-full text-white hover:bg-black transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="bg-white p-8 shadow-lg">
          <h2 class="text-2xl font-bold font-montserrat mb-6">Send Us a Message</h2>
          
          {#if formSubmitted}
            <div class="bg-gold/20 text-black p-4 rounded-md mb-6">
              <p class="font-bold">Thank you for your message!</p>
              <p>We'll get back to you as soon as possible.</p>
            </div>
          {/if}
          
          {#if formError}
            <div class="bg-black/10 text-black p-4 rounded-md mb-6">
              <p class="font-bold">There was an error sending your message.</p>
              <p>Please try again later or contact us directly by phone.</p>
            </div>
          {/if}
          
          <form on:submit|preventDefault={handleSubmit} class="space-y-4">
            <div>
              <label for="name" class="block text-black font-bold mb-2 font-montserrat">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                bind:value={formData.name} 
                required
                class="w-full px-4 py-2 border border-black focus:outline-none focus:border-gold font-raleway"
              />
            </div>
            
            <div>
              <label for="email" class="block text-black font-bold mb-2 font-montserrat">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                bind:value={formData.email} 
                required
                class="w-full px-4 py-2 border border-black focus:outline-none focus:border-gold font-raleway"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-black font-bold mb-2 font-montserrat">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                bind:value={formData.phone}
                class="w-full px-4 py-2 border border-black focus:outline-none focus:border-gold font-raleway"
              />
            </div>
            
            <div>
              <label for="subject" class="block text-black font-bold mb-2 font-montserrat">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                bind:value={formData.subject} 
                required
                class="w-full px-4 py-2 border border-black focus:outline-none focus:border-gold font-raleway"
              />
            </div>
            
            <div>
              <label for="message" class="block text-black font-bold mb-2 font-montserrat">Message *</label>
              <textarea 
                id="message" 
                name="message"
                bind:value={formData.message} 
                required
                rows="5"
                class="w-full px-4 py-2 border border-black focus:outline-none focus:border-gold font-raleway"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="bg-gold text-white px-6 py-3 font-bold hover:bg-black transition-all uppercase font-montserrat {isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Map Section -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold font-montserrat mb-4">Find Us</h2>
        <p class="text-black max-w-3xl mx-auto font-raleway">
          Visit our headquarters in Nairobi to discuss your construction project in person.
        </p>
      </div>
      
      <div class="h-[400px] bg-gold/10">
        <!-- In a real implementation, this would be replaced with an actual map component -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.35739631423!2d36.805943!3d-1.290270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109996536c39%3A0x4eb6d6e1e16b4153!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1625123456789!5m2!1sen!2ske" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowFullScreen={true}
          loading="lazy"
          title="Highpoint Construction Headquarters Location"
        ></iframe>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-primary text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4 font-montserrat">Ready to Start Your Project?</h2>
      <p class="text-lg mb-8 font-raleway">
        Whether you're building a new home, renovating an existing property, or planning a commercial project, 
        we're here to help turn your vision into reality.
      </p>
      <a href="/quote" class="bg-gold text-black px-8 py-3 font-bold hover:bg-white transition-colors uppercase font-montserrat">
        Get a Quote
      </a>
    </div>
  </section>
</main>

<style>
  .bg-light {
    background-color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .bg-gold-dark {
    background-color: #E67E00;
  }
  
  .hover\:bg-gold-dark:hover {
    background-color: #E67E00;
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .focus\:border-gold:focus {
    border-color: var(--color-gold);
  }
  
  .hover\:text-gold:hover {
    color: var(--color-gold);
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
</style> 