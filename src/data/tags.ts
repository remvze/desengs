/*
Types:
What is the site for?

- Portfolio:
--- A website showcasing individual or company work, skills, or projects.
--- Personal portfolio, designer portfolio, developer portfolio, artist portfolio.

- Landing Page:
--- A single-purpose page focused on conversion or a specific action.
--- Product launch page, signup page, campaign page.

- Marketing Website:
--- A multi-page site promoting a product, service, or brand.
--- Product marketing site, brand site, startup site.

- Corporate Website:
--- An informational website representing an established organization.
--- Enterprise site, company website, professional services site.

- Ecommerce:
--- A website designed to sell products or services online.
--- Online store, DTC store, digital products store.

- Marketplace:
--- A platform connecting buyers and sellers.
--- Multi-vendor marketplace, service marketplace.

- SaaS / Web App:
--- A software product accessed through the browser.
--- SaaS product site, dashboard, web application.

- Blog / Editorial:
--- A content-focused site built around written articles.
--- Blog, editorial site, thought leadership site.

- Media / Content:
--- A website focused on rich media or publishing.
--- Online magazine, news site, podcast site, video platform.

- Community:
--- A website built around interaction between users.
--- Forum, membership site, community platform.

- Educational:
--- A site designed to teach or provide structured learning.
--- Online courses, e-learning platform, school website.

- Tool / Utility:
--- A functional website that provides a specific tool or service.
--- Calculator, generator, converter, productivity tool.

- Event:
--- A website promoting or supporting a time-based event.
--- Conference site, festival site, meetup site.

- Nonprofit:
--- A website representing a mission-driven or charitable organization.
--- NGO site, foundation site, charity site.

- Personal Website:
--- A general-purpose site representing an individual.
--- Personal brand site, resume site, bio site.

- Case Study:
--- A focused deep dive into a specific project, product, or redesign.
--- UX case study, product design breakdown, research case study.

- Documentation:
--- A structured reference or instructional site.
--- API documentation, design system, developer docs.

- Microsite / Web Experience:
--- A short-lived or highly focused experiential website.
--- Campaign microsite, brand experience site, interactive story.

- Directory / Index:
--- A curated collection of links, items, or resources.
--- Job board, tool directory, resource index.

- Dashboard / Admin:
--- A data-heavy interface for managing or monitoring systems.
--- Analytics dashboard, admin panel, internal tool.

- Hybrid:
--- A site intentionally combining multiple primary types.
--- Portfolio + blog, SaaS + community.

- Social Network / Social Platform:
--- A website or app centered on user profiles, social connections, and user-generated content.
--- Social media platform, professional network, creator network, niche social network.



Industries:
Who is the audience?

- Technology:
--- Businesses or products related to software, hardware, or digital services.
--- Software, SaaS, AI, developer tools.

- Business & Finance:
--- Companies focused on business services or financial operations.
--- Consulting, finance, banking, accounting.

- Creative:
--- Industries centered on creativity and design.
--- Design, branding, advertising, photography.

- Media & Entertainment:
--- Content and entertainment-focused organizations.
--- Film, music, gaming, publishing.

- Retail & Ecommerce:
--- Businesses selling consumer goods.
--- Fashion, beauty, consumer products.

- Food & Beverage:
--- Businesses producing or selling food and drinks.
--- Restaurants, cafes, packaged food brands.

- Health & Wellness:
--- Industries focused on physical and mental health.
--- Healthcare, fitness, mental health, wellness.

- Education:
--- Institutions and services focused on learning.
--- Schools, universities, online education.

- Travel & Hospitality:
--- Businesses related to travel and accommodations.
--- Hotels, tourism, experiences.

- Real Estate:
--- Property-related businesses and services.
--- Real estate agencies, property management.

- Sports & Fitness:
--- Sports, fitness, and athletic activities.
--- Gyms, sports teams, training programs.

- Lifestyle:
--- Brands and services centered on everyday life.
--- Personal development, hobbies, communities.

- Science & Environment:
--- Organizations focused on science or sustainability.
--- Research, climate, clean energy.

- Industrial & Manufacturing:
--- Heavy industry and production-based businesses.
--- Manufacturing, construction, engineering.

- Legal & Government:
--- Public institutions and legal services.
--- Law firms, government agencies, civic services.

- Nonprofit & Social Impact:
--- Mission-driven and advocacy-focused organizations.
--- Charities, foundations, social causes.

- Arts & Culture:
--- Cultural institutions and artistic endeavors.
--- Museums, galleries, cultural projects.

- Automotive & Transportation:
--- Transportation-related industries.
--- Automotive, mobility, logistics.

- AI & Data:
--- Products and services focused on artificial intelligence or data.
--- AI tools, machine learning platforms, data analytics.

- Web3 & Blockchain:
--- Decentralized technologies and blockchain-based products.
--- Crypto platforms, NFT marketplaces, DeFi tools.

- HR & Recruiting:
--- Platforms focused on hiring, talent, or internal operations.
--- Recruiting software, job platforms, HR tools.

- Marketing & Sales:
--- Tools and services supporting growth, marketing, and sales.
--- CRM, email marketing, analytics platforms.

- Energy:
--- Organizations focused on energy production or infrastructure.
--- Renewable energy, utilities, climate tech.

- Fashion & Apparel:
--- Brands and platforms centered on clothing and accessories.
--- Fashion labels, apparel ecommerce, designer brands.

- Architecture & Interiors:
--- Professional services for physical space and structural design.
--- Architecture firms, interior design, urban planning.



Styles:
How does it look/feel?

- Minimal:
--- Clean layouts with lots of whitespace and restrained visuals.

- Bold:
--- Strong typography, high contrast, and confident visuals.

- Playful:
--- Fun, colorful, and friendly design language.

- Editorial:
--- Layouts inspired by magazines and publications.

- Experimental:
--- Unconventional layouts, interactions, or navigation.

- Corporate:
--- Professional, structured, and conservative design.

- Luxury:
--- Premium aesthetics with refined typography and spacing.

- Retro:
--- Design inspired by past decades or vintage styles.

- Futuristic:
--- Forward-looking visuals, often tech-inspired.

- Animated:
--- Motion-driven design using animations and transitions.

- Interactive:
--- User-driven interactions beyond standard navigation.

- Brutalist:
--- Raw layouts, system fonts, and intentionally rough aesthetics.

- Swiss / Grid-Based:
--- Strict grid systems with strong typographic hierarchy.

- Organic:
--- Soft shapes, natural palettes, and fluid layouts.

- Dark Mode:
--- Interfaces primarily designed with dark color schemes.

- Monochrome:
--- Designs using a single color or very limited palette.

- Maximalist:
--- Dense, expressive layouts with rich visuals and layering.

- Illustrative:
--- Illustration-led visuals over photography.

- Typographic:
--- Typography-driven design with expressive type usage.
*/

