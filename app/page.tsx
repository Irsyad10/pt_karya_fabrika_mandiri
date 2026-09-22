import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { ValuesSection } from "@/components/values-section";
import { ProjectEstimator } from "@/components/project-estimator";
import { PortfolioSection } from "@/components/portfolio-section";
import { WorkflowSection } from "@/components/workflow-section";
import { ComplianceSection } from "@/components/compliance-section";
import { CtaInquiry } from "@/components/cta-inquiry";
import { Footer } from "@/components/footer";
import { FloatingAction } from "@/components/floating-action";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e5e5e5] text-[#000000] relative selection:bg-[#d1ffca] selection:text-black">
      {/* Top Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Performance & Trust Metrics */}
      <StatsSection />

      {/* 4 Core Pillars: Konsultasi, Konstruksi, Pengadaan Material, Manufaktur */}
      <ServicesSection />

      {/* Nilai Keunggulan: Ketepatan Perencanaan, Kualitas, Efisiensi, K3 */}
      <ValuesSection />

      {/* Interactive Project Estimator Tool */}
      <ProjectEstimator />

      {/* Filterable Portfolio Showcase */}
      <PortfolioSection />

      {/* 5-Stage Integrated Delivery Workflow */}
      <WorkflowSection />

      {/* K3, Certification & Expert Team */}
      <ComplianceSection />

      {/* Inverted Dark CTA & Consultation Form */}
      <CtaInquiry />

      {/* Editorial Brutalist Footer */}
      <Footer />

      {/* Floating Quick WhatsApp & Estimator Trigger */}
      <FloatingAction />
    </main>
  );
}
