const reasons = [
  {
    icon: 'ri-time-line',
    title: 'Proactive, Not Reactive',
    desc: 'We monitor your systems 24/7 and fix issues before they become problems — not after.',
  },
  {
    icon: 'ri-team-line',
    title: 'Dedicated Team',
    desc: 'Your own team of certified IT professionals who know your business and your goals.',
  },
  {
    icon: 'ri-bar-chart-2-line',
    title: 'Scalable Solutions',
    desc: 'Our services grow with you — from 5 employees to 500, we have you covered.',
  },
  {
    icon: 'ri-price-tag-3-line',
    title: 'Predictable Pricing',
    desc: 'Flat monthly rates with no surprise bills. Budget confidently every month.',
  },
  {
    icon: 'ri-award-line',
    title: 'Certified Experts',
    desc: 'Microsoft, Cisco, and CompTIA certified engineers with 15+ years of experience.',
  },
  {
    icon: 'ri-lock-line',
    title: 'Security First',
    desc: 'Every solution we deploy is built with security at its core — not as an afterthought.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Why Choose Us</span>
            <h2 className="text-[#0f1117] font-bold text-4xl md:text-5xl mt-3 leading-tight mb-6">
              IT Support That Feels<br />Like an In-House Team
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We partner with small and medium-sized businesses to deliver the kind of IT support usually reserved for enterprise companies — at a price that makes sense for your budget.
            </p>

          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div key={r.title} className="p-5 rounded-xl bg-[#f9f8f6] border border-gray-100 hover:border-[#e8b84b]/40 transition-colors duration-200">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8b84b]/10 mb-4">
                  <i className={`${r.icon} text-[#e8b84b] text-lg`}></i>
                </div>
                <h3 className="text-[#0f1117] font-semibold text-sm mb-2">{r.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
