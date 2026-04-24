import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AppointmentCTA from "@/components/AppointmentCTA";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Oral Health Guide | Daily Dental Care Tips | Vinola Dental Salem",
  description: "Comprehensive oral health guide from Vinola Dental — daily care tips, diet advice, and children's dental care for a lifetime of healthy smiles.",
};

const sections = [
  {
    id: "daily-care",
    emoji: "🪥",
    title: "Daily Oral Care",
    color: "#2CB1BC",
    tips: [
      { title: "Brush Twice Daily", body: "Use a soft-bristled toothbrush and fluoride toothpaste. Brush for at least 2 minutes — morning and before bed." },
      { title: "Floss Every Day", body: "Flossing removes plaque and food from between teeth where your brush can't reach. Do this at least once daily, ideally before bedtime." },
      { title: "Use Mouthwash", body: "An antibacterial mouthwash helps reduce bacteria, freshen breath, and reach areas that brushing misses." },
      { title: "Clean Your Tongue", body: "Bacteria on the tongue are a major cause of bad breath. Use a tongue scraper or the back of your toothbrush daily." },
      { title: "Replace Your Toothbrush", body: "Replace your toothbrush (or electric toothbrush head) every 3 months, or sooner if the bristles are frayed." },
      { title: "Stay Hydrated", body: "Drinking water throughout the day — especially fluoridated water — helps neutralise acids and wash away food particles." },
    ],
  },
  {
    id: "diet",
    emoji: "🥗",
    title: "Diet & Oral Health",
    color: "#10B981",
    tips: [
      { title: "Limit Sugar Intake", body: "Sugar is the primary fuel for bacteria that cause cavities. Reduce sugary snacks, drinks, and juices — especially between meals." },
      { title: "Avoid Carbonated Drinks", body: "Fizzy drinks — even diet versions — are acidic and erode enamel over time. Limit them and use a straw when you do drink them." },
      { title: "Eat Calcium-Rich Foods", body: "Dairy products, leafy greens, almonds, and fish strengthen enamel and support bone density around your teeth." },
      { title: "Snack Wisely", body: "Frequent snacking — even of healthy foods — keeps acids in contact with your teeth. Limit snacking and rinse with water after eating." },
      { title: "Eat Crunchy Foods", body: "Apples, carrots, and celery naturally scrub teeth surfaces and stimulate saliva production, which protects against decay." },
      { title: "Green Tea Benefits", body: "Green tea contains polyphenols that suppress cavity-causing bacteria and reduce inflammation in gum tissue." },
    ],
  },
  {
    id: "children",
    emoji: "🧒",
    title: "Children's Dental Care",
    color: "#F472B6",
    tips: [
      { title: "Start Early", body: "Begin cleaning your baby's gums with a damp cloth before teeth appear. Start brushing as soon as the first tooth erupts." },
      { title: "Use Age-Appropriate Toothpaste", body: "Use a rice-grain amount of fluoride toothpaste for children under 3, and a pea-sized amount from ages 3–6." },
      { title: "First Dental Visit by Age 1", body: "The first dental visit should happen within 6 months of the first tooth appearing or by your child's first birthday." },
      { title: "Limit Bottle and Sippy Cup Use", body: "Prolonged use of bottles with milk or juice — especially at bedtime — causes 'baby bottle tooth decay'. Transition to a regular cup by age 1." },
      { title: "Break Thumb-Sucking Habits", body: "Prolonged thumb-sucking or pacifier use beyond age 4 can affect tooth alignment. We can advise on gentle habit-breaking approaches." },
      { title: "Fluoride and Sealants", body: "Professional fluoride treatments and dental sealants significantly reduce cavity risk in children. Ask us about them at your visit." },
    ],
  },
];

export default function OralHealthGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHero
        badge="Oral Health Guide"
        title="Your Complete Guide to"
        titleHighlight="Dental Wellness"
        subtitle="Evidence-based tips and daily habits from Dr. Vinola Duraisamy to help you maintain a healthy, confident smile for life."
        breadcrumbs={[{ label: "Education", href: "/education/blog" }, { label: "Oral Health Guide" }]}
      />

      {/* Jump links */}
      <nav className="py-6 border-b border-gray-100 bg-white sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3 flex-wrap">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-[#6B7280] bg-gray-100 hover:bg-[#E6F7F8] hover:text-[#2CB1BC] transition-all">
              <span>{s.emoji}</span>{s.title}
            </a>
          ))}
        </div>
      </nav>

      {sections.map((section, idx) => (
        <section key={section.id} id={section.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-white" : ""}`}
          style={idx % 2 !== 0 ? { background: "linear-gradient(135deg, #F8FFFE 0%, #E6F7F8 100%)" } : {}}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className="text-4xl">{section.emoji}</div>
              <div>
                <h2 className="text-3xl font-bold text-[#1F2937]" style={{ fontFamily: "var(--font-poppins)" }}>
                  {section.title}
                </h2>
                <div className="h-1 w-16 rounded-full mt-2" style={{ background: `linear-gradient(90deg, ${section.color}, ${section.color}88)` }} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.tips.map(({ title, body }) => (
                <div key={title} className="p-5 rounded-2xl bg-white border border-gray-100 hover:border-[#2CB1BC]/30 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: section.color }} />
                    <h3 className="font-semibold text-[#1F2937] text-sm" style={{ fontFamily: "var(--font-poppins)" }}>{title}</h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed pl-8">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1F2937] mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
            Good Habits Start with a <span className="text-gradient">Good Check-Up</span>
          </h2>
          <p className="text-[#6B7280] mb-6">Book a routine dental check-up at Vinola Dental and get personalised guidance for your oral health.</p>
          <Link href="/patients/appointment"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold glow-teal-hover transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #2CB1BC, #1F8A94)" }}>
            Book a Check-Up
          </Link>
        </div>
      </section>

      <AppointmentCTA />
    </main>
  );
}
