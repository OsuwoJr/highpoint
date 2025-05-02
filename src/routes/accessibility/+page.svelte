<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Accessibility | Belle Royale</title>
  <meta name="description" content="Accessibility information for Belle Royale Hair Salon" />
</svelte:head>

<main id="main-content" class="min-h-screen py-16 px-4" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="font-playfair text-4xl mb-8 text-center">Accessibility Statement</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>Our Commitment to Accessibility</h2>
      <p>Belle Royale is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
      
      <h2>Physical Accessibility</h2>
      <p>Our salon strives to be accessible to all clients:</p>
      <ul>
        <li>Wheelchair accessible entrance and service areas</li>
        <li>Accessible restroom facilities</li>
        <li>Service stations that can accommodate mobility devices</li>
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
      <p>If you have specific accessibility needs or encounter barriers on our website or at our salon, please contact us. We are committed to making reasonable accommodations and providing the best experience possible for all our clients.</p>
      
      <h2>Continuous Improvement</h2>
      <p>We are actively working to increase the accessibility and usability of our website and welcome your feedback. If you find any issues or have suggestions for improvement, please contact us.</p>
      
      <h2>Contact Information</h2>
      <p>If you have questions or need assistance regarding accessibility at Belle Royale:</p>
      <p>Email: <a href="mailto:infobelleroyale@gmail.com">infobelleroyale@gmail.com</a></p>
      <p>Phone: <a href="tel:+254704800614">+254 704 800 614</a></p>
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: #fafafa;
  }
  
  .prose h2 {
    color: #333;
    margin-top: 2rem;
    font-family: 'Playfair Display', serif;
  }
  
  .prose p, .prose li {
    color: #4b5563;
    font-family: 'Lato', sans-serif;
  }
  
  .prose a {
    color: var(--color-gold);
    text-decoration: none;
  }
  
  .prose a:hover {
    text-decoration: underline;
  }
</style> 