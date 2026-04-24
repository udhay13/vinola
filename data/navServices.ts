import {
  Baby,
  HeartPulse,
  Layers,
  Scissors,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavServiceLink = {
  label: string;
  href: string;
};

export type LandingService = NavServiceLink & {
  icon: LucideIcon;
  description: string;
  color: string;
  bg: string;
};

export const navServiceLinks: NavServiceLink[] = [
  { label: "General Dentistry", href: "/services/general-dentistry" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  { label: "Orthodontics", href: "/services/orthodontics" },
  { label: "Restorative Dentistry", href: "/services/restorative" },
  { label: "Implant Dentistry", href: "/services/implants" },
  { label: "Pediatric Dentistry", href: "/services/pediatric" },
  { label: "Endodontics", href: "/services/endodontics" },
  { label: "Periodontics", href: "/services/periodontics" },
  { label: "Oral Surgery", href: "/services/oral-surgery" },
  { label: "Smile Makeover", href: "/services/smile-makeover" },
];

export const landingServicesData: LandingService[] = [
  {
    ...navServiceLinks[0],
    icon: Shield,
    description:
      "Routine exams, professional cleaning, fillings, and preventive care for long-term oral health.",
    color: "#2CB1BC",
    bg: "rgba(44,177,188,0.08)",
  },
  {
    ...navServiceLinks[1],
    icon: Sparkles,
    description:
      "Whitening, veneers, and aesthetic planning for a natural, confident smile.",
    color: "#D946EF",
    bg: "rgba(217,70,239,0.08)",
  },
  {
    ...navServiceLinks[2],
    icon: Smile,
    description:
      "Braces, aligners, and retainers planned around your bite, lifestyle, and comfort.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
  },
  {
    ...navServiceLinks[3],
    icon: Layers,
    description:
      "Crowns, bridges, dentures, inlays, and onlays to rebuild function and appearance.",
    color: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
  },
  {
    ...navServiceLinks[4],
    icon: Zap,
    description:
      "Stable tooth replacement using titanium-rooted implants and natural-looking crowns.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    ...navServiceLinks[5],
    icon: Baby,
    description:
      "Gentle, child-friendly visits that build trust while protecting growing teeth.",
    color: "#F472B6",
    bg: "rgba(244,114,182,0.08)",
  },
  {
    ...navServiceLinks[6],
    icon: Syringe,
    description:
      "Root canal care that relieves pain, clears infection, and preserves natural teeth.",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
  },
  {
    ...navServiceLinks[7],
    icon: HeartPulse,
    description:
      "Gum health treatments for bleeding, inflammation, recession, and long-term stability.",
    color: "#14B8A6",
    bg: "rgba(20,184,166,0.08)",
  },
  {
    ...navServiceLinks[8],
    icon: Scissors,
    description:
      "Calm surgical care for wisdom teeth, minor procedures, and diagnostic needs.",
    color: "#6366F1",
    bg: "rgba(99,102,241,0.08)",
  },
  {
    ...navServiceLinks[9],
    icon: Stethoscope,
    description:
      "Digitally planned smile transformation combining cosmetic, restorative, and alignment care.",
    color: "#EC4899",
    bg: "rgba(236,72,153,0.08)",
  },
];
