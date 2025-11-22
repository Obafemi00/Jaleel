import Link from "next/link";

export default function BioPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With a passion for excellence and dedication to the sport, I have built
              a career marked by consistent performance and remarkable achievements.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My journey has been defined by hard work, resilience, and an unwavering
              commitment to reaching the highest levels of competition.
            </p>
            <Link
              href="/bio"
              className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Read Full Bio →
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg">
                Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


