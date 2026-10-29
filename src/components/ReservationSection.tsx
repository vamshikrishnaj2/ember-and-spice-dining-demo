import React, { useState } from 'react';
import { Calendar, Users, Clock, Sparkles, CheckCircle2, ShieldAlert, X, ChevronRight, Armchair } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [guests, setGuests] = useState('2 Guests');
  const [date, setDate] = useState(() => {
    // Tomorrow's date formatted as YYYY-MM-DD
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [seating, setSeating] = useState('Hearthside Counter');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationData, setConfirmationData] = useState<{
    reference: string;
    guests: string;
    date: string;
    time: string;
    seating: string;
    name: string;
  } | null>(null);

  const timeSlots = [
    '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = 'ES-DEMO-' + Math.floor(1000 + Math.random() * 9000);
      setConfirmationData({
        reference: randomRef,
        guests,
        date,
        time,
        seating,
        name
      });
    }, 600);
  };

  const resetForm = () => {
    setConfirmationData(null);
    setName('');
    setEmail('');
    setPhone('');
    setNotes('');
  };

  return (
    <section id="reservation" className="py-24 bg-[#09090c] border-t border-[#1c1c24] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Reservation Card Container */}
        <div className="bg-[#131318] border border-[#272736] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle amber gradient accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea8245]/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201813] border border-[#442718] text-xs text-[#ea8245] font-semibold uppercase tracking-wider">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Demo Reservation Enquiry</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-normal">
              Reserve Your Table Experience
            </h2>

            <p className="text-sm text-[#9f9689] leading-relaxed">
              Experience the intimate glow of our hearth. This form is a simulated prototype for demonstration purposes; submissions will display a simulated confirmation voucher.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Step 1: Party Size, Date, Time */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Guests */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#ea8245]" />
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ea8245] transition-colors cursor-pointer"
                >
                  <option value="1 Guest">1 Guest (Bar Solo)</option>
                  <option value="2 Guests">2 Guests (Table)</option>
                  <option value="3 Guests">3 Guests (Table)</option>
                  <option value="4 Guests">4 Guests (Booth)</option>
                  <option value="5-6 Guests">5-6 Guests (Hearth Banquet)</option>
                  <option value="7+ Guests (Private Dining)">7+ Guests (Private Dining)</option>
                </select>
              </div>

              {/* Date */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#ea8245]" />
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ea8245] transition-colors cursor-pointer"
                  required
                />
              </div>

              {/* Time Slot */}
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#ea8245]" />
                  Time Slot
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#ea8245] transition-colors cursor-pointer"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot} Service</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Step 2: Seating Preference */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium flex items-center gap-1.5">
                <Armchair className="w-3.5 h-3.5 text-[#ea8245]" />
                Seating Atmosphere
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Hearthside Counter', desc: 'Direct view of the open fire & chef prep' },
                  { title: 'Main Dining Room', desc: 'Intimate charred wood tables and low lighting' },
                  { title: 'Garden Terrace', desc: 'Glass-enclosed heated all-season patio' }
                ].map((seat) => (
                  <button
                    key={seat.title}
                    type="button"
                    onClick={() => setSeating(seat.title)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      seating === seat.title
                        ? 'bg-[#221c17] border-[#ea8245] text-white shadow-md'
                        : 'bg-[#181822] border-[#292936] text-[#8e8578] hover:border-[#3d3d4f] hover:text-[#ded8cf]'
                    }`}
                  >
                    <div className="text-xs font-semibold text-white">{seat.title}</div>
                    <div className="text-[11px] text-[#9a9184] mt-1 leading-snug">{seat.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Maya Sterling"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. maya@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium">
                  Phone (Demo)
                </label>
                <input
                  type="tel"
                  placeholder="e.g. (555) 019-3829"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2.5 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors"
                />
              </div>
            </div>

            {/* Step 4: Special Dietary Requests */}
            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-wider text-[#998f82] font-medium">
                Dietary Preferences or Occasion (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Anniversary, birthday, shellfish allergy, vegetarian tasting flight..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#1b1b24] border border-[#2e2e3d] rounded-xl px-4 py-2 text-xs text-white placeholder-[#5a5347] focus:outline-none focus:border-[#ea8245] transition-colors resize-none"
              />
            </div>

            {/* Explicit Notice & Submit CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[11px] text-[#7d7568] text-center sm:text-left">
                <span>By clicking enquire, a simulated reservation ticket is generated for display.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-xl shadow-lg cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating Demo Voucher...</span>
                ) : (
                  <>
                    <span>Submit Demo Reservation Enquiry</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Confirmation Modal */}
      {confirmationData && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#141419] border border-[#2e2e3d] max-w-md w-full p-6 sm:p-8 rounded-2xl shadow-2xl relative text-[#d6cec3]">
            <button
              onClick={resetForm}
              className="absolute top-5 right-5 text-[#888177] hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close confirmation"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#1a2d1d] border border-[#2a4d30] text-[#4ade80] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="text-xs uppercase tracking-widest text-[#ea8245] font-semibold">
                Simulated Booking Generated
              </div>

              <h3 className="font-display text-2xl text-white font-medium">
                Demo Reservation Voucher
              </h3>

              <p className="text-xs text-[#9f9689]">
                Thank you, <strong className="text-white">{confirmationData.name}</strong>. In a live production deployment, this would trigger an instant SMS &amp; email confirmation flow.
              </p>
            </div>

            {/* Voucher Details Card */}
            <div className="my-6 p-4 bg-[#1b1b24] border border-[#2c2c3b] rounded-xl space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-[#262635]">
                <span className="text-[#877e71] uppercase tracking-wider text-[10px]">Reference</span>
                <span className="font-mono font-bold text-[#ea8245] text-sm tabular-nums">
                  {confirmationData.reference}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#877e71]">Party Size:</span>
                <span className="text-white font-medium">{confirmationData.guests}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#877e71]">Date &amp; Time:</span>
                <span className="text-white font-medium">{confirmationData.date} at {confirmationData.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#877e71]">Seating:</span>
                <span className="text-white font-medium">{confirmationData.seating}</span>
              </div>
            </div>

            {/* Big Demo Disclaimer Box */}
            <div className="p-3 bg-[#241a14] border border-[#482b1c] rounded-lg text-[11px] text-[#d48c5b] flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                <strong>Reminder:</strong> This is a portfolio demonstration. No real table was booked and no payment was requested.
              </span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={resetForm}
                className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-[#e07a38] hover:bg-[#ea8948] transition-colors rounded-xl cursor-pointer"
              >
                Close Demo Receipt
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
