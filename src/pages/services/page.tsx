import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-server-line',
    title: 'Managed IT Services',
    tagline: 'Your IT department, fully managed.',
    desc: 'We take full ownership of your IT infrastructure — monitoring, maintaining, and optimizing your systems around the clock so your team can focus on what they do best.',
    features: [
      '24/7 proactive system monitoring',
      'Unlimited helpdesk support',
      'Patch management & updates',
      'Network infrastructure management',
      'Vendor management & coordination',
      'Monthly performance reporting',
    ],
    img: 'https://readdy.ai/api/search-image?query=professional%20IT%20engineer%20monitoring%20multiple%20server%20racks%20in%20a%20modern%20data%20center%20with%20organized%20cable%20management%20and%20ambient%20blue%20lighting&width=800&height=500&seq=svc-detail-1&orientation=landscape',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Cybersecurity',
    tagline: 'Enterprise-grade protection for your business.',
    desc: 'Cyber threats don\'t discriminate by company size. We deploy the same security tools used by large enterprises to protect your data, your clients, and your reputation.',
    features: [
      'Endpoint detection & response (EDR)',
      'Email security & anti-phishing',
      'Security awareness training',
      'Vulnerability assessments',
      'Compliance management (HIPAA, PCI, SOC2)',
      'Incident response planning',
    ],
    img: 'https://readdy.ai/api/search-image?query=abstract%20digital%20security%20concept%20with%20glowing%20shield%20and%20binary%20code%20streams%20on%20a%20dark%20background%20with%20gold%20and%20white%20accent%20colors&width=800&height=500&seq=svc-detail-2&orientation=landscape',
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Solutions',
    tagline: 'Move to the cloud with confidence.',
    desc: 'Whether you\'re migrating from on-premise, optimizing an existing cloud setup, or building a hybrid environment, our certified cloud architects design solutions that scale with your business.',
    features: [
      'Cloud migration planning & execution',
      'Microsoft 365 & Azure management',
      'Google Workspace administration',
      'Cloud backup & disaster recovery',
      'Cost optimization & rightsizing',
      'Hybrid cloud architecture',
    ],
    img: 'https://readdy.ai/api/search-image?query=cloud%20computing%20visualization%20with%20interconnected%20nodes%20and%20data%20streams%20floating%20in%20a%20clean%20minimal%20environment%20with%20warm%20gold%20and%20white%20tones&width=800&height=500&seq=svc-detail-3&orientation=landscape',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Help Desk Support',
    tagline: 'Real humans, real fast.',
    desc: 'Our certified technicians are available 24/7 to resolve issues quickly — by phone, email, or remote session. No bots, no runaround, just fast and friendly support.',
    features: [
      '24/7/365 live support',
      'Remote & on-site assistance',
      'Average 4-minute response time',
      'Dedicated account manager',
      'Ticketing system & reporting',
      'User onboarding & offboarding',
    ],
    img: 'https://readdy.ai/api/search-image?query=friendly%20IT%20support%20specialist%20working%20at%20a%20modern%20help%20desk%20with%20headset%20and%20multiple%20monitors%20in%20a%20bright%20professional%20office%20environment&width=800&height=500&seq=svc-detail-4&orientation=landscape',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'IT Consulting',
    tagline: 'Strategy that aligns IT with your business goals.',
    desc: 'Not sure where to start? Our consultants assess your current environment, identify gaps, and build a technology roadmap that supports your growth — without overspending.',
    features: [
      'IT infrastructure assessment',
      'Technology roadmap development',
      'Budget planning & optimization',
      'Digital transformation strategy',
      'Vendor selection & negotiation',
      'IT policy & governance',
    ],
    img: 'https://readdy.ai/api/search-image?query=business%20consultants%20reviewing%20technology%20strategy%20on%20a%20whiteboard%20in%20a%20modern%20conference%20room%20with%20natural%20light%20and%20professional%20atmosphere&width=800&height=500&seq=svc-detail-5&orientation=landscape',
  },
  {
    icon: 'ri-wifi-line',
    title: 'Network & Infrastructure',
    tagline: 'Fast, reliable, and secure connectivity.',
    desc: 'From office Wi-Fi to multi-site WAN configurations, we design and manage network infrastructure that keeps your business connected and performing at its best.',
    features: [
      'Network design & installation',
      'Firewall configuration & management',
      'VPN & remote access solutions',
      'Structured cabling',
      'Network performance monitoring',
      'SD-WAN & multi-site connectivity',
    ],
    img: 'https://readdy.ai/api/search-image?query=modern%20network%20infrastructure%20with%20organized%20patch%20panels%20and%20switches%20in%20a%20clean%20server%20room%20with%20professional%20cable%20management%20and%20ambient%20lighting&width=800&height=500&seq=svc-detail-6&orientation=landscape',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0f1117] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20technology%20abstract%20background%20with%20circuit%20board%20patterns%20and%20glowing%20connections%20on%20a%20dark%20surface%20representing%20IT%20services&width=1920&height=700&seq=services-hero-1&orientation=landscape"
            alt="Services"
            className="w-full h-full object-cover object-top opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/50 to-[#0f1117]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Our Services</span>
          <h1 className="text-white font-bold text-5xl md:text-6xl mt-4 leading-tight">
            Everything Your Business<br />Needs to Thrive
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Comprehensive managed IT services designed to keep your business secure, efficient, and always moving forward.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col gap-20">
          {services.map((svc, idx) => (
            <div
              key={svc.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`w-full h-72 md:h-96 rounded-2xl overflow-hidden ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#e8b84b]/10 mb-5">
                  <i className={`${svc.icon} text-[#e8b84b] text-2xl`}></i>
                </div>
                <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">{svc.tagline}</span>
                <h2 className="text-[#0f1117] font-bold text-3xl md:text-4xl mt-2 mb-4">{svc.title}</h2>
                <p className="text-gray-500 text-base leading-relaxed mb-6">{svc.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <i className="ri-check-line text-[#e8b84b] font-bold"></i>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0f1117] text-white font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#1e2230] transition-all duration-200"
                >
                  Get Started
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-[#f9f8f6]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Pricing</span>
          <h2 className="text-[#0f1117] font-bold text-4xl md:text-5xl mt-3 mb-6">
            Transparent, Predictable Pricing
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mb-10">
            No surprise bills. No hidden fees. Just flat monthly rates that scale with your business. Contact us for a custom quote tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e8b84b] text-[#0f1117] font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#f0c96a] transition-all duration-200"
          >
            Request a Custom Quote
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
