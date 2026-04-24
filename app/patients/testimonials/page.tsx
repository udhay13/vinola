import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata: Metadata = {
  title: "Patient Testimonials | Vinola Dental Salem",
  description: "Read what patients say about their experience at Vinola Dental Salem — real reviews, star ratings, and smile transformation stories.",
};

const testimonials = [
  { name: "Kavitha R.", location: "Salem", rating: 5, service: "Dental Implants", review: "I had been missing a tooth for years and was nervous about implants. Dr. Vinola explained every step clearly and the whole process was so much more comfortable than I expected. The final result looks completely natural. I wish I had done it sooner.", date: "January 2026" },
  { name: "Rajan M.", location: "Namakkal", rating: 5, service: "Orthodontics", review: "My son had very crowded teeth and we were recommended ceramic braces. 14 months later, the transformation is remarkable! Dr. Vinola and her team were patient and kind throughout. Highly recommend for children's orthodontic treatment.", date: "February 2026" },
  { name: "Preethi S.", location: "Salem", rating: 5, service: "Teeth Whitening", review: "I got professional whitening done before my wedding and the results were incredible — 7 shades brighter! The procedure was painless and completed in a single sitting. So glad I chose Vinola Dental.", date: "November 2025" },
  { name: "Annamalai K.", location: "Erode", rating: 5, service: "Root Canal Treatment", review: "I was terrified of root canals from what I'd heard. But Dr. Vinola put me completely at ease. I didn't feel a thing and the tooth feels perfectly fine now. The aftercare guidance was also very helpful.", date: "March 2026" },
  { name: "Selvi T.", location: "Salem", rating: 5, service: "Pediatric Dentistry", review: "My 6-year-old daughter was very scared of dentists. But the team at Vinola Dental was so gentle and patient that she was smiling by the end of the appointment! Now she actually looks forward to her check-ups.", date: "December 2025" },
  { name: "Vivek P.", location: "Salem", rating: 5, service: "Dental Veneers", review: "I've wanted veneers for years but was always unsure. After the smile design consultation at Vinola Dental I could see exactly what the result would look like before it was done. The final result is stunning — exactly what I asked for.", date: "February 2026" },
  { name: "Murugesan A.", location: "Attur", rating: 5, service: "General Dentistry", review: "Very professional clinic with modern equipment. The scaling and check-up was thorough, and Dr. Vinola gave me a clear understanding of what I need to do to maintain better oral health. Will definitely return every 6 months.", date: "January 2026" },
  { name: "Lalitha N.", location: "Salem", rating: 5, service: "Full Smile Makeover", review: "I had a full smile makeover — whitening, bonding, and reshaping — and the change in my confidence is unbelievable. Everyone I meet comments on my smile now! Dr. Vinola truly understands aesthetics and makes you feel comfortable throughout.", date: "March 2026" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Patient Testimonials"
        title="Stories of"
        titleHighlight="Transformed Smiles"
        subtitle="Real experiences shared by patients who trusted Vinola Dental with their smiles. Every review reflects our commitment to genuine, compassionate care."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Testimonials" }]}
      />

      {/* Stats */}
      <section className="py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[{ v: "5,000+", l: "Patients Served" }, { v: "4.9★", l: "Average Rating" }, { v: "26+", l: "Years of Trust" }].map((s) => (
              <div key={s.l} className="p-5 rounded-2xl" style={{ background: "rgba(44,177,188,0.06)" }}>
                <div className="text-2xl font-bold text-[#2CB1BC]" style={{ fontFamily: "var(--font-poppins)" }}>{s.v}</div>
                <div className="text-xs text-[#6B7280] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, rating, service, review, date }) => (
              <div key={name} className="p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <div className="inline-flex items-center mb-3 px-2.5 py-1 rounded-full text-xs font-medium text-[#2CB1BC] border border-[#2CB1BC]/30"
                  style={{ background: "rgba(44,177,188,0.07)", width: "fit-content" }}>
                  {service}
                </div>
                <p className="text-sm text-[#374151] leading-relaxed flex-1 mb-4">&ldquo;{review}&rdquo;</p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <div>
                    <div className="font-semibold text-sm text-[#1F2937]">{name}</div>
                    <div className="text-xs text-[#9CA3AF]">{location}</div>
                  </div>
                  <div className="text-xs text-[#9CA3AF]">{date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share your story */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Had a Great <span className="text-gradient">Experience?</span>
          </h2>
          <p className="text-[#6B7280] mb-6">Share your story and help other patients make the right choice for their dental care.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://g.page/r/vinoladental" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2CB1BC] text-[#2CB1BC] font-semibold hover:bg-[#E6F7F8] transition-all">
              Leave a Google Review
            </a>
            <Link href="/patients/appointment"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
