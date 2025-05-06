<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  
  // Blog post data
  const blogPosts = [
    {
      id: 'building-in-kenya-diaspora',
      title: 'A Guide to Building in Kenya for Diaspora Kenyans',
      excerpt: 'Navigating the challenges and opportunities of building your dream home in Kenya while living abroad. Learn about the process, challenges, and how to succeed.',
      category: 'Diaspora',
      author: 'Victor Odhiambo',
      date: 'June 15, 2023',
      image: '/images/blog/diaspora-building.jpg',
      readTime: '8 min read',
      featured: true,
      tags: ['Diaspora', 'Project Management', 'Investment']
    },
    {
      id: 'sustainable-materials-kenya',
      title: 'Sustainable Building Materials for Modern Kenyan Homes',
      excerpt: 'Explore environmentally friendly and locally sourced materials that are perfect for construction in Kenya\'s diverse climate regions.',
      category: 'Sustainability',
      author: 'Meschack Ojowi',
      date: 'July 23, 2023',
      image: '/images/blog/sustainable-materials.jpg',
      readTime: '6 min read',
      featured: true,
      tags: ['Sustainability', 'Materials', 'Environment']
    },
    {
      id: 'cost-saving-construction',
      title: '10 Ways to Save Costs During Your Construction Project',
      excerpt: 'Practical tips to help you manage your budget effectively without compromising on quality or safety during your building project.',
      category: 'Budget',
      author: 'OsuwoJr',
      date: 'August 10, 2023',
      image: '/images/blog/cost-saving.jpg',
      readTime: '5 min read',
      featured: false,
      tags: ['Budget', 'Cost Saving', 'Planning']
    },
    {
      id: 'kenyan-architecture-trends',
      title: 'Current Architectural Trends Shaping Kenyan Homes',
      excerpt: 'From indoor-outdoor living to smart home integration, discover the design trends that are defining modern Kenyan residential architecture.',
      category: 'Design',
      author: 'Angela Muthoni',
      date: 'September 5, 2023',
      image: '/images/blog/architecture-trends.jpg',
      readTime: '7 min read',
      featured: false,
      tags: ['Design', 'Architecture', 'Trends']
    },
    {
      id: 'land-buying-guide',
      title: 'Essential Guide to Buying Land for Construction in Kenya',
      excerpt: 'What you need to know before purchasing land for your building project, including legal considerations, location factors, and due diligence steps.',
      category: 'Property',
      author: 'Julius Omondi',
      date: 'October 12, 2023',
      image: '/images/blog/land-buying.jpg',
      readTime: '9 min read',
      featured: false,
      tags: ['Property', 'Legal', 'Investment']
    },
    {
      id: 'kitchen-renovation-ideas',
      title: 'Modern Kitchen Renovation Ideas for Kenyan Homes',
      excerpt: 'Transform your kitchen with these contemporary design ideas that blend functionality with aesthetic appeal for the heart of your home.',
      category: 'Renovation',
      author: 'Victor Odhiambo',
      date: 'November 20, 2023',
      image: '/images/blog/kitchen-renovation.jpg',
      readTime: '5 min read',
      featured: false,
      tags: ['Renovation', 'Interior Design', 'Kitchen']
    },
    {
      id: 'construction-contracts',
      title: 'Understanding Construction Contracts and Agreements',
      excerpt: 'A breakdown of key elements in construction contracts and what to watch for before signing with a contractor or construction company.',
      category: 'Legal',
      author: 'OsuwoJr',
      date: 'December 8, 2023',
      image: '/images/blog/contracts.jpg',
      readTime: '10 min read',
      featured: false,
      tags: ['Legal', 'Contracts', 'Planning']
    },
    {
      id: 'building-inspector-role',
      title: 'The Role of Building Inspectors in Your Construction Project',
      excerpt: 'Why building inspections matter and how they ensure the quality, safety, and compliance of your construction project in Kenya.',
      category: 'Regulations',
      author: 'Julius Omondi',
      date: 'January 15, 2024',
      image: '/images/blog/inspections.jpg',
      readTime: '6 min read',
      featured: false,
      tags: ['Regulations', 'Quality Control', 'Compliance']
    },
    {
      id: 'interior-design-trends-2024',
      title: '2024 Interior Design Trends for Kenyan Homes',
      excerpt: 'Discover the hottest interior design trends shaping Kenyan homes this year, from materials and colors to layouts and styling.',
      category: 'Design',
      author: 'Angela Muthoni',
      date: 'February 10, 2024',
      image: '/images/blog/interior-design-trends.jpg',
      readTime: '7 min read',
      featured: true,
      tags: ['Interior Design', 'Trends', 'Style']
    },
    {
      id: 'eco-friendly-building-practices',
      title: 'Eco-Friendly Building Practices for Sustainable Kenyan Homes',
      excerpt: 'How to incorporate green building techniques and sustainable practices in your Kenyan construction project to reduce environmental impact.',
      category: 'Sustainability',
      author: 'Meschack Ojowi',
      date: 'March 5, 2024',
      image: '/images/blog/eco-friendly-building.jpg',
      readTime: '8 min read',
      featured: false,
      tags: ['Sustainability', 'Green Building', 'Environment']
    },
    {
      id: 'home-security-systems',
      title: 'Modern Home Security Systems for Kenyan Properties',
      excerpt: 'The latest technologies and systems to keep your Kenyan property safe and secure, from smart security to traditional methods.',
      category: 'Technology',
      author: 'OsuwoJr',
      date: 'April 12, 2024',
      image: '/images/blog/home-security.jpg',
      readTime: '6 min read',
      featured: false,
      tags: ['Security', 'Technology', 'Smart Home']
    },
    {
      id: 'water-conservation-systems',
      title: 'Water Conservation Systems for Modern Kenyan Homes',
      excerpt: 'Innovative solutions to reduce water usage and implement sustainable water management in residential properties across Kenya.',
      category: 'Sustainability',
      author: 'Angela Muthoni',
      date: 'May 18, 2024',
      image: '/images/blog/water-conservation.jpg',
      readTime: '7 min read',
      featured: false,
      tags: ['Sustainability', 'Water Conservation', 'Resources']
    }
  ];
  
  // Categories for filtering
  const categories = [
    'All',
    ...new Set(blogPosts.map(post => post.category))
  ];

  // Extract all unique tags for popular tags section
  const allTags = blogPosts.flatMap(post => post.tags || []);
  
  // Fixed type for tag frequency
  const tagFrequency: Record<string, number> = allTags.reduce((acc: Record<string, number>, tag: string) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  
  const popularTags = Object.entries(tagFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(entry => entry[0]);
  
  // State
  let selectedCategory = 'All';
  let searchQuery = '';
  let selectedTag = '';
  
  // Filtered posts
  $: filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === '' || (post.tags && post.tags.includes(selectedTag));
    
    return matchesCategory && matchesSearch && matchesTag;
  });
  
  // Featured posts
  $: featuredPosts = blogPosts.filter(post => post.featured);

  // Handle tag selection
  function selectTag(tag: string) {
    selectedTag = tag === selectedTag ? '' : tag;
    selectedCategory = 'All';
  }
