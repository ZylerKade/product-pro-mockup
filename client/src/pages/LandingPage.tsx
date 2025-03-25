import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LogoSection from '@/components/LogoSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import PricingSection from '@/components/PricingSection';
import LeadCaptureSection from '@/components/LeadCaptureSection';
import Footer from '@/components/Footer';
import CheckoutModal from '@/components/CheckoutModal';
import BackToTop from '@/components/BackToTop';
import { useCheckout } from '@/hooks/use-checkout';
import { PricingPlan } from '@/types';

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for beginners',
    price: 29,
    features: [
      'Up to 10 products',
      'Basic analytics',
      'Email delivery',
      'Standard support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses',
    price: 79,
    popular: true,
    features: [
      'Up to 50 products',
      'Advanced analytics',
      'Email marketing tools',
      'Priority support',
      'Custom checkout'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 199,
    features: [
      'Unlimited products',
      'Enterprise analytics',
      'Advanced marketing suite',
      'Dedicated support',
      'White-label option'
    ]
  }
];

export default function LandingPage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { 
    isOpen, 
    selectedPlan, 
    isSuccess, 
    orderId, 
    orderDate, 
    openCheckout, 
    closeCheckout, 
    processPayment 
  } = useCheckout();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col antialiased text-gray-800">
      <Header />
      
      <main>
        <Hero />
        <LogoSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
        <PricingSection plans={pricingPlans} onSelectPlan={openCheckout} />
        <LeadCaptureSection />
      </main>
      
      <Footer />
      
      <CheckoutModal
        isOpen={isOpen}
        selectedPlan={selectedPlan}
        isSuccess={isSuccess}
        orderId={orderId}
        orderDate={orderDate}
        onClose={closeCheckout}
        onSubmit={processPayment}
      />
      
      <BackToTop visible={showBackToTop} />
    </div>
  );
}
