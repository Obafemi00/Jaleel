export default function GalleryPage() {
  const photos = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-center text-gray-900 mb-16">
          Gallery
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm font-sans">
                Photo {photo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


