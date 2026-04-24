"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const gallery = [
  { src: "/smile1.png", alt: "Patient smile transformation 1 at Vinola Dental" },
  { src: "/smile2.png", alt: "Patient smile transformation 2 at Vinola Dental" },
  { src: "/smile3.png", alt: "Patient smile transformation 3 at Vinola Dental" },
  { src: "/hero-patient.png", alt: "Happy patient at Vinola Dental" },
  { src: "/family.png", alt: "Family dental care at Vinola Dental" },
  { src: "/smile1.png", alt: "Smile makeover result at Vinola Dental" },
];

export default function GalleryGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
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
            Smile Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}>
            Be Featured.{" "}
            <span className="text-gradient">#HappySmile</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Real smile transformations from our patients. Join thousands who love their new smile.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, i) => (
            <motion.div
              key={`${item.src}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-square card-shadow cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: "rgba(44,177,188,0.75)" }}>
                <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-2xl mb-1">😊</div>
                  <div className="font-bold text-lg">#HappySmile</div>
                  <div className="text-sm text-white/80">Vinola Dental</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-[#6B7280] text-sm">
            Follow us{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2CB1BC] font-semibold hover:underline"
              aria-label="Follow Vinola Dental on Instagram"
            >
              @vinoladental
            </a>
            {" "}to share your smile transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
