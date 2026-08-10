import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { Star, Stethoscope, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team | Vinola Dental Salem",
  description:
    "Meet the warm, dedicated team at Vinola Dental Salem — doctors, nursing staff, and support team all committed to your comfort and care.",
};

const categoryMeta: Record<string, { icon: typeof Star; color: string; gradient: string }> = {
  "Chief Consultant": { icon: Star, color: "#2CB1BC", gradient: "linear-gradient(135deg, #2CB1BC, #1F8A94)" },
  "Junior Dentist":   { icon: Stethoscope, color: "#8B5CF6", gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)" },
  "Implantologist":   { icon: Star, color: "#0EA5E9", gradient: "linear-gradient(135deg, #0EA5E9, #0284C7)" },
  "Nursing Staff":    { icon: Heart, color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #059669)" },
  "Support Team":     { icon: Users, color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)" },
};

const chiefConsultant = {
  name: "Dr. Vinola Duraisamy",
  role: "Chief Consultant",
  category: "Chief Consultant",
  qualifications: "BDS, MDS (Pediatric & Preventive Dentistry) · FICCDE · PGDHM · Fellowship in Implantology · Fellow–ACDI · FSCD",
  bio: "With over 26 years of clinical expertise, Dr. Vinola predominantly focuses on Oral Health Wellness, combining specialist-level qualifications with a deeply compassionate, patient-centred approach — ensuring every family member receives care that is precise, gentle, and tailored to their unique needs.",
  initial: "VD",
};

const sections = [
  {
    category: "Junior Dentist",
    members: [
      {
        name: "Dr. Janani Shanmugam",
        role: "Junior Dentist",
        qualifications: "BDS",
        bio: "Dedicated to delivering comprehensive dental care with a focus on patient comfort, oral hygiene, and long-term dental health for patients of all ages.",
        initial: "JS",
      },
      {
        name: "Dr. Kaavya Raja",
        role: "Junior Dentist",
        qualifications: "BDS",
        bio: "Committed to providing gentle, patient-friendly dental care with a warm approach that helps patients feel at ease throughout every visit.",
        initial: "KR",
      },
    ],
  },
  {
    category: "Implantologist",
    members: [
      {
        name: "Dr. M. Narasimman",
        role: "Implantologist",
        qualifications: "Fellowship in Implantology",
        bio: "Specialist in dental implantology, delivering precise implant-based solutions for patients seeking a secure, long-lasting restoration of missing teeth.",
        initial: "MN",
      },
    ],
  },
  {
    category: "Nursing Staff",
    members: [
      {
        name: "Mrs. Vijayalakshmi",
        role: "Nursing Staff",
        qualifications: "Dental Nursing",
        bio: "Meticulous with a keen eye to articulate all the instruments required for every procedure, caring chairside support maintaining a calm and comfortable environment for patients throughout their treatment.",
        initial: "VL",
      },
      {
        name: "Mrs. Kamali",
        role: "Nursing Staff",
        qualifications: "Dental Nursing",
        bio: "Attentive and warm nursing support, ensuring every patient feels well cared for and at ease during their visit.",
        initial: "KA",
      },
    ],
  },
  {
    category: "Support Team",
    members: [
      {
        name: "Mrs. Priyadharshini",
        role: "Receptionist",
        qualifications: "Patient Coordination",
        bio: "A welcoming first point of contact — managing appointments, patient queries, and ensuring a smooth and pleasant clinic experience from the very first call.",
        initial: "PD",
      },
      {
        name: "Mrs. Maheswari",
        role: "Clinic Operations",
        qualifications: "Clinic Operations",
        bio: "Dedicated clinic support keeping daily operations running efficiently so every patient visit is seamless and well-coordinated.",
        initial: "MW",
      },
    ],
  },
];

export default function TeamPage() {
  const { color: chiefColor, gradient: chiefGradient } = categoryMeta["Chief Consultant"];

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Team Vinola Dental"
        title="The People Behind"
        titleHighlight="Your Smile"
        subtitle="A warm, dedicated team committed to creating an exceptional experience with comfort, care, and compassion."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Our Team" }]}
      />

      {/* ── Chief Consultant – Feature Card ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="flex flex-col items-center text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
              style={{ background: "rgba(44,177,188,0.08)", color: chiefColor }}
            >
              <Star className="w-3.5 h-3.5" />
              Chief Consultant
            </div>
            <div className="h-px w-24 rounded-full" style={{ background: chiefGradient }} />
          </div>

          {/* Featured card */}
          <div className="max-w-3xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden p-px"
              style={{ background: chiefGradient }}
            >
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 text-center">
                {/* Decorative background blob */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
                  style={{ background: chiefGradient, transform: "translate(30%, -30%)" }}
                />
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div
                    className="w-24 h-24 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-lg"
                    style={{ background: chiefGradient }}
                  >
                    {chiefConsultant.initial}
                  </div>
                </div>
                {/* Name & role */}
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  {chiefConsultant.name}
                </h2>
                <div className="text-sm font-semibold mb-1" style={{ color: chiefColor }}>
                  {chiefConsultant.role}
                </div>
                <div className="text-xs text-[#9CA3AF] mb-6 max-w-xl mx-auto leading-relaxed">
                  {chiefConsultant.qualifications}
                </div>
                {/* Divider */}
                <div className="h-px max-w-xs mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #E6F7F8, transparent)" }} />
                {/* Bio */}
                <p className="text-[#6B7280] leading-relaxed max-w-xl mx-auto text-sm sm:text-base">
                  {chiefConsultant.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Sections ── */}
      {sections.map(({ category, members }) => {
        const meta = categoryMeta[category];
        const Icon = meta.icon;
        const isSingle = members.length === 1;

        return (
          <section
            key={category}
            className="py-16 border-t border-gray-100"
            style={category === "Nursing Staff" ? { background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" } : {}}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section heading */}
              <div className="flex flex-col items-center text-center mb-10">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-3"
                  style={{ background: `${meta.color}12`, color: meta.color }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {category}
                </div>
                <div className="h-px w-16 rounded-full" style={{ background: meta.gradient }} />
              </div>

              {/* Cards grid – centered */}
              <div
                className={`
                  grid gap-6
                  ${isSingle ? "max-w-sm mx-auto" : "sm:grid-cols-2 max-w-2xl mx-auto"}
                  ${members.length === 3 ? "lg:grid-cols-3 max-w-4xl mx-auto" : ""}
                `}
              >
                {members.map((member) => (
                  <div
                    key={member.name}
                    className="group bg-white rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                  >
                    {/* Top gradient bar */}
                    <div className="h-1.5" style={{ background: meta.gradient }} />
                    <div className="p-7">
                      {/* Avatar */}
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 transition-transform duration-300 group-hover:scale-105"
                        style={{ background: meta.gradient }}
                      >
                        {member.initial}
                      </div>
                      {/* Name */}
                      <h3 className="font-bold text-[#1F2937] text-lg mb-0.5" style={{ fontFamily: "var(--font-poppins)" }}>
                        {member.name}
                      </h3>
                      {/* Role */}
                      <div className="text-sm font-semibold mb-1" style={{ color: meta.color }}>
                        {member.role}
                      </div>
                      {/* Qualifications */}
                      <div className="text-xs text-[#9CA3AF] mb-4">{member.qualifications}</div>
                      {/* Divider */}
                      <div className="h-px mb-4" style={{ background: "linear-gradient(90deg, transparent, #E5E7EB, transparent)" }} />
                      {/* Bio */}
                      <p className="text-sm text-[#6B7280] leading-relaxed">{member.bio}</p>
                    </div>
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
