<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>Privacy Policy | Belle Royale</title>
  <meta name="description" content="Privacy Policy for Belle Royale Hair Salon" />
</svelte:head>

<main id="main-content" class="min-h-screen py-16 px-4" transition:fade={{ duration: 300 }}>
  <div class="max-w-4xl mx-auto">
    <h1 class="font-playfair text-4xl mb-8 text-center">Privacy Policy</h1>
    
    <div class="prose prose-lg max-w-none">
      <p>Last Updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Information We Collect</h2>
      <p>At Belle Royale, we respect your privacy and are committed to protecting your personal information. We may collect information such as:</p>
      <ul>
        <li>Name, contact information, and email address</li>
        <li>Appointment history and service preferences</li>
        <li>Payment information for processing transactions</li>
      </ul>
      
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Process and manage your appointments</li>
        <li>Communicate with you about our services</li>
        <li>Improve our services and customer experience</li>
        <li>Send periodic emails regarding your appointments or changes to our services</li>
      </ul>
      
      <h2>3. Information Security</h2>
      <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
      
      <h2>4. Third-Party Disclosure</h2>
      <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our services (such as payment processing or appointment scheduling).</p>
      
      <h2>5. Cookies</h2>
      <p>We may use cookies to enhance your experience on our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.</p>
      
      <h2>6. Changes to Privacy Policy</h2>
      <p>Belle Royale may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.</p>
      
      <h2>7. Contact Us</h2>
      <p>If you have any questions about this privacy policy, please contact us at:</p>
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