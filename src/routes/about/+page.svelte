<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Team members data
  const teamMembers = [
    {
      name: 'James Mwangi',
      title: 'Founder & CEO',
      bio: 'With over 25 years of experience in construction and architecture, James founded Highpoint to create modern, sustainable homes for Kenyans. His vision drives our company forward.',
      image: '/images/team/james-mwangi.jpg'
    },
    {
      name: 'Sarah Odhiambo',
      title: 'Chief Architect',
      bio: 'Sarah brings 15 years of architectural expertise specializing in blending modern designs with traditional Kenyan elements. Her award-winning designs are both functional and beautiful.',
      image: '/images/team/sarah-odhiambo.jpg'
    },
    {
      name: 'David Kariuki',
      title: 'Construction Manager',
      bio: 'David ensures all projects are completed to the highest standards of quality and safety. His attention to detail and strong leadership keep our projects on track.',
      image: '/images/team/david-kariuki.jpg'
    }
  ];
  
  // Track image loading errors
  let imageErrors: Record<string, boolean> = {};
  
  onMount(() => {
    // Make all animation elements visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('is-visible');
      
      // Force visibility with inline styles
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
  });
  
  // Handle image loading errors
  function handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    const imageSrc = imgElement.src;
    console.error(`Failed to load image: ${imageSrc}`);
    imageErrors[imageSrc] = true;
    imgElement.src = '/images/team/placeholder.jpg';
  }
</script>

<svelte:head>
  <title>About Us | Highpoint Construction Kenya</title>
  <meta name="description" content="Learn about Highpoint Construction's story, our experienced team, core values, and our mission to build modern, sustainable homes in Kenya.">
</svelte:head>

<Header />

