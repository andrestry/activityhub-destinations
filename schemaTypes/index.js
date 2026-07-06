// Page 1: Home Page Blueprint
const homePage = {
  name: 'homePage',
  title: '1. Home Page',
  type: 'document',
  fields: [
    { name: 'heroHeadline', type: 'string', title: 'Hero Headline' },
    { name: 'heroSubHeadline', type: 'text', title: 'Hero Subhead Text' },
    { name: 'heroImage', type: 'image', title: 'Main Cover Photo', options: { hotspot: true } },
    { name: 'introHeadline', type: 'string', title: 'Introduction Headline' },
    { name: 'introParagraph', type: 'text', title: 'Introduction Main Body Copy' },
    { name: 'techHeadline', type: 'string', title: 'Tech Advantage Headline' },
    { name: 'techParagraph', type: 'text', title: 'Tech Advantage Body Copy' },
  ]
}

// Page 2: About Us Blueprint
const aboutPage = {
  name: 'aboutPage',
  title: '2. About Us Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Page Title' },
    { name: 'originStory', type: 'text', title: 'Our Origin Story' },
    { name: 'aboutImage', type: 'image', title: 'Team/Operations Photo', options: { hotspot: true } }
  ]
}

// Page 3: Services Blueprint
const servicesPage = {
  name: 'servicesPage',
  title: '3. Services Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Page Title' },
    { name: 'customItineraries', type: 'text', title: 'Custom Itinerary Planning Copy' },
    { name: 'financialOps', type: 'text', title: 'Frictionless Financial Operations Copy' },
    { name: 'accommodationTransport', type: 'text', title: 'Premium Accommodations & Day Tours Copy' }
  ]
}

// Page 4: Destinations Blueprint
const destinationsPage = {
  name: 'destinationsPage',
  title: '4. Destinations Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Page Title' },
    { name: 'capeTown', type: 'text', title: 'Cape Town & Western Cape Footprint' },
    { name: 'gardenRoute', type: 'text', title: 'Garden Route & Eastern Cape Footprint' },
    { name: 'kruger', type: 'text', title: 'Greater Kruger & Mpumalanga Footprint' },
    { name: 'kzn', type: 'text', title: 'KwaZulu-Natal & Drakensberg Footprint' }
  ]
}

// Page 5: Platform Blueprint
const platformPage = {
  name: 'platformPage',
  title: '5. Online Platform Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Page Title' },
    { name: 'platformDescription', type: 'text', title: 'Platform Ecosystem Capabilities Description' }
  ]
}

// Page 6: Contact Us Blueprint
const contactPage = {
  name: 'contactPage',
  title: '6. Contact Us Page',
  type: 'document',
  fields: [
    { name: 'hqLocation', type: 'string', title: 'Local Headquarters' },
    { name: 'b2bEmail', type: 'string', title: 'B2B Operational Email' },
    { name: 'emergencyPhone', type: 'string', title: 'Emergency Operations Desk Phone' }
  ]
}

// Bundle all pages together for the Sanity Studio interface
export const schemaTypes = [
  homePage,
  aboutPage,
  servicesPage,
  destinationsPage,
  platformPage,
  contactPage
]
