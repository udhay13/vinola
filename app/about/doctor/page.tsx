import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, GraduationCap, Award, ArrowRight, Star, Baby, Users, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Doctor | Dr. Vinola Duraisamy – Vinola Dental Salem",
  description:
    "Meet Dr. Vinola Duraisamy — BDS, MDS, FICCDE, PGDHM — Chief Consultant at Vinola Dental Salem. A family-friendly clinic for patients from newborns to geriatric care.",
};

const qualifications = [
  { label: "BDS, MDS, FICCDE", detail: "Bachelor & Master of Dental Surgery · Fellow, Indian College of Conservative Dentistry & Endodontics" },
  { label: "PGDHM", detail: "Post Graduate Diploma in Hospital Management" },
  { label: "Fellowship in Implantology", detail: "Advanced Fellowship in Dental Implantology" },
  { label: "Fellow – Academy of Cosmetic Dentistry of India", detail: "Fellow of Academy of Cosmetic Dentistry of India (FALCDI)" },
  { label: "Fellow – Special Children Dentistry", detail: "Fellowship in Dental Care for Children with Special Needs" },
  { label: "Member – Int. Disability & Oral Health", detail: "Member of International Disability & Oral Health Network" },
  { label: "Member – IAPD", detail: "Member of International Association of Pediatric Dentistry" },
];

const ageGroups = [
  { icon: Baby, label: "Newborn & Toddlers", desc: "Oral health assessments from infancy", color: "#2CB1BC" },
  { icon: Users, label: "Teens & Adults", desc: "Comprehensive restorative & cosmetic care", color: "#8B5CF6" },
  { icon: HeartHandshake, label: "Geriatric Care", desc: "Gentle, specialised care for senior patients", color: "#10B981" },
];

export default function DoctorPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Meet the Doctor"
        title="Dr. Vinola"
        titleHighlight="Duraisamy"
        subtitle="Chief Consultant · BDS, MDS, FICCDE, PGDHM · A family-friendly dental practice welcoming patients from newborns to the elderly in Fairlands, Salem."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Meet the Doctor" }]}
      />

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Image */}
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)", opacity: 0.12 }} />
                <div className="relative rounded-3xl overflow-hidden card-shadow border-4 border-white">
                  <Image
                    src="/10.png"
                    alt="Dr. Vinola Duraisamy – Chief Consultant at Vinola Dental"
                    width={400}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-lg text-center">
                  <div className="text-2xl font-bold text-[#2CB1BC]" style={{ fontFamily: "var(--font-poppins)" }}>26+</div>
                  <div className="text-xs text-[#6B7280] font-medium leading-tight">Years<br />Experience</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{ background: "rgba(44,177,188,0.08)", color: "#2CB1BC" }}>
                  <Star className="w-4 h-4" /> Chief Consultant
                </div>
                <h2 className="text-3xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Dr. Vinola Duraisamy
                </h2>
                <div className="text-sm text-[#6B7280] mb-5">
                  BDS · MDS · FICCDE · PGDHM · Fellowship in Implantology
                </div>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Dr. Vinola Duraisamy is the Chief Consultant at Vinola Dental, Fairlands, Salem — a <strong className="text-[#1F2937]">family-friendly clinic</strong> welcoming patients across every stage of life, from newborn babies and toddlers to teens, adults, and geriatric patients.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  With over 26 years of clinical expertise, she combines specialist-level qualifications with a deeply compassionate, patient-centred approach — ensuring every family member receives care that is precise, gentle, and tailored to their unique needs.
                </p>
              </div>

              {/* Family age groups */}
              <div className="grid grid-cols-3 gap-3">
                {ageGroups.map(({ icon: Icon, label, desc, color }) => (
                  <div key={label} className="text-center p-4 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: `${color}15` }}>
                      <Icon className="w-5 h-5" style={{ color }} />
                    </div>
                    <div className="text-xs font-bold text-[#1F2937] leading-tight mb-0.5">{label}</div>
                    <div className="text-xs text-[#9CA3AF] leading-tight">{desc}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/patients/appointment"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 glow-teal-hover"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
              style={{ background: "rgba(44,177,188,0.08)" }}>
              <GraduationCap className="w-4 h-4" />
              Qualifications & Credentials
            </div>
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Education & <span className="text-gradient">Credentials</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {qualifications.map((q, i) => (
              <div key={i} className="flex gap-4 glass rounded-2xl p-5 card-shadow items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-[#1F2937] text-sm mb-0.5" style={{ fontFamily: "var(--font-poppins)" }}>{q.label}</div>
                  <div className="text-xs text-[#6B7280] leading-relaxed">{q.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family-friendly highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-5"
            style={{ background: "rgba(44,177,188,0.08)" }}>
            Family-Friendly Clinic
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Care for <span className="text-gradient">Every Stage of Life</span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed max-w-2xl mx-auto mb-8">
            Vinola Dental is a true family clinic — from a baby&apos;s first dental check, through teenage orthodontics and adult cosmetic treatments, to specialised geriatric dental care. Every patient is treated with the same dedication and expertise, regardless of age.
          </p>
          <div className="inline-flex flex-wrap gap-3 justify-center">
            {["Newborn & Baby", "Toddlers", "Children", "Teens", "Adults", "Geriatric"].map((g) => (
              <span key={g} className="px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/25"
                style={{ background: "rgba(44,177,188,0.06)" }}>
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