<main id="main-content" class="relative z-1" style="isolation: isolate;">
  <!-- Hero Banner -->
  <div class="bg-primary text-light py-16 px-4 hero-section relative">
    <div class="max-w-6xl mx-auto text-center relative z-30">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">Building Kenya's Future</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto font-raleway mb-8">
        Creating exceptional homes and buildings that stand the test of time
      </p>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
    </div>
  </div>
  
  <!-- About Us Section -->
  <section class="py-16 px-4 bg-light relative z-10" style="isolation: isolate;">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        <div class="animate-on-scroll content-section opacity-100" style="transform: translateY(0); opacity: 1;">
          <div class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold mb-3">About Us</div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-primary">Your Trusted Construction Partner in Kenya</h2>
          <p class="text-gray-700 mb-6 font-raleway leading-relaxed">
            Founded in 2010, Highpoint Construction has established itself as a leader in Kenya's construction industry. We specialize in delivering high-quality residential and commercial buildings that combine modern design, superior craftsmanship, and sustainable building practices.
          </p>
          <p class="text-gray-700 mb-6 font-raleway leading-relaxed">
            Our team brings together experts in architecture, engineering, construction, and project management to provide comprehensive building solutions that meet our clients' needs and exceed their expectations.
          </p>
          <p class="text-gray-700 font-raleway leading-relaxed">
            What sets us apart is our dedication to our clients, especially Kenyans in the diaspora who want to build homes back in Kenya. We understand the challenges of remote project management and provide transparent, reliable services with regular updates throughout the construction process.
          </p>
        </div>
        
        <div class="animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 200ms">
          <div class="w-full rounded-lg shadow-xl overflow-hidden image-container" style="height: 400px; position: relative; z-index: 15;">
            <img 
              src="/images/projects/project1.jpg" 
              alt="Highpoint Construction Project" 
              class="w-full h-full object-cover"
              on:error={handleImageError}
              style="position: relative; z-index: 5;"
            />
            
            {#if imageErrors['/images/projects/project1.jpg']}
              <div class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center z-10 p-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="text-base">Image Not Available</p>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Our Mission -->
  <section class="py-16 px-4 bg-primary text-light relative z-10" style="isolation: isolate;">
    <div class="max-w-4xl mx-auto text-center relative z-20">
      <div class="animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1;">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Our Mission</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 font-montserrat">Building Dreams, Creating Homes</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-8"></div>
        <p class="text-xl font-raleway mb-6 leading-relaxed">
          Our mission is to transform the Kenyan construction landscape by delivering exceptional quality homes and buildings while providing outstanding service to our clients.
        </p>
        <p class="text-lg font-raleway leading-relaxed">
          We're committed to using sustainable building practices, supporting local communities, and creating spaces that enhance people's lives for generations to come.
        </p>
      </div>
    </div>
  </section>
  
  <!-- Values Section -->
  <section class="py-16 px-4 bg-light relative z-10" style="isolation: isolate;">
    <div class="max-w-6xl mx-auto relative z-20">
      <div class="text-center mb-12 animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1;">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Our Principles</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 font-montserrat text-primary">Core Values</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-gray-700 max-w-3xl mx-auto font-raleway mb-6">
          These values guide everything we do at Highpoint Construction, from how we interact with clients to how we approach each project.
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
        <div class="bg-white p-6 shadow-lg animate-on-scroll value-card opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 100ms; position: relative; z-index: 15;">
          <div class="text-gold text-4xl font-bold mb-4">01</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Quality</h3>
          <p class="text-gray-700 font-raleway">
            We never compromise on quality. From materials to workmanship, we ensure every aspect of our construction meets the highest standards.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll value-card opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 200ms; position: relative; z-index: 15;">
          <div class="text-gold text-4xl font-bold mb-4">02</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Integrity</h3>
          <p class="text-gray-700 font-raleway">
            We operate with honesty and transparency in all our dealings. Our clients can trust us to keep our promises and communicate openly.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll value-card opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 300ms; position: relative; z-index: 15;">
          <div class="text-gold text-4xl font-bold mb-4">03</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Innovation</h3>
          <p class="text-gray-700 font-raleway">
            We embrace modern construction techniques and technologies to deliver buildings that are efficient, sustainable, and built to last.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll value-card opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 400ms; position: relative; z-index: 15;">
          <div class="text-gold text-4xl font-bold mb-4">04</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Client Focus</h3>
          <p class="text-gray-700 font-raleway">
            We put our clients at the center of everything we do, ensuring their needs are met and their vision is brought to life.
          </p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Team Section -->
  <section class="py-16 px-4 bg-white relative z-10" style="isolation: isolate;">
    <div class="max-w-6xl mx-auto relative z-20">
      <div class="text-center mb-12 animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1;">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Meet Our Experts</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 font-montserrat text-primary">Our Leadership Team</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-gray-700 max-w-3xl mx-auto font-raleway">
          With decades of combined experience in construction and design, our team brings unparalleled expertise to every project
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {#each teamMembers as member, i}
          <div class="bg-light overflow-hidden shadow-lg animate-on-scroll team-card opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: {i * 100}ms; position: relative; z-index: 15;">
            <div class="h-64 overflow-hidden image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                class="w-full h-full object-cover"
                on:error={handleImageError}
                style="position: relative; z-index: 5;"
              />
              
              {#if imageErrors[member.image]}
                <div class="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-center z-10 p-4">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p class="text-base">{member.name}</p>
                  </div>
                </div>
              {/if}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1 font-montserrat text-primary">{member.name}</h3>
              <p class="text-gold font-medium mb-4 font-raleway">{member.title}</p>
              <p class="text-gray-700 font-raleway">{member.bio}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Stats Section -->
  <section class="py-16 px-4 bg-primary text-white relative z-10" style="isolation: isolate;">
    <div class="max-w-6xl mx-auto relative z-20">
      <div class="text-center mb-12 animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1;">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Our Impact</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-6 font-montserrat">By the Numbers</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
      </div>
          
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
        <div class="text-center animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 100ms">
          <div class="text-gold text-4xl md:text-5xl font-bold mb-2">10+</div>
          <p class="text-lg font-raleway">Years in Business</p>
        </div>
          
        <div class="text-center animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 200ms">
          <div class="text-gold text-4xl md:text-5xl font-bold mb-2">200+</div>
          <p class="text-lg font-raleway">Projects Completed</p>
        </div>
          
        <div class="text-center animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 300ms">
          <div class="text-gold text-4xl md:text-5xl font-bold mb-2">150+</div>
          <p class="text-lg font-raleway">Satisfied Clients</p>
        </div>
        
        <div class="text-center animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1; transition-delay: 400ms">
          <div class="text-gold text-4xl md:text-5xl font-bold mb-2">45+</div>
          <p class="text-lg font-raleway">Skilled Team Members</p>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-light relative z-10" style="isolation: isolate;">
    <div class="max-w-4xl mx-auto text-center relative z-20">
      <div class="animate-on-scroll opacity-100" style="transform: translateY(0); opacity: 1;">
        <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-primary">Ready to Build Your Dream?</h2>
        <p class="text-gray-700 mb-8 font-raleway">
          Contact us today to discuss your vision, and let our team of experts bring it to life. We're dedicated to creating spaces that you'll be proud to call your own.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/quote" class="bg-gold text-black font-bold py-3 px-8 hover:bg-black hover:text-white transition-colors">
            Get a Quote
          </a>
          <a href="/contact" class="bg-primary text-white font-bold py-3 px-8 hover:bg-gold hover:text-black transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .text-gold {
    color: var(--color-gold);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-light {
    background-color: var(--color-light);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  
  /* Since a CSS rule was removed from the original file, we need to add it back */
  

  /* About page specific fixes with increased priority */
  .hero-section {
    position: relative !important;
    z-index: 2 !important;
  }
  
  .content-section {
    position: relative !important;
    z-index: 5 !important;
  }
  
  .value-card {
    position: relative !important;
    z-index: 5 !important;
  }
  
  .team-card {
    position: relative !important;
    z-index: 5 !important;
    isolation: isolate !important;
  }
  
  .image-container {
    position: relative !important;
    overflow: hidden !important;
  }
  
  .image-container img {
    position: relative !important;
    z-index: 2 !important;
  }
  
  /* Remove any potential overlays */
  main::before,
  main::after,
  section::before,
  section::after {
    content: none !important;
    display: none !important;
  }
  
  /* Fix for stacking context */
  main, section, div {
    isolation: isolate;
  }
  
  /* Stop any animations that might be causing problems */
  * {
    animation-play-state: paused !important;
  }
</style> 