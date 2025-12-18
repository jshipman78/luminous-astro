# Luminous Productions Website Build Specification

## Project Overview

Build a complete website for Luminous Productions, a digital media services company based in Commerce, TX. This is a ground-up rebuild replacing an existing WordPress site.

**Live Domain:** luminouspro.com  
**Tagline:** Look good. Work smarter.  
**Business:** Digital Media Services — Photography, Web Design, Business Technology  
**Location:** Commerce, TX (serving 50-60 mile radius in Northeast Texas)  
**Founded:** November 2001 (23+ years in business)  
**Booking Portal:** portal.luminouspro.com (external, link to it — do not build)

---

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Hosting:** Vercel
- **Forms:** Formspree or simple mailto link
- **Analytics:** Google Analytics 4 (add placeholder)
- **Images:** Use placeholder images initially — client will provide actual images later

---

## Brand Identity

### Positioning
Luminous Productions is Northeast Texas's trusted partner for digital media services — from the photography that makes the first impression to the technology that makes business run smoother.

### Voice & Tone
- Professional but approachable
- Confident without being boastful
- Local and personal
- Experienced but modern

### Design Direction
- **Aesthetic:** Clean, photography-forward, modern professional
- **Theme:** Light with bold accent colors
- **Feel:** Premium but accessible

### Color Palette
```css
--color-primary: #1a1a2e;      /* Deep charcoal - sophistication */
--color-accent: #f0a500;       /* Warm amber/gold - energy, Texas warmth */
--color-background: #ffffff;   /* Clean white */
--color-text: #2d2d2d;         /* Near-black - readability */
--color-muted: #6b7280;        /* Warm gray - secondary text */
--color-light-bg: #f9fafb;     /* Light gray - section backgrounds */
```

### Typography
- **Headlines:** Distinctive serif or modern sans (suggest: Playfair Display, Fraunces, or Outfit)
- **Body:** Clean sans-serif (suggest: DM Sans or Source Sans Pro)
- Use Google Fonts

### Design Requirements
- Mobile-first responsive design
- Fast loading (target 90+ PageSpeed)
- Photography-forward — images should be prominent
- Clear CTAs throughout
- Sticky header with phone number and primary CTA
- No generic "AI slop" aesthetics — make it distinctive and memorable

---

## Site Architecture

```
luminouspro.com
│
├── / (Home)
│
├── /real-estate-photography (Pillar Page)
│   ├── /matterport-3d-tours
│   ├── /aerial-drone-photography
│   └── /real-estate-video
│
├── /portrait-photography
│   ├── /wedding-photography
│   ├── /family-photography
│   ├── /senior-portraits
│   └── /business-headshots
│
├── /digital-services
│   ├── /web-design
│   ├── /business-automation
│   └── /video-production
│
├── /portfolio (filterable gallery)
│
├── /about
│
├── /service-areas
│   ├── /commerce-tx
│   ├── /greenville-tx
│   ├── /rockwall-tx
│   ├── /sulphur-springs-tx
│   ├── /paris-tx
│   ├── /cooper-tx
│   └── /quinlan-tx
│
├── /contact
│
└── (Future: /blog)
```

---

## Global Components

### Header (Sticky)
- Logo (left): "Luminous Productions" text or logo image
- Navigation (center/right):
  - Real Estate Photography (dropdown: Matterport, Aerial, Video)
  - Portrait Photography (dropdown: Wedding, Family, Senior, Business)
  - Digital Services (dropdown: Web Design, Business Automation, Video Production)
  - Portfolio
  - About
  - Service Areas
  - Contact
- Phone number: (903) 851-3183
- Primary CTA button: "Book Real Estate Photos" → portal.luminouspro.com

### Footer
- Logo and tagline
- Quick links to main pages
- Service areas list
- Contact info:
  - Phone: (903) 851-3183
  - Email: info@luminouspro.com
  - Address: 2913 Charity Rd, Commerce, TX 75428
- Social links:
  - Facebook: https://www.facebook.com/luminousProMarketing
  - Instagram: https://instagram.com/luminouspro_photography
  - YouTube: https://www.youtube.com/@LuminousProMedia/videos
- Copyright: © 2024 Luminous Productions. All rights reserved.
- Links: Privacy Policy | Terms and Conditions

---

## Page Content Specifications

### HOME PAGE (/)

**Meta Title:** Luminous Productions | Photography & Digital Media Services | Commerce, TX
**Meta Description:** Professional photography, web design, and business technology services in Northeast Texas. Real estate photography, portraits, websites, and AI automation. Serving Commerce, Greenville, Rockwall & beyond since 2001.

**Sections:**

#### Hero
- Headline: "Look good. Work smarter."
- Subhead: "Photography. Websites. Smarter business. Serving Northeast Texas since 2001."
- Primary CTA: "Book Real Estate Photos" → portal.luminouspro.com
- Secondary CTA: "Explore Our Services" → #services or /portfolio
- Background: [PLACEHOLDER: Full-width hero image - stunning real estate interior or lifestyle shot]

