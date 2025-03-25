import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-2 text-xl font-bold text-gray-900">ProductPro</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary font-medium">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-primary font-medium">Testimonials</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary font-medium">Pricing</a>
          </nav>
          
          <div>
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <Button asChild className="hidden md:inline-block">
              <a href="#lead-form">Get Started</a>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-4 space-y-1">
              <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary">Pricing</a>
              <a href="#lead-form" className="block px-3 py-2 text-base font-medium text-primary">Get Started</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
