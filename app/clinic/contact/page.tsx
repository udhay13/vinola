"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Contact Us"
        title="We'd Love to"
        titleHighlight="Hear from You"
        subtitle="Get in touch for appointments, specific clinical questions, or directions to Vinola Dental in Salem."
        breadcrumbs={[{ label: "Clinic", href: "/clinic/contact" }, { label: "Contact Us" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Details */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  Visit Our <span className="text-gradient">Clinic</span>
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-8">
                  Vinola Dental is conveniently located in the heart of Salem. We offer ample parking and a welcoming, calm environment for your care.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100">
                      <MapPin className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1F2937] mb-1">Clinic Address</div>
                      <div className="text-sm text-[#6B7280]">123 Omalur Road, Hasthampatti<br />Salem, Tamil Nadu 636007</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100">
                      <Phone className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1F2937] mb-1">Phone Number</div>
                      <a href="tel:04274972266" className="text-sm text-[#2CB1BC] hover:underline">0427 4972266</a>
                      <br />
                      <a href="tel:+919443735505" className="text-sm text-[#2CB1BC] hover:underline">+91 94437 35505 (WhatsApp)</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100">
                      <Mail className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#1F2937] mb-1">Email Address</div>
                      <a href="mailto:info@vinoladental.com" className="text-sm text-[#2CB1BC] hover:underline">info@vinoladental.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center bg-gray-50 border border-gray-100">
                      <Clock className="w-5 h-5 text-[#2CB1BC]" />
                    </div>
                    <div className="w-full">
                      <div className="font-bold text-[#1F2937] mb-2">Operating Hours</div>
                      <div className="space-y-1 text-sm text-[#6B7280]">
                        <div className="flex justify-between max-w-[200px]"><span>Monday – Saturday</span><span className="font-medium text-[#374151]">9AM – 8PM</span></div>
                        <div className="flex justify-between max-w-[200px]"><span>Sunday</span><span className="font-medium text-[#374151]">10AM – 2PM</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-gray-50 rounded-3xl border border-gray-100 p-10 text-center h-full flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(44,177,188,0.12)" }}>
                    <CheckCircle className="w-10 h-10 text-[#2CB1BC]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F2937] mb-2" style={{ fontFamily: "var(--font-poppins)" }}>Message Sent Successfully!</h3>
                  <p className="text-[#6B7280]">Thank you for reaching out to Vinola Dental. Our team will review your message and get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-gray-100 p-8 card-shadow space-y-5">
                  <h2 className="text-xl font-bold text-[#1F2937] mb-4" style={{ fontFamily: "var(--font-poppins)" }}>Send us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="name">Full Name *</label>
                      <input id="name" name="name" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" required type="tel" value={form.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                        placeholder="+91 or 0427..." />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="email">Email Address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" value={form.subject} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors"
                      placeholder="How can we help you?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#374151] mb-1.5" htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1F2937] outline-none focus:border-[#2CB1BC] transition-colors resize-none"
                      placeholder="Type your message here..." />
                  </div>
                  <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-[1.01]"
                    style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full bg-gray-100 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.417255140683!2d78.14088925!3d11.6661118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c3fcd8d8cb%3A0xc68297b8fef88031!2sHasthampatti%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1713426173000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
      </section>
    </main>
  );
}
