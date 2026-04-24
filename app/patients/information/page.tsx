import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, Clock, FileText, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Information | Vinola Dental Salem",
  description: "Everything you need to know before your first visit to Vinola Dental — first visit guide, what to expect, and clinic policies.",
};

const firstVisitSteps = [
  { icon: FileText, title: "Complete Your Form", desc: "Arrive 10 minutes early to complete a brief medical history and dental concern form." },
  { icon: Clock, title: "Consultation & Exam", desc: "Dr. Vinola will review your history, listen to your concerns, and perform a comprehensive oral examination." },
  { icon: Shield, title: "Treatment Planning", desc: "You will receive a clear, prioritised treatment plan with options, costs, and timelines explained." },
  { icon: CheckCircle, title: "Begin Your Care", desc: "Simple treatments may begin at the first visit. Larger procedures will be scheduled for convenience." },
];

const policies = [
  { title: "Appointment Policy", points: ["Please arrive 5–10 minutes before your scheduled time", "24-hour notice is required for cancellations to avoid a cancellation fee", "Repeated no-shows may require prepayment for future bookings"] },
  { title: "Payment Policy", points: ["Payment is due at the time of service", "We accept cash, UPI, and card payments", "EMI options are available for treatments above ₹5,000"] },
  { title: "Medical History", points: ["Please inform us of all medications, allergies, and medical conditions", "Update your medical history at each visit if there are changes", "Your information is kept strictly confidential"] },
  { title: "Children & Companions", points: ["Parents/guardians must be present for all minors", "One companion is welcome during consultations", "Children not being treated should be supervised in the waiting area"] },
];

export default function PatientInformationPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Patient Information"
        title="Everything You Need"
        titleHighlight="Before Your Visit"
        subtitle="Preparing for your appointment at Vinola Dental — first visit guide, what to expect, and our clinic policies explained clearly."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Patient Information" }]}
      />

      {/* First Visit Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
              style={{ background: "rgba(44,177,188,0.08)" }}>First Visit</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              What Happens at Your <span className="text-gradient">First Appointment</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {firstVisitSteps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-md transition-all">
                <div className="relative inline-flex items-center justify-center mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#1F2937] text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
            What to <span className="text-gradient">Bring</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Government ID for registration", "Previous dental records or X-rays (if any)", "List of current medications", "Insurance details (if applicable)", "List of known allergies", "Any referral letters from other doctors"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Policies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
              Clinic <span className="text-gradient">Policies</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {policies.map(({ title, points }) => (
              <div key={title} className="p-6 rounded-2xl border border-gray-100 bg-white">
                <h3 className="font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                <ul className="space-y-2.5">
                  {points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-[#6B7280]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2CB1BC] flex-shrink-0 mt-2" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-sm text-[#6B7280] mb-4">Ready to book your first appointment?</p>
            <Link href="/patients/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
