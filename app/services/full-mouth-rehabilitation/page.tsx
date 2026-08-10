import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight, Layers, Activity, Shield, Smile, Stethoscope } from "lucide-react";

export const metadata: Metadata = {
  title: "Full Mouth Rehabilitation | Vinola Dental Salem",
  description:
    "Complete dentistry combining prosthodontics, orthodontics, and restorative care for total oral health wellness and a beautiful smile.",
};

const treatments = [
  {
    icon: Stethoscope,
    title: "Comprehensive Evaluation",
    desc: "A detailed assessment of your gums, jawbone, teeth, and temporomandibular joints (TMJ) to establish a baseline for total oral wellness.",
  },
  {
    icon: Layers,
    title: "Prosthodontics Integration",
    desc: "Rebuilding missing or severely worn tooth structure using crowns, bridges, implants, or dentures to restore proper bite and function.",
  },
  {
    icon: Smile,
    title: "Orthodontics Alignment",
    desc: "Correcting misalignments to ensure teeth meet perfectly, reducing strain on joints and muscles and improving long-term stability.",
  },
  {
    icon: Shield,
    title: "Gum and Bone Health",
    desc: "Establishing a strong, disease-free foundation by treating periodontal issues before restorative work begins.",
  },
];

const faqs = [
  { q: "What exactly is full mouth rehabilitation?", a: "It's a complete dentistry approach that combines multiple specialties—like prosthodontics, orthodontics, and periodontics—to rebuild your entire smile, bite, and oral health from the ground up." },
  { q: "How long does the process take?", a: "Because it is highly customized and involves multiple phases, treatment can range from a few months to over a year, paced entirely around your comfort and healing." },
  { q: "Will the treatments be painful?", a: "Your comfort is our top priority. We use a carefully phased approach and modern pain management so you are never overwhelmed during your visits." },
  { q: "How do I know if I need this level of care?", a: "If you experience multiple missing teeth, severe tooth wear, chronic jaw joint (TMJ) pain, or advanced gum disease, a comprehensive evaluation will determine if this approach is right for you." },
];

export default function FullMouthRehabilitationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Full Mouth Rehabilitation"
        title="Complete"
        titleHighlight="Dentistry"
        subtitle="A multidisciplinary approach where oral health wellness is the priority—harmonizing gums, bone, tooth structure, joints, and muscles."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Full Mouth Rehabilitation" }]}
      />

      {/* Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              A Multidisciplinary <span className="text-gradient">Approach</span>
            </h2>
            <p className="text-[#6B7280] mt-3 max-w-xl mx-auto">We coordinate every aspect of your oral health to ensure long-lasting stability, function, and aesthetics.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(139,92,246,0.1)" }}>
                  <Icon className="w-5 h-5 text-[#8B5CF6]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Full Mouth Rehab */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Total Wellness for your <span className="text-gradient" style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Smile & Bite</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Full mouth rehabilitation is about more than just aesthetics. By prioritizing the structural foundation of your teeth and jaw, we create a smile that looks beautiful, functions perfectly, and lasts a lifetime.
              </p>
              <ul className="space-y-3">
                {[
                  "Rebuild your bite, function, and aesthetics simultaneously",
                  "Alleviate chronic temporomandibular joint (TMJ) discomfort",
                  "Seamless integration of Prosthodontics and Orthodontics",
                  "A phased, predictable approach tailored to your comfort"
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-3xl p-8 card-shadow bg-white/60">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{ background: "rgba(139,92,246,0.1)" }}>
                  <Activity className="w-8 h-8 text-[#8B5CF6]" />
                </div>
                <div className="text-[#1F2937] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Start Your Journey</div>
                <div className="text-[#6B7280] text-sm mb-6">Schedule a comprehensive evaluation to map out your custom rehabilitation plan.</div>
                <Link
                  href="/patients/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #6D28D9)" }}
                >
                  Book an Evaluation <ArrowRight className="w-4 h-4" />
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
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-[#1F2937] hover:text-[#8B5CF6] transition-colors list-none">
                  {faq.q}
                  <span className="text-[#8B5CF6] text-xl font-light ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">+</span>
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
