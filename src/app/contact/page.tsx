'use client';

import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const services = [
  'Select a service...',
  'Landscape Photography',
  'Real Estate Photography',
  'Aerial Videography',
  'Events Coverage',
  'Other / Custom',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-20">
      {/* ── Page Header */}
      <section className="py-16 bg-gradient-to-b from-[#0a1220] to-[#05080f] border-b border-[#0d3d54]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-[#e8701a] text-xs tracking-[0.3em] uppercase font-medium mb-3">
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white">Contact</h1>
          <div className="section-divider mt-4" />
          <p className="text-[#7a99b8] text-sm sm:text-base mt-4 max-w-xl">
            Ready to book a shoot or have questions? Fill out the form and I&apos;ll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Section */}
      <section className="py-16 sm:py-20 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info panel */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-[#1a8fbf] text-xs tracking-[0.3em] uppercase font-medium mb-3">
                  Contact Information
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail,   label: 'Email',    value: 'isaackodner@gmail.com', color: '#1a8fbf' },
                  { icon: MapPin, label: 'Location', value: 'Bay Area, CA',          color: '#e8701a' },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon size={16} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-[#1a4a5c] text-xs font-medium uppercase tracking-wide">{label}</div>
                      <div className="text-white text-sm mt-0.5">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#0d1628] border border-[#1a8fbf]/40 rounded-2xl p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 bg-[#1a8fbf]/15 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-[#1a8fbf]" />
                  </div>
                  <h3 className="text-white font-black text-2xl">Message Sent!</h3>
                  <p className="text-[#7a99b8] text-sm max-w-sm leading-relaxed">
                    Thanks for reaching out. I&apos;ll review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }); }}
                    className="px-6 py-2 border border-[#0d3d54] text-[#7a99b8] text-sm rounded hover:text-white hover:border-[#1a8fbf] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#0d1628] border border-[#0d3d54] rounded-2xl p-6 sm:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#7a99b8] text-xs font-medium mb-2 tracking-wide uppercase">
                        Name <span className="text-[#e8701a]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-[#0a1220] border border-[#0d3d54] text-white placeholder-[#1a4a5c] text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a8fbf] focus:ring-1 focus:ring-[#1a8fbf]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#7a99b8] text-xs font-medium mb-2 tracking-wide uppercase">
                        Email <span className="text-[#e8701a]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-[#0a1220] border border-[#0d3d54] text-white placeholder-[#1a4a5c] text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a8fbf] focus:ring-1 focus:ring-[#1a8fbf]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#7a99b8] text-xs font-medium mb-2 tracking-wide uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#0a1220] border border-[#0d3d54] text-white placeholder-[#1a4a5c] text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a8fbf] focus:ring-1 focus:ring-[#1a8fbf]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[#7a99b8] text-xs font-medium mb-2 tracking-wide uppercase">
                      Service Interested In <span className="text-[#e8701a]">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#0a1220] border border-[#0d3d54] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a8fbf] focus:ring-1 focus:ring-[#1a8fbf]/30 transition-colors appearance-none cursor-pointer"
                    >
                      {services.map((s) => (
                        <option key={s} value={s === 'Select a service...' ? '' : s} disabled={s === 'Select a service...'}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#7a99b8] text-xs font-medium mb-2 tracking-wide uppercase">
                      Message <span className="text-[#e8701a]">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project — location, date, any special requirements..."
                      className="w-full bg-[#0a1220] border border-[#0d3d54] text-white placeholder-[#1a4a5c] text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#1a8fbf] focus:ring-1 focus:ring-[#1a8fbf]/30 transition-colors resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#e8701a] text-white font-bold text-sm rounded-lg hover:bg-[#f4952a] transition-all glow-blue tracking-wide"
                  >
                    <Send size={16} />
                    Send Message
                  </button>

                  <p className="text-[#1a4a5c] text-xs text-center">
                    By submitting, you agree to be contacted regarding your inquiry. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
