"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Shield, ChevronDown, Eye, Lock, UserCheck, FileText, AlertCircle, RefreshCw, Phone, Mail, MapPin } from "lucide-react";

const sections = [
  {
    icon: FileText,
    color: "#2CB1BC",
    title: "1. Information We Collect",
    content: [
      "Personal identification: full name, date of birth, gender, contact details (phone, email, address).",
      "Complete medical and dental history including medications, allergies, systemic conditions, and previous treatments.",
      "Clinical records: digital X-rays (RVG), OPG scans, intraoral photographs, 3D scan data, and treatment notes.",
      "Payment information for billing (we do not store card data directly).",
      "Technical data such as IP address, browser type, and device information when you use our website.",
    ],
  },
  {
    icon: Eye,
    color: "#10B981",
    title: "2. How We Use Your Information",
    content: [
      "To accurately diagnose your dental conditions and formulate a personalised treatment plan.",
      "To manage and confirm appointments, and send reminders via SMS or WhatsApp.",
      "To process payments and issue receipts or invoices for treatment rendered.",
      "To communicate follow-up care, post-treatment instructions, and oral health guidance.",
      "To comply with legal, regulatory, and public health reporting obligations under Indian law.",
      "We never use your medical data for advertising or marketing without your explicit written consent.",
    ],
  },
  {
    icon: UserCheck,
    color: "#F59E0B",
    title: "3. Information Sharing & Disclosure",
    content: [
      "We do not sell, trade, or rent your personal or medical information to any third party.",
      "Information may be shared with dental laboratories fabricating your restorations, strictly for clinical purposes.",
      "We may disclose information if required by law, court order, or a competent public health authority.",
      "Referral summaries shared with other specialists are done only with your knowledge and consent.",
    ],
  },
  {
    icon: Lock,
    color: "#8B5CF6",
    title: "4. Data Security",
    content: [
      "Patient records are stored in secure, password-protected clinical management systems with restricted access.",
      "Physical records are kept in locked cabinets accessible only to authorised staff.",
      "Digital communications containing sensitive information are encrypted where technically feasible.",
      "We conduct periodic internal audits to ensure compliance with our security standards.",
      "In the event of a data breach, affected patients will be notified promptly as required by law.",
    ],
  },
  {
    icon: Shield,
    color: "#EF4444",
    title: "5. Your Rights as a Patient",
    content: [
      "Right of Access: You may request a copy of the personal and medical information we hold about you.",
      "Right to Correction: You may request corrections to any inaccurate or outdated information.",
      "Right to Records: You are entitled to copies of your dental records and X-rays, subject to a nominal fee.",
      "Right to Withdraw Consent: You may withdraw consent for specific uses, though this may affect certain services.",
    ],
  },
  {
    icon: RefreshCw,
    color: "#0EA5E9",
    title: "6. Cookies & Website Usage",
    content: [
      "Our website may use cookies to enhance your browsing experience and analyse site traffic.",
      "Cookies help us understand how visitors use our site so we can improve content and navigation.",
      "You can disable cookies through your browser settings, though this may affect website features.",
      "We do not use cookies for advertising retargeting across other websites.",
    ],
  },
  {
    icon: AlertCircle,
    color: "#D946EF",
    title: "7. Changes to This Policy",
    content: [
      "Vinola Dental reserves the right to update this Privacy Policy at any time without prior notice.",
      "Significant changes will be communicated via notice at our clinic or on our website.",
      "Your continued use of our services following changes constitutes acceptance of the revised policy.",
      "This policy was last reviewed and updated on June 1, 2026.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #0F1F2E 0%, #1a3a4a 50%, #0F1F2E 100%)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }} />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, #1F8A94, transparent)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#2CB1BC]/40"
              style={{ background: "rgba(44,177,188,0.12)", color: "#2CB1BC" }}>
              <Shield className="w-4 h-4" /> Legal &amp; Privacy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Privacy{" "}
              <span style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Policy
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: June 1, 2026. Your privacy and the confidentiality of your medical information is our fundamental obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-[#6B7280] flex items-center gap-2">
          <Link href="/" className="hover:text-[#2CB1BC] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Privacy Policy</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro banner */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl border-l-4 border-[#2CB1BC] mb-12"
            style={{ background: "linear-gradient(135deg, #F0FDFE, #E6F7F8)" }}>
            <p className="text-[#374151] leading-relaxed">
              At <strong className="text-[#1F2937]">Vinola Dental</strong>, protecting the confidentiality and security of our patients&apos; personal and medical information is a fundamental obligation. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our clinic at{" "}
              <span className="text-[#2CB1BC] font-medium">No.40, Brindavan Road, 5th Cross, Fairlands, Salem</span>, or use our website.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="space-y-4">
            {sections.map((section, i) => {
              const Icon = section.icon;
              const isOpen = open === i;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                  <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? "border-[#2CB1BC]/40 shadow-lg" : "border-gray-100 hover:border-gray-200 hover:shadow-sm"}`}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center gap-4 p-5 text-left"
                      style={{ background: isOpen ? "linear-gradient(135deg, #F0FDFE, #E6F7F8)" : "white" }}>
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

          {/* Contact card */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-14 p-8 rounded-3xl border border-[#2CB1BC]/20" style={{ background: "linear-gradient(135deg, #F0FDFE, #E6F7F8)" }}>
            <h3 className="text-xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Questions About Your Privacy?</h3>
            <p className="text-[#6B7280] text-sm mb-6">Contact our clinic directly with any privacy-related queries.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Mail, label: "Email", value: "vinoladental@gmail.com", href: "mailto:vinoladental@gmail.com" },
                { icon: Phone, label: "Phone", value: "0427 4972266", href: "tel:04274972266" },
                { icon: MapPin, label: "Address", value: "No.40 Brindavan Rd, Fairlands, Salem", href: "/clinic/contact" },
              ].map(({ icon: I, label, value, href }) => (
                <a key={label} href={href} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#2CB1BC]/15 hover:border-[#2CB1BC]/40 hover:shadow-md transition-all group">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(44,177,188,0.1)" }}>
                    <I className="w-4 h-4 text-[#2CB1BC]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#2CB1BC] mb-0.5">{label}</div>
                    <div className="text-xs text-[#374151] group-hover:text-[#2CB1BC] transition-colors">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/legal/terms" className="text-[#2CB1BC] hover:underline font-medium">Terms &amp; Conditions →</Link>
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
