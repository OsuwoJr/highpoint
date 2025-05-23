<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	let { children } = $props();

	// Add global image error handling to improve user experience
	onMount(() => {
		// Apply cache-busting timestamp to all project images
		const timestamp = Date.now();
		
		// Create a function to handle images that fail to load
		const handleImageError = (event: Event) => {
			const img = event.target as HTMLImageElement;
			if (!img) return;
			
			console.error(`Failed to load image: ${img.src}`);
			
			// Try to reload the image with cache busting
			if (!img.src.includes('?v=')) {
				img.src = `${img.src}?v=${timestamp}`;
			}
			
			// Add error class for styling
			img.classList.add('image-load-error');
		};
		
		// Apply global image error handler
		document.addEventListener('error', (event: Event) => {
			const target = event.target as HTMLElement;
			if (target && target.tagName && target.tagName.toLowerCase() === 'img') {
				handleImageError(event);
			}
		}, true);
		
		// Preload critical project images
		const criticalImages = [
			'/images/projects/skyline-house.jpg',
			'/images/projects/kagundo-mansion.jpg',
			'/images/projects/la-finca.jpg',
			'/images/projects/kiambu-center.jpg',
			'/images/projects/projects-hero.jpg'
		];
		
		criticalImages.forEach(src => {
			const img = new Image();
			img.src = `${src}?v=${timestamp}`;
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Raleway:wght@400;500;600&display=swap" rel="stylesheet">
	<link rel="icon" href="/favicon.png" />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>

{@render children()}

<footer class="bg-primary text-white py-12">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <h3 class="font-montserrat text-xl mb-4"><span class="text-white">HIGH</span><span class="text-gold">POINT</span></h3>
      <p class="font-raleway font-light mb-4">Your trusted partner for building dream homes—seamlessly, affordably, and beautifully.</p>
      <div class="flex space-x-4 mt-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-white hover:text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" class="text-white hover:text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="text-white hover:text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
    </div>
    
    <div>
      <h4 class="text-lg mb-4 font-bold">Quick Links</h4>
      <ul class="space-y-2 font-raleway font-light">
        <li><a href="/about" class="hover:text-gold">About Us</a></li>
        <li><a href="/services" class="hover:text-gold">Services</a></li>
        <li><a href="/projects" class="hover:text-gold">Projects</a></li>
        <li><a href="/contact" class="hover:text-gold">Contact Us</a></li>
        <li><a href="/blog" class="hover:text-gold">Blog</a></li>
      </ul>
    </div>
    
    <div>
      <h4 class="text-lg mb-4 font-bold">Contact</h4>
      <address class="not-italic font-raleway font-light">
        <p>Highpoint, Muthangari Drive</p>
        <p>Nairobi, Kenya</p>
        <p class="mt-2">Mon - Sat 9:00 - 17:00 (EAT)</p>
        <p>Sunday - CLOSED</p>
        <p class="mt-2 flex items-center">
          <a href="tel:+254726227698" class="hover:text-gold flex items-center" aria-label="Call us">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </p>
        <p class="flex items-center">
          <a href="https://wa.me/+254705062034" class="hover:text-gold flex items-center" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
        </p>
        <p><a href="mailto:infohighpointconstruction@gmail.com" class="hover:text-gold">infohighpointconstruction@gmail.com</a></p>
      </address>
    </div>
  </div>
  
  <div class="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-black text-sm text-white font-raleway">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p>&copy; {new Date().getFullYear()} Highpoint Design & Construction. All rights reserved.</p>
      
      <div class="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-end gap-4">
        <a href="/privacy" class="hover:text-gold">Privacy Policy</a>
        <a href="/terms" class="hover:text-gold">Terms of Service</a>
        <a href="/accessibility" class="hover:text-gold">Accessibility</a>
      </div>
    </div>
    
    <div class="text-center mt-4 text-sm text-white/80">
      <p>Website developed by <a href="https://github.com/osuwojr" target="_blank" rel="noopener noreferrer" class="hover:text-gold">Osuwo Jr</a> | Contact: <a href="https://wa.me/+254790932575" target="_blank" rel="noopener noreferrer" class="hover:text-gold">+254 790 932 575</a></p>
    </div>
  </div>
</footer>

<style>
  .text-gold {
    color: var(--color-gold);
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

  .bg-primary {
    background-color: var(--color-primary);
  }

  :global(:root) {
    --color-primary: #0F3457;
    --color-secondary: #2C5282;
    --color-gold: #FBB034;
    --color-light: #F8F9FA;
    --color-dark: #1A202C;
    --color-eco-green: #81C14B;
  }
  
  :global(body) {
    font-family: 'Raleway', sans-serif;
    color: #333;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background-color: var(--color-light);
  }
  
  :global(h1, h2, h3, h4) {
    font-family: 'Montserrat', sans-serif;
  }
  
  :global(a) {
    text-decoration: none;
  }
  
  :global(button) {
    cursor: pointer;
  }
  
  /* Add styles for image error handling */
  :global(img.image-load-error) {
    opacity: 0.5;
    filter: grayscale(100%);
  }
</style>
