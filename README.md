# Highpoint Construction Website

A modern, professional website for Highpoint Construction, a Kenyan construction company specializing in residential and commercial construction projects, built with SvelteKit.

## Features

- **Responsive Design**: Fully responsive design that works seamlessly on mobile, tablet, and desktop
- **Project Portfolio**: Showcase of completed construction projects with detailed case studies
- **Service Listings**: Comprehensive information about construction and architectural services
- **Quote Request System**: Online form for requesting project quotes
- **Team Information**: Company leadership and expertise highlights
- **Contact Information**: Multiple ways for clients to connect with the company
- **Blog Section**: Construction industry insights and company news

## Pages

- **Homepage**: Company overview, featured projects, services, and testimonials
- **Projects**: Portfolio of completed projects with filterable gallery
- **Services**: Detailed information on construction and design services
- **About**: Company history, team, values, and mission
- **Contact**: Office locations, contact form, and map
- **Quote**: Custom project quote request form
- **Blog**: Construction industry insights and company updates

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: TailwindCSS
- **Typography**: Montserrat (headings) and Raleway (body text)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel

## Design System

- **Colors**:
  - Gold: #FF8C00 (primary accent color)
  - Primary: #121212 (dark background)
  - Light: #FFFFFF (text and backgrounds)
  - Black: #000000 (text and accents)

- **Typography**:
  - Headings: Montserrat (sans-serif)
  - Body: Raleway (sans-serif)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Add required images to the `/static/images/` directory

## Building for Production

To create a production version of the site:

```bash
npm run build
```

You can preview the production build with:

```bash
npm run preview
```

## Deployment

The site is configured for deployment on Vercel. To deploy:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## Customization

- Update company information in relevant components
- Replace placeholder images with actual project photos in `/static/images/`
- Adjust services, projects, and team members as needed in each page component

## Project Structure

- `/src/routes`: Page components and routing
- `/src/lib/components`: Reusable UI components
- `/static/images`: Project images and assets
- `/src/app.css`: Global styles and CSS variables

## Accessibility and Performance

The website is built with accessibility in mind, featuring:
- Semantic HTML
- Appropriate color contrast
- Keyboard navigation support
- Screen reader friendly elements

Performance optimizations include:
- Optimized images
- Minimal JavaScript
- Efficient CSS with Tailwind

## License

All rights reserved. This project is proprietary to Highpoint Construction.
