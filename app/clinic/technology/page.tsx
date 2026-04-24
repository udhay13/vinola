import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { Monitor, Camera, PenToolIcon as Tool, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Technology | Advanced Equipment | Vinola Dental Salem",
  description: "Explore the advanced dental technology at Vinola Dental — digital X-rays, intraoral cameras, CAD/CAM, and laser dentistry for precise, comfortable care.",
};

const techEquipment = [
  {
    icon: Search,
    title: "Digital Radiography (X-Rays)",
    desc: "Our digital X-ray sensors emit up to 90% less radiation than traditional film while providing instant, high-resolution images for immediate diagnosis and discussion.",
  },
  {
    icon: Camera,
    title: "Intraoral Cameras",
    desc: "A pen-sized camera that displays high-definition video of the inside of your mouth on a screen, allowing you to see exactly what the dentist sees.",
  },
  {
    icon: Monitor,
    title: "CAD/CAM Restorations",
    desc: "Computer-Aided Design and Manufacturing technology allows us to design and mill precise, highly aesthetic crowns and restorations with exceptional accuracy.",
  },
  {
    icon: Tool,
    title: "Advanced Endodontic Motor",
    desc: "We use rotary endodontic systems with apex locators for root canal treatments, significantly reducing procedure time and increasing the success rate.",
  },
];

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Dental Technology"
        title="Modern Equipment."
        titleHighlight="Better Outcomes."
        subtitle="We invest in the latest dental technology to make your diagnosis more accurate, your treatment more comfortable, and your results more predictable."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/about" }, { label: "Technology" }]}
      />

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Clinical <span className="text-gradient">Innovations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {techEquipment.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Why <span className="text-gradient">Technology Matters</span>
          </h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto mb-8">
            Diagnostic accuracy is the foundation of all good dentistry. Modern tools allow us to see problems earlier, plan treatments more precisely, and execute procedures with minimal discomfort.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              { t: "Earlier Detection", d: "Find cavities and bone loss before they cause pain." },
              { t: "Patient Comfort", d: "Faster procedures and non-invasive scanning." },
              { t: "Better Education", d: "See what we see, so you can make informed choices." }
            ].map((i) => (
              <div key={i.t} className="glass rounded-xl p-4 border border-white/50 card-shadow">
                <div className="font-semibold text-[#1F2937] mb-1">{i.t}</div>
                <div className="text-xs text-[#6B7280] leading-relaxed">{i.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
