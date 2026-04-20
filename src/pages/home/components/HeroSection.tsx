import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Real Data Center Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://readdy.ai/api/search-image?query=professional%20IT%20technician%20working%20in%20a%20modern%20data%20center%20server%20room%20with%20ethernet%20cables%20and%20glowing%20rack%20lights%2C%20dark%20dramatic%20lighting%2C%20enterprise%20technology%20environment&width=1920&height=1080&seq=hero-poster-2&orientation=landscape"
      >
        {/* Primary: Large data center hallway with server racks */}
        <source
          src="https://assets.mixkit.co/videos/7888/7888-720.mp4"
          type="video/mp4"
        />
        {/* Fallback: Inside server room close-up */}
        <source
          src="https://assets.mixkit.co/videos/7866/7866-720.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/35 to-black/25"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e8b84b]/40 bg-[#e8b84b]/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#e8b84b] inline-block"></span>
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-medium">Managed IT Services</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-white font-bold leading-tight mb-6 max-w-4xl">
          <span className="block text-4xl md:text-6xl lg:text-7xl">IT for Small &amp; Medium</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl">Businesses to Feel</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-[#e8b84b]">Enterprise Level</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-300 text-base md:text-xl max-w-2xl leading-relaxed mb-10">
          Brito Consulting Group delivers proactive managed IT, cybersecurity, and cloud solutions — the kind of support usually reserved for Fortune 500 companies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#e8b84b] text-[#0f1117] font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#f0c96a] transition-all duration-200 flex items-center gap-3"
          >
            Get a Free Quote
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f1117]">
              <i className="ri-arrow-right-line text-[#e8b84b] text-xs"></i>
            </span>
          </Link>
          <Link
            to="/services"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-medium text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-white/10 transition-all duration-200"
          >
            Our Services
          </Link>
        </div>

        {/* Se Habla Español badge */}
        <div className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          <i className="ri-translate-2 text-[#e8b84b] text-base"></i>
          <span className="text-white text-sm font-medium tracking-wide">Se Habla Español</span>
        </div>


      </div>
    </section>
  );
}
