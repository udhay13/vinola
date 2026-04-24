"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";

const services = [
  "General Dentistry", "Cosmetic Dentistry", "Orthodontics", "Restorative Dentistry",
  "Dental Implants", "Pediatric Dentistry", "Root Canal Treatment", "Periodontics",
  "Oral Surgery", "Smile Makeover", "Other",
];

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", date: "", time: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Book Appointment"
        title="Reserve Your"
        titleHighlight="Appointment"
        subtitle="Fill out the form below and our team will confirm your appointment within a few hours. Or call us directly for immediate assistance."
        breadcrumbs={[{ label: "Patients", href: "/patients/information" }, { label: "Book Appointment" }]}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Contact Options */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Prefer to Call?</h2>
              <a href="tel:04274972266" className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-md transition-all bg-white group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(44,177,188,0.1)" }}>
                  <Phone className="w-5 h-5 text-[#2CB1BC]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1F2937]">Appointments</div>
                  <div className="text-[#2CB1BC] font-semibold">0427 4972266</div>
                </div>
              </a>
              <a href="https://wa.me/919443735505" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-[#25D366]/40 hover:shadow-md transition-all bg-white group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(37,211,102,0.1)" }}>
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1F2937]">WhatsApp</div>
                  <div className="text-[#25D366] font-semibold">+91 94437 35505</div>
                </div>
              </a>
              <div className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(44,177,188,0.1)" }}>
                  <Clock className="w-5 h-5 text-[#2CB1BC]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1F2937] mb-2">Clinic Hours</div>
                  <div className="space-y-1 text-xs text-[#6B7280]">
                    <div className="flex justify-between gap-6"><span>Mon – Sat</span><span className="font-medium text-[#374151]">9:00 AM – 8:00 PM</span></div>
                    <div className="flex justify-between gap-6"><span>Sunday</span><span className="font-medium text-[#374151]">10:00 AM – 2:00 PM</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(44,177,188,0.12)" }}>
                    <CheckCircle className="w-10 h-10 text-[#2CB1BC]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Appointment Request Sent!</h3>
                  <p className="text-[#6B7280] max-w-sm">Our team will review your request and confirm your appointment within a few hours. You can also call us directly at <span className="text-[#2CB1BC] font-medium">0427 4972266</span>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-8 card-shadow space-y-5">
                  <h2 className="text-xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>Appointment Details</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-name">Full Name *</label>
                      <input id="appt-name" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-phone">Phone Number *</label>
                      <input id="appt-phone" name="phone" required type="tel" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                        placeholder="+91 or 0427..." />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-email">Email Address</label>
                      <input id="appt-email" name="email" type="email" value={form.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                        placeholder="your@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-service">Service Required *</label>
                      <select id="appt-service" name="service" required value={form.service} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors bg-white">
                        <option value="">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-date">Preferred Date</label>
                      <input id="appt-date" name="date" type="date" value={form.date} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-time">Preferred Time</label>
                      <select id="appt-time" name="time" value={form.time} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors bg-white">
                        <option value="">Select a time slot</option>
                        <option>Morning (9AM – 12PM)</option>
                        <option>Afternoon (12PM – 4PM)</option>
                        <option>Evening (4PM – 8PM)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="appt-message">Additional Notes</label>
                    <textarea id="appt-message" name="message" rows={4} value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors resize-none"
                      placeholder="Describe your concern, symptoms, or any relevant details..." />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                    <Send className="w-4 h-4" />
                    Request Appointment
                  </button>
                  <p className="text-center text-xs text-[#9CA3AF]">We will confirm your appointment within a few hours during clinic hours.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
