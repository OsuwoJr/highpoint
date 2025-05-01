<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Team members
  const teamMembers = [
    {
      id: 'alex',
      name: 'Alex Morgan',
      title: 'Master Stylist & Founder',
      bio: 'With over 15 years of experience in luxury salons worldwide, Alex specializes in balayage and eco-friendly coloring techniques. Certified in sustainable salon practices.',
      image: '/images/stylist-alex.jpg',
      socialMedia: {
        instagram: 'alexstylist',
        pinterest: 'alexhairartist'
      }
    },
    {
      id: 'taylor',
      name: 'Taylor Kim',
      title: 'Creative Director',
      bio: 'Award-winning stylist known for innovative bridal designs and precision cutting. Taylor trained in Paris and New York before joining our team.',
      image: '/images/stylist-taylor.jpg',
      socialMedia: {
        instagram: 'taylorhair',
        pinterest: 'taylorhairdesign'
      }
    },
    {
      id: 'jordan',
      name: 'Jordan Smith',
      title: 'Advanced Stylist',
      bio: 'Jordan specializes in hair transformations, extensions, and keratin treatments. Passionate about helping clients achieve their dream hair with minimal environmental impact.',
      image: '/images/stylist-jordan.jpg',
      socialMedia: {
        instagram: 'jordanhairstylist',
        tiktok: '@jordanhair'
      }
    },
    {
      id: 'casey',
      name: 'Casey Brown',
      title: 'Precision Cutting Specialist',
      bio: 'Trained in the Vidal Sassoon technique, Casey is known for creating flattering, low-maintenance cuts that enhance natural features and texture.',
      image: '/images/stylist-casey.jpg',
      socialMedia: {
        instagram: 'caseythestylist',
        pinterest: 'caseyhairdesigns'
      }
    }
  ];
  
  // Salon milestones
  const milestones = [
    {
      year: 2018,
      title: 'Salon Founded',
      description: 'LUXE Hair opened its doors with a commitment to sustainable, luxury hair services'
    },
    {
      year: 2019,
      title: 'Green Certification',
      description: 'Became certified by Green Circle Salons for our eco-friendly practices'
    },
    {
      year: 2020,
      title: 'Best of City Award',
      description: 'Recognized as the "Best Eco-Conscious Salon" in our city'
    },
    {
      year: 2021,
      title: 'Team Expansion',
      description: 'Welcomed new stylists and expanded our service offerings'
    },
    {
      year: 2023,
      title: 'Sustainable Product Line',
      description: 'Launched our own line of eco-friendly hair care products'
    }
  ];
  
  // Handle image loading errors
  function handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.style.display = 'none';
    const parent = imgElement.parentElement;
    
    if (parent) {
      // Create fallback element
      const fallback = document.createElement('div');
      fallback.className = 'w-full h-full bg-gold/20 flex items-center justify-center';
      
      const text = document.createElement('span');
      text.className = 'text-xl font-bold text-black';
      text.textContent = imgElement.alt || 'Team Member';
      
      fallback.appendChild(text);
      parent.appendChild(fallback);
    }
  }
</script>

