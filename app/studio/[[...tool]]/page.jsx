'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '../../../schemaTypes'

const config = defineConfig({
  projectId: 'n8tkfq9p', // <-- Replace with your 8-character Sanity Project ID!
  dataset: 'production',
  title: 'ActivityHub Editor',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('ActivityHub Content Manager')
          .items([
            S.listItem()
              .title('1. Home Page')
              .child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem()
              .title('2. About Us Page')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
            S.listItem()
              .title('3. Services Page')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),
            S.listItem()
              .title('4. Destinations Page')
              .child(S.document().schemaType('destinationsPage').documentId('destinationsPage')),
            S.listItem()
              .title('5. Online Platform Page')
              .child(S.document().schemaType('platformPage').documentId('platformPage')),
            S.listItem()
              .title('6. Contact Us Page')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <NextStudio config={config} />
    </div>
  )
}
