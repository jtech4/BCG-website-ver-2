import { Link } from 'react-router-dom';

export default function CtaBanner() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://readdy.ai/api/search-image?query=aerial%20view%20of%20a%20modern%20city%20at%20night%20with%20glowing%20lights%20and%20network%20grid%20overlay%20representing%20technology%20and%20connectivity%20with%20warm%20gold%20tones&width=1920&height=600&seq=cta-bg-1&orientation=landscape"
          alt="CTA background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1117]/90 via-[#0f1117]/75 to-[#0f1117]/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Ready to Upgrade?</span>
          <h2 className="text-white font-bold text-4xl md:text-6xl mt-4 leading-tight mb-6">
            Let&apos;s Talk IT.
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
            Ready to upgrade your business technology? Reach out and we&apos;ll build a custom managed IT plan tailored to your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#e8b84b] text-[#0f1117] font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#f0c96a] transition-all duration-200 flex items-center gap-3"
            >
              Contact Us Today
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f1117]">
                <i className="ri-arrow-right-line text-[#e8b84b] text-xs"></i>
              </span>
            </Link>
            <Link
              to="/services"
              className="text-white text-sm font-medium underline underline-offset-4 whitespace-nowrap cursor-pointer hover:text-[#e8b84b] transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
