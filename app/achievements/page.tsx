export default function AchievementsPage() {
  const achievements = [
    {
      year: "2024",
      title: "Championship Winner",
      description: "Led team to league championship victory",
    },
    {
      year: "2023",
      title: "Player of the Year",
      description: "Recognized as the top performer of the season",
    },
    {
      year: "2023",
      title: "Record Holder",
      description: "Set new record for most goals in a season",
    },
    {
      year: "2022",
      title: "International Cap",
      description: "Earned first international appearance",
    },
    {
      year: "2022",
      title: "Team Captain",
      description: "Appointed as team captain",
    },
    {
      year: "2021",
      title: "Rookie of the Year",
      description: "Awarded best newcomer of the season",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-gray-900 mb-16">
          Achievements
        </h1>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm font-display font-semibold text-gray-500 mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-sans">
                    {achievement.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


