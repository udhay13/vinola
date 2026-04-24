import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, GraduationCap, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Meet the Doctor | Dr. Vinola Duraisamy – Vinola Dental Salem",
  description:
    "Learn about Dr. Vinola Duraisamy — BDS, MDS, FICCDE — Dental Surgeon with 26+ years of experience in cosmetic, restorative, and implant dentistry in Salem.",
};

const qualifications = [
  { year: "2000", degree: "BDS", institute: "Rajah Muthiah Dental College, Annamalai University" },
  { year: "2003", degree: "MDS", institute: "Advanced Dental Specialisation – Oral Medicine & Radiology" },
  { year: "2010", degree: "FICCDE", institute: "Fellow – Indian College of Conservative Dentistry & Endodontics" },
];

const specializations = [
  "Cosmetic Dentistry & Smile Design",
  "Restorative & Prosthetic Dentistry",
  "Root Canal Treatment & Endodontics",
  "Dental Implants & Oral Surgery",
  "Orthodontics & Teeth Alignment",
  "Pediatric & Family Dentistry",
  "Periodontics & Gum Treatment",
  "Laser Dentistry",
];

const highlights = [
  "26+ years of clinical excellence in dental care",
  "Specialized in cosmetic and restorative dentistry",
  "State-of-the-art technology & pain-free procedures",
  "Patient-first approach with personalized treatment plans",
  "BDS, MDS, FICCDE qualified from top institutions",
  "Trained in digital smile design and CAD/CAM technology",
];

export default function DoctorPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Meet Your Dentist"
        title="Dr. Vinola"
        titleHighlight="Duraisamy"
        subtitle="BDS, MDS, FICCDE — Dental Surgeon with 26+ years of experience bringing precision, compassion, and advanced care to every patient."
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
                    alt="Dr. Vinola Duraisamy – Lead Dentist at Vinola Dental"
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
            <div className="space-y-8">
              <div>
                <div className="text-[#2CB1BC] font-semibold text-sm mb-3">BDS, MDS, FICCDE • Dental Surgeon</div>
                <p className="text-[#6B7280] leading-relaxed mb-4">
                  Dr. Vinola Duraisamy is a highly experienced Dental Surgeon practicing at Vinola Dental in Fairlands, Salem. With over 26 years of clinical expertise, she has helped thousands of patients achieve healthier, more confident smiles.
                </p>
                <p className="text-[#6B7280] leading-relaxed">
                  She completed her BDS from Rajah Muthiah Dental College, Annamalai University in 2000 and went on to pursue advanced specialization. Her clinical philosophy is rooted in preventive-first dentistry, personalized treatment, and a calm, patient-centred environment.
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                    <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
              Qualifications
            </div>
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Education & <span className="text-gradient">Credentials</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {qualifications.map((q, i) => (
              <div key={i} className="flex gap-5 glass rounded-2xl p-5 card-shadow">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                  {q.year}
                </div>
                <div>
                  <div className="font-bold text-[#1F2937] text-lg" style={{ fontFamily: "var(--font-poppins)" }}>{q.degree}</div>
                  <div className="text-sm text-[#6B7280]">{q.institute}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
              style={{ background: "rgba(44,177,188,0.08)" }}>
              <Award className="w-4 h-4" />
              Areas of Expertise
            </div>
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Clinical <span className="text-gradient">Specializations</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {specializations.map((s) => (
              <div key={s} className="flex items-center gap-3 p-4 rounded-xl border border-[#E6F7F8] bg-white hover:border-[#2CB1BC]/40 hover:shadow-md transition-all">
                <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0" />
                <span className="text-sm font-medium text-[#374151]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
