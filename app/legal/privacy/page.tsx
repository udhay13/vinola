import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Vinola Dental Salem",
  description: "Privacy policy for Vinola Dental. Learn how we collect, use, and protect your personal and medical information.",
};

const policySections = [
  {
    title: "1. Information We Collect",
    content: "We collect information to provide you with safe and effective dental care. This includes personal identification information (Name, date of birth, contact details), medical and dental history, payment information, and digital records (X-rays, intraoral photographs). We may also collect technical data such as IP addresses and browser types when you visit our website.",
  },
  {
    title: "2. How We Use Your Information",
    content: "Your information is strictly used for clinical and administrative purposes. This includes formulating treatment plans, managing appointments, processing payments, communicating with you regarding your care, and fulfilling legal or regulatory obligations. We do not use your medical data for marketing purposes without your explicit consent.",
  },
  {
    title: "3. Information Sharing & Disclosure",
    content: "We do not sell, trade, or rent your personal identification information to others. We may share information with trusted third-party service providers (such as dental laboratories creating your restorations or payment processors) strictly for the purpose of completing your treatment. We will also disclose information when legally required by law enforcement or public health authorities.",
  },
  {
    title: "4. Data Security",
    content: "We implement appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect. Patient records are stored securely, and access is restricted only to authorized clinical and administrative staff who require it to perform their duties.",
  },
  {
    title: "5. Patient Rights",
    content: "You have the right to access the personal and medical information we hold about you. You may request corrections to any inaccurate data. You also have the right to request a copy of your dental records or X-rays, subject to a nominal administrative fee as permitted by law.",
  },
  {
    title: "6. Changes to This Policy",
    content: "Vinola Dental reserves the right to update this privacy policy at any time. We encourage patients to frequently check this page for any changes. Your continued use of our services following the posting of changes to this policy will be deemed your acceptance of those changes.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Legal & Privacy"
        title="Privacy"
        titleHighlight="Policy"
        subtitle="Last updated: January 1, 2026. We are committed to protecting your personal information and your right to privacy."
        breadcrumbs={[{ label: "Legal", href: "/legal/privacy" }, { label: "Privacy Policy" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-teal max-w-none">
            <p className="text-lg text-[#6B7280] mb-10 leading-relaxed font-medium">
              At Vinola Dental, protecting the confidentiality and security of our patients&apos; personal and medical information is a fundamental obligation. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our clinic or use our website.
            </p>

            <div className="space-y-12">
              {policySections.map((section) => (
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

            <div className="mt-16 p-8 rounded-2xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                Contact Us About Your Privacy
              </h3>
              <p className="text-[#6B7280] mb-4 text-sm">
                If you have questions or comments about this Privacy Policy, please contact our administrative team:
              </p>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2CB1BC]" /> <strong>Email:</strong> info@vinoladental.com</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2CB1BC]" /> <strong>Phone:</strong> 0427 4972266</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#2CB1BC]" /> <strong>Address:</strong> 123 Omalur Road, Hasthampatti, Salem – 636007</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
