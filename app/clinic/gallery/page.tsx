import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { ArrowRight, Camera, MapPin, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinic Gallery | Inside Vinola Dental Salem",
  description:
    "Take a visual tour of Vinola Dental in Salem. See our clinic exterior, treatment suite, dental equipment, and patient-focused care environment.",
};

const tourImages = [
  {
    src: "/1.png",
    title: "Clinic Entrance",
    eyebrow: "Exterior",
    description: "A clear, easy-to-spot clinic frontage with street-level access in Salem.",
    className: "md:col-span-4 md:row-span-2 aspect-[16/11] md:aspect-auto",
    objectPosition: "center",
  },
  {
    src: "/6.png",
    title: "Treatment Suite",
    eyebrow: "Operatory",
    description: "A dedicated dental chair setup with chairside instruments and clinical lighting.",
    className: "md:col-span-2 aspect-[4/3]",
    objectPosition: "center",
  },
  {
    src: "/1.png",
    title: "Signage & Access",
    eyebrow: "Arrival",
    description: "Prominent Vinola Dental branding helps patients locate the clinic quickly.",
    className: "md:col-span-2 aspect-[4/3]",
    objectPosition: "50% 45%",
  },
  {
    src: "/6.png",
    title: "Chairside Equipment",
    eyebrow: "Technology",
    description: "Organized equipment placement supports efficient and precise dental care.",
    className: "md:col-span-3 aspect-[16/10]",
    objectPosition: "62% 58%",
  },
  {
    src: "/6.png",
    title: "Clinical Workspace",
    eyebrow: "Planning",
    description: "A connected workspace for reviewing findings and coordinating treatment.",
    className: "md:col-span-3 aspect-[16/10]",
    objectPosition: "78% 38%",
  },
];

const galleryNotes = [
  {
    icon: MapPin,
    title: "Easy Arrival",
    description: "Street-facing signage and a recognizable exterior make the clinic simple to find.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Clinical Flow",
    description: "The operatory is organized around safety, comfort, and predictable treatment movement.",
  },
  {
    icon: Sparkles,
    title: "Comfort-First Space",
    description: "Warm interiors and familiar equipment placement help patients settle in calmly.",
  },
];

export default function ClinicGalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Clinic Gallery"
        title="Step Inside"
        titleHighlight="Vinola Dental"
        subtitle="A focused visual tour of our Salem clinic, from the front entrance to the treatment room where patient comfort and precision care come together."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/contact" }, { label: "Gallery" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-5"
                style={{ background: "rgba(44,177,188,0.08)" }}
              >
                <Camera className="w-4 h-4" />
                Photo Tour
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1F2937] leading-tight mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Real views from the <span className="text-gradient">clinic environment</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed max-w-2xl">
                Familiarize yourself with the entrance, equipment, and treatment setting before your appointment.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {galleryNotes.map(({ icon: Icon, title, description }) => (
                <div key={title} className="rounded-2xl border border-gray-100 bg-[#F8FFFE] p-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(44,177,188,0.1)" }}
                  >
                    <Icon className="w-5 h-5 text-[#2CB1BC]" />
                  </div>
                  <h3
                    className="font-bold text-[#1F2937] mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-6 md:auto-rows-[230px] gap-5">
            {tourImages.map(({ src, title, eyebrow, description, className, objectPosition }) => (
              <article
                key={`${title}-${objectPosition}`}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 bg-gray-50 card-shadow ${className}`}
              >
                <Image
                  src={src}
                  alt={`${title} at Vinola Dental`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={title === "Clinic Entrance"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 via-[#111827]/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 text-white">
                  <div className="mb-2 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {eyebrow}
                  </div>
                  <h3
                    className="text-xl font-bold leading-tight"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/85">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2
                className="text-3xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                See the clinic <span className="text-gradient">before your visit</span>
              </h2>
              <p className="text-[#6B7280] leading-relaxed max-w-2xl">
                Review the space, then book a visit or get directions when you are ready to come in.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
              <Link
                href="/clinic/contact"
                className="inline-flex justify-center items-center px-6 py-3 rounded-xl font-semibold border-2 border-[#2CB1BC] text-[#2CB1BC] hover:bg-white transition-colors"
              >
                Get Directions
              </Link>
              <Link
                href="/patients/appointment"
                className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
              >
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