export const types = {
  'blog-editorial': 'Blog / Editorial',
  'case-study': 'Case Study',
  community: 'Community',
  'corporate-website': 'Corporate Website',
  'dashboard-admin': 'Dashboard / Admin',
  'directory-index': 'Directory / Index',
  documentation: 'Documentation',
  ecommerce: 'Ecommerce',
  educational: 'Educational',
  event: 'Event',
  hybrid: 'Hybrid',
  'landing-page': 'Landing Page',
  'marketing-website': 'Marketing Website',
  marketplace: 'Marketplace',
  'media-content': 'Media / Content',
  'microsite-web-experience': 'Microsite / Web Experience',
  nonprofit: 'Nonprofit',
  'personal-website': 'Personal Website',
  portfolio: 'Portfolio',
  'saas-web-app': 'SaaS / Web App',
  'social-network-social-platform': 'Social Network / Social Platform',
  'tool-utility': 'Tool / Utility',
};

export const industries = {
  'ai-data': 'AI & Data',
  'architecture-interiors': 'Architecture & Interiors',
  'arts-culture': 'Arts & Culture',
  'automotive-transportation': 'Automotive & Transportation',
  'business-finance': 'Business & Finance',
  creative: 'Creative',
  education: 'Education',
  energy: 'Energy',
  'fashion-apparel': 'Fashion & Apparel',
  'food-beverage': 'Food & Beverage',
  'health-wellness': 'Health & Wellness',
  'hr-recruiting': 'HR & Recruiting',
  'industrial-manufacturing': 'Industrial & Manufacturing',
  'legal-government': 'Legal & Government',
  lifestyle: 'Lifestyle',
  'marketing-sales': 'Marketing & Sales',
  'media-entertainment': 'Media & Entertainment',
  'nonprofit-social-impact': 'Nonprofit & Social Impact',
  'real-estate': 'Real Estate',
  'retail-ecommerce': 'Retail & Ecommerce',
  'science-environment': 'Science & Environment',
  'sports-fitness': 'Sports & Fitness',
  technology: 'Technology',
  'travel-hospitality': 'Travel & Hospitality',
  'web3-blockchain': 'Web3 & Blockchain',
};

export const styles = {
  animated: 'Animated',
  bold: 'Bold',
  brutalist: 'Brutalist',
  corporate: 'Corporate',
  'dark-mode': 'Dark Mode',
  editorial: 'Editorial',
  experimental: 'Experimental',
  futuristic: 'Futuristic',
  illustrative: 'Illustrative',
  interactive: 'Interactive',
  luxury: 'Luxury',
  maximalist: 'Maximalist',
  minimal: 'Minimal',
  monochrome: 'Monochrome',
  organic: 'Organic',
  playful: 'Playful',
  retro: 'Retro',
  'swiss-grid-based': 'Swiss / Grid-Based',
  typographic: 'Typographic',
};

export const tags = { ...types, ...industries, ...styles };

export type Tag = keyof typeof tags;
