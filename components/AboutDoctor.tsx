"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const highlights = [
  "26+ years of clinical excellence in dental care",
  "Specialized in cosmetic and restorative dentistry",
  "State-of-the-art technology & pain-free procedures",
  "Patient-first approach with personalized treatment plans",
  "BDS, MDS, FICCDE. qualified from top institutions",
];

export default function AboutDoctor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}
      ref={ref}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #2CB1BC, transparent)",
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Background accent */}
              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)", opacity: 0.15 }}
              />
              {/* Image frame */}
              <div className="relative rounded-3xl overflow-hidden card-shadow border-4 border-white">
                <Image
                  src="/10.png"
                  alt="Dr. Vinola Duraisamy - Lead Dentist at Vinola Dental"
                  width={420}
                  height={520}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 shadow-lg text-center"
              >
                <div className="text-2xl font-bold text-[#2CB1BC]" style={{ fontFamily: "var(--font-poppins)" }}>26+</div>
                <div className="text-xs text-[#6B7280] font-medium leading-tight">Years<br/>Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-7"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
                style={{ background: "rgba(44,177,188,0.08)" }}>
                Meet Your Doctor
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-2"
                style={{ fontFamily: "var(--font-poppins)" }}>
                Dr. Vinola{" "}
                <span className="text-gradient">Duraisamy</span>
              </h2>
              <div className="text-[#2CB1BC] font-semibold text-sm mb-4">
                BDS, MDS, FICCDE. • Dental Surgeon
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed">
                Dr. Vinola Duraisamy is a Dental Surgeon in Fairlands, Salem and has an experience of 26 years in this field. She practices at Vinola Dental in Fairlands, Salem. She completed BDS from Rajah Muthiah Dental College Hospital, Annamalai University, in 2000.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3" aria-label="Doctor highlights">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-[#374151]"
                >
                  <CheckCircle className="w-5 h-5 text-[#2CB1BC] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 glow-teal-hover"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
              >
                Book a Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[#2CB1BC] font-semibold border-2 border-[#2CB1BC] transition-all duration-300 hover:bg-[#E6F7F8] hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
