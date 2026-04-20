import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';

const values = [
  { icon: 'ri-focus-3-line', title: 'Client-First Mindset', desc: 'Every decision we make starts with one question: what is best for our client?' },
  { icon: 'ri-shield-star-line', title: 'Integrity Always', desc: 'We are transparent, honest, and accountable in everything we do.' },
  { icon: 'ri-lightbulb-line', title: 'Continuous Innovation', desc: 'Technology evolves fast. We stay ahead so you never fall behind.' },
  { icon: 'ri-team-line', title: 'Partnership Mentality', desc: 'We are not just a vendor — we are an extension of your team.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#0f1117]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20professional%20office%20interior%20with%20large%20windows%20city%20view%20and%20warm%20ambient%20lighting%20representing%20a%20technology%20consulting%20firm&width=1920&height=700&seq=about-hero-1&orientation=landscape"
            alt="About Us"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/60 to-[#0f1117]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">About Us</span>
          <h1 className="text-white font-bold text-5xl md:text-6xl mt-4 leading-tight">
            We Are Brito<br />Consulting Group
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            A managed IT service provider on a mission to give small and medium businesses the technology edge they deserve.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-[480px] rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=IT%20professional%20working%20confidently%20in%20a%20modern%20server%20room%20with%20glowing%20rack%20lights%20and%20ethernet%20cables%20in%20a%20professional%20data%20center%20environment&width=800&height=600&seq=about-story-2&orientation=landscape"
                  alt="Our Story"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#e8b84b] rounded-2xl p-6 hidden md:block">
                <div className="text-[#0f1117] font-bold text-4xl">15+</div>
                <div className="text-[#0f1117] text-sm font-medium mt-1">Years of Experience</div>
              </div>
            </div>
            <div>
              <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Our Story</span>
              <h2 className="text-[#0f1117] font-bold text-4xl md:text-5xl mt-3 leading-tight mb-6">
                Built to Bridge the<br />Enterprise Gap
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-5">
                Brito Consulting Group was founded with a clear mission: to give small and medium-sized businesses access to the same quality of IT support that large enterprises enjoy — without the enterprise price tag.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                Our founder, Julio Brito, brings over 15 years of hands-on IT experience managing infrastructure, cybersecurity, and cloud solutions across a wide range of industries. He saw firsthand how smaller businesses were left behind — struggling with outdated systems, reactive IT support, and security vulnerabilities that put them at risk. BCG was his answer to that problem.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8b84b]/10 border border-[#e8b84b]/30">
                  <i className="ri-award-line text-[#e8b84b] text-sm"></i>
                  <span className="text-[#0f1117] text-sm font-medium">15+ Years of IT Experience</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8b84b]/10 border border-[#e8b84b]/30">
                  <i className="ri-building-2-line text-[#e8b84b] text-sm"></i>
                  <span className="text-[#0f1117] text-sm font-medium">Enterprise-Level Expertise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Our Values</span>
            <h2 className="text-[#0f1117] font-bold text-4xl md:text-5xl mt-3">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-2xl bg-white border border-gray-100 text-center">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#e8b84b]/10 mx-auto mb-5">
                  <i className={`${v.icon} text-[#e8b84b] text-2xl`}></i>
                </div>
                <h3 className="text-[#0f1117] font-semibold text-base mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f1117]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-white font-bold text-4xl md:text-5xl mb-6">Ready to Work Together?</h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto mb-10">
            Let&apos;s build a custom IT strategy that fits your business goals and budget.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e8b84b] text-[#0f1117] font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#f0c96a] transition-all duration-200"
          >
            Get in Touch
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0f1117]">
              <i className="ri-arrow-right-line text-[#e8b84b] text-xs"></i>
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