<svelte:head>
  <title>About Us | LUXE Hair</title>
  <meta name="description" content="Learn about LUXE Hair's expert stylists, our commitment to sustainable beauty, and our salon's story and values.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-black text-white py-16 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl font-bold font-playfair mb-4">About <span class="text-gold">LUXE Hair</span></h1>
      <p class="text-lg font-lato font-light max-w-2xl mx-auto">
        Where luxury meets sustainability. Our team of expert stylists is dedicated to creating beautiful, healthy hair 
        using eco-friendly practices and products.
      </p>
    </div>
  </div>
  
  <!-- Our Story Section -->
  <section class="py-16 px-4 bg-light-gray">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Journey</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair">Our Story</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div class="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
            <img 
              src="/images/salon-interior.jpg" 
              alt="LUXE Hair Salon Interior" 
              class="w-full h-full object-cover"
              on:error={handleImageError}
            />
          </div>
        </div>
        
        <div>
          <p class="text-gray-700 mb-6 font-lato">
            Founded in 2018, LUXE Hair was born from a vision to create a salon experience that delivers 
            exceptional results while respecting our planet. We believe that beauty shouldn't come at the 
            environment's expense.
          </p>
          <p class="text-gray-700 mb-6 font-lato">
            Our founder, Alex Morgan, spent years working in traditional salons before deciding to create 
            a space that aligned with both luxury standards and environmental values. Today, LUXE Hair 
            stands as a testament to the possibility of sustainable beauty without compromise.
          </p>
          <p class="text-gray-700 font-lato">
            Every aspect of our salon—from the products we use to our waste management practices—is 
            designed with sustainability in mind. We're proud to be part of the movement toward more 
            conscious beauty practices.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Timeline Section -->
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Journey</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair">Milestones</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="relative">
        <!-- Vertical Timeline Line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gold/20"></div>
        
        <div class="space-y-12">
          {#each milestones as milestone, i}
            <div class="relative">
              <!-- Year Marker -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -mt-4 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-black font-bold z-10">
                {milestone.year}
              </div>
              
              <!-- Content Box -->
              <div class="ml-0 md:ml-{i % 2 === 0 ? '0' : '50%'} w-full md:w-1/2 pl-0 md:pl-{i % 2 === 0 ? '0' : '8'} pr-0 md:pr-{i % 2 === 0 ? '8' : '0'} pb-10">
                <div class="bg-white p-6 rounded-lg shadow-md">
                  <h3 class="text-xl font-bold font-playfair mb-2">{milestone.title}</h3>
                  <p class="text-gray-600 font-lato">{milestone.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- Team Section -->
  <section class="py-16 px-4 bg-light-gray">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">The Experts</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair">Meet Our Team</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
        <p class="mt-6 text-gray-600 max-w-2xl mx-auto font-lato font-light">
          Our talented stylists bring years of experience and a passion for sustainable beauty to every appointment
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each teamMembers as member}
          <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
            <div class="h-64 relative">
              <img 
                src={member.image} 
                alt={member.name} 
                class="w-full h-full object-cover"
                on:error={handleImageError}
              />
            </div>
            <div class="p-6">
              <h3 class="font-bold text-xl font-playfair">{member.name}</h3>
              <p class="text-gold text-sm mb-4">{member.title}</p>
              <p class="text-gray-600 text-sm mb-4 font-lato">{member.bio}</p>
              
              <!-- Social Media Links -->
              <div class="flex space-x-3">
                {#if member.socialMedia.instagram}
                  <a href={`https://instagram.com/${member.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gold">
                    <span class="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                {/if}
                
                {#if member.socialMedia.pinterest}
                  <a href={`https://pinterest.com/${member.socialMedia.pinterest}`} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gold">
                    <span class="sr-only">Pinterest</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </a>
                {/if}
                
                {#if member.socialMedia.tiktok}
                  <a href={`https://tiktok.com/${member.socialMedia.tiktok}`} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gold">
                    <span class="sr-only">TikTok</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Values Section -->
  <section class="py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <span class="text-gold uppercase tracking-wider font-lato text-sm font-bold">Our Principles</span>
        <h2 class="text-3xl font-bold mt-2 mb-4 font-playfair">Our Core Values</h2>
        <div class="w-24 h-1 bg-gold mx-auto"></div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3">Sustainable Beauty</h3>
          <p class="text-gray-600 font-lato">
            We're committed to minimizing our environmental impact while maximizing beautiful results with eco-friendly products and practices.
          </p>
        </div>
        
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3">Excellence</h3>
          <p class="text-gray-600 font-lato">
            We strive for perfection in every cut, color, and style, ensuring our clients leave feeling confident and beautiful.
          </p>
        </div>
        
        <div class="text-center p-6">
          <div class="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold font-playfair mb-3">Transparency</h3>
          <p class="text-gray-600 font-lato">
            We believe in honest pricing, clear communication, and educating our clients about the products and techniques we use.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-black text-white">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold font-playfair mb-6">Experience the <span class="text-gold">LUXE</span> Difference</h2>
      <p class="mb-8 font-lato font-light text-lg max-w-2xl mx-auto">
        Ready to transform your hair with our expert team? Book your appointment today and discover 
        what makes LUXE Hair the sustainable luxury salon of choice.
      </p>
      
      <a href="/book" class="bg-gold hover:bg-gold-dark text-black px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 focus:ring-2 focus:ring-gold focus:ring-opacity-50 focus:outline-none inline-flex items-center">
        Book Your Appointment
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
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