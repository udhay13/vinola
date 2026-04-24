"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Star } from "lucide-react";

const floatingCards = [
  {
    icon: <Shield className="w-4 h-4 text-[#2CB1BC]" />,
    label: "Preventive Care",
    sub: "Complete checkups",
    delay: 0,
    className: "float-anim top-6 -left-6",
  },
  {
    icon: <Sparkles className="w-4 h-4 text-[#2CB1BC]" />,
    label: "Cosmetic Dentistry",
    sub: "Perfect smiles",
    delay: 1,
    className: "float-anim-delay top-1/2 -right-8",
  },
  {
    icon: <Star className="w-4 h-4 text-[#2CB1BC]" />,
    label: "Dental Implants",
    sub: "Lifetime solutions",
    delay: 2,
    className: "float-anim-delay2 bottom-6 -left-4",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="home"
      /* Mobile: items-start so content sits right below navbar, not centered in full viewport.
         Desktop (lg): h-screen + items-center for the split layout. */
      className="relative min-h-screen lg:h-screen flex items-start lg:items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 50%, #F0FDFE 100%)" }}
    >
      {/* Background blob shapes */}
      <div
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }}
      />

      <div className="relative z-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-12 lg:pt-24 lg:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left: Text Content (always visible) ── */}
          <div className="space-y-5">

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-[#2CB1BC] border border-[#2CB1BC]/30"
              style={{ background: "rgba(44,177,188,0.08)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2CB1BC] animate-pulse" />
              Salem&apos;s Most Trusted Dental Clinic
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1F2937]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Transform Your{" "}
              <span className="text-gradient">Smile</span>
              {" "}with Confidence
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base text-[#6B7280] leading-relaxed max-w-lg"
            >
              Advanced dental care with precision, comfort, and compassion by{" "}
              <span className="font-semibold text-[#1F2937]">Dr. Vinola Duraisamy</span>
              . Your perfect smile starts here.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { value: "26+", label: "Years Experience" },
                { value: "5K+", label: "Happy Patients" },
                { value: "15+", label: "Treatments" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-xl font-bold text-[#2CB1BC]"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contact"
                id="hero-book-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-105 glow-teal-hover shadow-lg"
                style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#services"
                id="hero-services-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#2CB1BC] font-semibold text-sm border-2 border-[#2CB1BC] transition-all duration-300 hover:bg-[#E6F7F8] hover:scale-105"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Mobile Image (hidden on desktop) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="mt-8 flex justify-center lg:hidden w-full"
            >
              <div className="relative w-full max-w-[280px]">
                <div className="relative w-full aspect-[4/4] rounded-3xl overflow-hidden card-shadow">
                  <Image
                    src="/hero-patient.png"
                    alt="Patient with beautiful smile at Vinola Dental"
                    fill
                    priority
                    sizes="(max-width: 1024px) 280px, 0px"
                    className="object-cover"
                    style={{ objectPosition: "top" }}
                  />
                </div>

                {/* Floating Glass Cards for Mobile */}
                {floatingCards.map((card) => (
                  <div
                    key={card.label}
                    className={`absolute glass rounded-xl px-2 py-1.5 shadow-lg ${card.className} z-10 scale-90`}
                    style={{ animationDelay: `${card.delay}s` }}
                  >
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(44,177,188,0.12)" }}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold text-[#1F2937] leading-tight">{card.label}</div>
                        <div className="text-[8px] text-[#6B7280] leading-tight">{card.sub}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Verified badge for Mobile */}
                <div className="absolute -bottom-2 -right-4 glass rounded-xl px-2 py-1.5 shadow-lg float-anim z-10 scale-90">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#2CB1BC] flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#1F2937] leading-tight">Certified Clinic</div>
                      <div className="flex gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-[8px]">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Image (hidden on mobile, visible on lg+) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex relative justify-center"
          >
            <div className="relative w-full max-w-[420px]">
              {/* Decorative ring */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(44,177,188,0.15), rgba(44,177,188,0.05))",
                  transform: "rotate(-3deg) scale(1.03)",
                }}
              />
              <div className="relative rounded-3xl overflow-hidden card-shadow">
                <Image
                  src="/hero-patient.png"
                  alt="Patient with beautiful smile at Vinola Dental"
                  width={420}
                  height={460}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "calc(100vh - 160px)" }}
                  priority
                />
              </div>

              {/* Floating Glass Cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className={`absolute glass rounded-xl px-3 py-2 shadow-lg ${card.className}`}
                  style={{ animationDelay: `${card.delay}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(44,177,188,0.12)" }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1F2937]">{card.label}</div>
                      <div className="text-[10px] text-[#6B7280]">{card.sub}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Verified badge */}
              <div className="absolute -bottom-3 right-4 glass rounded-xl px-3 py-2 shadow-lg float-anim">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#2CB1BC] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1F2937]">Certified Clinic</div>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-[10px]">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
