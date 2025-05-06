<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Accessibility | Highpoint Construction</title>
  <meta name="description" content="Accessibility information for Highpoint Construction." />
</svelte:head>

<Header />

<main id="main-content" class="min-h-screen py-16 px-4 pt-24" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center font-montserrat">Accessibility Statement</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>Our Commitment to Accessibility</h2>
      <p>Highpoint Construction is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
      
      <h2>Physical Accessibility</h2>
      <p>Our office and showroom strive to be accessible to all clients:</p>
      <ul>
        <li>Wheelchair accessible entrance and client areas</li>
        <li>Accessible restroom facilities</li>
        <li>Staff trained to assist clients with various needs</li>
      </ul>
      
      <h2>Website Accessibility</h2>
      <p>We aim to make our website compliant with WCAG 2.1 Level AA standards. Features include:</p>
      <ul>
        <li>Keyboard navigation</li>
        <li>Screen reader compatibility</li>
        <li>Text alternatives for images</li>
        <li>Sufficient color contrast</li>
        <li>Resizable text without loss of content or functionality</li>
        <li>Skip navigation links</li>
      </ul>
      
      <h2>Accommodation Requests</h2>
      <p>If you have specific accessibility needs or encounter barriers on our website or at our office, please contact us. We are committed to making reasonable accommodations and providing the best experience possible for all our clients.</p>
      
      <h2>Continuous Improvement</h2>
      <p>We are actively working to increase the accessibility and usability of our website and welcome your feedback. If you find any issues or have suggestions for improvement, please contact us.</p>
      
      <h2>Contact Information</h2>
      <p>If you have questions or need assistance regarding accessibility at Highpoint Construction:</p>
      <p>Email: <a href="mailto:info@highpoint-construction.com">info@highpoint-construction.com</a></p>
      <p>Phone: <a href="tel:+254712345678">+254 712 345 678</a></p>
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