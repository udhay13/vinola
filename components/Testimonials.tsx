"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Adhitya Venkatram",
    role: "Patient, Salem",
    quote:
      "I’ve been visiting Vinola Dental Clinic since my childhood, and it’s the only place my whole family trusts for dental care. Dr. Vinola has always been kind, patient, and makes sure we’re completely comfortable during every visit. The clinic is super clean, well-maintained, and the staff are always welcoming.",
    rating: 5,
    initials: "AV",
    color: "#2CB1BC",
  },
  {
    name: "SenthilKumar Ramasamy",
    role: "Patient, Salem",
    quote:
      "I took my daughter to Vinola Dental Clinic, and the experience was excellent. The waiting area is very child-friendly. Each treatment room is thoughtfully designed with a TV mounted on the ceiling, allowing children to watch rhymes during treatment, which helps keep them calm. It is the best dental clinic in Salem.",
    rating: 5,
    initials: "SR",
    color: "#8B5CF6",
  },
  {
    name: "Radhamani Ramalingam",
    role: "Patient, Salem",
    quote:
      "I have been undergoing dental treatment with Dr. Vinola for the past 1.5 years, and I’m very satisfied with the care received. The clinic is clean and well-maintained, and the staff are attentive and manage follow-ups promptly. Dr. Vinola is approachable and clearly explains treatment options.",
    rating: 5,
    initials: "RR",
    color: "#F59E0B",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [autoplay] = useState(() =>
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}
      ref={ref}
    >
      {/* Blob */}
      <div
        className="absolute top-0 right-0 w-72 h-72 opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
            style={{ background: "rgba(44,177,188,0.08)" }}>
            Patient Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}>
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Real stories from real patients who transformed their smiles with us.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-14">
          {/* Google Reviews Badge (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-white p-8 rounded-3xl card-shadow w-full max-w-[300px] lg:flex-shrink-0"
          >
            <div className="text-lg font-extrabold text-[#1F2937] tracking-wider mb-2 font-sans">
              4.9 STARS
            </div>
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FBBC05] text-3xl drop-shadow-sm leading-none">
                  ★
                </span>
              ))}
            </div>
            <div className="text-sm text-[#374151] mb-3">
              Based on <span className="font-bold">118 reviews</span>
            </div>
            <div className="mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 92" width="95" height="32" aria-label="Google">
                <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.96-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.5-.01z"/>
              </svg>
            </div>
          </motion.div>

          {/* Carousel (Right Side - or Bottom on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full lg:flex-1 overflow-hidden"
          >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((t, i) => (
                <div key={t.name} className="flex-none w-full sm:w-[85%] md:w-[70%] lg:w-[55%] pl-4">
                  <div
                    className={`bg-white rounded-3xl p-8 card-shadow transition-all duration-300 ${
                      i === selectedIndex ? "opacity-100 scale-100" : "opacity-60 scale-95"
                    }`}
                  >
                    {/* Quote icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                      style={{ background: `${t.color}15` }}>
                      <Quote className="w-5 h-5" style={{ color: t.color }} />
                    </div>

                    {/* Quote text */}
                    <p className="text-[#374151] text-base leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(t.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">★</span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                        aria-label={`${t.name} avatar`}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-semibold text-[#1F2937]">{t.name}</div>
                        <div className="text-xs text-[#6B7280]">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#2CB1BC] hover:text-[#2CB1BC] transition-all duration-200 bg-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-6 h-2.5 bg-[#2CB1BC]"
                      : "w-2.5 h-2.5 bg-[#E5E7EB] hover:bg-[#2CB1BC]/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full border-2 border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#2CB1BC] hover:text-[#2CB1BC] transition-all duration-200 bg-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
