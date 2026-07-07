export const dynamic = 'force-dynamic'

import { createClient } from 'next-sanity'

const client = createClient({
  projectId: 'n8tkfq9p', // <-- Put your real 8-character ID here!
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-07-06'
})

export default async function HomePage() {
  // Fetch everything we need across sections from Sanity
  const data = await client.fetch(
    `*[_type == "homePage"] | order(_updatedAt desc)[0]`,
    {},
    { cache: 'no-store', next: { revalidate: 0 } }
  )

  // SECTION 1: HERO & INTRO BLOCK
  const headline = data?.heroHeadline || "Your Premier Adventure DMC & Ground Logistics Partner."
  const subheadline = data?.heroSubHeadline || "Bringing 20+ years of local expertise, unrivaled adventure connections, and seamless B2B ground handling to international tour operators and agents."
  const introHeadline = data?.introHeadline || "Deeply Connected. Thoroughly Vetted. Wildly Adventurous."
  const introParagraph = data?.introParagraph || "At ActivityHub Destinations, we don't just book itineraries—we curate unforgettable ground experiences. With over two decades of deep-rooted tourism experience, we are the bridge between your clients and the ultimate local adventures."

  // SECTION 2: ABOUT US BLOCK
  const aboutHeadline = data?.aboutHeadline || "Who We Are"
  const aboutText1 = data?.aboutText1 || "ActivityHub Destinations was born out of a passion for authentic exploration and a clear market need: international agents required a reliable, agile, and adventure-focused DMC in Southern Africa. Over the past 20 years, our team has built personal relationships with the region's best operators, accommodation suppliers, and transport providers."
  const aboutText2 = data?.aboutText2 || "We eliminate the guesswork for global tour operators by acting as your on-the-ground execution arm—ensuring every transfer, guide, and extreme activity meets strict safety, quality, and service benchmarks."

  // SECTION 3: SERVICES BLOCK
  const servicesHeadline = data?.servicesHeadline || "Our Core Services"
  const servicesList = data?.servicesList || [
    { title: "B2B Ground Handling", desc: "Flawless logistics, airport transfers, luxury fleet transport, and professional multi-lingual local guides across Southern Africa." },
    { title: "Bespoke Adventure Itineraries", desc: "Custom-tailored itineraries designed specifically for luxury adventure seekers, youth groups, corporate incentives, and series groups." },
    { title: "Supplier Vetting & Safety Audits", desc: "Every high-adrenaline operator we use is rigorously audited to protect your brand and ensure traveler safety." }
  ]

  // SECTION 4: DESTINATIONS BLOCK
  const destinationsHeadline = data?.destinationsHeadline || "Key Destinations Covered"
  const destinationsList = data?.destinationsList || [
    { name: "South Africa", details: "From Cape Town's iconic peaks to classic Big Five safaris in Kruger." },
    { name: "Namibia", details: "The soaring dunes of Sossusvlei and extreme adventure hubs like Swakopmund." },
    { name: "Botswana & Zimbabwe", details: "The pristine waterways of the Okavango Delta and the thundering Victoria Falls." }
  ]

  // SECTION 5: ONLINE PLATFORM BLOCK
  const platformHeadline = data?.platformHeadline || "The ActivityHub B2B Online Platform"
  const platformText = data?.platformText || "We bridge the technological gap for international agents. Our upcoming dedicated B2B portal allows operators to check live ground availability, download white-labeled marketing collateral, view audited safety manifests, and manage bookings effortlessly in one central location."

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#333', lineHeight: '1.6', margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
      
      {/* Navigation */}
      <header style={{ borderBottom: '1px solid #eee', padding: '20px', maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
        <span style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#0070f3', fontSize: '1.2rem' }}>ACTIVITYHUB DESTINATIONS</span>
      </header>
      
      {/* Main Layout Container */}
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* 1. Hero Section */}
        <section style={{ marginBottom: '60px', textAlign: 'center', padding: '40px 0' }}>
          <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#111', fontWeight: '800', lineHeight: '1.2' }}>{headline}</h1>
          <p style={{ fontSize: '1.3rem', color: '#555', maxWidth: '750px', margin: '0 auto 30px auto' }}>{subheadline}</p>
          <button style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '14px 32px', fontSize: '1rem', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,112,243,0.3)' }}>
            Partner With Us
          </button>
        </section>

        {/* 2. Intro Callout */}
        <section style={{ background: '#f4f7fa', padding: '35px', borderRadius: '12px', marginBottom: '60px', borderLeft: '5px solid #0070f3' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '14px', color: '#111' }}>{introHeadline}</h2>
          <p style={{ color: '#444', fontSize: '1.1rem', margin: 0 }}>{introParagraph}</p>
        </section>

        {/* 3. About Us Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#111', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{aboutHeadline}</h2>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: '16px' }}>{aboutText1}</p>
          <p style={{ fontSize: '1.1rem', color: '#444' }}>{aboutText2}</p>
        </section>

        {/* 4. Core Services Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#111', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{servicesHeadline}</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            {servicesList.map((service, idx) => (
              <div key={idx} style={{ padding: '20px', border: '1px solid #eef2f6', borderRadius: '8px', background: '#fff' }}>
                <h3 style={{ margin: '0 0 8px 0', color: '#0070f3', fontSize: '1.3rem' }}>{service.title}</h3>
                <p style={{ margin: 0, color: '#555' }}>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Destinations Section */}
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#111', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>{destinationsHeadline}</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {destinationsList.map((dest, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', padding: '15px', background: '#f9f9f9', borderRadius: '6px' }}>
                <strong style={{ fontSize: '1.2rem', color: '#111', marginBottom: '4px' }}>{dest.name}</strong>
                <span style={{ color: '#666' }}>{dest.details}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Online Platform Section */}
        <section style={{ background: '#111', color: '#fff', padding: '40px', borderRadius: '12px', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: '#fff' }}>{platformHeadline}</h2>
          <p style={{ fontSize: '1.1rem', color: '#ccc', margin: 0, lineHeight: '1.7' }}>{platformText}</p>
        </section>

        {/* 7. Contact Section */}
        <section style={{ textAlign: 'center', padding: '40px 20px', border: '1px solid #eee', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px', color: '#111' }}>Connect with our Logistics Desk</h2>
          <p style={{ color: '#666', marginBottom: '25px' }}>Ready to optimize your ground booking flow? Contact us today.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <input type="email" placeholder="Enter your business email" style={{ padding: '12px 16px', fontSize: '1rem', border: '1px solid #ccc', borderRadius: '5px', width: '300px' }} />
            <button style={{ background: '#111', color: '#fff', border: 'none', padding: '12px 24px', fontSize: '1rem', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              Request Agent Access
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ background: '#f4f7fa', color: '#777', textAlign: 'center', padding: '30px 20px', borderTop: '1px solid #eef2f6', marginTop: '60px', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} ActivityHub Destinations. All rights reserved. B2B Inbound Operations.
      </footer>
    </div>
  )
}
