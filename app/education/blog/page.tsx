import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Blog | Oral Health Tips & Dental Advice | Vinola Dental Salem",
  description: "Dental care tips, treatment awareness, and oral health advice from Dr. Vinola Duraisamy and the Vinola Dental team in Salem.",
};

const articles = [
  {
    category: "Preventive Care",
    title: "Why Your 6-Month Dental Check-Up Matters More Than You Think",
    excerpt: "Many patients skip routine check-ups when they feel no pain. But dental disease is often silent — and catching problems early is always simpler and less expensive.",
    readTime: "4 min read",
    date: "March 2026",
    color: "#2CB1BC",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Teeth Whitening Myths: What Really Works and What Doesn't",
    excerpt: "Between charcoal powders, whitening strips, and professional treatments — the options are overwhelming. Dr. Vinola clears up the most common whitening misconceptions.",
    readTime: "5 min read",
    date: "February 2026",
    color: "#D946EF",
  },
  {
    category: "Orthodontics",
    title: "Braces vs Clear Aligners — Which One is Right for You?",
    excerpt: "Both options straighten teeth effectively, but they differ in cost, comfort, visibility, and treatment requirements. Here's how to decide which suits your lifestyle.",
    readTime: "6 min read",
    date: "January 2026",
    color: "#F59E0B",
  },
  {
    category: "Gum Health",
    title: "The Connection Between Gum Disease and Your Overall Health",
    excerpt: "Research continues to reveal strong links between periodontal disease and conditions like heart disease and diabetes. Here's what you need to know.",
    readTime: "5 min read",
    date: "December 2025",
    color: "#10B981",
  },
  {
    category: "Dental Implants",
    title: "Are Dental Implants Worth the Investment?",
    excerpt: "Implants cost more upfront than other tooth-replacement options — but when you look at longevity, function, and quality of life, the calculation often changes.",
    readTime: "7 min read",
    date: "November 2025",
    color: "#0EA5E9",
  },
  {
    category: "Children's Dentistry",
    title: "How to Make Your Child's First Dental Visit a Positive Experience",
    excerpt: "A child's first dental experience shapes their attitude toward oral health for life. Here are practical tips to prepare them for a calm, happy visit.",
    readTime: "4 min read",
    date: "October 2025",
    color: "#F472B6",
  },
  {
    category: "Technology",
    title: "What Is Digital Smile Design and How Does It Work?",
    excerpt: "Before a single procedure begins, digital smile design lets you preview your planned result. We explain the technology, the process, and what patients can expect.",
    readTime: "5 min read",
    date: "September 2025",
    color: "#8B5CF6",
  },
  {
    category: "Diet & Health",
    title: "Foods That Harm Your Teeth (And What to Eat Instead)",
    excerpt: "Your diet plays a major role in your oral health. Some surprising foods damage enamel, while others actively strengthen it. Here's what dentists recommend.",
    readTime: "4 min read",
    date: "August 2025",
    color: "#EF4444",
  },
  {
    category: "Treatment Awareness",
    title: "Root Canal Treatment Explained: Why It's Not as Scary as You Think",
    excerpt: "Root canal treatment has an unfair reputation. With modern techniques, most patients report no more discomfort than a standard filling. Here's the truth.",
    readTime: "5 min read",
    date: "July 2025",
    color: "#EF4444",
  },
];

const categories = ["All", "Preventive Care", "Cosmetic Dentistry", "Orthodontics", "Gum Health", "Dental Implants", "Children's Dentistry", "Technology", "Diet & Health", "Treatment Awareness"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Dental Blog"
        title="Learn, Understand,"
        titleHighlight="Smile Better"
        subtitle="Expert dental advice, treatment awareness, and preventive care tips from Dr. Vinola Duraisamy and the Vinola Dental team."
        breadcrumbs={[{ label: "Education", href: "/education/blog" }, { label: "Blog" }]}
      />

      {/* Category Filter (visual only) */}
      <section className="py-8 border-b border-gray-100 bg-white sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat, i) => (
              <span key={cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${i === 0 ? "text-white" : "text-[#6B7280] bg-gray-100 hover:bg-[#E6F7F8] hover:text-[#2CB1BC]"}`}
                style={i === 0 ? { background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" } : {}}>
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(({ category, title, excerpt, readTime, date, color }) => (
              <article key={title} className="group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
                <div className="h-2 w-full" style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }} />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: `${color}15`, color }}>{category}</span>
                    <span className="text-xs text-[#9CA3AF] flex items-center gap-1"><Clock className="w-3 h-3" />{readTime}</span>
                  </div>
                  <h2 className="text-base font-bold text-[#1F2937] mb-3 leading-snug group-hover:text-[#2CB1BC] transition-colors" style={{ fontFamily: "var(--font-poppins)" }}>
                    {title}
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed flex-1 mb-4">{excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-[#9CA3AF]">{date}</span>
                    <span className="text-xs font-medium text-[#2CB1BC] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
