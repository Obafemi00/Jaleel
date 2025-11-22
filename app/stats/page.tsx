export default function StatsPage() {
  const statsCategories = [
    {
      title: "Season Statistics",
      stats: [
        { label: "Games Played", value: "38" },
        { label: "Goals", value: "15" },
        { label: "Assists", value: "12" },
        { label: "Minutes Played", value: "3,240" },
      ],
    },
    {
      title: "Career Statistics",
      stats: [
        { label: "Total Games", value: "150+" },
        { label: "Total Goals", value: "45" },
        { label: "Total Assists", value: "32" },
        { label: "Trophies Won", value: "8" },
      ],
    },
    {
      title: "Performance Metrics",
      stats: [
        { label: "Pass Accuracy", value: "87%" },
        { label: "Shot Accuracy", value: "72%" },
        { label: "Tackle Success", value: "68%" },
        { label: "Awards", value: "12" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-16">
          Statistics
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {statsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0"
                  >
                    <span className="text-gray-600 font-medium">{stat.label}</span>
                    <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


