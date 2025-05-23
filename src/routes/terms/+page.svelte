<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Terms of Service | Highpoint Construction</title>
  <meta name="description" content="Terms of Service for Highpoint Construction" />
</svelte:head>

<Header />

<main id="main-content" class="min-h-screen py-16 px-4 pt-24" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center font-montserrat">Terms of Service</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Highpoint Construction website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site or services.</p>
      
      <h2>2. Projects and Cancellations</h2>
      <p>When engaging Highpoint Construction for a project:</p>
      <ul>
        <li>A deposit may be required to initiate certain projects</li>
        <li>Project cancellations must be communicated in writing</li>
        <li>Cancellation fees may apply depending on project stage</li>
        <li>We reserve the right to refuse service to anyone</li>
      </ul>
      
      <h2>3. Payment Terms</h2>
      <p>We accept various payment methods including bank transfers, mobile money, and credit/debit cards. Prices for our services may change without notice. We reserve the right to refuse service if payment cannot be processed according to the agreed schedule.</p>
      
      <h2>4. Service Guarantees</h2>
      <p>We strive to provide high-quality construction services. Our work comes with service guarantees as specified in individual contracts. Any issues should be reported promptly for resolution.</p>
      
      <h2>5. Intellectual Property</h2>
      <p>The Highpoint Construction name, logo, website design, and content are the property of Highpoint Construction and are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express consent.</p>
      
      <h2>6. Limitation of Liability</h2>
      <p>Highpoint Construction shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, except as explicitly stated in a signed contract.</p>
      
      <h2>7. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes.</p>
      
      <h2>8. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us:</p>
      <p>Email: <a href="mailto:infohighpointconstruction@gmail.com">infohighpointconstruction@gmail.com</a></p>
      <p class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        Phone: <a href="tel:+254726227698">+254 726 227 698</a>
      </p>
      <p class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
        <a href="https://wa.me/+254705062034" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
      </p>
    </div>
  </div>
</main>

<style>
  .prose h2 {
    color: var(--color-primary);
    margin-top: 2rem;
    font-family: 'Montserrat', sans-serif;
  }
  
  .prose p, .prose li {
    color: var(--color-secondary);
    font-family: 'Raleway', sans-serif;
  }
  
  .prose a {
    color: var(--color-gold);
    text-decoration: none;
  }
  
  .prose a:hover {
    text-decoration: underline;
  }
</style> 