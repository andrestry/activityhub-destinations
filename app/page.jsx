import { createClient } from '@sanity/client'

// Connect your front-end to your Sanity data pipeline
const client = createClient({
  projectId: 'n8tkfq9p', // <-- Replace with your 8-character Sanity Project ID!
  dataset: 'production',
  useCdn: false,
  apiVersion: '2026-07-06'
})

export default async function HomePage() {
  // Fetch your custom South Africa DMC content live from the database
  const data = await client.fetch(`*[_type == "homePage"][0]`)

  // Fallback defaults in case you haven't typed anything into the Studio yet
  const headline = data?.heroHeadline || "Your Premier Adventure DMC & Ground Logistics Partner."[cite: 1]
  const subheadline = data?.heroSubHeadline || "Bringing 20+ years of local expertise..."[cite: 1]
  const introHeadline = data?.introHeadline || "Deeply Connected. Thoroughly Vetted. Wildly Adventurous."[cite: 1]
  const introParagraph = data?.introParagraph || "At ActivityHub Destinations, we don't just book itineraries..."[cite: 1]

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '40px 20px', color: '#333', lineHeight: '1.6' }}>
      <header style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '40px' }}>
        <span style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#0070f3' }}>ACTIVITYHUB DESTINATIONS</span>[cite: 1]
      </header>
      
      {/* Hero Section */}
      <section style={{ marginBottom: '60px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#111' }}>{headline}</h1>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>{subheadline}</p>
        <button style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '12px 24px', fontSize: '1rem', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
          Partner With Us
        </button>[cite: 1]
      </section>

      {/* Intro Section */}
      <section style={{ background: '#f9f9f9', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '12px' }}>{introHeadline}</h2>
        <p style={{ color: '#444' }}>{introParagraph}</p>
      </section>
    </div>
  )
}
