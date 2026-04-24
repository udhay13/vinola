"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navServiceLinks } from "@/data/navServices";

type NavChild = { label: string; href: string; desc?: string };
type NavLink = { label: string; href: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", desc: "Our story, mission & vision" },
      { label: "Meet the Doctor", href: "/about/doctor", desc: "Dr. Vinola – qualifications & experience" },
      { label: "Our Team", href: "/about/team", desc: "Staff, assistants & hygienists" },
    ],
  },
  {
    label: "Services",
    href: "/services/general-dentistry",
    children: navServiceLinks,
  },
  {
    label: "Patients",
    href: "/patients/information",
    children: [
      { label: "Patient Information", href: "/patients/information", desc: "First visit, policies & more" },
      { label: "Book Appointment", href: "/patients/appointment", desc: "Online appointment form" },
      { label: "Pricing & Packages", href: "/patients/pricing", desc: "Treatment costs & EMI options" },
      { label: "Before & After", href: "/patients/gallery", desc: "Smile transformations" },
      { label: "FAQs", href: "/patients/faq", desc: "Common questions answered" },
      { label: "Testimonials", href: "/patients/testimonials", desc: "Patient reviews & stories" },
    ],
  },
  {
    label: "Clinic",
    href: "/clinic/contact",
    children: [
      { label: "Contact Us", href: "/clinic/contact", desc: "Phone, WhatsApp & location" },
      { label: "Clinic Gallery", href: "/clinic/gallery", desc: "Photos of our clinic" },
      { label: "Technology", href: "/clinic/technology", desc: "Advanced dental equipment" },
      { label: "Offers & Packages", href: "/clinic/offers", desc: "Special promotions" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/vd logo final-Photoroom.png"
              alt="Vinola Dental Logo"
              width={180}
              height={48}
              className="h-8 md:h-9 w-auto object-contain drop-shadow-sm"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#374151] hover:text-[#2CB1BC] rounded-lg hover:bg-[#E6F7F8] transition-all duration-200"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                      style={{ minWidth: link.children.length > 5 ? "220px" : "200px" }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className={`py-2 ${link.children.length > 6 ? "columns-2 gap-0" : ""}`}>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex flex-col px-4 py-2.5 hover:bg-[#E6F7F8] hover:text-[#2CB1BC] transition-all group break-inside-avoid"
                          >
                            <span className="text-sm font-medium text-[#1F2937] group-hover:text-[#2CB1BC] transition-colors">
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="text-xs text-[#9CA3AF] leading-tight mt-0.5">{child.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:04274972266"
              className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-[#2CB1BC]"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
              0427 4972266
            </a>
            <Link
              href="/patients/appointment"
              id="nav-book-btn"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 glow-teal-hover relative"
              style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
            >
              Book Appointment
            </Link>
            {/* Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-[#1F2937] hover:bg-[#E6F7F8]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-white border-t border-gray-100 px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.children ? (
                    <div>
                      <button
                        onClick={() =>
                          setMobileExpanded(
                            mobileExpanded === link.label ? null : link.label
                          )
                        }
                        className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-[#374151] hover:text-[#2CB1BC] rounded-lg hover:bg-[#E6F7F8] transition-all"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            mobileExpanded === link.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-[#E6F7F8] pl-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => { setIsOpen(false); setMobileExpanded(null); }}
                                  className="block px-3 py-2 text-sm text-[#6B7280] hover:text-[#2CB1BC] rounded-lg hover:bg-[#E6F7F8] transition-all"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2.5 text-sm font-medium text-[#374151] hover:text-[#2CB1BC] rounded-lg hover:bg-[#E6F7F8] transition-all"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/patients/appointment"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
