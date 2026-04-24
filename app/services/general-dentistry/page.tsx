import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight, Shield, Stethoscope, Smile, AlertCircle, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "General Dentistry | Vinola Dental Salem",
  description:
    "Comprehensive general dentistry in Salem — dental check-ups, scaling, fillings, extractions, gum treatments, and emergency care by Dr. Vinola Duraisamy.",
};

const treatments = [
  {
    icon: Shield,
    title: "Dental Check-Up",
    desc: "Comprehensive oral exam to assess tooth health, gum condition, and detect early issues before they progress.",
    slug: "general-dentistry",
  },
  {
    icon: Zap,
    title: "Tooth Cleaning / Scaling",
    desc: "Professional removal of plaque, tartar, and stains for fresher breath and healthier gums.",
    slug: "general-dentistry",
  },
  {
    icon: Smile,
    title: "Dental Fillings",
    desc: "Tooth-coloured composite fillings to restore cavities and maintain a natural smile appearance.",
    slug: "general-dentistry",
  },
  {
    icon: Stethoscope,
    title: "Tooth Extraction",
    desc: "Safe and gentle removal of damaged, infected, or impacted teeth with structured aftercare.",
    slug: "general-dentistry",
  },
  {
    icon: Heart,
    title: "Gum Disease Treatment",
    desc: "Targeted treatment for gingivitis and periodontitis including deep cleaning and gum therapy.",
    slug: "general-dentistry",
  },
  {
    icon: AlertCircle,
    title: "Emergency Dentistry",
    desc: "Prompt care for sudden toothaches, chipped teeth, lost fillings, and dental trauma.",
    slug: "general-dentistry",
  },
];

const faqs = [
  { q: "How often should I visit the dentist?", a: "Most patients benefit from a check-up and cleaning every 6 months. Those with gum disease or active dental issues may need more frequent visits." },
  { q: "Is scaling painful?", a: "Scaling is generally comfortable. We use gentle techniques and can apply local anaesthetic if sensitivity is a concern." },
  { q: "How long does a dental filling take?", a: "A standard composite filling usually takes 30–60 minutes depending on the size and location of the cavity." },
  { q: "When should I come in for a dental emergency?", a: "Come in or call us immediately for severe toothache, trauma, swelling, knocked-out teeth, or a lost filling that causes pain." },
];

export default function GeneralDentistryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="General Dentistry"
        title="Preventive &"
        titleHighlight="Essential Dental Care"
        subtitle="The foundation of a healthy smile — regular check-ups, professional cleaning, fillings, and prompt treatment when you need it most."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "General Dentistry" }]}
      />

      {/* Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Treatments We <span className="text-gradient">Offer</span>
            </h2>
            <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">All general dentistry treatments are delivered with a calm, patient-first approach using modern clinical techniques.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(44,177,188,0.1)" }}>
                  <Icon className="w-5 h-5 text-[#2CB1BC]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why General Dentistry */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Prevention Saves <span className="text-gradient">More Than Teeth</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Regular dental visits are one of the most effective things you can do for your health. Early detection means simpler, more affordable treatment — and a lifetime of confident smiles.
              </p>
              <ul className="space-y-3">
                {["Catch cavities before they need root canals", "Prevent gum disease from progressing", "Maintain fresh breath and clean teeth", "Monitor bite, jaw, and overall oral health"].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-3xl p-8 card-shadow">
              <div className="text-center">
                <div className="text-5xl font-bold text-[#2CB1BC] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>6</div>
                <div className="text-[#6B7280] text-sm mb-6">Months — the ideal check-up interval</div>
                <Link
                  href="/patients/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
                >
                  Book Your Check-Up <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1F2937] text-center mb-10" style={{ fontFamily: "var(--font-poppins)" }}>
            Common <span className="text-gradient">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-gray-100 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1F2937] hover:text-[#2CB1BC] transition-colors list-none">
                  {faq.q}
                  <span className="text-[#2CB1BC] text-xl font-light ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-[#6B7280] leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
