export const metadata = {
  title: 'ActivityHub Destinations',
  description: 'South Africa DMC & Ground Logistics Partner',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#ffffff' }}>
        {children}
      </body>
    </html>
  )
}
