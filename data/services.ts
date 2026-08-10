import {
  Shield,
  Zap,
  Sparkles,
  Smile,
  Baby,
  Activity,
  Layers,
  type LucideIcon,
} from "lucide-react";

export type ServiceFocusArea = {
  title: string;
  description: string;
};

export type ServiceStep = {
  title: string;
  description: string;
  duration: string;
};

export type ServiceStat = {
  value: string;
  label: string;
};

export type ServiceItem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  color: string;
  bg: string;
  heroImage: string;
  detailImages: [string, string, string];
  quickFacts: string[];
  focusAreas: ServiceFocusArea[];
  process: ServiceStep[];
  comfortPoints: string[];
  resultHighlights: string[];
  stats: ServiceStat[];
};

export const servicesData: ServiceItem[] = [
  {
    slug: "general-dentistry",
    icon: Shield,
    title: "General Dentistry",
    description:
      "Professional scaling and checkups. We take time to understand concerns and safely clear deposits for a brighter smile.",
    fullDescription:
      "Our General Dentistry services focus on preventive care and early detection. We offer comprehensive oral exams, professional teeth scaling, and polishing to safely remove plaque, tartar, and surface stains. We take the time to understand your concerns and provide step-by-step guidance for maintaining a healthy, uniformly bright smile.",
    color: "#2CB1BC",
    bg: "rgba(44,177,188,0.08)",
    heroImage: "/smile3.png",
    detailImages: ["/doctor.png", "/family.png", "/smile2.png"],
    quickFacts: ["Scaling and polishing", "Routine exams", "Preventive planning"],
    focusAreas: [
      {
        title: "Plaque and tartar buildup",
        description:
          "Gentle scaling clears deposits before they grow into gum irritation, decay, or persistent bad breath.",
      },
      {
        title: "Early cavity detection",
        description:
          "Routine reviews help us catch small issues before they require larger restorative treatment.",
      },
      {
        title: "Gum health support",
        description:
          "We monitor bleeding points, inflammation, and hygiene habits with a preventive-first approach.",
      },
      {
        title: "Smile freshness maintenance",
        description:
          "Polishing and tailored home-care guidance keep your smile cleaner, brighter, and easier to maintain.",
      },
    ],
    process: [
      {
        title: "Consult and exam",
        description:
          "We review symptoms, habits, and visible concerns to understand what your smile needs today.",
        duration: "Step 01",
      },
      {
        title: "Scaling and cleaning",
        description:
          "Deposits are removed carefully and the teeth are polished for a fresher, cleaner finish.",
        duration: "Step 02",
      },
      {
        title: "Clear findings review",
        description:
          "You get a simple explanation of what looks healthy and what needs monitoring or treatment.",
        duration: "Step 03",
      },
      {
        title: "Maintenance roadmap",
        description:
          "We recommend the right recall interval and a home-care routine that fits your daily life.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "Calm chairside guidance from start to finish",
      "Gentle cleaning focused on comfort, not rush",
      "Clear explanations before any next-step recommendation",
      "Strict hygiene and safety protocols in every visit",
    ],
    resultHighlights: [
      "Cleaner teeth and fresher breath",
      "Earlier detection of hidden dental concerns",
      "Better gum health and easier maintenance",
      "A stronger preventive routine between visits",
    ],
    stats: [
      { value: "30-45 min", label: "Typical chair time" },
      { value: "6 month", label: "Ideal review cycle" },
      { value: "Preventive", label: "Care philosophy" },
    ],
  },
  {
    slug: "teeth-alignment",
    icon: Smile,
    title: "Teeth Alignment",
    description:
      "Preventive orthodontic treatment for teens and adults, alongside removable digital orthodontic appliances for comfortable alignment.",
    fullDescription:
      "Achieve the perfect bite and a beautifully straight smile with our Orthodontic solutions. We offer preventive orthodontic treatment for teens and adults, utilizing modern braces and removable digital orthodontic appliances tailored to your specific needs. Our guided therapy smoothly transitions you from your first evaluation to routine check-ups.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    heroImage: "/smile1.png",
    detailImages: ["/doctor.png", "/smile2.png", "/smile3.png"],
    quickFacts: ["Clear Aligners", "Metal & Ceramic Braces", "Retainers", "Preventive care"],
    focusAreas: [
      {
        title: "Clear Aligners (Invisalign / Spark / Illusion / Precisalign)",
        description:
          "Removable digital customized orthodontic treatment to straighten teeth — comfortable, discreet, and tailored to your smile goals.",
      },
      {
        title: "Metal Braces",
        description:
          "The most durable orthodontic option. Available in Standard 3M, Damon, and Progressive Orthodontics USA — customised brackets designed for every tooth and movement.",
      },
      {
        title: "Ceramic Braces",
        description:
          "Tooth-coloured brackets that blend with your smile for a more discreet alignment journey with the effectiveness of traditional braces.",
      },
      {
        title: "Interceptive Orthodontics",
        description:
          "Early phased orthodontic treatment designed to guide proper jaw growth, create space for erupting teeth, and correct bite issues before they become severe.",
      },
      {
        title: "Retainers",
        description:
          "Post-treatment retainers to preserve alignment and protect your results long-term after active orthodontic therapy.",
      },
    ],
    process: [
      {
        title: "Smile analysis",
        description:
          "We assess spacing, bite, and facial proportions to understand the most suitable alignment path.",
        duration: "Step 01",
      },
      {
        title: "Custom treatment plan",
        description:
          "A phased strategy is created using braces or aligners based on your clinical and lifestyle needs.",
        duration: "Step 02",
      },
      {
        title: "Progressive adjustments",
        description:
          "Regular review visits keep your movement controlled, comfortable, and heading in the right direction.",
        duration: "Step 03",
      },
      {
        title: "Retention and finishing",
        description:
          "Retention guidance helps protect the final result once your smile reaches its planned alignment.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "Clear expectations for each stage of movement",
      "Review schedules that fit long-term treatment planning",
      "Comfort-minded monitoring during adjustments",
      "Supportive guidance for cleaning and maintenance",
    ],
    resultHighlights: [
      "Straighter smile with improved symmetry",
      "Better bite comfort and tooth positioning",
      "More predictable long-term maintenance",
      "Visible confidence gains throughout the journey",
    ],
    stats: [
      { value: "6-18 mo", label: "Typical treatment span" },
      { value: "Phased", label: "Planning style" },
      { value: "Review-led", label: "Progress tracking" },
    ],
  },
  {
    slug: "root-canal-treatment",
    icon: Activity,
    title: "Root Canal Treatment",
    description:
      "Safely removing infection and cleaning the tooth. Step-by-step guidance ensuring patient ease and a calm approach.",
    fullDescription:
      "Root canal treatments do not have to be intimidating. We use a calm, medically guided approach to safely remove internal tooth infection, clean the root thoroughly, and seal it to prevent further harm. This pain-free procedure is highly effective in saving your natural tooth and providing immediate relief from severe toothaches.",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    heroImage: "/doctor.png",
    detailImages: ["/smile2.png", "/family.png", "/smile3.png"],
    quickFacts: ["Pain relief focused", "Tooth-saving care", "Sealed for protection"],
    focusAreas: [
      {
        title: "Deep infection inside the tooth",
        description:
          "We remove infected tissue carefully to stop pain and prevent the problem from progressing.",
      },
      {
        title: "Lingering sensitivity",
        description:
          "Persistent hot or cold pain often signals internal inflammation that needs guided treatment.",
      },
      {
        title: "Severe decay or trauma",
        description:
          "When the inner tooth is affected, root canal therapy can help preserve the tooth structure.",
      },
      {
        title: "Pressure, swelling, or pain",
        description:
          "The goal is to reduce active symptoms while protecting the tooth from future reinfection.",
      },
    ],
    process: [
      {
        title: "Diagnosis and planning",
        description:
          "We examine the tooth, identify the source of pain, and explain the treatment path clearly.",
        duration: "Step 01",
      },
      {
        title: "Comfort and access",
        description:
          "The area is numbed and the tooth is opened gently so infected tissue can be treated safely.",
        duration: "Step 02",
      },
      {
        title: "Cleaning and sealing",
        description:
          "The canals are disinfected, shaped, and sealed to protect the tooth from further contamination.",
        duration: "Step 03",
      },
      {
        title: "Final restoration",
        description:
          "When needed, the tooth is reinforced with a crown or restoration to restore strength and function.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "A calm chairside approach focused on pain control",
      "Clear explanations that reduce fear before treatment begins",
      "Precision cleaning designed to save the natural tooth",
      "Structured aftercare guidance for recovery and follow-up",
    ],
    resultHighlights: [
      "Fast relief from severe toothache symptoms",
      "Preservation of the natural tooth whenever possible",
      "Reduced infection risk with proper sealing",
      "Restored chewing comfort after healing and reinforcement",
    ],
    stats: [
      { value: "1-2 visits", label: "Typical completion" },
      { value: "Tooth-saving", label: "Primary objective" },
      { value: "Pain managed", label: "Patient approach" },
    ],
  },
  {
    slug: "crown-bridge",
    icon: Layers,
    title: "Crown & Bridge",
    description:
      "Restore function and beauty. Using high-quality materials to cap damaged teeth or seamlessly fill gaps.",
    fullDescription:
      "Restore the function and brilliant beauty of your smile with custom crowns and bridges. Crowns act as protective caps to drastically strengthen damaged teeth, while bridges seamlessly fill the exact gaps left by missing teeth. We exclusively use durable, high-quality, tooth-colored materials for an incredibly natural look.",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    heroImage: "/smile1.png",
    detailImages: ["/smile3.png", "/doctor.png", "/smile2.png"],
    quickFacts: ["Custom restorations", "Tooth-colored finish", "Function restored"],
    focusAreas: [
      {
        title: "Weakened teeth",
        description:
          "Crowns reinforce teeth that are structurally compromised after decay, fracture, or major fillings.",
      },
      {
        title: "Post-root-canal support",
        description:
          "A protective cap can restore strength and long-term durability after endodontic treatment.",
      },
      {
        title: "Missing tooth gaps",
        description:
          "Bridges help close spaces to improve chewing comfort and smile continuity in a fixed format.",
      },
      {
        title: "Natural aesthetics",
        description:
          "We shape restorations to blend with neighboring teeth in color, contour, and bite.",
      },
    ],
    process: [
      {
        title: "Assessment and preparation",
        description:
          "We examine the tooth or gap, prepare the area carefully, and plan the ideal restoration shape.",
        duration: "Step 01",
      },
      {
        title: "Impressions and shade match",
        description:
          "Measurements and shade choices are captured so the restoration fits naturally and comfortably.",
        duration: "Step 02",
      },
      {
        title: "Temporary protection",
        description:
          "Temporary coverage is provided when needed while the final crown or bridge is being fabricated.",
        duration: "Step 03",
      },
      {
        title: "Final fit and bite check",
        description:
          "The finished restoration is placed and adjusted for comfort, balance, and a polished look.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "Detailed shade and shape planning for a natural appearance",
      "Smooth bite adjustments for speaking and chewing comfort",
      "High-quality materials selected for daily durability",
      "Supportive guidance for long-term restoration care",
    ],
    resultHighlights: [
      "Improved function for chewing and speaking",
      "Stronger support for damaged or treated teeth",
      "A seamless look that blends into the smile line",
      "Better confidence when eating and smiling in public",
    ],
    stats: [
      { value: "2-3 visits", label: "Typical treatment flow" },
      { value: "Natural contour", label: "Design priority" },
      { value: "Bite restored", label: "Functional goal" },
    ],
  },
  {
    slug: "dental-implant",
    icon: Zap,
    title: "Dental Implant",
    description:
      "Securely and efficiently replace missing teeth with customized roots and crowns guided by modern precision.",
    fullDescription:
      "Dental implants are the ultimate permanent solution for replacing missing teeth. A small titanium post acts precisely like a natural tooth root, structurally supporting a customized crown. Using advanced digital X-rays and clear guidance, we securely restore both your bite and your confidence.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    heroImage: "/smile2.png",
    detailImages: ["/doctor.png", "/smile3.png", "/smile1.png"],
    quickFacts: ["Titanium root support", "Stable bite feel", "Long-term planning"],
    focusAreas: [
      {
        title: "Single missing teeth",
        description:
          "Implants replace the missing root and crown so the smile feels more complete and stable.",
      },
      {
        title: "Bite balance preservation",
        description:
          "Replacing a missing tooth can reduce shifting, uneven pressure, and long-term chewing imbalance.",
      },
      {
        title: "Confidence in fixed replacement",
        description:
          "Implants are ideal for patients seeking a secure, non-removable replacement option.",
      },
      {
        title: "Natural look and feel",
        description:
          "Custom crowns are designed to sit comfortably and harmonize with surrounding teeth.",
      },
    ],
    process: [
      {
        title: "Digital implant planning",
        description:
          "We assess bone support, spacing, and smile design to decide whether implants are the right fit.",
        duration: "Step 01",
      },
      {
        title: "Implant placement",
        description:
          "The titanium implant is placed carefully into the jawbone with precision-driven positioning.",
        duration: "Step 02",
      },
      {
        title: "Healing and integration",
        description:
          "A healing period allows the implant to bond with the bone for long-term stability.",
        duration: "Step 03",
      },
      {
        title: "Final crown delivery",
        description:
          "A custom crown is attached to complete the smile and restore comfortable everyday function.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "Step-by-step planning based on clinical stability",
      "Clear timelines for healing and final placement",
      "Custom-fitted restorations for natural chewing comfort",
      "Guidance on oral care that protects implant longevity",
    ],
    resultHighlights: [
      "Secure support for a missing tooth replacement",
      "Improved bite confidence during everyday meals",
      "Aesthetic integration with the surrounding smile",
      "A long-term, stability-focused restorative option",
    ],
    stats: [
      { value: "Phased", label: "Treatment journey" },
      { value: "Bone-first", label: "Planning priority" },
      { value: "Stable support", label: "Outcome focus" },
    ],
  },
  {
    slug: "child-dentistry",
    icon: Baby,
    title: "Child Dentistry",
    description:
      "Gentle, child-friendly care with specialized pediatric attention specifically structured to reduce dental anxiety.",
    fullDescription:
      "We provide gentle, patient, and fun pediatric care to nurture healthy smiles from the earliest ages. Our child-friendly environments and highly specialized pediatric techniques are specifically structured to reduce dental anxiety, ensuring that your child's visits are happy, educational, and completely stress-free.",
    color: "#F472B6",
    bg: "rgba(244,114,182,0.08)",
    heroImage: "/family.png",
    detailImages: ["/doctor.png", "/smile2.png", "/smile3.png"],
    quickFacts: ["Preventive orthodontics", "Pulpectomy & Pulpotomy", "Paediatric crowns", "Anxiety-free care"],
    focusAreas: [
      {
        title: "First dental visits",
        description:
          "We create positive early experiences so children feel safe and familiar with the dental chair.",
      },
      {
        title: "Cavity prevention",
        description:
          "Regular monitoring and simple coaching help protect growing teeth from early damage.",
      },
      {
        title: "Preventive Orthodontics",
        description:
          "Encourages proper dental growth and helps avoid complex orthodontic treatment by guiding jaw and tooth development early.",
      },
      {
        title: "Pulpectomy / Pulpotomy",
        description:
          "Pulpectomy removes infected pulp from the entire tooth to relieve pain and preserve the primary tooth. Pulpotomy removes infected pulp from the crown while preserving the healthy root pulp.",
      },
      {
        title: "Crowns for Children",
        description:
          "Custom-made caps that restore weakened teeth and protect them until they naturally fall out. Available in Metal, Stainless Steel, or Zirconia crowns designed to protect and restore your child's teeth.",
      },
    ],
    process: [
      {
        title: "Warm welcome and acclimatization",
        description:
          "Children are introduced gently to the space, sounds, and team so the visit feels approachable.",
        duration: "Step 01",
      },
      {
        title: "Gentle exam and discussion",
        description:
          "We examine growth, oral hygiene, and visible concerns while keeping parents involved throughout.",
        duration: "Step 02",
      },
      {
        title: "Child-friendly treatment or coaching",
        description:
          "Any recommended care is delivered with patience and language that children can understand.",
        duration: "Step 03",
      },
      {
        title: "Recall and preventive routine",
        description:
          "Families leave with simple next steps for brushing, diet habits, and future review timing.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "A reassuring pace designed for children and parents",
      "Friendly communication that makes treatment less intimidating",
      "Preventive guidance tailored to each age and stage",
      "A positive experience that builds trust visit after visit",
    ],
    resultHighlights: [
      "Happier dental visits for children",
      "Better habits built early at home",
      "Reduced fear around checkups and treatment",
      "Healthier smiles as the child grows",
    ],
    stats: [
      { value: "Kid-friendly", label: "Visit environment" },
      { value: "Parent included", label: "Care style" },
      { value: "Anxiety reduced", label: "Experience goal" },
    ],
  },
  {
    slug: "complete-denture",
    icon: Layers,
    title: "Complete Denture",
    description:
      "Custom-fitted prosthetics uniquely crafted for comfort, carefully aimed at protecting gums and restoring normal function.",
    fullDescription:
      "Regain your smile and chewing ability with our highly customized complete and partial dentures. Designed uniquely for your mouth's exact contours, our dentures prioritize comfort. They are carefully engineered to protect your gums, restore normal facial structure, and let you confidently interact with the world.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    heroImage: "/smile2.png",
    detailImages: ["/doctor.png", "/smile1.png", "/family.png"],
    quickFacts: ["Custom-fit dentures", "Comfort and speech focus", "Confidence restoration"],
    focusAreas: [
      {
        title: "Tooth loss replacement",
        description:
          "Dentures restore missing teeth in a structured way that supports appearance and everyday function.",
      },
      {
        title: "Chewing and speaking support",
        description:
          "A better fit helps improve confidence during meals, conversations, and social situations.",
      },
      {
        title: "Facial structure balance",
        description:
          "Well-planned dentures can help support facial contours affected by missing teeth.",
      },
      {
        title: "Comfortable removable care",
        description:
          "We refine fit and follow-up adjustments so the denture feels more manageable in daily use.",
      },
    ],
    process: [
      {
        title: "Records and measurements",
        description:
          "We capture mouth shape, bite, and facial proportions to plan the most natural fit possible.",
        duration: "Step 01",
      },
      {
        title: "Trial planning",
        description:
          "A preview stage helps evaluate appearance, bite, and denture position before completion.",
        duration: "Step 02",
      },
      {
        title: "Final denture fitting",
        description:
          "The denture is delivered and adjusted to improve stability, comfort, and overall confidence.",
        duration: "Step 03",
      },
      {
        title: "Refinement follow-up",
        description:
          "Post-delivery checks help fine-tune fit, speech comfort, and adaptation over time.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "Customized planning for shape, fit, and facial harmony",
      "Supportive reviews during the adaptation period",
      "Practical advice for speaking, eating, and daily cleaning",
      "Follow-up refinement to improve comfort after delivery",
    ],
    resultHighlights: [
      "Restored smile presence and social confidence",
      "Improved support for chewing and speech",
      "A more natural facial profile after tooth loss",
      "Daily comfort improved through planned adjustments",
    ],
    stats: [
      { value: "Custom fit", label: "Primary design goal" },
      { value: "Speech comfort", label: "Everyday benefit" },
      { value: "Follow-up tuned", label: "Refinement style" },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    icon: Sparkles,
    title: "Cosmetic Dentistry",
    description:
      "Personalized smile makeovers using safe, clinically proven whitening and veneer procedures based on unique facial goals.",
    fullDescription:
      "Craft your dream aesthetic with our Cosmetic Dentistry services. We offer safe, clinically proven teeth whitening and premium veneers tailored precisely to your unique facial features and personal goals. Our expert smile makeovers will leave you with a dazzling, universally radiant smile.",
    color: "#D946EF",
    bg: "rgba(217,70,239,0.08)",
    heroImage: "/smile1.png",
    detailImages: ["/smile3.png", "/doctor.png", "/smile2.png"],
    quickFacts: ["Composite Veneering", "Smile Design", "Teeth Whitening", "Facial harmony focus"],
    focusAreas: [
      {
        title: "Shade improvement",
        description:
          "Whitening and aesthetic planning help brighten the smile while keeping it believable and balanced.",
      },
      {
        title: "Composite Veneering",
        description:
          "Tooth-coloured composite applied to the front surface of teeth to correct chips, discolouration, and shape irregularities — a conservative, beautiful result.",
      },
      {
        title: "Smile Design / Smile Makeover",
        description:
          "A personalised aesthetic plan using digital planning tools to create your ideal smile shape and shade — customised to your facial features and personal goals.",
      },
      {
        title: "Smile proportion balance",
        description:
          "Cosmetic planning considers lip line, tooth shape, and facial symmetry instead of isolated teeth.",
      },
    ],
    process: [
      {
        title: "Aesthetic consultation",
        description:
          "We discuss the changes you want, what feels natural, and how to build a realistic outcome.",
        duration: "Step 01",
      },
      {
        title: "Smile design planning",
        description:
          "Shade, shape, and treatment sequence are mapped so the final result feels cohesive and balanced.",
        duration: "Step 02",
      },
      {
        title: "Treatment execution",
        description:
          "Whitening, veneers, or a combined plan is performed with detail-focused finishing at each stage.",
        duration: "Step 03",
      },
      {
        title: "Final polish and review",
        description:
          "We review the result, refine small details, and guide you on protecting the new smile.",
        duration: "Step 04",
      },
    ],
    comfortPoints: [
      "A design conversation centered on your goals and facial features",
      "Natural-looking decisions instead of overdone cosmetic changes",
      "Treatment sequencing that protects comfort and predictability",
      "Aftercare guidance to help maintain the new look longer",
    ],
    resultHighlights: [
      "Brighter and more polished smile aesthetics",
      "Better tooth proportions and edge symmetry",
      "A confidence boost in person and on camera",
      "A smile design that still looks like you",
    ],
    stats: [
      { value: "Smile design", label: "Treatment lens" },
      { value: "Shade guided", label: "Aesthetic planning" },
      { value: "Confidence boost", label: "Patient outcome" },
    ],
  },
  {
    slug: "full-mouth-rehabilitation",
    icon: Layers,
    title: "Full Mouth Rehabilitation",
    description:
      "A complete multidisciplinary dentistry approach prioritizing oral health wellness, gum, bone, and joint health.",
    fullDescription:
      "Full Mouth Rehabilitation is complete dentistry. It's a multidisciplinary approach where oral health wellness is the priority. We meticulously evaluate and restore the harmony between your gums, bone, tooth structure, joints, and muscles to create a healthy, long-lasting, and beautiful smile.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    heroImage: "/smile2.png",
    detailImages: ["/doctor.png", "/smile1.png", "/family.png"],
    quickFacts: ["Complete dentistry", "Multidisciplinary approach", "Oral health wellness"],
    focusAreas: [
      {
        title: "Comprehensive Evaluation",
        description:
          "A detailed assessment of your gums, jawbone, teeth, and temporomandibular joints (TMJ) to establish a baseline for total oral wellness.",
      },
      {
        title: "Prosthodontics Integration",
        description:
          "Rebuilding missing or severely worn tooth structure using crowns, bridges, implants, or dentures to restore proper bite and function.",
      },
      {
        title: "Orthodontics Alignment",
        description:
          "Correcting misalignments to ensure teeth meet perfectly, reducing strain on joints and muscles and improving long-term stability.",
      },
      {
        title: "Gum and Bone Health",
        description:
          "Establishing a strong, disease-free foundation by treating periodontal issues before restorative work begins.",
      },
    ],
    process: [
      {
        title: "In-Depth Consultation & Diagnostics",
        description:
          "Extensive digital imaging, bite analysis, and aesthetic planning to map out the entire rehabilitation journey.",
        duration: "Phase 01",
      },
      {
        title: "Foundational Health",
        description:
          "Addressing urgent issues like decay, infection, or gum disease to create a stable environment for restoration.",
        duration: "Phase 02",
      },
      {
        title: "Reconstruction & Alignment",
        description:
          "Executing the coordinated prosthetic and orthodontic treatments required to rebuild your smile.",
        duration: "Phase 03",
      },
      {
        title: "Final Refinement & Maintenance",
        description:
          "Fine-tuning the bite and aesthetics, followed by a customized long-term maintenance plan.",
        duration: "Phase 04",
      },
    ],
    comfortPoints: [
      "A carefully phased approach so you are never overwhelmed",
      "Coordination of all specialists under one comprehensive plan",
      "Focus on function and joint comfort, not just aesthetics",
      "Clear communication of timelines and expectations at every step",
    ],
    resultHighlights: [
      "A fully restored, pain-free bite and jaw joint",
      "Complete eradication of active dental disease",
      "A stunning, harmonious smile that looks natural",
      "Long-lasting results built on a healthy structural foundation",
    ],
    stats: [
      { value: "Comprehensive", label: "Treatment Scope" },
      { value: "Multidisciplinary", label: "Clinical Approach" },
      { value: "Total Wellness", label: "Primary Goal" },
    ],
  },
];
