import Link from "next/link";

export default function HighlightsPreview() {
  const highlights = [
    { id: 1, title: "Championship Win", date: "2024" },
    { id: 2, title: "Record Breaking Performance", date: "2023" },
    { id: 3, title: "Award Recognition", date: "2023" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Recent Highlights
          </h2>
          <Link
            href="/highlights"
            className="text-gray-900 font-semibold hover:underline hidden md:block"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Video Placeholder
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">{highlight.date}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/highlights"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Highlights
          </Link>
        </div>
      </div>
    </section>
  );
}