#### Services Overview (3 cards)
1. **Visual Media**
   - Icon: Camera
   - Text: "Real estate photography, portraits, weddings, and video that make you stand out."
   - Link: /real-estate-photography

2. **Web & Digital Presence**
   - Icon: Globe/Monitor
   - Text: "Websites, SEO, and digital marketing that bring customers to your door."
   - Link: /digital-services/web-design

3. **Business Technology**
   - Icon: Lightbulb or Gear
   - Text: "AI integration and automation that saves time and cuts costs."
   - Link: /digital-services/business-automation

#### Social Proof
- Headline: "Trusted across Northeast Texas"
- Text: "200+ real estate agents, local businesses, and families served"
- Optional: Client logos or testimonial carousel
- Notable clients: City of Commerce, Commerce Chamber of Commerce, Commerce EDC, New Horizons, Northeast Texas Children's Museum

#### Featured Work
- Headline: "Recent Work"
- 4-6 portfolio thumbnails (mix of categories)
- Link: "View Full Portfolio" → /portfolio

#### Local Focus
- Headline: "Proudly Local"
- Text: "Serving Commerce, Greenville, Rockwall, Sulphur Springs, Paris, Cooper, Quinlan, and surrounding communities. No travel fees within our service area — we're your neighbors, not driving in from Dallas."
- Visual: Map graphic or service area illustration

#### CTA Section
- Headline: "Ready to get started?"
- Phone: (903) 851-3183
- Buttons: "Book Real Estate Photos" | "Contact Us"

---

### REAL ESTATE PHOTOGRAPHY (/real-estate-photography)

**Meta Title:** Real Estate Photography | Listing Photos & 3D Tours | Commerce, Greenville, Rockwall TX
**Meta Description:** Professional real estate photography, Matterport 3D tours, drone aerials, and video for agents in Northeast Texas. Fast turnaround, no travel fees. Book online.

**Sections:**

#### Hero
- Headline: "Sell faster. For more."
- Subhead: "Professional listing photography, 3D tours, drone aerials, and video for Northeast Texas real estate agents."
- CTA: "Book Your Shoot" → portal.luminouspro.com
- Background: [PLACEHOLDER: Real estate interior - living room or kitchen]

#### Why Professional Photos Matter
Text: "Homes with professional photography sell 32% faster and for up to $11,000 more. Your listing photos are the first showing — make them count."

#### Services Grid (6 items)

1. **HDR Listing Photography**
   Interior and exterior photos optimized for MLS, print, and social media. Bright, sharp, and designed to stop the scroll.

2. **Matterport 3D Virtual Tours**
   Give buyers 24/7 access to walk through the property from anywhere. The gold standard in virtual tours.
   Link: /matterport-3d-tours

3. **Aerial & Drone Photography**
   Showcase the property, lot, and neighborhood from above. FAA-certified pilots.
   Link: /aerial-drone-photography

4. **Property Video Tours**
   Cinematic walkthroughs for social media, YouTube, and MLS.
   Link: /real-estate-video

5. **2D Floor Plans**
   Clear, accurate layouts that help buyers understand flow and dimensions.

6. **Twilight Photography**
   Dramatic dusk shots that highlight outdoor lighting and curb appeal.

#### The Luminous Advantage (bullet points or icons)
- **Local** — Based in Commerce, not Dallas. No travel fees for our service area.
- **Fast** — 24-48 hour turnaround on most shoots.
- **Easy Booking** — Schedule in 60 seconds through our online portal.
- **Full Service** — One team, all media types. No coordinating multiple vendors.
- **23+ Years** — We've been doing this since 2001.

#### Service Area
Text: "We photograph listings throughout Northeast Texas: Commerce, Greenville, Rockwall, Sulphur Springs, Paris, Cooper, Quinlan, and everywhere in between."
Links to location pages

#### Booking CTA
- Headline: "Ready to book your next listing?"
- Primary: "Book Online" → portal.luminouspro.com
- Secondary: "Questions? Call (903) 851-3183"

#### FAQ Section
Q: How much does real estate photography cost?
A: Pricing depends on property size and services needed. Get an instant quote through our booking portal. Most residential shoots start around $150-200.

Q: How quickly will I receive my photos?
A: Standard turnaround is 24-48 hours. Rush delivery available.

Q: Do you travel to my area?
A: Yes! We serve all of Northeast Texas including Commerce, Greenville, Rockwall, Sulphur Springs, Paris, Cooper, and Quinlan. No travel fees within our service area.

Q: What equipment do you use?
A: Professional DSLR cameras, wide-angle lenses, HDR processing, Matterport Pro cameras for 3D tours, and FAA-certified drones for aerials.

---

### MATTERPORT 3D TOURS (/matterport-3d-tours)

**Meta Title:** Matterport 3D Virtual Tours | Real Estate 3D Tours | Northeast Texas
**Meta Description:** Immersive Matterport 3D virtual tours for real estate listings in Commerce, Greenville, Rockwall & Northeast Texas. Let buyers walk through 24/7.

