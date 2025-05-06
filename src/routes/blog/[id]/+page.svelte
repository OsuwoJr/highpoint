<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  
  // Define proper types for blog post content
  type ContentItem = {
    type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote';
    text: string;
    items?: string[];
    author?: string;
  };

  type BlogPost = {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    authorTitle: string;
    authorImage: string;
    date: string;
    image: string;
    readTime: string;
    content: ContentItem[];
    relatedPosts: string[];
  };

  type BlogPostCollection = {
    [key: string]: BlogPost;
  };

  type RelatedPost = {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
  };
  
  // Blog post data - in a real app this would come from a database or CMS
  const blogPosts: BlogPostCollection = {
    'building-in-kenya-diaspora': {
      title: 'A Guide to Building in Kenya for Diaspora Kenyans',
      excerpt: 'Navigating the challenges and opportunities of building your dream home in Kenya while living abroad. Learn about the process, challenges, and how to succeed.',
      category: 'Diaspora',
      author: 'James Mwangi',
      authorTitle: 'CEO & Founder',
      authorImage: '/images/team/james-mwangi.jpg',
      date: 'June 15, 2023',
      image: '/images/blog/diaspora-building.jpg',
      readTime: '8 min read',
      content: [
        {
          type: 'paragraph',
          text: 'For Kenyans living abroad, building a home back in Kenya is often a top priority. It represents a connection to your roots, a potential retirement plan, and a sound investment. However, managing a construction project from thousands of miles away presents unique challenges that require careful planning and the right partnerships.'
        },
        {
          type: 'heading',
          text: 'Understanding the Challenges'
        },
        {
          type: 'paragraph',
          text: 'Distance is the most obvious challenge when building from abroad. You can\'t regularly visit the site to check progress, and communication may be complicated by time differences. Other common challenges include:'
        },
        {
          type: 'list',
          items: [
            'Finding trustworthy professionals to oversee your project',
            'Navigating land purchase and verification processes',
            'Understanding local building regulations and permits',
            'Managing funds and payments securely',
            'Keeping construction on schedule and within budget',
            'Ensuring quality control without being physically present'
          ]
        },
        {
          type: 'heading',
          text: 'Steps to Successful Building from Abroad'
        },
        {
          type: 'subheading',
          text: '1. Secure Your Land Properly'
        },
        {
          type: 'paragraph',
          text: 'Before anything else, ensure your land ownership is legitimate. This means conducting a thorough search at the lands office, verifying boundaries, and confirming there are no disputes. Always engage a reputable lawyer who specializes in property law to handle this process.'
        },
        {
          type: 'subheading',
          text: '2. Work with Professional Project Managers'
        },
        {
          type: 'paragraph',
          text: 'Perhaps the most critical decision you\'ll make is choosing who will oversee your project in your absence. Working with a professional construction company that offers comprehensive project management services ensures you have experienced professionals advocating for your interests.'
        },
        {
          type: 'quote',
          text: 'The success of a diaspora building project depends largely on having reliable eyes and ears on the ground who represent your interests as if they were their own.',
          author: 'James Mwangi, CEO Highpoint Construction'
        },
        {
          type: 'subheading',
          text: '3. Leverage Technology for Oversight'
        },
        {
          type: 'paragraph',
          text: 'Today\'s technology makes remote project management more feasible than ever before. Request regular updates through:'
        },
        {
          type: 'list',
          items: [
            'Video calls with your project manager while they\'re on site',
            'Drone footage of construction progress',
            'A dedicated project management platform with photo and video documentation',
            'Real-time messaging apps for quick communication',
            'Digital payment systems for transparent financial management'
          ]
        },
        {
          type: 'paragraph',
          text: 'At Highpoint Construction, we provide all our diaspora clients with access to a digital portal where they can view daily progress reports, upcoming tasks, and financial statements.'
        },
        {
          type: 'heading',
          text: 'Financial Management Tips'
        },
        {
          type: 'paragraph',
          text: 'Managing finances for a remote construction project requires careful planning:'
        },
        {
          type: 'list',
          items: [
            'Set up a dedicated Kenyan bank account for your project',
            'Work with a construction company that provides detailed cost breakdowns',
            'Release funds in stages based on completed milestones',
            'Build in a contingency fund of at least 15% for unexpected costs',
            'Consider the impact of currency fluctuations on your budget'
          ]
        },
        {
          type: 'paragraph',
          text: 'Always insist on receiving receipts and documentation for all major purchases and payments.'
        },
        {
          type: 'heading',
          text: 'Common Pitfalls to Avoid'
        },
        {
          type: 'paragraph',
          text: 'Many diaspora building projects face setbacks due to avoidable mistakes:'
        },
        {
          type: 'list',
          items: [
            'Sending money to relatives without construction experience to oversee your project',
            'Choosing contractors based solely on the lowest bid',
            'Starting construction without proper designs and approvals',
            'Changing plans mid-construction without understanding the cost implications',
            'Not having a formal contract with clearly defined terms and milestones'
          ]
        },
        {
          type: 'paragraph',
          text: 'By working with established professionals and maintaining clear communication, you can avoid these common pitfalls and ensure your project progresses smoothly.'
        },
        {
          type: 'heading',
          text: 'Conclusion'
        },
        {
          type: 'paragraph',
          text: 'Building a home in Kenya while living abroad is entirely achievable with the right planning and partnerships. By securing reliable professional support, leveraging technology for oversight, and implementing sound financial controls, you can successfully complete your project and create the home you\'ve been dreaming of.'
        },
        {
          type: 'paragraph',
          text: 'At Highpoint Construction, we specialize in helping diaspora Kenyans navigate these challenges. Our comprehensive diaspora building services include land verification assistance, architectural design, construction, and dedicated project management with regular updates and transparent reporting.'
        }
      ],
      relatedPosts: ['land-buying-guide', 'construction-contracts', 'cost-saving-construction']
    }
  };
  
  let postId = '';
  let post: BlogPost | null = null;
  let relatedPostsData: RelatedPost[] = [];
  
  onMount(() => {
    postId = $page.params.id;
    post = blogPosts[postId] || null;
    
    // Populate related posts - in a real implementation, this would be more sophisticated
    if (post && post.relatedPosts) {
      relatedPostsData = post.relatedPosts.map(id => {
        if (blogPosts[id]) {
          return {
            id,
            title: blogPosts[id].title,
            excerpt: blogPosts[id].excerpt,
            image: blogPosts[id].image,
            category: blogPosts[id].category,
            date: blogPosts[id].date
          };
        }
        return null;
      }).filter(Boolean) as RelatedPost[];
    }
  });
  
  // Display proper content based on type
  function renderContent(item: ContentItem): string {
    switch (item.type) {
      case 'paragraph':
        return `<p class="mb-6 text-gray-700 leading-relaxed">${item.text}</p>`;
      case 'heading':
        return `<h2 class="text-2xl font-bold mb-4 mt-8">${item.text}</h2>`;
      case 'subheading':
        return `<h3 class="text-xl font-semibold mb-3 mt-6">${item.text}</h3>`;
      case 'list':
        return `
          <ul class="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            ${item.items ? item.items.map(listItem => `<li>${listItem}</li>`).join('') : ''}
          </ul>
        `;
      case 'quote':
        return `
          <blockquote class="border-l-4 border-gold pl-4 italic my-6 py-2 text-gray-700">
            <p class="mb-2">${item.text}</p>
            ${item.author ? `<cite class="text-sm text-gray-500">— ${item.author}</cite>` : ''}
          </blockquote>
        `;
      default:
        return item.text;
    }
  }
