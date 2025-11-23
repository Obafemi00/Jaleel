import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen md:h-[90vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Jaleel Kotun Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
          Jaleel Kotun
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light">
          Professional Athlete
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/bio"
            className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Learn More
          </a>
          <a
            href="/stats"
            className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View Stats
          </a>
        </div>
      </div>
    </section>
  );
}