#### Hero
- Headline: "Open house. 24/7."
- Subhead: "Immersive 3D tours that let buyers explore every room from anywhere in the world."
- CTA: "Book a 3D Tour" → portal.luminouspro.com

#### What is Matterport?
Text: "Matterport creates a complete digital twin of your property. Buyers can navigate room-to-room, view the dollhouse overview, and explore every detail — all from their phone or computer. It's the closest thing to being there without being there."

#### Benefits
- 24/7 access for buyers anywhere in the world
- Reduces unqualified showings
- Stands out in MLS listings
- Syndicates to Zillow, Realtor.com, and more
- Includes measurement tools and floor plan view

#### How It Works
1. We capture your property with a Matterport Pro camera
2. Processing creates the interactive 3D model
3. You receive a shareable link within 24-48 hours
4. Embed on MLS, your website, social media, anywhere

#### Sample Tour
[PLACEHOLDER: Embed Matterport tour or screenshot with "View Sample Tour" link]

#### CTA
"Ready to give your listing the 3D advantage?"
Book Now → portal.luminouspro.com

---

### AERIAL DRONE PHOTOGRAPHY (/aerial-drone-photography)

**Meta Title:** Aerial Drone Photography | Real Estate Drone Photos | Northeast Texas
**Meta Description:** FAA-certified drone photography for real estate listings. Showcase properties, acreage, and neighborhoods from above. Serving Commerce, Greenville, Rockwall TX.

#### Hero
- Headline: "See the bigger picture."
- Subhead: "Aerial photography that shows off the property, the land, and the location."
- CTA: "Book Aerial Photos" → portal.luminouspro.com

#### Content
Text: "Ground-level photos can't show everything. Aerial photography reveals the full scope of a property — lot size, landscaping, roof condition, proximity to amenities, and neighborhood context. Essential for acreage, waterfront, and luxury listings."

#### What Drone Photography Shows
- Full property boundaries and lot size
- Landscaping and outdoor features
- Roof condition (useful for inspections)
- Pool, outbuildings, driveways
- Neighborhood context and nearby amenities
- Views and natural surroundings

#### FAA Certified
Text: "Our drone pilots are FAA Part 107 certified and fully insured. We follow all regulations for safe, legal aerial photography."

#### Gallery
[PLACEHOLDER: 4-6 aerial photo examples]

#### CTA
"Add aerial photos to your listing."
Book Now → portal.luminouspro.com

---

### REAL ESTATE VIDEO (/real-estate-video)

**Meta Title:** Real Estate Video Tours | Property Video Marketing | Northeast Texas
**Meta Description:** Professional real estate video tours for listings in Northeast Texas. Cinematic walkthroughs, social media clips, and agent promos. Stand out and sell faster.

#### Hero
- Headline: "Bring your listing to life."
- Subhead: "Video tours that capture attention and keep buyers watching."
- CTA: "Book Video" → portal.luminouspro.com

#### Content
Text: "Video gets 1200% more shares than text and images combined. A professional video tour lets buyers experience the flow of a home in a way photos simply can't. Perfect for social media, YouTube, and standing out in a crowded MLS."

#### Video Types We Produce
1. **Property Walkthrough** — Smooth, cinematic tour of the entire home
2. **Social Media Clips** — Short-form video optimized for Instagram, TikTok, Facebook
3. **Aerial + Ground Combo** — Complete property story from sky to interior
4. **Agent Introduction** — Personal touch with agent on-camera

#### Our Video Specialist
Text: "Ivan Lopez leads our video production, bringing expertise in cinematic real estate video and dynamic content creation."

#### Sample Videos
[PLACEHOLDER: YouTube embeds or video thumbnails]

#### CTA
"Ready to stand out with video?"
Book Now → portal.luminouspro.com

---

### PORTRAIT PHOTOGRAPHY (/portrait-photography)

**Meta Title:** Portrait Photography | Family, Wedding, Senior Photos | Commerce, Greenville TX
**Meta Description:** Professional portrait photography in Northeast Texas. Weddings, family sessions, senior portraits, and business headshots. Based in Commerce, serving Greenville, Rockwall & beyond.

#### Hero
- Headline: "Moments worth keeping."
- Subhead: "Wedding, family, senior, and business photography for Northeast Texas."
- Background: [PLACEHOLDER: Portrait/lifestyle image]

#### Services Grid (4 cards linking to subpages)
1. **Wedding Photography** → /wedding-photography
   "Your love story, beautifully told."

2. **Family Photography** → /family-photography
   "Capturing the chaos and the calm."

3. **Senior Portraits** → /senior-portraits
   "Celebrate their milestone in style."

4. **Business Headshots** → /business-headshots
   "Look professional. Make an impression."

#### Our Approach
Text: "We're Joe and Emily Shipman, and we've been photographing families, weddings, and milestones since 2001. We shoot on our 10-acre property in Commerce — complete with a rustic barn, pond with dock, vintage 55 Chevy truck, and natural settings — or we come to you anywhere in Northeast Texas."

#### Pricing Overview
- Mini Sessions: Starting at $150
- Full Sessions: Starting at $250
- Extended/Specialty Sessions: Starting at $350
- Weddings: Starting at $1,800

