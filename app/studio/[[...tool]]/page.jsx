'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from '../../../schemaTypes'

const config = defineConfig({
  projectId: 'n8tkfq9p', // <-- Paste your short Sanity Project ID here!
  dataset: 'production',
  title: 'ActivityHub Editor',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})

export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <NextStudio config={config} />
    </div>
  )
}
