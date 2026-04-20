import { Link } from 'react-router-dom';

const services = [
  {
    icon: 'ri-server-line',
    title: 'Managed IT Services',
    desc: 'Proactive monitoring, helpdesk support, and full infrastructure management so your team stays productive.',
    img: 'https://readdy.ai/api/search-image?query=professional%20IT%20technician%20managing%20servers%20in%20a%20modern%20data%20center%20with%20clean%20organized%20rack%20equipment%20and%20ambient%20lighting&width=600&height=400&seq=svc-1&orientation=landscape',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade security tools, threat detection, and compliance management to protect your business.',
    img: 'https://readdy.ai/api/search-image?query=abstract%20cybersecurity%20concept%20with%20glowing%20digital%20shield%20and%20network%20connections%20on%20dark%20background%20with%20blue%20and%20gold%20tones&width=600&height=400&seq=svc-2&orientation=landscape',
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Solutions',
    desc: 'Migrate, manage, and optimize your cloud environment with confidence and cost efficiency.',
    img: 'https://readdy.ai/api/search-image?query=cloud%20computing%20concept%20with%20floating%20data%20nodes%20and%20network%20connections%20in%20a%20clean%20minimal%20environment%20with%20soft%20warm%20lighting&width=600&height=400&seq=svc-3&orientation=landscape',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Help Desk Support',
    desc: '24/7 responsive support from certified technicians who know your business inside and out.',
    img: 'https://readdy.ai/api/search-image?query=professional%20IT%20support%20team%20working%20at%20modern%20help%20desk%20with%20multiple%20monitors%20in%20a%20bright%20clean%20office%20environment&width=600&height=400&seq=svc-4&orientation=landscape',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-[#f9f8f6]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">What We Do</span>
            <h2 className="text-[#0f1117] font-bold text-4xl md:text-5xl mt-3 leading-tight">
              Services Built for<br />Your Business
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f1117] uppercase tracking-widest border-b-2 border-[#e8b84b] pb-1 whitespace-nowrap cursor-pointer hover:text-[#e8b84b] transition-colors"
          >
            View All Services
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ minHeight: '340px' }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6" style={{ minHeight: '340px' }}>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e8b84b]/20 border border-[#e8b84b]/40 mb-4">
                  <i className={`${svc.icon} text-[#e8b84b] text-lg`}></i>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{svc.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
