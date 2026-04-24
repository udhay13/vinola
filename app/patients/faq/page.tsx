import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata: Metadata = {
  title: "FAQs | Frequently Asked Questions | Vinola Dental Salem",
  description: "Answers to common questions about dental treatments, appointments, costs, and care at Vinola Dental in Salem.",
};

const faqCategories = [
  {
    category: "General Questions",
    faqs: [
      { q: "Where is Vinola Dental located?", a: "We are located at 123 Omalur Road, Hasthampatti, Salem – 636007, Tamil Nadu." },
      { q: "What are the clinic hours?", a: "We are open Monday to Saturday from 9:00 AM to 8:00 PM and Sunday from 10:00 AM to 2:00 PM." },
      { q: "How do I book an appointment?", a: "You can book online via our appointment page, call us at 0427 4972266, or WhatsApp us at +91 94437 35505." },
      { q: "Does the clinic accept walk-ins?", a: "Yes — walk-ins are welcome for minor concerns and emergencies. However, scheduled appointments get priority." },
      { q: "Do you treat patients of all ages?", a: "Absolutely. We provide care for children, adults, and seniors — the entire family under one roof." },
    ],
  },
  {
    category: "Cosmetic Treatments",
    faqs: [
      { q: "Is teeth whitening safe?", a: "Yes — professional in-clinic whitening uses clinically tested agents at controlled concentrations. It is safe for most patients." },
      { q: "How long do veneers last?", a: "Porcelain veneers typically last 10–15 years with proper care and regular dental check-ups." },
      { q: "Can I fix a chipped tooth in one visit?", a: "Yes — composite bonding can correct chipped teeth in a single appointment, usually within 30–60 minutes." },
    ],
  },
  {
    category: "Orthodontics",
    faqs: [
      { q: "Am I too old for braces?", a: "Not at all. Orthodontic treatment is effective at any age. Many of our adult patients achieve excellent results with braces or aligners." },
      { q: "Are clear aligners more expensive than braces?", a: "Clear aligners are generally more expensive than metal braces due to the fabrication technology involved. We explain all cost options during your consultation." },
      { q: "How do I care for my teeth with braces?", a: "Brush carefully after every meal, use interdental brushes, and avoid hard or sticky foods. We provide a detailed care guide at fitting." },
    ],
  },
  {
    category: "Implants & Surgery",
    faqs: [
      { q: "Am I a good candidate for dental implants?", a: "Most adults with healthy gums and adequate bone are candidates. A clinical assessment including X-rays determines suitability." },
      { q: "How long does implant treatment take?", a: "From placement to final crown, the process typically takes 3–6 months including the healing phase." },
      { q: "Is wisdom tooth removal always surgical?", a: "Not always. Fully erupted wisdom teeth can be removed simply. Impacted teeth require a minor surgical procedure — which we perform under local anaesthesia." },
    ],
  },
  {
    category: "Payments & Insurance",
    faqs: [
      { q: "Do you accept insurance?", a: "We don't directly process insurance claims, but we provide itemised cost records that you can submit to your insurer for reimbursement." },
      { q: "Is EMI available for large treatments?", a: "Yes — EMI options are available for treatments above ₹5,000. Speak to our front desk for available plans." },
      { q: "What payment methods do you accept?", a: "Cash, UPI (PhonePe, GPay, Paytm), debit/credit cards, and bank transfers are all accepted." },
    ],
  },
];

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="FAQs"
        title="Questions,"
        titleHighlight="Answered"
        subtitle="Everything you may want to know about dental treatments, appointments, payments, and care at Vinola Dental."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "FAQs" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {faqCategories.map(({ category, faqs }) => (
            <div key={category}>
              <h2 className="text-xl font-bold text-[#1F2937] mb-5 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="h-0.5 w-8 rounded-full inline-block flex-shrink-0" style={{ background: "linear-gradient(90deg, #2CB1BC, #1F8A94)" }} />
                {category}
              </h2>
              <div className="space-y-3">
                {faqs.map(({ q, a }) => (
                  <details key={q} className="group border border-gray-100 rounded-2xl overflow-hidden">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1F2937] hover:text-[#2CB1BC] transition-colors list-none">
                      {q}
                      <span className="text-[#2CB1BC] text-xl font-light ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-gray-100 pt-4">{a}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Still Have <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-[#6B7280] mb-6">Our team is happy to answer any question — call, WhatsApp, or book a free consultation.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:04274972266" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#2CB1BC] text-[#2CB1BC] font-semibold hover:bg-[#E6F7F8] transition-all">
              Call 0427 4972266
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