</script>

<svelte:head>
  <title>{post ? post.title : 'Blog Post'} | Highpoint Construction</title>
  <meta name="description" content={post ? post.excerpt : 'Read our latest blog post on construction and design in Kenya.'}>
</svelte:head>

<Header />

<div class="pt-24 bg-light">
  {#if post}
    <!-- Hero Section -->
    <div class="relative">
      <div class="w-full h-[50vh] bg-cover bg-center" style="background-image: url({post.image})"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-light">
        <div class="max-w-4xl mx-auto">
          <div class="bg-gold inline-block px-3 py-1 text-primary font-semibold text-sm mb-4">{post.category}</div>
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
          <div class="flex items-center text-sm">
            <div class="flex items-center">
              <img src={post.authorImage || '/images/team/placeholder.jpg'} alt={post.author} class="w-10 h-10 rounded-full mr-3 object-cover">
              <div>
                <p class="font-semibold">{post.author}</p>
                <p class="text-light/70">{post.authorTitle}</p>
              </div>
            </div>
            <span class="mx-4">|</span>
            <div>
              <span>{post.date}</span>
              <span class="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Article Content -->
    <div class="py-12 md:py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          {#each post.content as item}
            {@html renderContent(item)}
          {/each}
        </div>
        
        <!-- Author Bio -->
        <div class="mt-12 p-6 bg-gray-100 flex items-center flex-col md:flex-row">
          <img src={post.authorImage || '/images/team/placeholder.jpg'} alt={post.author} class="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-6">
          <div>
            <h3 class="text-xl font-bold mb-2">About {post.author}</h3>
            <p class="text-gray-700 mb-2">{post.authorTitle} at Highpoint Construction</p>
            <p class="text-gray-700">James is a construction expert with over 20 years of experience in the Kenyan building industry. He specializes in helping diaspora Kenyans navigate the complexities of building back home while living abroad.</p>
          </div>
        </div>
        
        <!-- Share Links -->
        <div class="mt-8 border-t border-b border-gray-200 py-6">
          <div class="flex flex-col sm:flex-row items-center justify-between">
            <p class="font-semibold mb-4 sm:mb-0">Share this article:</p>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-600 hover:text-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Related Posts -->
    {#if relatedPostsData.length > 0}
      <section class="py-12 px-4 bg-gray-100">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold mb-10">You May Also Like</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each relatedPostsData as relatedPost}
              <div class="bg-white shadow-lg overflow-hidden group h-full">
                <div class="relative overflow-hidden">
                  <img src={relatedPost.image} alt={relatedPost.title} class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute top-0 right-0 bg-gold px-3 py-1 text-primary font-semibold text-sm">
                    {relatedPost.category}
                  </div>
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-3">
                    <a href={`/blog/${relatedPost.id}`} class="hover:text-gold transition-colors">
                      {relatedPost.title}
                    </a>
                  </h3>
                  <p class="text-gray-700 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                  <a href={`/blog/${relatedPost.id}`} class="text-gold font-semibold hover:underline inline-flex items-center">
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
    
    <!-- CTA Section -->
    <section class="py-16 bg-primary text-light px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Start Your Building Journey?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">Whether you're in Kenya or abroad, our team is ready to help you bring your construction vision to life with expertise and care.</p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/quote" class="btn-primary">Get a Quote</a>
          <a href="/contact" class="border-2 border-gold text-gold hover:bg-gold hover:text-primary font-bold px-6 py-3 transition-all uppercase">Contact Us</a>
        </div>
      </div>
    </section>
  {:else}
    <!-- Article Not Found -->
    <div class="py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-400 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 class="text-3xl font-bold mb-4">Article Not Found</h1>
        <p class="text-gray-700 mb-8 text-lg">Sorry, the article you're looking for could not be found or has been moved.</p>
        <a href="/blog" class="btn-primary">Return to Blog</a>
      </div>
    </div>
  {/if}
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
  
  .btn-primary {
    background-color: var(--color-gold);
    color: var(--color-dark);
    padding: 0.75rem 1.5rem;
    border-radius: 0;
    font-weight: bold;
    transition: all 0.3s ease;
    text-align: center;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .btn-primary:hover {
    background-color: var(--color-secondary);
    color: var(--color-light);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .prose h2 {
    color: var(--color-primary);
    font-family: 'Montserrat', sans-serif;
  }
  
  .prose h3 {
    color: var(--color-secondary);
    font-family: 'Montserrat', sans-serif;
  }
  
  .prose a {
    color: var(--color-gold);
    text-decoration: none;
  }
  
  .prose a:hover {
    text-decoration: underline;
  }
  
  .prose blockquote {
    border-color: var(--color-gold);
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style> 