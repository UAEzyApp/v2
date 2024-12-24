import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gold">Welcome to UAEzy</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Your Gateway to Dubai Real Estate Success. Master key areas, pass your RERA exams, and gain the confidence to close deals like a pro.
      </p>
      <div className="space-y-4">
        <Link href="/area-knowledge" className="block px-6 py-3 bg-gold text-white rounded-md hover:bg-gold/80 transition-colors">
          Explore Area Knowledge
        </Link>
        <Link href="/rera-information" className="block px-6 py-3 bg-white text-gold border border-gold rounded-md hover:bg-gray-50 transition-colors">
          RERA Information
        </Link>
      </div>
    </div>
  )
}

