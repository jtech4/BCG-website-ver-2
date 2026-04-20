import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import WhyUsSection from './components/WhyUsSection';
import TestimonialSection from './components/TestimonialSection';
import CtaBanner from './components/CtaBanner';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesOverview />
        <WhyUsSection />
        <TestimonialSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
}
