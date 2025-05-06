<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Form data structure
  let formData = {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'residential', // Default value
    serviceNeeded: [],
    budget: '',
    timeframe: '',
    description: '',
    hearAboutUs: '',
    contactPreference: 'email', // Default value
  };

  // Service options
  const services = [
    { id: 'architectural', label: 'Architectural Design' },
    { id: 'construction', label: 'Construction' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'project-management', label: 'Project Management' },
    { id: 'interior-design', label: 'Interior Design' },
    { id: 'engineering', label: 'Engineering Services' },
    { id: 'diaspora', label: 'Diaspora Building Assistance' }
  ];

  // Project types
  const projectTypes = [
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'renovation', label: 'Renovation' },
    { id: 'interior', label: 'Interior Only' }
  ];

  // Budget ranges
  const budgetRanges = [
    { id: 'under5m', label: 'Under 5 Million KES' },
    { id: '5m-10m', label: '5-10 Million KES' },
    { id: '10m-20m', label: '10-20 Million KES' },
    { id: '20m-50m', label: '20-50 Million KES' },
    { id: 'over50m', label: 'Over 50 Million KES' },
    { id: 'undecided', label: 'Undecided / Need Guidance' }
  ];

  // Timeframe options
  const timeframes = [
    { id: 'urgent', label: 'Urgent (1-3 months)' },
    { id: 'soon', label: 'Soon (3-6 months)' },
    { id: 'future', label: 'Future (6-12 months)' },
    { id: 'planning', label: 'Just Planning (>12 months)' }
  ];

  // Form state
  let isSubmitting = false;
  let formSubmitted = false;
  let formError = '';

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
        fullName: '',
        email: '',
        phone: '',
        location: '',
        projectType: 'residential',
        serviceNeeded: [],
        budget: '',
        timeframe: '',
        description: '',
        hearAboutUs: '',
        contactPreference: 'email',
      };
    } catch (error) {
      formError = 'There was an error submitting your request. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  // Toggle service selection
  function toggleService(serviceId: string) {
    if (formData.serviceNeeded.includes(serviceId)) {
      formData.serviceNeeded = formData.serviceNeeded.filter(id => id !== serviceId);
    } else {
      formData.serviceNeeded = [...formData.serviceNeeded, serviceId];
    }
  }
</script>

<svelte:head>
  <title>Request a Quote | Highpoint Construction</title>
  <meta name="description" content="Request a personalized quote for your building or renovation project. Highpoint Construction provides comprehensive construction services in Kenya.">
</svelte:head>

<Header />

<div class="bg-light pt-24 pb-16">
  <div class="max-w-4xl mx-auto px-4">
    <div class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Request a Quote</h1>
      <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
      <p class="text-gray-700 text-lg max-w-2xl mx-auto">Tell us about your project and we'll provide a personalized quote tailored to your needs. Our team is ready to help you bring your vision to life.</p>
    </div>

    {#if formSubmitted}
      <div class="bg-white p-8 shadow-lg">
        <div class="text-center py-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <h2 class="text-2xl font-bold mb-3">Quote Request Submitted</h2>
          <p class="text-gray-700 mb-6">Thank you for your interest in Highpoint Construction. Our team will review your project details and get back to you within 24-48 hours with a personalized quote.</p>
          <a href="/" class="btn-primary inline-block">Return to Homepage</a>
        </div>
      </div>
    {:else}
      <form on:submit|preventDefault={handleSubmit} class="bg-white p-6 md:p-8 shadow-lg">
        {#if formError}
          <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
            <p>{formError}</p>
          </div>
        {/if}
        
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Personal Information</h2>
          <div class="h-px bg-gray-200 mb-6"></div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="fullName" class="block mb-2 font-medium">Full Name <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                id="fullName" 
                bind:value={formData.fullName} 
                required
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
            </div>
            
            <div>
              <label for="email" class="block mb-2 font-medium">Email Address <span class="text-red-500">*</span></label>
              <input 
                type="email" 
                id="email" 
                bind:value={formData.email} 
                required
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
            </div>
            
            <div>
              <label for="phone" class="block mb-2 font-medium">Phone Number <span class="text-red-500">*</span></label>
              <input 
                type="tel" 
                id="phone" 
                bind:value={formData.phone} 
                required
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
            </div>
            
            <div>
              <label for="location" class="block mb-2 font-medium">Project Location <span class="text-red-500">*</span></label>
              <input 
                type="text" 
                id="location" 
                bind:value={formData.location} 
                required
                placeholder="City/Town, County"
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
            </div>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Project Details</h2>
          <div class="h-px bg-gray-200 mb-6"></div>
          
          <div class="mb-6">
            <label class="block mb-2 font-medium">Project Type <span class="text-red-500">*</span></label>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {#each projectTypes as type}
                <label class="inline-flex items-center p-3 border border-gray-300 cursor-pointer hover:border-gold transition-colors">
                  <input 
                    type="radio" 
                    name="projectType" 
                    value={type.id} 
                    bind:group={formData.projectType} 
                    class="mr-2"
                  >
                  <span>{type.label}</span>
                </label>
              {/each}
            </div>
          </div>
          
          <div class="mb-6">
            <label class="block mb-2 font-medium">Services Needed <span class="text-red-500">*</span></label>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {#each services as service}
                <label class="inline-flex items-center p-3 border border-gray-300 cursor-pointer hover:border-gold transition-colors">
                  <input 
                    type="checkbox" 
                    value={service.id} 
                    checked={formData.serviceNeeded.includes(service.id)}
                    on:change={() => toggleService(service.id)}
                    class="mr-2"
                  >
                  <span>{service.label}</span>
                </label>
              {/each}
            </div>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block mb-2 font-medium">Budget Range</label>
              <select 
                bind:value={formData.budget}
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
                <option value="">Select a budget range</option>
                {#each budgetRanges as range}
                  <option value={range.id}>{range.label}</option>
                {/each}
              </select>
            </div>
            
            <div>
              <label class="block mb-2 font-medium">Project Timeframe</label>
              <select 
                bind:value={formData.timeframe}
                class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
              >
                <option value="">Select a timeframe</option>
                {#each timeframes as timeframe}
                  <option value={timeframe.id}>{timeframe.label}</option>
                {/each}
              </select>
            </div>
          </div>
          
          <div class="mb-6">
            <label for="description" class="block mb-2 font-medium">Project Description <span class="text-red-500">*</span></label>
            <textarea 
              id="description" 
              bind:value={formData.description} 
              required
              rows="5"
              placeholder="Please describe your project, including any specific requirements or questions you have."
              class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
            ></textarea>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-2">Additional Information</h2>
          <div class="h-px bg-gray-200 mb-6"></div>
          
          <div class="mb-6">
            <label for="hearAboutUs" class="block mb-2 font-medium">How did you hear about us?</label>
            <input 
              type="text" 
              id="hearAboutUs" 
              bind:value={formData.hearAboutUs}
              class="w-full p-3 border border-gray-300 focus:border-gold focus:outline-none"
            >
          </div>
          
          <div>
            <label class="block mb-2 font-medium">Preferred Contact Method</label>
            <div class="flex space-x-4">
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  name="contactPreference" 
                  value="email" 
                  bind:group={formData.contactPreference}
                  class="mr-2"
                >
                <span>Email</span>
              </label>
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  name="contactPreference" 
                  value="phone" 
                  bind:group={formData.contactPreference}
                  class="mr-2"
                >
                <span>Phone</span>
              </label>
              <label class="inline-flex items-center">
                <input 
                  type="radio" 
                  name="contactPreference" 
                  value="whatsapp" 
                  bind:group={formData.contactPreference}
                  class="mr-2"
                >
                <span>WhatsApp</span>
              </label>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <button 
            type="submit" 
            class="btn-primary min-w-[200px] {isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}"
            disabled={isSubmitting}
          >
            {#if isSubmitting}
              Submitting...
            {:else}
              Submit Quote Request
            {/if}
          </button>
        </div>
      </form>
    {/if}
    
    <div class="mt-12 bg-primary text-light p-6 md:p-8 shadow-lg">
      <div class="flex flex-col md:flex-row items-center">
        <div class="mb-6 md:mb-0 md:mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <div>
          <h3 class="text-xl md:text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
          <p class="mb-3">Our team is available to answer your questions and provide guidance.</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="tel:+254712345678" class="inline-flex items-center text-gold hover:text-light">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 712 345 678
            </a>
            <a href="mailto:info@highpoint-construction.com" class="inline-flex items-center text-gold hover:text-light">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@highpoint-construction.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .bg-light {
    background-color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }
  
  .btn-primary {
    background-color: var(--color-gold);
    color: var(--color-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    font-weight: bold;
    transition: all 0.3s ease;
    text-align: center;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .btn-primary:hover {
    background-color: var(--color-secondary);
    color: var(--color-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  input[type="radio"]:checked + span,
  input[type="checkbox"]:checked + span {
    color: var(--color-gold);
    font-weight: 600;
  }
  
  label:has(input[type="radio"]:checked),
  label:has(input[type="checkbox"]:checked) {
    border-color: var(--color-gold);
    background-color: rgba(255, 140, 0, 0.05);
  }
</style> 