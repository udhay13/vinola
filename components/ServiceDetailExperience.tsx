"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Shield,
  Smile,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";

type ServiceDetailExperienceProps = {
  slug: string;
};

const revealUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  }),
};

const focusIcons = [Shield, Sparkles, Smile, Activity];

export default function ServiceDetailExperience({
  slug,
}: ServiceDetailExperienceProps) {
  const serviceIndex = servicesData.findIndex((item) => item.slug === slug);
  const service = serviceIndex >= 0 ? servicesData[serviceIndex] : undefined;

  if (!service) {
    return null;
  }

  const relatedServices = [
    ...servicesData.slice(serviceIndex + 1),
    ...servicesData.slice(0, serviceIndex),
  ].slice(0, 3);
  const Icon = service.icon;

  return (
    <div className="bg-[#F6FBFB]">
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-14 lg:pb-24">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 12% 18%, ${service.color}18, transparent 32%), radial-gradient(circle at 88% 12%, ${service.color}16, transparent 24%), linear-gradient(180deg, #ffffff 0%, #F6FBFB 100%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
          >
            <Link
              href="/#services"
              className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#1F2937]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
            <div>
              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={0.05}
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm"
                style={{
                  background: service.bg,
                  color: service.color,
                  borderColor: `${service.color}2E`,
                }}
              >
                <Icon className="h-4 w-4" />
                Designed around comfort, clarity, and visible progress
              </motion.div>

              <motion.h1
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={0.1}
                className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                A more confident path to{" "}
                <span className="block text-gradient">{service.title}</span>
              </motion.h1>

              <motion.p
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={0.16}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5563]"
              >
                {service.fullDescription}
              </motion.p>

              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={0.22}
                className="mt-7 flex flex-wrap gap-3"
              >
                {service.quickFacts.map((fact) => (
                  <span
                    key={fact}
                    className="inline-flex items-center gap-2 rounded-full border border-[#DDE6E7] bg-white/90 px-4 py-2 text-sm font-medium text-[#374151] shadow-sm backdrop-blur"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    {fact}
                  </span>
                ))}
              </motion.div>

              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                custom={0.28}
                className="mt-9 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, #1F2937)`,
                    boxShadow: `0 20px 40px ${service.color}2E`,
                  }}
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="tel:04274972266"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#D8E4E5] bg-white px-7 py-4 text-base font-semibold text-[#1F2937] transition-colors hover:border-[#B8CBCE] hover:bg-[#F9FCFC]"
                >
                  Call the Clinic
                </Link>
              </motion.div>

              <motion.div
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.34}
                className="mt-12 grid gap-4 sm:grid-cols-3"
              >
                {service.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.6rem] border border-white/70 bg-white/90 p-5 shadow-[0_18px_44px_rgba(31,41,55,0.08)] backdrop-blur"
                  >
                    <div
                      className="text-2xl font-bold tracking-tight"
                      style={{
                        color: service.color,
                        fontFamily: "var(--font-poppins)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-[#6B7280]">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto h-[620px] w-full max-w-[560px] sm:h-[680px]"
            >
              <div
                className="absolute inset-[6%] rounded-[2.5rem] border border-white/70"
                style={{
                  background: `linear-gradient(150deg, ${service.color}1F, rgba(255,255,255,0.96))`,
                  boxShadow: `0 30px 70px ${service.color}20`,
                }}
              />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-14 w-[72%] overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_28px_64px_rgba(31,41,55,0.18)]"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} illustration`}
                    fill
                    sizes="(max-width: 1024px) 70vw, 420px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent p-5 text-white">
                  <div className="text-xs uppercase tracking-[0.28em] text-white/75">
                    Signature Experience
                  </div>
                  <div className="mt-1 text-lg font-semibold">{service.title}</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="absolute right-0 top-0 w-[42%] overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-[0_20px_50px_rgba(31,41,55,0.15)]"
              >
                <div className="relative aspect-[4/4.7]">
                  <Image
                    src={service.detailImages[0]}
                    alt={`${service.title} care planning`}
                    fill
                    sizes="(max-width: 1024px) 36vw, 220px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute bottom-24 right-6 w-[40%] overflow-hidden rounded-[1.8rem] border border-white/80 bg-white shadow-[0_20px_50px_rgba(31,41,55,0.15)]"
              >
                <div className="relative aspect-square">
                  <Image
                    src={service.detailImages[1]}
                    alt={`${service.title} patient illustration`}
                    fill
                    sizes="(max-width: 1024px) 34vw, 210px"
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-2 top-44 rounded-[1.4rem] border border-white/70 bg-white/92 px-4 py-3 shadow-[0_20px_40px_rgba(31,41,55,0.12)] backdrop-blur"
              >
                <div className="text-xs uppercase tracking-[0.24em] text-[#6B7280]">
                  Outcome Lens
                </div>
                <div className="mt-1 text-lg font-semibold text-[#1F2937]">
                  Visible progress,
                  <br />
                  no rushed decisions
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-0 left-4 right-16 rounded-[1.8rem] border border-white/70 bg-white/92 p-5 shadow-[0_22px_44px_rgba(31,41,55,0.14)] backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={service.detailImages[2]}
                      alt={`${service.title} smile result`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[#1F2937]">
                      What patients notice first
                    </div>
                    <div className="mt-2 space-y-2">
                      {service.quickFacts.slice(0, 2).map((fact) => (
                        <div
                          key={fact}
                          className="flex items-center gap-2 text-sm text-[#4B5563]"
                        >
                          <CheckCircle2
                            className="h-4 w-4 flex-shrink-0"
                            style={{ color: service.color }}
                          />
                          {fact}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
                transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-10 top-36 flex h-16 w-16 items-center justify-center rounded-[1.4rem] text-white shadow-xl"
                style={{ background: `linear-gradient(135deg, ${service.color}, #1F2937)` }}
              >
                <Icon className="h-7 w-7" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="max-w-2xl"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: service.bg, color: service.color }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              What this treatment helps improve
            </div>
            <h2
              className="mt-5 text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              More than a service card. A full treatment story.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">
              Each part of the experience is designed to solve a real concern, reduce
              uncertainty, and move you toward a more confident result.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {service.focusAreas.map((area, index) => {
              const FocusIcon = focusIcons[index % focusIcons.length];

              return (
                <motion.div
                  key={area.title}
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  custom={0.08 * index}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[1.8rem] border border-[#E2EDEE] bg-white p-6 card-shadow"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-1.5"
                    style={{
                      background: `linear-gradient(90deg, ${service.color}, transparent)`,
                    }}
                  />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9AA8AA]">
                      0{index + 1}
                    </div>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl"
                      style={{ background: `${service.color}14` }}
                    >
                      <FocusIcon className="h-5 w-5" style={{ color: service.color }} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1F2937]">{area.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20">
        <div
          className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: `${service.color}14` }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={revealUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
            className="mx-auto max-w-3xl text-center"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ background: service.bg, color: service.color }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: service.color }}
              />
              Treatment flow
            </div>
            <h2
              className="mt-5 text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              A clearer journey from first visit to final result
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">
              The process is structured to keep you informed at each stage instead of
              leaving you to guess what comes next.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                variants={revealUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={0.08 * index}
                whileHover={{ y: -10 }}
                className="relative rounded-[1.9rem] border border-[#E6EFF0] bg-[#FCFEFE] p-6 shadow-[0_18px_44px_rgba(31,41,55,0.06)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]"
                    style={{ background: `${service.color}14`, color: service.color }}
                  >
                    {step.duration}
                  </span>
                  <span className="text-4xl font-bold text-[#D4DEDF]">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#1F2937]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-2 overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_56px_rgba(31,41,55,0.12)]">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.detailImages[0]}
                    alt={`${service.title} visual proof`}
                    fill
                    sizes="(max-width: 1024px) 92vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/70 bg-white shadow-[0_18px_44px_rgba(31,41,55,0.1)]">
                <div className="relative aspect-square">
                  <Image
                    src={service.detailImages[1]}
                    alt={`${service.title} supporting image`}
                    fill
                    sizes="(max-width: 768px) 45vw, 260px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div
                className="rounded-[1.8rem] p-6 text-white shadow-[0_18px_44px_rgba(31,41,55,0.12)]"
                style={{
                  background: `linear-gradient(145deg, ${service.color}, #1F2937)`,
                }}
              >
                <div className="text-xs uppercase tracking-[0.28em] text-white/70">
                  Design Goal
                </div>
                <div
                  className="mt-4 text-2xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Build trust before treatment ever feels overwhelming.
                </div>
                <div className="mt-4 text-sm leading-6 text-white/80">
                  The page is visual because the experience should feel visual too:
                  clear progress, clear expectations, and a calm understanding of what
                  is happening.
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ background: service.bg, color: service.color }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                Comfort and outcomes
              </div>

              <h2
                className="mt-5 text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Built to feel calmer in the chair and stronger after the visit
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">
                The treatment experience is not just about the procedure. It is about
                how clearly it is explained, how comfortable it feels, and how stable
                the outcome remains once you leave the clinic.
              </p>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-[1.9rem] border border-[#E2EDEE] bg-white p-6 card-shadow">
                  <div className="text-lg font-semibold text-[#1F2937]">
                    What patients feel during care
                  </div>
                  <div className="mt-5 space-y-4">
                    {service.comfortPoints.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div
                          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                          style={{ background: `${service.color}14` }}
                        >
                          <CheckCircle2
                            className="h-4 w-4"
                            style={{ color: service.color }}
                          />
                        </div>
                        <div className="text-sm leading-6 text-[#4B5563]">{point}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.9rem] border border-[#E2EDEE] bg-white p-6 card-shadow">
                  <div className="text-lg font-semibold text-[#1F2937]">
                    What the treatment is designed to improve
                  </div>
                  <div className="mt-5 grid gap-3">
                    {service.resultHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-[#ECF3F4] bg-[#FAFDFD] px-4 py-3 text-sm font-medium text-[#374151]"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="overflow-hidden rounded-[2.4rem] border border-white/70 p-8 shadow-[0_28px_70px_rgba(31,41,55,0.1)] lg:p-10"
            style={{
              background: `linear-gradient(135deg, ${service.color}16 0%, rgba(255,255,255,0.97) 45%, #FFFFFF 100%)`,
            }}
          >
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                  style={{ background: service.bg, color: service.color }}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  Keep exploring
                </div>
                <h2
                  className="mt-5 text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Want to compare treatments before booking?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#6B7280]">
                  Browse related services or jump straight to the contact form. The new
                  layout is intentionally visual so patients can understand options
                  faster before they speak with the clinic.
                </p>
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-[1.02]"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}, #1F2937)`,
                  }}
                >
                  Talk to Vinola Dental
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {relatedServices.map((item, index) => {
                  const RelatedIcon = item.icon;

                  return (
                    <motion.div
                      key={item.slug}
                      variants={revealUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      custom={0.08 * index}
                      whileHover={{ y: -8 }}
                    >
                      <Link
                        href={`/services/${item.slug}`}
                        className="group block h-full rounded-[1.8rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_40px_rgba(31,41,55,0.08)] backdrop-blur"
                      >
                        <div
                          className="flex h-12 w-12 items-center justify-center rounded-2xl"
                          style={{ background: item.bg }}
                        >
                          <RelatedIcon
                            className="h-5 w-5"
                            style={{ color: item.color }}
                          />
                        </div>
                        <div className="mt-5 text-lg font-semibold text-[#1F2937]">
                          {item.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                          {item.description}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1F2937] transition-colors group-hover:text-[#2CB1BC]">
                          View service
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
