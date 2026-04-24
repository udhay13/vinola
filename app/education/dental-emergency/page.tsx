import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ShieldAlert, Activity, Stethoscope, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Emergency | What to Do in a Dental Crisis | Vinola Dental",
  description: "Immediate guidance for dental emergencies in Salem — what to do for a knocked-out tooth, severe toothache, broken braces, or dental trauma.",
};

const commonEmergencies = [
  {
    title: "Severe Toothache",
    icon: Activity,
    action: "Rinse your mouth with warm water. Use dental floss to gently remove any caught food. Take a standard over-the-counter painkiller if needed, but do not put aspirin against the gums. Call us immediately.",
  },
  {
    title: "Knocked-Out Tooth (Avulsion)",
    icon: ShieldAlert,
    action: "Time is critical. Hold the tooth by the crown (not the root). Rinse gently if dirty, but don't scrub. Try to put it back in the socket, or keep it in a small container of milk or saliva. Get to the clinic within 30 minutes.",
  },
  {
    title: "Chipped or Broken Tooth",
    icon: Stethoscope,
    action: "Save any broken pieces. Rinse your mouth and the pieces with warm water. Apply a cold compress to the outside of the face to reduce swelling. See us as soon as possible.",
  },
  {
    title: "Lost Crown or Filling",
    icon: Activity,
    action: "Keep the crown if you have it. You can slip it back over the tooth using over-the-counter dental cement or toothpaste as a temporary measure. Avoid chewing on that side and book an appointment.",
  },
  {
    title: "Abscess or Gum Swelling",
    icon: ShieldAlert,
    action: "An abscess is a serious infection that can spread. Rinse with mild salt water several times a day. Apply a cold compress outside the face. Do not pop the swelling. This requires urgent professional treatment.",
  },
  {
    title: "Broken Braces or Wires",
    icon: Stethoscope,
    action: "If a wire is poking your cheek, use the eraser end of a pencil to push it flat, or cover it with orthodontic wax. Do not cut the wire yourself. Contact us to schedule an adjustment.",
  },
];

export default function DentalEmergencyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Critical Alert Header */}
      <div className="bg-[#EF4444] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between text-sm font-medium">
          <div className="flex items-center gap-2 mb-2 sm:mb-0">
            <ShieldAlert className="w-5 h-5 flex-shrink-0" />
            <span>Are you experiencing a dental emergency right now?</span>
          </div>
          <a href="tel:04274972266" className="bg-white text-[#EF4444] px-4 py-1.5 rounded-full shadow-sm hover:bg-gray-50 flex items-center gap-2 transition-colors">
            <PhoneCall className="w-4 h-4" /> Call 0427 4972266
          </a>
        </div>
      </div>

      <PageHero
        badge="Emergency Guide"
        title="Immediate Care for"
        titleHighlight="Dental Crises"
        subtitle="Don't panic. Follow these steps to manage pain and protect your tooth until you can reach our clinic."
        breadcrumbs={[{ label: "Education", href: "/education/blog" }, { label: "Dental Emergency" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              What to Do in a <span className="text-gradient">Dental Emergency</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {commonEmergencies.map(({ title, icon: Icon, action }) => (
              <div key={title} className="p-6 rounded-2xl border flex gap-4 bg-white" style={{ borderColor: "rgba(239, 68, 68, 0.2)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #EF4444, #DC2626)" }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2937] text-lg mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16" style={{ background: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            When to Go to a <span className="text-red-500">Hospital Emergency Room</span>
          </h2>
          <p className="text-[#374151] mb-6">Vinola Dental handles tooth-related emergencies, but some conditions represent a threat to your overall health and require immediate medical attention at a hospital.</p>
          <ul className="inline-flex flex-col text-left gap-3 w-full max-w-sm mb-8 mx-auto">
            <li className="flex items-start gap-3 text-sm text-[#374151]">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" /> Severe swelling affecting your eye or causing difficulty breathing/swallowing
            </li>
            <li className="flex items-start gap-3 text-sm text-[#374151]">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" /> Jaw fracture or severe facial trauma
            </li>
            <li className="flex items-start gap-3 text-sm text-[#374151]">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5" /> Heavy, persistent bleeding that will not stop with pressure
            </li>
          </ul>
        </div>
      </section>

      {/* Reusing CTA but overriding the text for emergency tone */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 text-center"
            style={{ background: "linear-gradient(135deg, #1F2937, #111827)" }}>
            <div className="absolute inset-0 opacity-10"
              style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "cover" }} />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Need Urgent Dental Care?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Call the clinic directly. We keep buffer slots available for patients in sudden pain or trauma.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:04274972266"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-[#1F2937] bg-white font-bold text-lg hover:bg-gray-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Call 0427 4972266
                </a>
                <Link href="/patients/appointment"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-semibold border-2 border-white/20 hover:bg-white/10 transition-all">
                  Book Next Available Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
