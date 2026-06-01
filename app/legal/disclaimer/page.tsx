"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, Stethoscope, Globe, Users, Phone, Mail, Info, BookOpen, Heart } from "lucide-react";

const disclaimerSections = [
  {
    icon: Info,
    color: "#F59E0B",
    title: "Website Information Disclaimer",
    content: "All information published on the Vinola Dental website is intended for general educational and informational purposes only. The content does not constitute professional dental or medical advice, diagnosis, or treatment. While we make every effort to ensure the accuracy of information, dental knowledge evolves rapidly and no guarantee is made regarding completeness or currency.",
  },
  {
    icon: Stethoscope,
    color: "#2CB1BC",
    title: "No Doctor-Patient Relationship",
    content: "Viewing, reading, or interacting with the Vinola Dental website does not establish a doctor-patient relationship. A formal clinical relationship is established only after a physical examination conducted by one of our qualified dental professionals at our clinic in Fairlands, Salem. Any online or telephone interactions are preliminary in nature only.",
  },
  {
    icon: AlertTriangle,
    color: "#EF4444",
    title: "Treatment Risk Acknowledgement",
    content: "All dental and surgical procedures carry inherent clinical risks, including but not limited to post-operative discomfort, sensitivity, infection, nerve effects, and implant-related complications. All material risks will be fully disclosed and discussed with you before any procedure commences, and written informed consent will be obtained. Outcomes may vary between patients.",
  },
  {
    icon: BookOpen,
    color: "#8B5CF6",
    title: "Before & After Results",
    content: "Before and after photographs displayed on this website represent actual patient results achieved at Vinola Dental and are used with explicit patient consent. Individual results depend on clinical complexity, patient-specific factors, oral health baseline, and adherence to post-treatment instructions. No specific outcome is guaranteed.",
  },
  {
    icon: Globe,
    color: "#10B981",
    title: "Third-Party Links",
    content: "The Vinola Dental website may contain links to third-party websites for reference purposes. These external sites are not under our control and we accept no responsibility for their content, privacy practices, or accuracy. The inclusion of any link does not imply an endorsement by Vinola Dental.",
  },
  {
    icon: Heart,
    color: "#D946EF",
    title: "Emergency Medical Situations",
    content: "The Vinola Dental website is not an emergency service platform. In the event of a dental or medical emergency, please call emergency services (108) or proceed to your nearest hospital emergency department. For urgent dental concerns during clinic hours, please call us directly at 0427 4972266.",
  },
  {
    icon: Users,
    color: "#0EA5E9",
    title: "Consent for Minors",
    content: "Treatment of patients below the age of 18 years requires the presence and written consent of a parent or legal guardian. Information provided on the website regarding pediatric dental care is for parental guidance only and does not replace a formal clinical consultation for the child.",
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #1a0a0a 0%, #3a1010 50%, #1a0a0a 100%)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, #EF4444, transparent)" }} />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, #F59E0B, transparent)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-orange-400/40"
              style={{ background: "rgba(245,158,11,0.12)", color: "#FCD34D" }}>
              <AlertTriangle className="w-4 h-4" /> Medical Disclaimer
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Medical{" "}
              <span style={{ background: "linear-gradient(135deg, #F59E0B, #EF4444)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Disclaimer
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: June 1, 2026. Please read this disclaimer carefully before using our website or acting on any information herein.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-[#6B7280] flex items-center gap-2">
          <Link href="/" className="hover:text-[#2CB1BC] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Medical Disclaimer</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl border-l-4 border-orange-400 mb-12" style={{ background: "linear-gradient(135deg, #FFFBEB, #FEF3C7)" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(245,158,11,0.15)" }}>
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
              <p className="text-[#374151] leading-relaxed">
                The information on the <strong className="text-[#1F2937]">Vinola Dental</strong> website is provided for general educational purposes only. It is <strong>not a substitute for professional dental or medical advice</strong>. Always consult a qualified dental professional for diagnosis and treatment of any oral health condition. By using this website, you acknowledge and agree to the terms of this disclaimer.
              </p>
            </div>
          </motion.div>

          {/* Disclaimer Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {disclaimerSections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${section.color}, ${section.color}80)` }} />
                  <div className="p-6 bg-white h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${section.color}15` }}>
                        <Icon className="w-5 h-5" style={{ color: section.color }} />
                      </div>
                      <h3 className="font-bold text-[#1F2937] text-sm leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Emergency callout */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 border border-red-200"
            style={{ background: "linear-gradient(135deg, #FFF5F5, #FEE2E2)" }}>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239,68,68,0.12)" }}>
              <Phone className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <div className="font-bold text-[#1F2937] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>Dental Emergency?</div>
              <p className="text-sm text-[#6B7280] mb-2">For urgent dental concerns, contact us directly during clinic hours (Mon–Sat, 9:30 AM – 8:00 PM).</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:04274972266" className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:underline">
                  <Phone className="w-3.5 h-3.5" /> 0427 4972266
                </a>
                <a href="mailto:vinoladental@gmail.com" className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:underline">
                  <Mail className="w-3.5 h-3.5" /> vinoladental@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/legal/privacy" className="text-[#2CB1BC] hover:underline font-medium">Privacy Policy →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/terms" className="text-[#2CB1BC] hover:underline font-medium">Terms &amp; Conditions →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/refund-policy" className="text-[#2CB1BC] hover:underline font-medium">Refund &amp; Cancellation →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