"Contact us for detailed package information."

#### CTA
"Ready to book your session?"
Contact Us → /contact

---

### WEDDING PHOTOGRAPHY (/wedding-photography)

**Meta Title:** Wedding Photography | Northeast Texas Wedding Photographer | Commerce, Greenville TX
**Meta Description:** Authentic, timeless wedding photography in Northeast Texas. Full-day coverage, engagement sessions, and beautiful albums. Serving Commerce, Greenville, Rockwall & beyond.

#### Hero
- Headline: "Your story. Beautifully told."
- Subhead: "Wedding photography that captures the joy, the tears, and everything in between."
- Background: [PLACEHOLDER: Wedding photo - couple or ceremony moment]

#### Content
Text: "Your wedding day goes by in a flash. Our job is to make sure you remember every moment — the big ones and the little ones. We blend into the background, capturing authentic emotions as they happen, while still making sure you get all the must-have shots."

#### What's Included
- Pre-wedding consultation and timeline planning
- Full-day coverage options
- Second photographer available
- Engagement session (with most packages)
- Online gallery with full resolution downloads
- Print release included
- 6-8 week turnaround (sneak peek within 1 week)

#### Packages Starting At
- **Elopement/Intimate:** $1,800 (up to 4 hours)
- **Half Day:** $2,500 (up to 6 hours)
- **Full Day:** $3,500+ (8+ hours, second photographer)

"Every wedding is unique. Contact us to build a custom package."

#### Gallery
[PLACEHOLDER: 6-8 wedding photos]

#### Testimonials
[PLACEHOLDER: 1-2 wedding client testimonials]

#### CTA
"Let's talk about your wedding."
Contact Us → /contact

---

### FAMILY PHOTOGRAPHY (/family-photography)

**Meta Title:** Family Photography | Family Portraits | Commerce, Greenville, Northeast Texas
**Meta Description:** Natural, joyful family photography in Northeast Texas. Outdoor sessions, holiday photos, and milestone moments. Serving Commerce, Greenville, Rockwall & surrounding areas.

#### Hero
- Headline: "Your family. Right now."
- Subhead: "Because they won't stay this little forever."

#### Content
Text: "Family photos aren't about everyone looking perfect and smiling at the camera (though we'll get those too). They're about capturing who you are right now — the connections, the personalities, the beautiful chaos of your family."

#### Session Options
- **Our Property** — 10 acres with rustic barn, pond, dock, vintage truck, and natural settings
- **Your Home** — Lifestyle sessions in your own space
- **On Location** — Parks, downtown areas, or meaningful locations throughout Northeast Texas

#### Pricing
- Mini Session (20-30 min): $150
- Full Session (1 hour): $250-300
- Extended Session (1.5+ hours, multiple locations/outfits): $350+

#### Gallery
[PLACEHOLDER: 4-6 family photos]

#### CTA
"Book your family session."
Contact Us → /contact

---

### SENIOR PORTRAITS (/senior-portraits)

**Meta Title:** Senior Portraits | High School Senior Photos | Commerce, Greenville TX
**Meta Description:** Senior portraits that show off your personality. Multiple outfits, multiple locations, and photos you'll love. Serving Commerce, Greenville, Rockwall & Northeast Texas.

#### Hero
- Headline: "This is your moment."
- Subhead: "Senior portraits as unique as you are."

#### Content
Text: "Senior year is a big deal, and your photos should be too. We create sessions that reflect your personality, your interests, and your style — not cookie-cutter poses against a generic backdrop."

#### What to Expect
- 1-2 hour session
- Multiple outfit changes
- Multiple locations (our property, downtown, or spots that matter to you)
- Props welcome (sports equipment, instruments, pets, cars)
- 40+ edited images in online gallery
- Print release included

#### Pricing
- Standard Session: $250
- Extended Session: $350
- Premium Session: $450+ (multiple locations, extended time)

#### Gallery
[PLACEHOLDER: 4-6 senior portrait photos]

#### CTA
"Book your senior session."
Contact Us → /contact

---

### BUSINESS HEADSHOTS (/business-headshots)

**Meta Title:** Business Headshots | Professional Portraits | Commerce, Greenville TX
**Meta Description:** Professional headshots for LinkedIn, websites, and marketing. Individual and team sessions available. On-site at your business or our studio. Northeast Texas.

#### Hero
- Headline: "Look like you mean business."
- Subhead: "Professional headshots that make the right impression."

#### Content
Text: "Your headshot is often the first impression you make — on LinkedIn, your website, or marketing materials. We create polished, professional portraits that look natural and approachable, not stiff and awkward."

#### Options
- **Individual Sessions** — Quick, efficient headshot sessions
- **Team Sessions** — Consistent look for your entire staff
- **On-Site** — We come to your office or location
- **Studio** — Controlled lighting at our property

#### Pricing
- Individual Headshot Session: Starting at $150
- Team/Group Rates: Contact for quote

#### Uses
- LinkedIn profiles
- Company website
- Marketing materials
- Speaking engagements
- Real estate agent profiles

