import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { Cross, Stethoscope, Microscope, Droplets } from "lucide-react";

export const metadata: Metadata = {
  title: "Sterilization & Safety | Vinola Dental Salem",
  description: "Learn about the strict sterilization and infection control protocols at Vinola Dental. Your health and safety are our highest priorities.",
};

const protocols = [
  {
    icon: Droplets,
    title: "Class-B Autoclave Sterilization",
    desc: "All critical instruments are sterilized in an advanced Class-B vacuum autoclave, killing 100% of bacteria, viruses, and spores.",
  },
  {
    icon: Cross,
    title: "Single-Use Materials",
    desc: "We use disposable items wherever possible — including needles, suction tips, gloves, and patient bibs — discarded immediately after one use.",
  },
  {
    icon: Microscope,
    title: "Ultrasonic Cleaning",
    desc: "Before auto-claving, instruments undergo ultrasonic cleaning to remove even microscopic debris that manual washing might miss.",
  },
  {
    icon: Stethoscope,
    title: "Surface Disinfection",
    desc: "After every patient, the dental chair, light handles, and all surrounding work surfaces are wiped down with hospital-grade disinfectants.",
  },
];

const processSteps = [
  { step: "01", title: "Manual & Ultrasonic Wash", desc: "Used instruments are scrubbed, then placed in an ultrasonic bath with enzymatic solution to break down organic matter." },
  { step: "02", title: "Pouching & Sealing", desc: "Cleaned instruments are dried and sealed in sterile pouches with chemical indicators." },
  { step: "03", title: "Autoclave Sterilization", desc: "Sealed pouches go into the autoclave at high temperature and pressure." },
  { step: "04", title: "UV Storage", desc: "Sterilized pouches are stored in UV light cabinets and opened only in front of the patient." },
];

export default function SterilizationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Clinic Safety"
        title="Uncompromising"
        titleHighlight="Sterilization Standards"
        subtitle="Your safety is our absolute priority. We adhere to rigorous global infection control protocols so you can receive care with complete peace of mind."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/about" }, { label: "Sterilization" }]}
      />

      {/* Protocols Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Our Safety <span className="text-gradient">Commitment</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {protocols.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-2xl border flex gap-5 bg-white transition-all hover:shadow-lg" style={{ borderColor: "#E5E7EB" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(44,177,188,0.1)" }}>
                  <Icon className="w-6 h-6 text-[#2CB1BC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2937] text-lg mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              The 4-Step <span className="text-gradient">Sterilization Cycle</span>
            </h2>
            <p className="text-[#6B7280] max-w-xl mx-auto">Every non-disposable instrument goes through this rigorous process before it ever touches a patient.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <div key={s.step} className="glass rounded-2xl p-6 card-shadow text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>{s.step}</div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{s.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PPE section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Protection for You <span className="text-gradient">and Our Team</span>
          </h2>
          <p className="text-[#6B7280] mb-8 leading-relaxed">
            Our clinical team strictly wears fresh Personal Protective Equipment (PPE) — including masks, gloves, and protective eyewear — for every procedure. We maintain a zero-compromise policy when it comes to cross-contamination.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-200 text-sm font-medium text-[#1F2937] bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" /> 100% Compliance Maintained
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
