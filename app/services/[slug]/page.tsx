import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import ContactSection from "@/components/ContactSection";
import ServiceDetailExperience from "@/components/ServiceDetailExperience";
import type { Metadata } from "next";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found - Vinola Dental" };

  return {
    title: `${service.title} | Vinola Dental Salem`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F6FBFB] pt-24">
      <ServiceDetailExperience slug={slug} />
      <div className="mt-auto">
        <ContactSection />
      </div>
    </main>
  );
}
