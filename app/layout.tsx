import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen">
        <header className="bg-white border-b border-gold p-4">
          <h1 className="text-2xl font-bold text-gold">UAEzy</h1>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-black text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} UAEzy. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

