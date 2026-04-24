import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata: Metadata = {
  title: "Our Team | Vinola Dental Salem",
  description:
    "Meet the dedicated team at Vinola Dental — dental assistants, hygienists, and support staff committed to your comfort and care.",
};

const team = [
  {
    name: "Dr. Vinola Duraisamy",
    role: "Lead Dental Surgeon",
    category: "Doctor",
    qualifications: "BDS, MDS, FICCDE",
    bio: "26+ years of experience in general, cosmetic, and restorative dentistry. Patient-centred care with a calm, evidence-based approach.",
    initial: "VD",
    color: "#2CB1BC",
  },
  {
    name: "Priya Lakshmi",
    role: "Senior Dental Assistant",
    category: "Dental Assistants",
    qualifications: "Certified Dental Assistant",
    bio: "Over 8 years of chairside experience, specializing in patient comfort and instrument management during procedures.",
    initial: "PL",
    color: "#10B981",
  },
  {
    name: "Karthika S.",
    role: "Dental Hygienist",
    category: "Hygienists",
    qualifications: "Diploma in Dental Hygiene",
    bio: "Skilled in professional scaling, polishing, and oral health education for patients across all age groups.",
    initial: "KS",
    color: "#F59E0B",
  },
  {
    name: "Meena R.",
    role: "Dental Hygienist",
    category: "Hygienists",
    qualifications: "Diploma in Dental Hygiene",
    bio: "Focused on preventive dental care, patient coaching, and supporting healthy oral hygiene habits.",
    initial: "MR",
    color: "#8B5CF6",
  },
  {
    name: "Anand Kumar",
    role: "Reception & Patient Coordinator",
    category: "Support Staff",
    qualifications: "Front Office Management",
    bio: "Your first point of contact — handling appointments, queries, and ensuring a seamless visit experience.",
    initial: "AK",
    color: "#EF4444",
  },
  {
    name: "Deepa Nair",
    role: "Sterilization Technician",
    category: "Support Staff",
    qualifications: "Infection Control Certified",
    bio: "Responsible for maintaining the highest sterilization standards so every instrument and surface is safe.",
    initial: "DN",
    color: "#0EA5E9",
  },
];

const categories = ["Doctor", "Dental Assistants", "Hygienists", "Support Staff"];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Vinola Dental Team"
        title="The People Behind"
        titleHighlight="Your Smile"
        subtitle="A dedicated group of dental professionals committed to delivering exceptional care with warmth, skill, and genuine attention."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      {categories.map((cat) => {
        const members = team.filter((m) => m.category === cat);
        return (
          <section key={cat} className="py-14 bg-white border-b border-gray-100 last:border-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-bold text-[#1F2937] mb-8 flex items-center gap-3" style={{ fontFamily: "var(--font-poppins)" }}>
                <span className="h-0.5 w-8 rounded-full inline-block" style={{ background: "linear-gradient(90deg, #2CB1BC, #1F8A94)" }} />
                {cat}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <div key={member.name} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all duration-300 bg-white">
                    <div className="flex items-center gap-4 mb-4">
                      {/* Avatar */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}cc)` }}
                      >
                        {member.initial}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F2937] leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                          {member.name}
                        </h3>
                        <div className="text-sm font-medium text-[#2CB1BC]">{member.role}</div>
                        <div className="text-xs text-[#9CA3AF]">{member.qualifications}</div>
                      </div>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <AppointmentCTA />
    </main>
  );
}
