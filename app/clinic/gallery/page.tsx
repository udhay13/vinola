import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Gallery | Inside Vinola Dental Salem",
  description: "Take a visual tour of Vinola Dental in Salem. See our modern reception, advanced operatory rooms, and state-of-the-art dental technology.",
};

const images = [
  { src: "/gallery1.png", alt: "Modern and welcoming reception area at Vinola Dental", category: "Reception" },
  { src: "/gallery2.png", alt: "State-of-the-art dental operatory room equipped with advanced technology", category: "Operatory" },
  { src: "/gallery3.png", alt: "Comfortable patient waiting lounge", category: "Waiting Area" },
  { src: "/gallery4.png", alt: "Advanced sterilization and auto-clave setup", category: "Sterilization" },
  { src: "/gallery5.png", alt: "Digital X-Ray and CBCT imaging room", category: "Technology" },
  { src: "/gallery6.png", alt: "Consultation room where treatment plans are discussed", category: "Consultation" },
];

export default function ClinicGalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Clinic Gallery"
        title="Inside"
        titleHighlight="Vinola Dental"
        subtitle="Take a visual tour of our modern, purpose-built dental clinic in Salem. Designed for your comfort, safety, and precision care."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/about" }, { label: "Gallery" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="group relative rounded-3xl overflow-hidden border border-gray-100 card-shadow bg-gray-50 aspect-[4/3] cursor-zoom-in">
                {/* Fallback pattern in case image isn't available yet */}
                <div className="absolute inset-0 opacity-5"
                  style={{ backgroundImage: "url('/pattern.svg')", backgroundSize: "cover" }} />
                
                {/* We use Image here assuming the user will upload these placeholders to public/ */}
                <Image 
                  src={img.src} 
                  alt={img.alt} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />

                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs font-semibold text-white bg-[#2CB1BC]">
                      {img.category}
                    </span>
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invitation Section */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Experience It <span className="text-gradient">In Person</span>
          </h2>
          <p className="text-[#6B7280] mb-8 max-w-xl mx-auto">
            While pictures give you a glimpse, the true Vinola Dental difference is felt in our care. We invite you to visit us and experience modern dentistry firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/clinic/contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl font-semibold border-2 border-[#2CB1BC] text-[#2CB1BC] hover:bg-[#E6F7F8] transition-colors">
              Get Directions
            </Link>
            <Link href="/patients/appointment" className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
