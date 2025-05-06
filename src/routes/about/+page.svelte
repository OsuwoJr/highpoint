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
  
  onMount(() => {
    // Fix: Make all animation elements visible immediately
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('is-visible');
    });
    
    // Also set up the intersection observer for future scrolling
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    }
  });
  
  // Handle image loading errors
  function handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = '/images/team/placeholder.jpg';
  }
</script>

<svelte:head>
  <title>About Us | Highpoint Construction Kenya</title>
  <meta name="description" content="Learn about Highpoint Construction's story, our experienced team, core values, and our mission to build modern, sustainable homes in Kenya.">
</svelte:head>

<Header />

<main id="main-content" class="pt-24 pb-20">
  <!-- Hero Banner -->
  <div class="bg-primary text-light py-16 px-4 hero-section">
    <div class="max-w-6xl mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-montserrat">Building Kenya's Future</h1>
      <p class="text-xl md:text-2xl max-w-3xl mx-auto font-raleway mb-8">
        Creating exceptional homes and buildings that stand the test of time
      </p>
      <div class="w-24 h-1 bg-gold mx-auto"></div>
    </div>
  </div>
  
  <!-- About Us Section -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="animate-on-scroll">
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
        
        <div class="animate-on-scroll" style="transition-delay: 200ms">
          <div class="w-full rounded-lg shadow-xl overflow-hidden" style="height: 400px;">
            <img 
              src="/images/projects/project1.jpg" 
              alt="Highpoint Construction Project" 
              class="w-full h-full object-cover"
              on:error={(e) => { (e.target as HTMLImageElement).src = '/images/projects/placeholder.jpg'; }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Our Mission -->
  <section class="py-16 px-4 bg-primary text-light">
    <div class="max-w-4xl mx-auto text-center">
      <div class="animate-on-scroll">
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
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 animate-on-scroll">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Our Principles</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 font-montserrat text-primary">Core Values</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-gray-700 max-w-3xl mx-auto font-raleway mb-6">
          These values guide everything we do at Highpoint Construction, from how we interact with clients to how we approach each project.
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 shadow-lg animate-on-scroll" style="transition-delay: 100ms">
          <div class="text-gold text-4xl font-bold mb-4">01</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Quality</h3>
          <p class="text-gray-700 font-raleway">
            We never compromise on quality. From materials to workmanship, we ensure every aspect of our construction meets the highest standards.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll" style="transition-delay: 200ms">
          <div class="text-gold text-4xl font-bold mb-4">02</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Integrity</h3>
          <p class="text-gray-700 font-raleway">
            We operate with honesty and transparency in all our dealings. Our clients can trust us to keep our promises and communicate openly.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll" style="transition-delay: 300ms">
          <div class="text-gold text-4xl font-bold mb-4">03</div>
          <h3 class="text-xl font-bold mb-3 font-montserrat text-primary">Innovation</h3>
          <p class="text-gray-700 font-raleway">
            We embrace modern construction techniques and technologies to deliver buildings that are efficient, sustainable, and built to last.
          </p>
        </div>
        
        <div class="bg-white p-6 shadow-lg animate-on-scroll" style="transition-delay: 400ms">
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
  <section class="py-16 px-4 bg-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12 animate-on-scroll">
        <span class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold">Meet Our Experts</span>
        <h2 class="text-3xl md:text-4xl font-bold mt-2 mb-4 font-montserrat text-primary">Our Leadership Team</h2>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-gray-700 max-w-3xl mx-auto font-raleway">
          With decades of combined experience in construction and design, our team brings unparalleled expertise to every project
        </p>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each teamMembers as member, i}
          <div class="bg-light overflow-hidden shadow-lg animate-on-scroll" style="transition-delay: {i * 100}ms">
            <div class="h-64 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                class="w-full h-full object-cover"
                on:error={handleImageError}
              />
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
  
  <!-- Why Choose Us -->
  <section class="py-16 px-4 bg-light">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="animate-on-scroll">
          <div class="text-gold uppercase tracking-wider font-montserrat text-sm font-bold mb-3">Why Choose Us</div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-primary">Building Excellence in Kenya</h2>
          
          <div class="mb-6">
            <div class="flex items-start mb-3">
              <div class="text-gold text-lg mr-3 mt-1">✓</div>
              <div>
                <h3 class="text-lg font-bold mb-1 font-montserrat text-primary">Experienced Team</h3>
                <p class="text-gray-700 font-raleway">Our team brings decades of combined experience in construction, architecture, and project management.</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <div class="flex items-start mb-3">
              <div class="text-gold text-lg mr-3 mt-1">✓</div>
              <div>
                <h3 class="text-lg font-bold mb-1 font-montserrat text-primary">Quality Craftsmanship</h3>
                <p class="text-gray-700 font-raleway">We use only the highest quality materials and employ skilled craftsmen to ensure exceptional results.</p>
              </div>
            </div>
          </div>
          
          <div class="mb-6">
            <div class="flex items-start mb-3">
              <div class="text-gold text-lg mr-3 mt-1">✓</div>
              <div>
                <h3 class="text-lg font-bold mb-1 font-montserrat text-primary">Transparent Process</h3>
                <p class="text-gray-700 font-raleway">We keep you informed throughout your project with regular updates and clear communication.</p>
              </div>
            </div>
          </div>
          
          <div>
            <div class="flex items-start">
              <div class="text-gold text-lg mr-3 mt-1">✓</div>
              <div>
                <h3 class="text-lg font-bold mb-1 font-montserrat text-primary">Diaspora Specialists</h3>
                <p class="text-gray-700 font-raleway">We specialize in helping Kenyans living abroad build their dream homes back home with complete peace of mind.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="animate-on-scroll" style="transition-delay: 200ms">
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/about/about-1.jpg" 
                alt="Highpoint Construction team at work" 
                class="w-full h-full object-cover"
                on:error={(e) => { (e.target as HTMLImageElement).src = '/images/projects/placeholder.jpg'; }}
              />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/about/about-2.jpg" 
                alt="Highpoint Construction project" 
                class="w-full h-full object-cover"
                on:error={(e) => { (e.target as HTMLImageElement).src = '/images/projects/placeholder.jpg'; }}
              />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/about/about-3.jpg" 
                alt="Highpoint Construction design process" 
                class="w-full h-full object-cover"
                on:error={(e) => { (e.target as HTMLImageElement).src = '/images/projects/placeholder.jpg'; }}
              />
            </div>
            <div class="aspect-square overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/images/about/about-4.jpg" 
                alt="Highpoint Construction completed home" 
                class="w-full h-full object-cover"
                on:error={(e) => { (e.target as HTMLImageElement).src = '/images/projects/placeholder.jpg'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="py-16 px-4 bg-primary text-light">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Ready to Start Your Building Journey?</h2>
      <p class="mb-8 text-lg max-w-2xl mx-auto font-raleway">
        Whether you're in Kenya or abroad, our team is ready to help you bring your construction vision to life with expertise and care.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/quote" class="bg-gold text-primary px-8 py-3 font-bold hover:bg-opacity-90">Get A Quote</a>
        <a href="/contact" class="border-2 border-white hover:border-gold hover:text-gold px-8 py-3 font-bold">Contact Us</a>
      </div>
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
  
  .text-dark {
    color: var(--color-dark);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .font-montserrat {
    font-family: 'Montserrat', sans-serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  
  /* Hero section styles */
  .hero-section {
    position: relative;
    overflow: hidden;
    background-image: url('/images/about/hero-background.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  
  .hero-section > div {
    position: relative;
    z-index: 1;
  }
  
  /* Animation styles */
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .animate-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Fix: Apply immediate visibility to all animation elements on page load for browsers without JS */
  @media (prefers-reduced-motion) {
    .animate-on-scroll {
      opacity: 1;
      transform: translateY(0);
      transition: none;
    }
  }
</style> 