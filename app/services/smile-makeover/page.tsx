import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Smile Makeover | Full Mouth Rehabilitation | Vinola Dental Salem",
  description: "Comprehensive smile makeover in Salem — 3D smile design, digital planning, and full mouth rehabilitation by Dr. Vinola Duraisamy.",
};

const treatments = [
  { title: "3D Smile Design", desc: "Digital visualisation of your future smile using intraoral scans and advanced design software for precise planning." },
  { title: "Digital Smile Planning", desc: "A complete pre-treatment simulation using digital tools to map out your personalised smile transformation." },
  { title: "Full Mouth Rehabilitation", desc: "A comprehensive treatment combining multiple procedures — implants, crowns, veneers, and gum work — to fully restore a compromised smile." },
];

const phases = [
  { num: "01", title: "Smile Analysis", desc: "We assess facial proportions, gum line, tooth shape, shade, and bite to define your ideal outcome." },
  { num: "02", title: "Digital Design Preview", desc: "A digital preview lets you see the planned result before a single procedure begins." },
  { num: "03", title: "Treatment Sequencing", desc: "Procedures are scheduled in the correct clinical order — often starting with health, then aesthetics." },
  { num: "04", title: "Final Reveal", desc: "Your finished smile is delivered and refined until it exceeds your expectations." },
];

export default function SmileMakeoverPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Smile Makeover"
        title="Your Complete"
        titleHighlight="Smile Transformation"
        subtitle="A comprehensive, digitally planned smile makeover designed around your face, goals, and lifestyle — combining the best of every dental discipline."
        breadcrumbs={[{ label: "Services", href: "/services/general-dentistry" }, { label: "Smile Makeover" }]}
      />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Makeover <span className="text-gradient">Treatments</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {treatments.map(({ title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(217,70,239,0.08)" }}>
                  <Sparkles className="w-5 h-5 text-[#D946EF]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>The Makeover <span className="text-gradient">Journey</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {phases.map((p) => (
              <div key={p.num} className="glass rounded-2xl p-6 card-shadow text-center">
                <div className="w-12 h-12 rounded-xl text-white font-bold text-lg flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>{p.num}</div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{p.title}</h3>
                <p className="text-sm text-[#6B7280]">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              {["Fully digital planning before treatment", "Combination of specialties in one practice", "See your result before we start"].map((pt) => (
                <div key={pt} className="flex items-start gap-2 text-sm text-[#374151]">
                  <CheckCircle className="w-4 h-4 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
            <Link href="/patients/appointment" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Begin Your Smile Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </main>
  );
}
