"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Clock, Award } from "lucide-react";

const features = [
  { icon: Heart, label: "Gentle Care", desc: "Comfortable experience for all ages" },
  { icon: Clock, label: "Flexible Hours", desc: "Evening & weekend slots available" },
  { icon: Award, label: "Top Rated", desc: "5-star rated by 5000+ patients" },
];

export default function FamilyCare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <Image
                src="/6.png"
                alt="Family dental care at Vinola Dental — treatment for all ages"
                width={560}
                height={420}
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(31,41,55,0.3), transparent)" }} />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-2xl w-24 p-3 py-6 shadow-2xl flex flex-col gap-6 border border-white/30"
            >
              {[
                { value: "97%", label: "Satisfaction" },
                { value: "5K+", label: "Families" },
                { value: "15+", label: "Services" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-extrabold text-[#2CB1BC]" style={{ fontFamily: "var(--font-poppins)" }}>{s.value}</div>
                  <div className="text-[9px] font-bold text-[#4B5563] uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
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
                For Every Generation
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1F2937] mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}>
                Expert Dental Care for the{" "}
                <span className="text-gradient">Whole Family</span>
              </h2>
              <p className="text-base text-[#6B7280] leading-relaxed">
                From your child&apos;s first specialized pediatric visit to advanced implant therapies, we guarantee a patient-first approach your entire family can trust. Our medically guided treatments are delivered in a clean, calm, and pain-free environment carefully tailored to ensure your complete comfort.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8FFFE] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(44,177,188,0.1)" }}>
                      <Icon className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#1F2937] text-sm">{feature.label}</div>
                      <div className="text-xs text-[#6B7280] mt-0.5">{feature.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-semibold transition-all duration-300 hover:scale-105 glow-teal-hover"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
            >
              Schedule a Visit
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