#### CTA
"Schedule your headshot session."
Contact Us → /contact

---

### DIGITAL SERVICES (/digital-services)

**Meta Title:** Digital Services | Web Design & Business Technology | Northeast Texas
**Meta Description:** Web design, business automation, and video production for Northeast Texas businesses. Websites that work, technology that saves time.

#### Hero
- Headline: "Work smarter."
- Subhead: "Websites, automation, and technology that help your business grow."

#### Services (3 cards)
1. **Web Design** → /digital-services/web-design
   "Websites that look great and bring in customers."

2. **Business Automation & AI** → /digital-services/business-automation
   "Stop doing the same thing twice."

3. **Video Production** → /digital-services/video-production
   "Tell your story with motion."

#### CTA
"Ready to level up your business?"
Contact Us → /contact

---

### WEB DESIGN (/digital-services/web-design)

**Meta Title:** Web Design & Development | Commerce, Greenville, Northeast Texas
**Meta Description:** Custom website design for small businesses in Northeast Texas. Fast, mobile-friendly sites that rank on Google. Serving Commerce, Greenville, and surrounding areas.

#### Hero
- Headline: "Your website should work as hard as you do."
- Subhead: "Custom websites that look great, load fast, and bring in customers."

#### What We Build
- Business websites
- Portfolio sites
- Landing pages
- E-commerce (basic)
- Website redesigns and updates

#### Our Approach
- **Mobile-first** — Most visitors are on phones
- **Fast-loading** — Speed affects rankings and conversions
- **SEO-optimized** — Built to be found on Google
- **Easy to update** — We build it so you can manage it (or we maintain it for you)
- **No templates** — Custom design for your brand

#### Past Clients
- City of Commerce
- Commerce Chamber of Commerce
- Commerce Economic Development Corporation
- Little Elm Economic Development Corporation
- Northeast Texas Children's Museum
- New Horizons Center for Healing
- Texas Intercollegiate Press Association
- American Psychotherapy Institute
- 30+ additional local businesses

#### Our Process
1. **Discovery** — Understand your business and goals
2. **Design** — Create mockups for your approval
3. **Build** — Develop the site
4. **Launch** — Go live with training and support
5. **Maintain** — Optional ongoing support packages

#### CTA
"Ready for a website that works?"
Contact Us → /contact

---

### BUSINESS AUTOMATION & AI (/digital-services/business-automation)

**Meta Title:** Business Automation & AI Solutions | Northeast Texas
**Meta Description:** Save time and cut costs with custom automation and AI tools. Process automation, custom apps, and AI integration for small businesses in Northeast Texas.

#### Hero
- Headline: "Stop doing the same thing twice."
- Subhead: "Custom automation and AI tools that save time, reduce errors, and let you focus on what matters."

#### What We Help With
- Automating repetitive tasks
- Custom business tools and applications
- AI-powered workflows
- Document and data processing
- Integrating your existing tools and systems

#### Who This Is For
- Small businesses drowning in manual processes
- Professional services (legal, medical, insurance, real estate)
- Anyone asking "there has to be a better way to do this"

#### How It Works
1. **Evaluate** — We look at your current processes and identify opportunities
2. **Recommend** — We propose solutions with realistic expectations
3. **Build** — We create custom tools tailored to your workflow
4. **Train** — We make sure your team knows how to use them
5. **Support** — We're here when you need us

#### Real Talk
Text: "Not everything needs AI. We'll be honest about what technology can actually help and what's just hype. Our goal is saving you time and money — not selling you buzzwords."

#### CTA
"Curious if automation could help your business?"
Contact Us → /contact

---

### VIDEO PRODUCTION (/digital-services/video-production)

**Meta Title:** Video Production | Business & Promotional Video | Northeast Texas
**Meta Description:** Professional video production for businesses in Northeast Texas. Promotional videos, social media content, training videos, and event coverage.

#### Hero
- Headline: "Tell your story with motion."
- Subhead: "Professional video that captures attention and drives results."

#### What We Produce
- Promotional and brand videos
- Social media content
- Training and educational videos
- Event coverage
- Real estate video (link to /real-estate-video)
- Testimonial videos

#### Our Team
Text: "Ivan Lopez leads our video production, bringing expertise in cinematography and dynamic storytelling."

#### CTA
"Let's create something great."
Contact Us → /contact

---

### PORTFOLIO (/portfolio)

**Meta Title:** Portfolio | Photography & Web Design Work | Luminous Productions
**Meta Description:** View our portfolio of real estate photography, portraits, weddings, and web design projects. See why Northeast Texas trusts Luminous Productions.

#### Hero
- Headline: "Our Work"
- Subhead: "A selection of recent projects"

#### Filterable Gallery
Categories:
- All
- Real Estate
- Weddings
- Portraits & Family
- Seniors
- Commercial
- Web Design

Each item:
- Thumbnail image
- Title
- Category tag
- Click to expand/lightbox or link to project page

[PLACEHOLDER: Will need actual portfolio images organized by category]

---

### ABOUT (/about)

