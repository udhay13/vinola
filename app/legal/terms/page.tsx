import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Vinola Dental Salem",
  description: "Terms and conditions of service for patients receiving care at Vinola Dental in Salem.",
};

const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing our website or utilizing the dental services provided by Vinola Dental, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
  },
  {
    title: "2. Clinical Consultations and Treatment",
    content: "Information provided on our website is for educational purposes only and does not constitute clinical advice. A valid doctor-patient relationship is established only after a formal clinical examination at our facility. Treatment plans and cost estimates provided during consultation are valid for 30 days unless stated otherwise.",
  },
  {
    title: "3. Appointments and Cancellations",
    content: "We request that patients arrive 10 minutes prior to scheduled appointments. If you must cancel or reschedule, we require a minimum of 24 hours' notice. Failure to provide adequate notice or repeated missed appointments may result in the requirement of a non-refundable deposit for future bookings.",
  },
  {
    title: "4. Financial Responsibilities",
    content: "Payment in full is expected at the time services are rendered unless prior financial arrangements (such as approved EMI plans) have been established. We accept cash, major credit/debit cards, and common UPI formats. The patient, or their legal guardian, is ultimately responsible for the cost of treatment.",
  },
  {
    title: "5. Intellectual Property",
    content: "All content on the Vinola Dental website, including text, graphics, logos, images, and software, is the property of Vinola Dental and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.",
  },
  {
    title: "6. Limitation of Liability",
    content: "While we strive to provide the highest standard of dental care, Vinola Dental shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website, to the extent permitted by law. Dental treatments carry inherent risks which will be explained to you before any procedure.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Legal & Terms"
        title="Terms of"
        titleHighlight="Service"
        subtitle="Last updated: January 1, 2026. Please read these terms carefully before using our website or clinical services."
        breadcrumbs={[{ label: "Legal", href: "/legal/privacy" }, { label: "Terms of Service" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-teal max-w-none">
            <p className="text-lg text-[#6B7280] mb-10 leading-relaxed font-medium">
              These Terms of Service govern your use of the Vinola Dental website and the services provided at our physical clinic. Registration as a patient implies agreement to these operational protocols.
            </p>

            <div className="space-y-12">
              {termsSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                    {section.title}
                  </h2>
                  <p className="text-[#6B7280] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  Need Clarification?
                </h3>
                <p className="text-[#6B7280] text-sm max-w-sm">
                  If you have questions regarding any of these terms, please speak with our clinic manager before commencing treatment.
                </p>
              </div>
              <div className="bg-gray-50 px-6 py-4 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 text-sm text-[#374151] font-semibold mb-1">
                  <CheckCircle className="w-4 h-4 text-[#2CB1BC]" /> Acceptance Required
                </div>
                <div className="text-xs text-[#6B7280]">
                  Consent forms signed in-clinic will supersede these general terms where applicable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
