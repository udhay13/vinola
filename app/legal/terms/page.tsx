"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FileText, ChevronDown, Stethoscope, CreditCard, Calendar, Copyright, Scale, AlertTriangle, Phone, Mail } from "lucide-react";

const sections = [
  {
    icon: FileText,
    color: "#2CB1BC",
    title: "1. Acceptance of Terms",
    content: [
      "By accessing our website or receiving dental services at Vinola Dental, you agree to be bound by these Terms & Conditions.",
      "These terms apply to all patients, visitors to our website, and anyone using our appointment or enquiry systems.",
      "If you do not agree with any part of these terms, please refrain from using our services or website.",
      "These terms may be updated periodically. Continued use of our services constitutes acceptance of any revised terms.",
    ],
  },
  {
    icon: Stethoscope,
    color: "#10B981",
    title: "2. Clinical Consultations & Treatment",
    content: [
      "Information on our website is for educational and informational purposes only and does not constitute clinical or medical advice.",
      "A formal doctor-patient relationship is established only after a clinical examination at our clinic by our qualified dental professionals.",
      "Treatment plans and cost estimates provided during consultation are valid for 30 days unless otherwise stated in writing.",
      "Vinola Dental reserves the right to modify or decline a treatment plan if clinical circumstances change after initial assessment.",
      "Patients have the right to seek a second opinion at any time. We encourage informed decision-making.",
    ],
  },
  {
    icon: Calendar,
    color: "#F59E0B",
    title: "3. Appointments & Scheduling",
    content: [
      "Please arrive 5–10 minutes prior to your scheduled appointment to complete any necessary forms or documentation.",
      "Walk-in consultations are welcome but are subject to availability. Scheduled appointments take priority.",
      "Appointments may be rescheduled subject to availability. Please inform us as early as possible of any changes.",
      "The 2nd Sunday of every month is our dedicated Implant Day — special scheduling applies. Please book in advance.",
    ],
  },
  {
    icon: CreditCard,
    color: "#8B5CF6",
    title: "4. Financial Responsibilities",
    content: [
      "Payment in full is expected at the time services are rendered unless prior financial arrangements have been established.",
      "We accept cash, all major UPI platforms (PhonePe, GPay, Paytm), debit/credit cards, and bank transfers.",
      "EMI options are available for Invisalign treatments. Gmoney financing is also available — please speak with our front desk.",
      "The patient, or their legal guardian in the case of minors, is ultimately responsible for all treatment costs.",
      "Indicative pricing shared during consultation is subject to confirmation after clinical assessment. Final costs may vary.",
    ],
  },
  {
    icon: Copyright,
    color: "#EF4444",
    title: "5. Intellectual Property",
    content: [
      "All content on the Vinola Dental website — including text, graphics, logos, images, treatment descriptions, and digital assets — is the property of Vinola Dental.",
      "This content is protected under applicable Indian copyright and intellectual property laws.",
      "You may not reproduce, distribute, modify, or create derivative works from any of our content without express written permission.",
      "Patient photographs used for before & after galleries are used only with explicit written consent and identifying details are anonymised.",
    ],
  },
  {
    icon: Scale,
    color: "#0EA5E9",
    title: "6. Limitation of Liability",
    content: [
      "Vinola Dental strives to provide the highest standard of dental care in line with accepted clinical guidelines.",
      "Dental treatments inherently carry risks. All risks will be clearly explained and documented before any procedure commences.",
      "Vinola Dental shall not be liable for indirect, incidental, or consequential damages resulting from the use of our services, to the extent permitted by applicable law.",
      "In the event of a clinical concern post-treatment, patients are encouraged to contact us immediately for review.",
    ],
  },
  {
    icon: AlertTriangle,
    color: "#D946EF",
    title: "7. Governing Law",
    content: [
      "These Terms & Conditions are governed by the laws of India and the state of Tamil Nadu.",
      "Any disputes arising from these terms or the services provided shall be subject to the exclusive jurisdiction of the courts in Salem, Tamil Nadu.",
      "Vinola Dental is committed to resolving disputes amicably and in good faith before pursuing formal legal proceedings.",
    ],
  },
];

export default function TermsPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #1a1030 0%, #2d1a50 50%, #1a1030 100%)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }} />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-purple-400/40"
              style={{ background: "rgba(139,92,246,0.12)", color: "#A78BFA" }}>
              <Scale className="w-4 h-4" /> Legal &amp; Terms
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Terms &amp;{" "}
              <span style={{ background: "linear-gradient(135deg, #8B5CF6, #2CB1BC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Conditions
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: June 1, 2026. Please read these terms carefully before using our website or receiving clinical services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-[#6B7280] flex items-center gap-2">
          <Link href="/" className="hover:text-[#2CB1BC] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Terms &amp; Conditions</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl border-l-4 border-purple-500 mb-12"
            style={{ background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)" }}>
            <p className="text-[#374151] leading-relaxed">
              These Terms &amp; Conditions govern your use of the <strong className="text-[#1F2937]">Vinola Dental</strong> website and the services provided at our clinic. By registering as a patient or using our services, you agree to these terms. These terms are designed to protect both our patients and our clinical team.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const isOpen = open === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-purple-300/60 shadow-lg" : "border-gray-100 hover:border-gray-200 hover:shadow-sm"}`}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-4 p-5 text-left"
                      style={{ background: isOpen ? "linear-gradient(135deg, #F5F3FF, #EDE9FE)" : "white" }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${section.color}18` }}>
                        <Icon className="w-5 h-5" style={{ color: section.color }} />
                      </div>
                      <span className="font-semibold text-[#1F2937] flex-1 text-sm sm:text-base" style={{ fontFamily: "var(--font-poppins)" }}>
                        {section.title}
                      </span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="w-5 h-5 text-[#6B7280] flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <div className="px-6 pb-6 pt-3 bg-white border-t border-gray-50">
                            <ul className="space-y-3">
                              {section.content.map((point, j) => (
                                <motion.li key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.06 }}
                                  className="flex items-start gap-3 text-sm text-[#6B7280] leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: section.color }} />
                                  {point}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-14 p-8 rounded-3xl border border-purple-200/50" style={{ background: "linear-gradient(135deg, #F5F3FF, #EDE9FE)" }}>
            <h3 className="text-xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Need Clarification?</h3>
            <p className="text-[#6B7280] text-sm mb-6">If you have any questions about these terms, please contact our clinic before commencing treatment.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email", value: "vinoladental@gmail.com", href: "mailto:vinoladental@gmail.com" },
                { icon: Phone, label: "Phone", value: "0427 4972266", href: "tel:04274972266" },
              ].map(({ icon: I, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 hover:shadow-md transition-all group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,92,246,0.1)" }}>
                    <I className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-500 mb-0.5">{label}</div>
                    <div className="text-xs text-[#374151]">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/legal/privacy" className="text-[#2CB1BC] hover:underline font-medium">Privacy Policy →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/refund-policy" className="text-[#2CB1BC] hover:underline font-medium">Refund &amp; Cancellation →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/disclaimer" className="text-[#2CB1BC] hover:underline font-medium">Medical Disclaimer →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
