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