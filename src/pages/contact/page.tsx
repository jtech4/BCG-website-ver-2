import { useState } from 'react';
import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const contactInfo = [
  { icon: 'ri-phone-line', label: 'Phone', value: '+1 (714) 509-0088', href: 'tel:+17145090088' },
  { icon: 'ri-mail-line', label: 'Email', value: 'info@britoconsultinggroup.com', href: 'mailto:info@britoconsultinggroup.com' },
  { icon: 'ri-map-pin-line', label: 'Service Area', value: 'Serving Orange County, Inland Empire & Los Angeles', href: '/services' },
  { icon: 'ri-time-line', label: 'Hours', value: 'Mon–Fri: 8am–6pm PST\n24/7 Emergency Support', href: '#' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);

  formData.append('form-name', 'contact');

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    });

    if (!response.ok) throw new Error('Form submission failed');

    setSubmitted(true);
    form.reset();
    setCharCount(0);
  } catch (error) {
    console.error(error);
    alert('There was a problem sending your message. Please try again.');
  }
};

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-[#0f1117] overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://readdy.ai/api/search-image?query=modern%20professional%20office%20building%20exterior%20at%20dusk%20with%20warm%20interior%20lights%20glowing%20through%20large%20windows%20representing%20a%20technology%20consulting%20firm&width=1920&height=600&seq=contact-hero-1&orientation=landscape"
            alt="Contact Us"
            className="w-full h-full object-cover object-top opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1117]/60 to-[#0f1117]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 text-center">
          <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Contact Us</span>
          <h1 className="text-white font-bold text-5xl md:text-6xl mt-4 leading-tight">
            Let&apos;s Start a Conversation
          </h1>
          <p className="text-gray-400 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Tell us about your business and we&apos;ll build a custom IT plan that fits your needs and budget.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10">

          {/* Centered heading */}
          <div className="text-center mb-12">
            <span className="text-[#e8b84b] text-xs uppercase tracking-widest font-semibold">Get in Touch</span>
            <h2 className="text-[#0f1117] font-bold text-3xl md:text-4xl mt-3 leading-tight mb-4">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xl mx-auto">
              Whether you have a quick question or are ready to overhaul your entire IT infrastructure, our team is here to help. Reach out and we&apos;ll respond within one business day.
            </p>
          </div>

          {/* Se Habla Español banner */}
          <div className="flex items-center justify-center gap-3 mb-10 py-3 px-6 rounded-xl bg-[#e8b84b]/10 border border-[#e8b84b]/30 max-w-xs mx-auto">
            <i className="ri-translate-2 text-[#e8b84b] text-xl"></i>
            <span className="text-[#0f1117] font-semibold text-sm tracking-wide">Se Habla Español</span>
          </div>

          {/* Contact info cards — horizontal row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-[#f9f8f6] hover:bg-[#e8b84b]/10 transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#e8b84b]/10 group-hover:bg-[#e8b84b]/20 transition-colors flex-shrink-0">
                  <i className={`${item.icon} text-[#e8b84b] text-lg`}></i>
                </div>
                <div>
                  <div className="text-[#0f1117] font-semibold text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-0.5 whitespace-pre-line leading-relaxed">{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form — centered */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#f9f8f6] rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#e8b84b]/20 mb-6">
                      <i className="ri-check-line text-[#e8b84b] text-3xl"></i>
                    </div>
                    <h3 className="text-[#0f1117] font-bold text-2xl mb-3">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Thank you for reaching out. A member of our team will get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[#0f1117] font-bold text-2xl mb-2">Request a Free Consultation</h3>
                    <p className="text-gray-500 text-sm mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                    <form
                     name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-5"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            required
                            placeholder="First"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            required
                            placeholder="Last"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Acme Corp"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (305) 555-0000"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] focus:outline-none focus:border-[#e8b84b] transition-colors cursor-pointer"
                        >
                          <option value="">Select a service...</option>
                          <option value="Managed IT Services">Managed IT Services</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Cloud Solutions">Cloud Solutions</option>
                          <option value="Help Desk Support">Help Desk Support</option>
                          <option value="IT Consulting">IT Consulting</option>
                          <option value="Network & Infrastructure">Network &amp; Infrastructure</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f1117] uppercase tracking-widest mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={5}
                          maxLength={500}
                          placeholder="Tell us about your business and IT challenges..."
                          onChange={(e) => setCharCount(e.target.value.length)}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-sm text-[#0f1117] placeholder-gray-400 focus:outline-none focus:border-[#e8b84b] transition-colors resize-none"
                        ></textarea>
                        <div className="text-right text-xs text-gray-400 mt-1">{charCount}/500</div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-[#0f1117] text-white font-semibold text-sm uppercase tracking-widest whitespace-nowrap cursor-pointer hover:bg-[#1e2230] transition-all duration-200 flex items-center justify-center gap-3"
                      >
                        Send Message
                        <i className="ri-send-plane-line"></i>
                      </button>
                    </form>
                  </>
                )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
