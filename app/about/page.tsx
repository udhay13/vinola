import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, Heart, Users, Award, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Vinola Dental – Salem's Trusted Dental Clinic",
  description:
    "Learn about Vinola Dental's mission to deliver advanced, compassionate dental care in Salem. Discover our story, values, and why thousands trust us.",
};

const whyUs = [
  {
    icon: Award,
    title: "26+ Years of Excellence",
    desc: "Over two decades of clinical experience delivering precise, evidence-based dental care.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "Every treatment plan is built around your comfort, concerns, and long-term oral health.",
  },
  {
    icon: Star,
    title: "Advanced Technology",
    desc: "Digital X-rays, intraoral scanners, laser dentistry, and CAD/CAM for modern precision.",
  },
  {
    icon: Users,
    title: "Family-Friendly Clinic",
    desc: "Care for patients of all ages — from children to seniors — in a warm, welcoming space.",
  },
  {
    icon: CheckCircle,
    title: "Sterilization Standards",
    desc: "Strict infection control and sterilization protocols at every step, every visit.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Morning and evening slots available so your dental care fits your lifestyle.",
  },
];

const stats = [
  { value: "26+", label: "Years Experience" },
  { value: "5,000+", label: "Happy Patients" },
  { value: "30+", label: "Treatment Options" },
  { value: "100%", label: "Sterilization Compliance" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="About Vinola Dental"
        title="Caring for Smiles,"
        titleHighlight="Since 1998"
        subtitle="A Salem-based dental practice built on trust, technology, and the belief that exceptional care should be accessible to every family."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Stats row */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center p-6 rounded-2xl" style={{ background: "rgba(44,177,188,0.06)" }}>
                <div className="text-3xl font-bold text-[#2CB1BC] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                  {s.value}
                </div>
                <div className="text-sm text-[#6B7280]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-3xl border border-[#E6F7F8]" style={{ background: "linear-gradient(135deg, #F8FFFE, #E6F7F8)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Mission
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                To deliver advanced, compassionate dental care that genuinely improves the health and confidence of every patient we serve — using the latest technology, strict clinical standards, and a deeply human approach to patient comfort.
              </p>
            </div>
            <div className="p-8 rounded-3xl border border-[#E6F7F8]" style={{ background: "linear-gradient(135deg, #F8FFFE, #E6F7F8)" }}>
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                <Star className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Vision
              </h2>
              <p className="text-[#6B7280] leading-relaxed">
                To be Salem&apos;s most trusted dental clinic — where every patient walks in with a concern and walks out with a confident smile and a clear path to long-term oral wellness. We envision a community where preventive dentistry comes first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
              style={{ background: "rgba(44,177,188,0.08)" }}>
              Our Story
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              How Vinola Dental <span className="text-gradient">Began</span>
            </h2>
            <p className="text-[#6B7280] leading-relaxed">
              Vinola Dental was founded by Dr. Vinola Duraisamy after completing her BDS from Rajah Muthiah Dental College, Annamalai University in 2000. With a vision to bring specialist-level dental care to Salem families, she established a practice rooted in compassion, precision, and continuous learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { year: "2000", event: "Dr. Vinola completes BDS from Annamalai University" },
              { year: "2005", event: "Vinola Dental clinic opens in Salem, Tamil Nadu" },
              { year: "2024", event: "Expanded with digital technology, laser dentistry & CAD/CAM" },
            ].map((m) => (
              <div key={m.year} className="glass rounded-2xl p-6 card-shadow">
                <div className="text-3xl font-bold text-[#2CB1BC] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{m.year}</div>
                <p className="text-sm text-[#6B7280] leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
              style={{ background: "rgba(44,177,188,0.08)" }}>
              Why Choose Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-lg transition-all duration-300 bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(44,177,188,0.1)" }}>
                  <Icon className="w-5 h-5 text-[#2CB1BC]" />
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
