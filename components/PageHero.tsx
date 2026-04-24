"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <section
      className="relative pt-28 pb-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 60%, #F0FDFE 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2CB1BC, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-[#6B7280] mb-6 flex-wrap"
          >
            <Link href="/" className="flex items-center gap-1 hover:text-[#2CB1BC] transition-colors">
              <Home className="w-3 h-3" />
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {crumb.href && i < breadcrumbs.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-[#2CB1BC] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#2CB1BC] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#2CB1BC] border border-[#2CB1BC]/30 mb-4"
            style={{ background: "rgba(44,177,188,0.08)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2CB1BC] animate-pulse" />
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] leading-tight mb-4"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-gradient">{titleHighlight}</span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Decorative bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 h-1 w-16 rounded-full origin-left"
          style={{ background: "linear-gradient(90deg, #2CB1BC, #1F8A94)" }}
        />
      </div>
    </section>
  );
}
