<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Terms of Service | Belle Royale</title>
  <meta name="description" content="Terms of Service for Belle Royale Hair Salon" />
</svelte:head>

<main id="main-content" class="min-h-screen py-16 px-4" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="font-playfair text-4xl mb-8 text-center">Terms of Service</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using the Belle Royale website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site or services.</p>
      
      <h2>2. Appointments and Cancellations</h2>
      <p>When booking an appointment with Belle Royale:</p>
      <ul>
        <li>A deposit may be required to secure certain appointments</li>
        <li>Cancellations must be made at least 24 hours in advance</li>
        <li>Late cancellations or no-shows may result in a cancellation fee</li>
        <li>We reserve the right to refuse service to anyone</li>
      </ul>
      
      <h2>3. Payment Terms</h2>
      <p>We accept various payment methods including cash, mobile money, and credit/debit cards. Prices for our services may change without notice. We reserve the right to refuse service if payment cannot be processed.</p>
      
      <h2>4. Service Guarantees</h2>
      <p>We strive to provide high-quality services. If you are unsatisfied with your service, please contact us within 7 days to discuss solutions. Re-do services may be provided at our discretion.</p>
      
      <h2>5. Intellectual Property</h2>
      <p>The Belle Royale name, logo, website design, and content are the property of Belle Royale and are protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express consent.</p>
      
      <h2>6. Limitation of Liability</h2>
      <p>Belle Royale shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
      
      <h2>7. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes.</p>
      
      <h2>8. Contact Information</h2>
      <p>If you have any questions about these Terms of Service, please contact us:</p>
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