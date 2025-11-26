import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-display font-semibold mb-4">Jaleel Kotun</h3>
            <p className="text-sm font-sans">
              Professional athlete dedicated to excellence and performance.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-sm font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link href="/bio" className="hover:text-white transition-colors">
                  Bio
                </Link>
              </li>
              <li>
                <Link href="/stats" className="hover:text-white transition-colors">
                  Stats
                </Link>
              </li>
              {/*
              <li>
                <Link href="/highlights" className="hover:text-white transition-colors">
                  Highlights
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              */}
            </ul>
          </div>
          {/*
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">
                  Achievements
                </Link>
              </li>
            </ul>
          </div>
          */}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} Jaleel Kotun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


