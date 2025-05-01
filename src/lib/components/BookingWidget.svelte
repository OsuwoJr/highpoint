<script>
    import { bookingStore } from '$lib/stores/bookingStore';
    import { onMount } from 'svelte';
  
    // Load Booksy widget
    onMount(() => {
      const script = document.createElement('script');
      script.src = 'https://booksy.com/widget/code.js';
      script.setAttribute('data-affiliate-id', 'YOUR_SALON_ID');
      script.async = true;
      document.body.appendChild(script);
    });
  </script>
  
  <div id="booksy-widget" class="my-8"></div>