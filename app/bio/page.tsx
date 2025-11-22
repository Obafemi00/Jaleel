export default function BioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          Biography
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-8 flex items-center justify-center text-gray-400">
              Profile Photo Placeholder
            </div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              This is where the full biography content will be displayed. The biography
              will include detailed information about background, career journey, achievements,
              and personal story.
            </p>
            <p className="text-lg">
              Additional paragraphs and sections will be added here to provide a comprehensive
              overview of the athlete's journey, milestones, and impact in the sport.
            </p>
            <p className="text-lg">
              More content sections can be added as needed to cover all aspects of the
              professional career and personal development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


