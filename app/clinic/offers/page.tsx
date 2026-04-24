import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle, Gift, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Offers & Packages | Vinola Dental Salem",
  description: "Explore exclusive dental offers, family packages, and smile makeover deals available right now at Vinola Dental Salem.",
};

const packages = [
  {
    title: "Complete Wellness Check",
    price: "₹999",
    oldPrice: "₹1,500",
    color: "#2CB1BC",
    description: "The perfect starting point for new patients. A comprehensive evaluation of your oral health.",
    includes: [
      "Detailed clinical examination",
      "Digital X-Rays (if required)",
      "Full mouth scaling & polishing",
      "Personalised treatment plan"
    ],
  },
  {
    title: "Bride & Groom Smile Kit",
    price: "₹8,500",
    oldPrice: "₹12,000",
    color: "#D946EF",
    description: "Get a radiant, picture-perfect smile for your big day. Best done 2-4 weeks before the wedding.",
    includes: [
      "Advanced teeth whitening (1 session)",
      "Deep cleaning and polishing",
      "Minor composite bonding (up to 2 teeth)",
      "Home maintenance kit"
    ],
  },
  {
    title: "Family Prevention Plan",
    price: "₹2,499",
    oldPrice: "₹4,000",
    color: "#10B981",
    description: "Preventive care for the whole family (up to 4 members) to keep cavities and gum disease away.",
    includes: [
      "Check-ups for 2 adults & 2 children",
      "Scaling for adults",
      "Fluoride varnish for children",
      "Diet & brushing counseling"
    ],
  },
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Special Offers"
        title="Exclusive"
        titleHighlight="Dental Packages"
        subtitle="Accessible, high-quality dental care with bundled value. Explore our current offers designed to give you the best care at the best price."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/about" }, { label: "Offers & Packages" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.title} className="rounded-3xl border border-gray-100 bg-white card-shadow overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
                <div className="p-8 pb-6 border-b border-gray-100 relative overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-10" style={{ background: pkg.color }} />
                  <Gift className="w-8 h-8 mb-4" style={{ color: pkg.color }} />
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>{pkg.title}</h3>
                  <p className="text-sm text-[#6B7280]">{pkg.description}</p>
                  <div className="mt-6 flex items-end gap-3">
                    <span className="text-4xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>{pkg.price}</span>
                    <span className="text-lg text-gray-400 line-through mb-1">{pkg.oldPrice}</span>
                  </div>
                </div>
                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <div className="font-semibold text-[#1F2937] mb-4 text-sm">Package Includes:</div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#374151]">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: pkg.color }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/patients/appointment" className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.02] shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${pkg.color}, ${pkg.color}dd)` }}>
                    Claim this Offer <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-[#6B7280]">
            * Terms and conditions apply. Offers cannot be combined with other discounts. Subject to clinical suitability.
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