</script>

<svelte:head>
  <title>Construction & Design Blog | Highpoint Construction</title>
  <meta name="description" content="Stay updated with the latest trends, tips, and insights on construction, architecture, and interior design in Kenya. Expert advice from Highpoint Construction.">
</svelte:head>

<Header />

<div class="pt-24 bg-light">
  <!-- Hero Section -->
  <section class="relative">
    <div class="absolute inset-0 bg-primary opacity-70 z-10"></div>
    <div class="w-full h-[40vh] bg-cover bg-center" style="background-image: url('/images/blog/blog-hero.jpg')"></div>
    <div class="absolute inset-0 flex items-center justify-center z-20">
      <div class="text-center px-4">
        <h1 class="text-light text-4xl md:text-5xl font-bold mb-4">Construction & Design Blog</h1>
        <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p class="text-light text-lg md:text-xl max-w-3xl mx-auto">Expert insights, tips, and inspiration for your building project</p>
      </div>
    </div>
  </section>
  
  <!-- Featured Posts -->
  {#if featuredPosts.length > 0}
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-10">Featured Articles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each featuredPosts as post}
            <div class="bg-white shadow-lg overflow-hidden group h-full hover:shadow-xl transition-shadow duration-300">
              <div class="relative overflow-hidden">
                <img src={post.image} alt={post.title} class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-0 right-0 bg-gold px-3 py-1 text-primary font-semibold text-sm">
                  {post.category}
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center text-gray-500 text-sm mb-3 justify-between">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 class="text-2xl font-bold mb-3">
                  <a href={`/blog/${post.id}`} class="hover:text-gold transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p class="text-gray-700 mb-4">{post.excerpt}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each post.tags || [] as tag}
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer" on:click={() => selectTag(tag)}>
                      #{tag}
                    </span>
                  {/each}
                </div>
                <a href={`/blog/${post.id}`} class="text-gold font-semibold hover:underline inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  {/if}

  <!-- Popular Tags -->
  <section class="py-8 px-4 bg-gray-50">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-2xl font-bold mb-4">Popular Topics</h2>
      <div class="flex flex-wrap gap-2">
        {#each popularTags as tag}
          <button 
            class="px-4 py-2 rounded-full text-sm border {selectedTag === tag ? 'bg-gold text-primary border-gold' : 'bg-white text-gray-700 border-gray-200 hover:border-gold'} transition-colors"
            on:click={() => selectTag(tag)}
          >
            #{tag}
          </button>
        {/each}
        {#if selectedTag}
          <button 
            class="px-4 py-2 rounded-full text-sm bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
            on:click={() => selectedTag = ''}
          >
            Clear Filter
          </button>
        {/if}
      </div>
    </div>
  </section>
  
  <!-- Blog Filter and Search -->
  <section class="py-8 px-4 bg-gray-100">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div>
          <label class="font-medium mr-2">Filter by Category:</label>
          <div class="inline-flex flex-wrap gap-2 mt-2">
            {#each categories as category}
              <button 
                class="px-4 py-2 text-sm rounded {selectedCategory === category ? 'bg-gold text-primary' : 'bg-white text-gray-700 hover:bg-gray-200'} transition-colors"
                on:click={() => selectedCategory = category}
              >
                {category}
              </button>
            {/each}
          </div>
        </div>
        
        <div class="w-full md:w-auto">
          <div class="relative">
            <input 
              type="text" 
              placeholder="Search articles..." 
              bind:value={searchQuery}
              class="pl-10 pr-4 py-2 border border-gray-300 focus:border-gold focus:outline-none w-full md:w-64 rounded"
            >
            <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- All Blog Posts -->
  <section class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      {#if filteredPosts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredPosts as post}
            <div class="bg-white shadow-lg overflow-hidden group h-full hover:shadow-xl transition-shadow duration-300">
              <div class="relative overflow-hidden">
                <img src={post.image} alt={post.title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute top-0 right-0 bg-gold px-3 py-1 text-primary font-semibold text-sm">
                  {post.category}
                </div>
              </div>
              <div class="p-6">
                <div class="flex items-center text-gray-500 text-sm mb-3 justify-between">
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime}
                  </span>
                </div>
                <h3 class="text-xl font-bold mb-3">
                  <a href={`/blog/${post.id}`} class="hover:text-gold transition-colors">
                    {post.title}
                  </a>
                </h3>
                <p class="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each post.tags || [] as tag}
                    <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full hover:bg-gray-200 cursor-pointer" on:click={() => selectTag(tag)}>
                      #{tag}
                    </span>
                  {/each}
                </div>
                <a href={`/blog/${post.id}`} class="text-gold font-semibold hover:underline inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="py-16 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-2xl font-bold mb-2">No Articles Found</h3>
          <p class="text-gray-600 mb-6">We couldn't find any blog posts matching your search criteria.</p>
          <button 
            on:click={() => {
              selectedCategory = 'All';
              searchQuery = '';
              selectedTag = '';
            }}
            class="inline-flex items-center text-gold font-semibold hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Reset Filters
          </button>
        </div>
      {/if}
    </div>
  </section>
  
  <!-- Newsletter -->
  <section class="py-16 px-4 bg-primary text-light">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Stay Updated</h2>
      <div class="w-24 h-1 bg-gold mx-auto mb-6"></div>
      <p class="mb-8 text-lg">Subscribe to our newsletter for the latest construction tips, design trends, and industry insights.</p>
      
      <form class="flex flex-col sm:flex-row max-w-lg mx-auto">
        <input 
          type="email" 
          placeholder="Your email address" 
          required
          class="flex-grow p-3 bg-white/10 border border-white/20 text-light focus:outline-none focus:border-gold sm:rounded-r-none"
        >
        <button 
          type="submit" 
          class="bg-gold text-primary font-bold py-3 px-6 mt-2 sm:mt-0 sm:rounded-l-none hover:bg-white transition-colors"
        >
          Subscribe
        </button>
      </form>
      <p class="mt-4 text-sm text-light/70">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  </section>
</div>

<style>
  .bg-light {
    background-color: var(--color-light);
  }
  
  .bg-primary {
    background-color: var(--color-primary);
  }
  
  .bg-gold {
    background-color: var(--color-gold);
  }
  
  .text-gold {
    color: var(--color-gold);
  }
  
  .text-light {
    color: var(--color-light);
  }
  
  .text-primary {
    color: var(--color-primary);
  }
  
  .border-gold {
    border-color: var(--color-gold);
  }

  /* Line clamp utility (limit to 3 lines) */
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 