"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RefreshCw, Calendar, CreditCard, AlertCircle, CheckCircle, Phone, Mail, XCircle, Clock } from "lucide-react";

const policies = [
  {
    icon: Calendar,
    color: "#10B981",
    title: "Appointment Cancellations",
    points: [
      "We understand that plans change. You are welcome to reschedule or cancel your appointment at any time.",
      "We kindly request that you inform us as early as possible so we can offer your slot to another patient.",
    ],
  },
  {
    icon: CreditCard,
    color: "#8B5CF6",
    title: "Treatment Payments & Refunds",
    points: [
      "Payments made for completed dental treatments are generally non-refundable once the service has been rendered.",
      "If a treatment cannot be completed due to clinical reasons on our part, a full or partial refund will be issued accordingly.",
      "Advance payments for multi-session treatments (e.g., braces, implants) will be refunded on a pro-rata basis for sessions not yet commenced.",
      "Refunds, where applicable, are processed within 7–10 working days to the original payment method.",
    ],
  },
  {
    icon: RefreshCw,
    color: "#2CB1BC",
    title: "Laboratory & Material Orders",
    points: [
      "Custom laboratory work such as dental crowns, bridges, dentures, and veneers is ordered specifically for each patient.",
      "Once a laboratory order has been placed and fabrication commenced, the associated laboratory fee is non-refundable.",
      "In the rare event of a laboratory defect or clinical error, Vinola Dental will arrange a replacement at no additional charge.",
      "Invisalign and clear aligner cases: refund eligibility is subject to the applicable brand policy and the stage of treatment.",
    ],
  },
  {
    icon: AlertCircle,
    color: "#F59E0B",
    title: "Disputes & Escalations",
    points: [
      "If you are dissatisfied with any aspect of your treatment or billing, please speak with our clinic manager immediately.",
      "We are committed to resolving all concerns amicably and in good faith before any formal escalation.",
      "Written complaints may be submitted to vinoladental@gmail.com and will receive a response within 5 working days.",
      "Any unresolved disputes will be subject to the jurisdiction of the courts in Salem, Tamil Nadu.",
    ],
  },
];

const keyFacts = [
  { icon: Clock, label: "7–10 Day Refunds", desc: "Processing time for eligible refunds", color: "#2CB1BC" },
  { icon: XCircle, label: "Lab Work Non-Refundable", desc: "Once fabrication begins", color: "#EF4444" },
  { icon: CheckCircle, label: "Lab Defects Replaced Free", desc: "We stand behind our work", color: "#8B5CF6" },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden py-24" style={{ background: "linear-gradient(135deg, #0a2010 0%, #0f3020 50%, #0a2010 100%)" }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 rounded-full" style={{ background: "radial-gradient(circle, #10B981, transparent)" }} />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-green-400/40"
              style={{ background: "rgba(16,185,129,0.12)", color: "#6EE7B7" }}>
              <RefreshCw className="w-4 h-4" /> Refund &amp; Cancellation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
              Refund &amp;{" "}
              <span style={{ background: "linear-gradient(135deg, #10B981, #2CB1BC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Cancellation Policy
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Last updated: June 1, 2026. We believe in transparent, fair, and patient-friendly financial policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm text-[#6B7280] flex items-center gap-2">
          <Link href="/" className="hover:text-[#2CB1BC] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Refund &amp; Cancellation Policy</span>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="p-7 rounded-3xl border-l-4 border-green-500 mb-10" style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)" }}>
            <p className="text-[#374151] leading-relaxed">
              At <strong className="text-[#1F2937]">Vinola Dental</strong>, we are committed to fair, transparent financial practices. This policy outlines our approach to appointment cancellations, treatment refunds, and laboratory material costs. Our goal is always to resolve any financial concerns promptly and in good faith.
            </p>
          </motion.div>

          {/* Key Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {keyFacts.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="text-center p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: `${color}18` }}>
                  <Icon className="w-5 h-5" style={{ color }} />
                </div>
                <div className="text-xs font-bold text-[#1F2937] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>{label}</div>
                <div className="text-xs text-[#6B7280]">{desc}</div>
              </motion.div>
            ))}
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {policies.map((policy, i) => {
              const Icon = policy.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4 px-6 py-4" style={{ background: `linear-gradient(135deg, ${policy.color}10, ${policy.color}05)`, borderBottom: `2px solid ${policy.color}20` }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${policy.color}20` }}>
                      <Icon className="w-5 h-5" style={{ color: policy.color }} />
                    </div>
                    <h2 className="font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>{policy.title}</h2>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <ul className="space-y-3">
                      {policy.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-[#6B7280] leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: policy.color }} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mt-14 p-8 rounded-3xl border border-green-200/50" style={{ background: "linear-gradient(135deg, #F0FDF4, #DCFCE7)" }}>
            <h3 className="text-xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Have a Refund Query?</h3>
            <p className="text-[#6B7280] text-sm mb-6">Please contact us directly — we are committed to resolving all financial concerns promptly.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Mail, label: "Email", value: "vinoladental@gmail.com", href: "mailto:vinoladental@gmail.com" },
                { icon: Phone, label: "Phone", value: "0427 4972266", href: "tel:04274972266" },
              ].map(({ icon: I, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 hover:shadow-md transition-all">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,0.1)" }}>
                    <I className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-green-600 mb-0.5">{label}</div>
                    <div className="text-xs text-[#374151]">{value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link href="/legal/privacy" className="text-[#2CB1BC] hover:underline font-medium">Privacy Policy →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/terms" className="text-[#2CB1BC] hover:underline font-medium">Terms &amp; Conditions →</Link>
            <span className="text-gray-300">|</span>
            <Link href="/legal/disclaimer" className="text-[#2CB1BC] hover:underline font-medium">Medical Disclaimer →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
