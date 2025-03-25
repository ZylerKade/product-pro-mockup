import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function PortfolioBanner() {
  return (
    <div className="bg-black text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-3 sm:mb-0 text-center sm:text-left">
            <p className="text-sm font-medium">
              <span className="bg-yellow-400 text-black px-2 py-1 rounded mr-2">MOCK PROJECT</span>
              This is a portfolio demonstration only. No actual products or services are available.
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-3 font-medium hidden sm:inline-block">Need a Developer? Work with Me!</span>
            <Button asChild size="sm" className="bg-yellow-400 text-black hover:bg-yellow-300 border-none font-medium">
              <a href="https://solomain.com/upwork" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Contact Me <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}