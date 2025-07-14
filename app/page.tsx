import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { PlatformsSection } from '@/components/sections/platforms-section';
import { PricingSection } from '@/components/sections/pricing-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlatformsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}