"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Vinola Dental Clinic", "123 Omalur Road, Hasthampatti", "Salem – 636007, Tamil Nadu"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["Appointments: 0427 4972266", "Enquiries: +91 94437 35505"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["drvinola@gmail.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sun: 10:00 AM – 2:00 PM"],
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{ background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" }}
      ref={ref}
    >
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
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}>
            Contact <span className="text-gradient">Vinola Dental</span>
          </h2>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Have questions or want to book? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white rounded-2xl p-5 card-shadow">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: "rgba(44,177,188,0.1)" }}>
                      <Icon className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div className="font-semibold text-[#1F2937] text-sm mb-1">{item.title}</div>
                    {item.lines.map((line, j) => (
                      <div key={j} className="text-xs text-[#6B7280] leading-relaxed">{line}</div>
                    ))}
                  </div>
                );
              })}
            </div>

            {/* Google Map embed */}
            <div className="rounded-2xl overflow-hidden card-shadow h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62603.28413734376!2d78.09776!3d11.66490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1e757a3c739%3A0xa3d7cebc0c0a6c50!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vinola Dental Clinic location in Salem Tamil Nadu"
                aria-label="Google Maps showing Vinola Dental Clinic location in Salem"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 card-shadow">
              <h3 className="text-xl font-bold text-[#1F2937] mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Book an Appointment
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E6F7F8] flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#2CB1BC]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1F2937] mb-2">Thank You!</h4>
                  <p className="text-sm text-[#6B7280]">
                    We&apos;ve received your request. Our team will contact you shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        aria-required="true"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2CB1BC]/20 focus:border-[#2CB1BC] ${
                          errors.name ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-[#F9FAFB]"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#374151] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        aria-required="true"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: { value: /^[0-9+\-\s]{10,}$/, message: "Enter a valid phone number" },
                        })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2CB1BC]/20 focus:border-[#2CB1BC] ${
                          errors.phone ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-[#F9FAFB]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email", {
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2CB1BC]/20 focus:border-[#2CB1BC] ${
                        errors.email ? "border-red-400 bg-red-50" : "border-[#E5E7EB] bg-[#F9FAFB]"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Service Required
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-sm text-[#1F2937] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2CB1BC]/20 focus:border-[#2CB1BC]"
                    >
                      <option value="">Select a service</option>
                      <option value="general_dentistry">General Dentistry</option>
                      <option value="teeth_alignment">Teeth Alignment</option>
                      <option value="root_canal">Root Canal Treatment</option>
                      <option value="crown_bridge">Crown & Bridge</option>
                      <option value="dental_implant">Dental Implant</option>
                      <option value="child_dentistry">Child Dentistry</option>
                      <option value="complete_denture">Complete Denture</option>
                      <option value="cosmetic_dentistry">Cosmetic Dentistry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your dental concern or query..."
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] text-sm text-[#1F2937] placeholder-[#9CA3AF] transition-all duration-200 outline-none focus:ring-2 focus:ring-[#2CB1BC]/20 focus:border-[#2CB1BC] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:scale-[1.02] glow-teal-hover"
                    style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}
                  >
                    <Send className="w-4 h-4" />
                    Send Message & Book Appointment
                  </button>

                  <p className="text-xs text-[#9CA3AF] text-center">
                    We&apos;ll confirm your appointment within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
