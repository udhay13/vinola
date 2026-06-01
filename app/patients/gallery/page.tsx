import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Before & After Gallery | Smile Transformations | Vinola Dental Salem",
  description: "See real smile transformation results at Vinola Dental Salem — before and after photos of cosmetic, orthodontic, and restorative cases.",
};

const transformations = [
  { image: "/teeth-before-after-whitening.webp", label: "Teeth Whitening", desc: "6 shades brighter with professional in-clinic whitening." },
  { image: "/dental veneers.jpg", label: "Dental Veneers", desc: "Chipped and discoloured teeth restored to a uniform, radiant smile." },
  { image: "/ortho.png", label: "Orthodontic Alignment", desc: "18 months of ceramic braces corrected crowding and spacing." },
  { image: "/smile makeover.jpg", label: "Full Smile Makeover", desc: "Combination of whitening, composites, and contouring for total transformation." },
  { image: "/dental bonding.jpg", label: "Composite Bonding", desc: "Chips and gaps corrected with bonding in a single visit." },
  { image: "/crown.jpg", label: "Crown & Bridge", desc: "Missing tooth replaced and adjacent teeth strengthened with a ceramic bridge." },
];

export default function BeforeAfterGalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Before & After Gallery"
        title="Real Results,"
        titleHighlight="Real Smiles"
        subtitle="Genuine smile transformations achieved at Vinola Dental — cosmetic, restorative, and orthodontic cases showcasing the outcomes we deliver."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Before & After" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map(({ image, label, desc }) => (
              <div key={label} className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="p-4 bg-gray-50">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt={`${label} before and after`}
                      width={480}
                      height={320}
                      className="w-full h-52 sm:h-56 object-contain rounded-xl"
                    />
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-[#1F2937] mb-1" style={{ fontFamily: "var(--font-poppins)" }}>{label}</h3>
                  <p className="text-sm text-[#6B7280]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Ready for Your <span className="text-gradient">Transformation?</span>
          </h2>
          <p className="text-[#6B7280] mb-6 max-w-xl mx-auto">Book a smile consultation and let Dr. Vinola design a personalised plan to achieve the smile you&apos;ve always wanted.</p>
          <Link href="/patients/appointment"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
            Book Smile Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