**Meta Title:** About Us | Meet the Luminous Productions Team | Commerce, TX
**Meta Description:** Meet Joe, Emily, and the Luminous Productions team. Family-owned photography and digital media company serving Northeast Texas since 2001.

#### Hero
- Headline: "Real people. Real passion."
- Background: [PLACEHOLDER: Team photo]

#### Our Story
Text: "Founded in November 2001, Luminous Productions started with a simple mission: help people and businesses look their best. Over 23 years later, that mission has grown into a full-service digital media company — but the heart of what we do hasn't changed.

We're based in Commerce, Texas, on a 10-acre property that doubles as our portrait studio — complete with a rustic barn, pond, dock, and all the character you'd expect from Northeast Texas. But we're just as comfortable photographing a luxury listing in Rockwall or helping a Greenville business owner get a website that actually works."

#### Meet the Team

**Joe Shipman** — Co-Owner & Lead Photographer
[PLACEHOLDER: Photo]
Joe handles real estate photography, web development, and technology services. When he's not behind a camera or building websites, he's exploring how AI and automation can help local businesses work smarter.

**Emily Shipman** — Co-Owner & Creative Director
[PLACEHOLDER: Photo]
Emily leads portrait sessions, weddings, and creative direction. She has an eye for the moments that matter and a gift for making clients feel comfortable in front of the camera.

**Kayla Gossett** — Lead Real Estate Photographer
[PLACEHOLDER: Photo]
Kayla brings properties to life with stunning, high-quality images that make real estate listings stand out.

**Morgan Griddley** — Junior Photographer
[PLACEHOLDER: Photo]
Morgan brings fresh perspective and creative energy to every shoot.

**Quentin Irey** — Web Developer & Content Writer
[PLACEHOLDER: Photo]
Quentin builds websites and creates digital content for our clients.

**Ivan Lopez** — Photographer & Video Specialist
[PLACEHOLDER: Photo]
Ivan brings expertise in video production and photography, helping capture dynamic content for real estate, events, and commercial projects.

#### Our Values
- **Quality over quantity** — We'd rather do fewer projects exceptionally well than rush through many.
- **Local matters** — We live here, work here, and care about this community.
- **Honesty first** — We'll tell you what you need, not just what you want to hear.
- **Keep learning** — Technology changes fast. We stay current so you don't have to.

#### CTA
"Want to work with us?"
Contact Us → /contact

---

### SERVICE AREAS (/service-areas)

**Meta Title:** Service Areas | Northeast Texas Photography & Web Design | Luminous Productions
**Meta Description:** Luminous Productions serves Commerce, Greenville, Rockwall, Sulphur Springs, Paris, Cooper, Quinlan and all of Northeast Texas. No travel fees in our service area.

#### Hero
- Headline: "Proudly Local"
- Subhead: "Serving Northeast Texas from our home base in Commerce"

#### Content
Text: "We're based in Commerce, TX, and serve clients throughout Northeast Texas. Because we're local — not driving in from Dallas — there are no surprise travel fees eating into your budget for most of our service area."

#### Service Area Map
[PLACEHOLDER: Map graphic showing coverage area]

#### Cities We Serve (with links to individual pages)
- **Commerce, TX** (Home Base) → /service-areas/commerce-tx
- **Greenville, TX** → /service-areas/greenville-tx
- **Rockwall, TX** → /service-areas/rockwall-tx
- **Sulphur Springs, TX** → /service-areas/sulphur-springs-tx
- **Paris, TX** → /service-areas/paris-tx
- **Cooper, TX** → /service-areas/cooper-tx
- **Quinlan, TX** → /service-areas/quinlan-tx

"Don't see your city? Contact us — we likely serve your area too."

#### CTA
Contact Us → /contact

---

### CITY PAGES (7 pages)

Each city page follows this template but with UNIQUE content for each city:

#### /service-areas/commerce-tx
**Meta Title:** Photography & Web Design in Commerce, TX | Luminous Productions
**Meta Description:** Professional photography and digital services in Commerce, TX. Real estate photos, portraits, weddings, web design. Locally owned since 2001.

**Content:**
"Commerce is home. Our studio sits on 10 acres right here in town, where we've been serving Hunt County since 2001. From Texas A&M University-Commerce events to local business headshots to real estate listings throughout the area, we're proud to be part of this community.

Whether you need listing photos for a property on the square, family portraits at our country property, or a new website for your downtown business, we're just down the road."

All services available. Full team access.

---

#### /service-areas/greenville-tx
**Meta Title:** Photography & Web Design in Greenville, TX | Luminous Productions
**Meta Description:** Professional photography and web design in Greenville, TX. Real estate photography, portraits, weddings. Just 20 minutes from our Commerce studio.

**Content:**
"Greenville's real estate market keeps growing, and we're here to help agents stand out. Just 20 minutes from our Commerce studio, we photograph listings throughout Hunt County — from historic homes near downtown to new construction in neighborhoods like Graham Ranch.

Beyond real estate, we capture family moments at places like Landon Winery, senior portraits against the iconic 'Welcome' sign, and business headshots for Greenville's growing professional community."

