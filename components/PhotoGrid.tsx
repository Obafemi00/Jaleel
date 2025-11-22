export default function PhotoGrid() {
  const photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo) => (
            <div
              key={photo}
              className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                Photo {photo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


