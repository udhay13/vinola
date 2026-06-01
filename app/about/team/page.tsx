import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";

export const metadata: Metadata = {
  title: "Our Team | Vinola Dental Salem",
  description:
    "Meet the warm, dedicated team at Vinola Dental Salem — doctors, nursing staff, and support team all committed to your comfort and care.",
};

const team = [
  {
    name: "Dr. Sri Gayathri",
    role: "Dental Surgeon",
    category: "Chief Consultant",
    qualifications: "BDS, MDS",
    bio: "Dedicated dental surgeon providing comprehensive dental care with a focus on patient comfort and long-term oral health.",
    initial: "SG",
    color: "#2CB1BC",
  },
  {
    name: "Dr. Mehavarshini",
    role: "Dental Surgeon",
    category: "Chief Consultant",
    qualifications: "BDS, MDS – Pediatric Dentistry",
    bio: "Specialist in pediatric dentistry, conservative dentistry, and endodontics (root canal treatment in bracket). Dedicated to gentle, anxiety-free dental care.",
    initial: "MH",
    color: "#1F8A94",
  },
  {
    name: "Mrs. Vijayalakshmi",
    role: "Nursing Staff",
    category: "Nursing Staff",
    qualifications: "Dental Nursing",
    bio: "Chairside nursing support ensuring patient comfort, instrument management, and smooth clinical procedure assistance.",
    initial: "VL",
    color: "#10B981",
  },
  {
    name: "Mrs. Kamali",
    role: "Nursing Staff",
    category: "Nursing Staff",
    qualifications: "Dental Nursing",
    bio: "Caring chairside support maintaining a calm and comfortable environment for patients throughout their treatment.",
    initial: "KA",
    color: "#F59E0B",
  },
  {
    name: "Ms. Anushiya",
    role: "Nursing Staff",
    category: "Nursing Staff",
    qualifications: "Dental Nursing",
    bio: "Attentive and warm nursing support, ensuring every patient feels well cared for and at ease during their visit.",
    initial: "AN",
    color: "#8B5CF6",
  },
  {
    name: "Mrs. Kalaiselvi",
    role: "Support Team",
    category: "Support Team",
    qualifications: "Patient Coordination",
    bio: "A welcoming first point of contact — managing appointments, patient queries, and ensuring a smooth clinic experience.",
    initial: "KL",
    color: "#EF4444",
  },
  {
    name: "Mrs. Maheswari",
    role: "Support Team",
    category: "Support Team",
    qualifications: "Clinic Operations",
    bio: "Dedicated clinic support keeping daily operations running efficiently so every patient visit is seamless.",
    initial: "MW",
    color: "#0EA5E9",
  },
  {
    name: "Mrs. Tamilselvi",
    role: "Support Team",
    category: "Support Team",
    qualifications: "Clinic Support",
    bio: "Provides essential back-office support, maintaining a clean, safe, and welcoming environment for all patients.",
    initial: "TS",
    color: "#D946EF",
  },
];

const categories = ["Chief Consultant", "Nursing Staff", "Support Team"];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Vinola Dental Team"
        title="The People Behind"
        titleHighlight="Your Smile"
        subtitle="A warm, dedicated group of professionals — every one of them committed to making your visit comfortable, caring, and exceptional."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      {categories.map((cat) => {
        const members = team.filter((m) => m.category === cat);
        return (
          <section key={cat} className="py-14 bg-white border-b border-gray-100 last:border-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-0.5 w-8 rounded-full flex-shrink-0" style={{ background: "linear-gradient(90deg, #2CB1BC, #1F8A94)" }} />
                <h2 className="text-xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>{cat}</h2>
                <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, #E6F7F8, transparent)" }} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    {/* Coloured top accent */}
                    <div className="h-1 rounded-full mb-5" style={{ background: `linear-gradient(90deg, ${member.color}, ${member.color}60)` }} />

                    {/* Avatar + name */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)` }}
                      >
                        {member.initial}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1F2937] leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                          {member.name}
                        </h3>
                        <div className="text-xs font-medium mt-0.5" style={{ color: member.color }}>{member.role}</div>
                        <div className="text-xs text-[#9CA3AF] mt-0.5">{member.qualifications}</div>
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
