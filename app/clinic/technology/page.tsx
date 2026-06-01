import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { Monitor, Camera, Scan, Zap, SmilePlus, Radio, PenToolIcon as Tool } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Technology | Advanced Equipment | Vinola Dental Salem",
  description: "Explore the advanced dental technology at Vinola Dental — Digital RVG, OPG, Intraoral 3D Scanner, Laser Dentistry, Smile Outcome Simulator, and more for precise, comfortable care.",
};

const techEquipment = [
  {
    icon: Radio,
    title: "Digital Radiograph (RVG)",
    desc: "Radiovisuograph (RVG) digital X-ray sensors emit up to 90% less radiation than traditional film while delivering instant, high-resolution images for immediate diagnosis — right at the chairside.",
  },
  {
    icon: Monitor,
    title: "Orthopantomogram (OPG)",
    desc: "A full-mouth panoramic X-ray that provides a complete view of the teeth, jaw, and surrounding bone in a single image — essential for implant planning, orthodontics, and complex diagnosis.",
  },
  {
    icon: Scan,
    title: "Intraoral Scanner – 3D Scan",
    desc: "Our intraoral scanner creates highly accurate 3D digital impressions of your teeth and gums in minutes — replacing messy traditional moulds. Used for consultations, aligners, crowns, and implants.",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    desc: "Dental lasers allow for precise, minimally invasive treatment of gum disease, soft tissue procedures, and cavity preparation — with significantly less discomfort, faster healing, and no stitches in many cases.",
  },
  {
    icon: SmilePlus,
    title: "Smile Outcome Simulator",
    desc: "Before any cosmetic treatment begins, our smile outcome simulator lets you visualise your expected results digitally — so you can make confident, informed decisions about your smile transformation.",
  },
  {
    icon: Camera,
    title: "Intraoral Camera",
    desc: "A pen-sized camera that displays high-definition video of the inside of your mouth on a screen, allowing you to see exactly what the dentist sees for a fully transparent consultation.",
  },
  {
    icon: Tool,
    title: "Advanced Endodontic Motor",
    desc: "We use rotary endodontic systems with apex locators for root canal treatments, significantly reducing procedure time, improving precision, and increasing the success rate.",
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
            <p className="text-[#6B7280] mt-3 max-w-2xl mx-auto">Every piece of technology at Vinola Dental is chosen to serve one purpose — better care for you.</p>
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
              { t: "Patient Comfort", d: "Faster procedures, non-invasive scanning, and laser precision." },
              { t: "Visualise Results", d: "See your expected smile outcome before treatment starts." },
            ].map((i) => (
              <div key={i.t} className="glass rounded-xl p-4 border border-white/50 card-shadow">
                <div className="font-semibold text-[#1F2937] mb-1">{i.t}</div>
                <div className="text-xs text-[#6B7280] leading-relaxed">{i.d}</div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/patients/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Experience the Difference – Book Now
            </Link>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
