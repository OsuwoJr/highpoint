<script>
  import { fade } from 'svelte/transition';
  import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
  <title>Privacy Policy | Highpoint Construction</title>
  <meta name="description" content="Privacy Policy for Highpoint Construction" />
</svelte:head>

<Header />

<main id="main-content" class="min-h-screen py-16 px-4 pt-24" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold mb-8 text-center font-montserrat">Privacy Policy</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>At Highpoint Construction, we respect your privacy and are committed to protecting your personal information. We may collect information such as:</p>
      <ul>
        <li>Name, contact information, and email address</li>
        <li>Project details and service preferences</li>
        <li>Payment information for processing transactions</li>
      </ul>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and manage your construction projects</li>
        <li>Communicate with you about our services</li>
        <li>Improve our services and customer experience</li>
        <li>Send periodic emails regarding your projects or changes to our services</li>
      </ul>
      
      <h2>3. Information Security</h2>
      <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h2>4. Third-Party Disclosure</h2>
      <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services (such as payment processing or project management).</p>
      
      <h2>5. Cookies</h2>
      <p>We may use cookies to enhance your experience on our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.</p>
      
      <h2>6. Changes to Privacy Policy</h2>
      <p>Highpoint Construction may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.</p>
      
      <h2>7. Contact Us</h2>
      <p>If you have any questions about this privacy policy, please contact us at:</p>
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