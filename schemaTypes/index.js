const homePage = {
  name: 'homePage',
  title: 'Home Page Editor',
  type: 'document',
  fields: [
    {
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    },
    {
      name: 'heroSubhead',
      title: 'Hero Subhead Text',
      type: 'text',
    },
    {
      name: 'mainCoverPhoto',
      title: 'Main Cover Photo',
      type: 'image',
      options: {
        hotspot: true, // Enables the interactive cropping target circle!
      },
    }
  ],
}

export const schemaTypes = [homePage]
