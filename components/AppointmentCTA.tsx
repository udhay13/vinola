"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function AppointmentCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      ref={ref}
      style={{ background: "linear-gradient(135deg, #1F8A94 0%, #2CB1BC 50%, #3ECFDB 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full border-4 border-white/10" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full border-4 border-white/10" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}>
              Ready for Your{" "}
              <span className="relative">
                Best Smile?
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 6 Q100 0 200 6" stroke="white" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Take the first step towards a healthier, more confident smile. Book your appointment today and experience the Vinola Dental difference.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            {["✓ No Hidden Fees", "✓ Same Day Appointments", "✓ Insurance Accepted", "✓ Pain-Free Treatments"].map((badge) => (
              <span key={badge} className="bg-white/10 px-3 py-1.5 rounded-full">{badge}</span>
            ))}
          </div>

          {/* CTA Button with pulse */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              id="cta-book-btn"
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-white rounded-2xl text-[#2CB1BC] font-bold text-base transition-all duration-300 hover:scale-105 pulse-btn overflow-hidden shadow-xl"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl text-white font-semibold border-2 border-white/40 hover:bg-white/10 transition-all duration-300"
              aria-label="Call Vinola Dental clinic"
            >
              📞 Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
