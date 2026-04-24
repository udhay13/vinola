"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { landingServicesData } from "@/data/navServices";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 lg:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
            style={{ background: "rgba(44,177,188,0.08)" }}>
            Everything You Need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}>
            Our Dental{" "}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Comprehensive dental care tailored to your needs — from routine checkups to advanced cosmetic treatments.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {landingServicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={service.href}
                  className="block group relative p-7 rounded-2xl border border-[#E5E7EB] bg-white card-shadow hover:border-[#2CB1BC]/30 cursor-pointer h-full"
                  style={{ boxShadow: "0 4px 24px rgba(31,41,55,0.06)" }}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: service.bg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#2CB1BC] transition-colors"
                    style={{ fontFamily: "var(--font-poppins)" }}>
                    {service.label}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{service.description}</p>

                  {/* Arrow */}
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#2CB1BC] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-4px] group-hover:translate-x-0">
                    Learn more →
                  </div>

                  {/* Hover accent border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2CB1BC]/20 transition-all duration-300 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