---

#### /service-areas/rockwall-tx
**Meta Title:** Photography & Web Design in Rockwall, TX | Luminous Productions
**Meta Description:** Professional real estate photography and portraits in Rockwall, TX. Serving The Harbor, Lake Ray Hubbard, and all Rockwall County.

**Content:**
"Rockwall brings some of the most beautiful properties in our service area — from waterfront homes on Lake Ray Hubbard to luxury builds in The Harbor district. We know how to showcase what makes Rockwall listings special.

Located about 35 miles from our Commerce studio, Rockwall is well within our no-travel-fee service area. We're here for your listings, your family portraits, and your business photography needs."

---

#### /service-areas/sulphur-springs-tx
**Meta Title:** Photography & Web Design in Sulphur Springs, TX | Luminous Productions
**Meta Description:** Professional photography services in Sulphur Springs, TX. Real estate photos, family portraits, senior pictures. Serving Hopkins County.

**Content:**
"Sulphur Springs has that authentic Northeast Texas feel — the kind of community where people still know their neighbors. We love shooting here, from the beautiful downtown square to the rolling countryside of Hopkins County.

Whether you're listing a property, celebrating a family milestone, or need business photography, we're just a short drive away in Commerce."

---

#### /service-areas/paris-tx
**Meta Title:** Photography & Web Design in Paris, TX | Luminous Productions
**Meta Description:** Professional photography and web design in Paris, TX. Real estate photos, portraits, weddings. Serving Lamar County and Northeast Texas.

**Content:**
"Paris is the largest city in our service area, and we're proud to serve Lamar County's photography and digital needs. From historic Victorian homes near downtown to new developments on the outskirts, we capture properties that sell.

The town's unique character — yes, including that Eiffel Tower — makes for memorable portrait sessions too. We're about 45 minutes from Commerce, well within our standard service area."

---

#### /service-areas/cooper-tx
**Meta Title:** Photography & Web Design in Cooper, TX | Luminous Productions
**Meta Description:** Professional photography services in Cooper, TX. Real estate photos, portraits, event coverage. Serving Delta County.

**Content:**
"Cooper and Delta County represent the best of small-town Texas. We photograph properties here ranging from in-town homes to rural acreage — and our drone photography is perfect for showcasing those larger parcels.

Being local means we understand the market here. We're not Dallas photographers charging extra to drive out — we're neighbors."

---

#### /service-areas/quinlan-tx
**Meta Title:** Photography & Web Design in Quinlan, TX | Luminous Productions
**Meta Description:** Professional photography in Quinlan, TX. Real estate photos, family portraits, senior pictures. Serving Lake Tawakoni and Hunt County.

**Content:**
"Quinlan's proximity to Lake Tawakoni makes it a unique market — lake houses, recreational properties, and the growing residential community all need great photography. We know how to capture waterfront appeal and showcase what draws people to this area.

Located in Hunt County like our home base, Quinlan is an easy drive with no travel fees."

---

### CONTACT (/contact)

**Meta Title:** Contact Us | Luminous Productions | Commerce, TX
**Meta Description:** Get in touch with Luminous Productions. Call (903) 851-3183 or send us a message. Photography and digital services for Northeast Texas.

#### Hero
- Headline: "Let's talk."

#### Contact Info
- **Phone:** (903) 851-3183
- **Email:** info@luminouspro.com
- **Address:** 2913 Charity Rd, Commerce, TX 75428

#### Contact Form
Fields:
- Name (required)
- Email (required)
- Phone
- Service Interested In (dropdown):
  - Real Estate Photography
  - Wedding Photography
  - Family/Portrait Photography
  - Senior Portraits
  - Business Headshots
  - Web Design
  - Business Automation/AI
  - Video Production
  - Other
- Message (textarea)
- Submit button

#### Office Hours
Monday - Friday: 9am - 5pm
Weekends: By appointment for photography sessions

#### Map
[PLACEHOLDER: Google Maps embed of business address]

#### Quick Links
- Book Real Estate Photos → portal.luminouspro.com
- View Portfolio → /portfolio
- Service Areas → /service-areas

---

## SEO Requirements

### Technical SEO
- Semantic HTML5 structure
- Proper heading hierarchy (single H1 per page)
- Meta titles: 50-60 characters
- Meta descriptions: 150-160 characters
- Canonical URLs on all pages
- XML sitemap (auto-generate)
- Robots.txt

### Schema Markup
Implement JSON-LD for:
- **LocalBusiness** (site-wide, in layout)
- **Service** (service pages)
- **FAQPage** (pages with FAQ sections)
- **BreadcrumbList** (all pages)

