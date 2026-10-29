import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, UtensilsCrossed } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [subject, setSubject] = useState('Private Dining Event');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0d11] text-[#ded8cf] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ea8245] font-semibold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect &amp; Private Hire</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-white font-normal">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base text-[#9a9184] mt-2">
            Whether inquiring about group celebrations, full hearth takeovers, or dietary questions, our concierge team is at your disposal.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Channels Card */}
            <div className="p-6 sm:p-8 bg-[#141419] border border-[#262633] rounded-2xl shadow-xl space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#1d1d27] border border-[#2e2e3d] rounded-xl text-[#ea8245] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">Telephone Enquiries</div>
                  <div className="font-display text-xl text-white font-medium mt-0.5">{RESTAURANT_INFO.contact.phoneDisplay}</div>
                  <div className="text-xs text-[#7d7568] mt-0.5">Lines open daily from 11:00 to 22:00</div>
                </div>
              </div>

              {/* General Inquiries */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1f1f28]">
                <div className="p-3 bg-[#1d1d27] border border-[#2e2e3d] rounded-xl text-[#ea8245] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">Concierge Email</div>
                  <div className="text-sm text-white font-medium mt-0.5">{RESTAURANT_INFO.contact.email}</div>
                  <div className="text-xs text-[#7d7568] mt-0.5">Average reply time: within 4 hours</div>
                </div>
              </div>

              {/* Private Dining */}
              <div className="flex items-start gap-4 pt-4 border-t border-[#1f1f28]">
                <div className="p-3 bg-[#1d1d27] border border-[#2e2e3d] rounded-xl text-[#ea8245] shrink-0">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">Private Dining &amp; Events</div>
                  <div className="text-sm text-white font-medium mt-0.5">{RESTAURANT_INFO.contact.eventsEmail}</div>
                  <div className="text-xs text-[#7d7568] mt-0.5">Hearth Room capacity up to 36 guests</div>
                </div>
              </div>

            </div>

            {/* Fictional Location Card */}
            <div className="p-6 bg-[#141419] border border-[#262633] rounded-2xl text-xs text-[#8e8578] space-y-2">
              <div className="flex items-center gap-2 text-white font-medium">
                <MapPin className="w-4 h-4 text-[#ea8245]" />
                <span>Foundry Quarter Architectural Sanctuary</span>
              </div>
              <p>
                {RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.quarter}, {RESTAURANT_INFO.address.city}.
              </p>
              <p className="text-[11px] text-[#71695e]">
                Demo portfolio showcase. No physical dining establishment is situated at this fictitious street number.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Demo Contact Form */}
          <div className="lg:col-span-7 bg-[#141419] border border-[#262633] rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#1b2d1d] border border-[#2d5232] text-[#4ade80] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl text-white font-medium">
                  Enquiry Transmitted (Demo)
                </h3>
                <p className="text-xs text-[#9f9689] max-w-md mx-auto leading-relaxed">
                  Thank you for testing the interactive contact flow. In a live implementation, this triggers an automated ticketing alert to the maître d'.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-lg cursor-pointer"
                >
                  Send Another Demo Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#23232f]">
                  <h3 className="font-display text-2xl text-white font-medium">
                    Send a Message
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-[#d48c5b]">
                    Demo Form
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Julian Hayes"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-[#1b1b24] border border-[#2b2b3a] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. julian@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-[#1b1b24] border border-[#2b2b3a] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">
                    Enquiry Subject
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#1b1b24] border border-[#2b2b3a] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ea8245] transition-colors cursor-pointer"
                  >
                    <option value="Private Dining Event">Private Dining &amp; Hearth Takeover</option>
                    <option value="Chef Tasting Flight">Custom Tasting Flight Enquiry</option>
                    <option value="Dietary Guidance">Allergies &amp; Dietary Questions</option>
                    <option value="Press & Media">Press &amp; Portfolio Query</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#8b8377] font-medium">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your requested dates, guest numbers, or culinary inquiries..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#1b1b24] border border-[#2b2b3a] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors resize-none"
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-[#71695f]">
                    Illustrative contact simulation.
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-xl cursor-pointer shadow-md"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
