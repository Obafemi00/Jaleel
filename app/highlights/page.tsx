export default function HighlightsPage() {
  const highlights = [
    {
      id: 1,
      title: "Championship Victory",
      date: "2024",
      description: "Led team to championship victory with outstanding performance.",
    },
    {
      id: 2,
      title: "Record Breaking Performance",
      date: "2023",
      description: "Set new record for most goals in a single season.",
    },
    {
      id: 3,
      title: "Award Recognition",
      date: "2023",
      description: "Received Player of the Year award for exceptional contributions.",
    },
    {
      id: 4,
      title: "International Debut",
      date: "2022",
      description: "Made debut appearance on the international stage.",
    },
    {
      id: 5,
      title: "Milestone Achievement",
      date: "2022",
      description: "Reached 100 career games milestone.",
    },
    {
      id: 6,
      title: "Outstanding Match",
      date: "2021",
      description: "Scored hat-trick in crucial match victory.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16">
          Highlights
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  Video Placeholder
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{highlight.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