LocalBusiness schema:
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Luminous Productions",
  "description": "Photography and digital media services in Northeast Texas",
  "url": "https://luminouspro.com",
  "telephone": "+1-903-851-3183",
  "email": "info@luminouspro.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2913 Charity Rd",
    "addressLocality": "Commerce",
    "addressRegion": "TX",
    "postalCode": "75428",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.2468",
    "longitude": "-95.8999"
  },
  "areaServed": ["Commerce, TX", "Greenville, TX", "Rockwall, TX", "Sulphur Springs, TX", "Paris, TX", "Cooper, TX", "Quinlan, TX"],
  "foundingDate": "2001-11",
  "priceRange": "$$"
}
```

### Open Graph Tags
All pages need:
- og:title
- og:description
- og:image (default to site hero or page-specific)
- og:url
- og:type

---

## Performance Requirements

### Targets
- PageSpeed Insights: 90+ (mobile and desktop)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Implementation
- Lazy load images below fold
- Use WebP format with fallbacks
- Responsive images with srcset
- Minimize JavaScript
- Use CSS for animations where possible
- Preload critical fonts

---

## Image Specifications

Use placeholder images/boxes initially. Client will provide actual images.

### Required Images (with placeholder notes)

**Global:**
- Logo (SVG preferred, or PNG with transparency)

**Home:**
- Hero image (1920x1080 min, real estate interior or lifestyle)

**Real Estate:**
- Hero (real estate interior)
- 6 service thumbnails
- Gallery samples (4-6)

**Matterport:**
- Hero or sample screenshot
- Sample tour embed

**Aerial:**
- Hero (aerial property shot)
- Gallery samples (4-6)

**Video:**
- Hero (video still or production shot)
- Video thumbnails

**Portrait/Wedding/Family/Senior/Headshots:**
- Hero image for each
- Gallery samples (4-6 each)

**About:**
- Team group photo
- Individual headshots for Joe, Emily, Kayla, Morgan, Quentin, Ivan

**Portfolio:**
- 15-20 curated images across categories

### Image Dimensions
- Hero images: 1920px wide
- Portfolio thumbnails: 600x400px
- Team headshots: 400x400px (square)
- Gallery images: 1200px wide max

---

## Redirects Needed (for go-live)

Map old WordPress URLs to new structure:

| Old URL | New URL |
|---------|---------|
| /real-estate-photographer/ | /real-estate-photography/ |
| /photography/photography-pricing/ | /portrait-photography/ |
| /photography-pricing-weddings/ | /wedding-photography/ |
| /web-design-and-development/ | /digital-services/web-design/ |
| /contact-us-2/ | /contact/ |
| /category/location/commerce/ | /service-areas/commerce-tx/ |
| /category/location/greenville/ | /service-areas/greenville-tx/ |
| /category/location/rockwall/ | /service-areas/rockwall-tx/ |
| /category/location/sulphur-springs/ | /service-areas/sulphur-springs-tx/ |
| /about-us/ | /about/ |
| /portfolio/ | /portfolio/ |

---

## Build Checklist

### Phase 1: Foundation
- [ ] Initialize Astro project
- [ ] Configure Tailwind CSS
- [ ] Set up project structure (pages, components, layouts)
- [ ] Create base layout with header/footer
- [ ] Implement responsive navigation
- [ ] Set up color scheme and typography

### Phase 2: Core Pages
- [ ] Home page
- [ ] Real Estate Photography (pillar page)
- [ ] Matterport page
- [ ] Aerial/Drone page
- [ ] Real Estate Video page
- [ ] Portrait Photography overview
- [ ] Wedding page
- [ ] Family page
- [ ] Senior page
- [ ] Headshots page

### Phase 3: Digital Services
- [ ] Digital Services overview
- [ ] Web Design page
- [ ] Business Automation page
- [ ] Video Production page

### Phase 4: Supporting Pages
- [ ] Portfolio page (filterable)
- [ ] About page
- [ ] Contact page (with form)
- [ ] Service Areas overview
- [ ] 7 city pages

### Phase 5: Polish & SEO
- [ ] Add all meta tags
- [ ] Implement schema markup
- [ ] Optimize images (when provided)
- [ ] Test mobile responsiveness
- [ ] Run PageSpeed tests
- [ ] Set up analytics placeholder

### Phase 6: Deploy
- [ ] Deploy to Vercel staging
- [ ] Test all pages and forms
- [ ] Configure redirects
- [ ] DNS cutover (production)

---

## Notes for Claude Code

1. **Start with structure** — Get the Astro project scaffolded with all routes before writing detailed content

2. **Use components** — Create reusable components for: Hero sections, Service cards, CTA sections, Team member cards, Portfolio grid items, FAQ accordions

3. **Placeholder images** — Use placeholder.com or similar for image placeholders with correct aspect ratios

4. **Mobile-first** — Design for mobile first, then enhance for desktop

5. **Keep it fast** — Minimize dependencies, avoid heavy libraries

6. **Real content** — Use the actual copy from this document, not lorem ipsum

7. **Distinctive design** — Follow the frontend-design skill guidelines. Make it memorable, not generic.

8. **Forms** — Use Formspree or similar for contact form. Include all fields specified.

9. **External links** — portal.luminouspro.com opens in new tab, social links open in new tab

10. **Phone number** — Make clickable on mobile with tel: link

---

*Document Version: 1.0*
*Created: December 2024*
*For: Luminous Productions / Joe Shipman*
