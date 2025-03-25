import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function PortfolioBanner() {
  return (
    <div className="bg-black text-white py-3 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-center mb-2 sm:mb-0">
              <span className="bg-yellow-400 text-black px-2 py-1 rounded mb-2 sm:mb-0 sm:mr-2 inline-block">MOCK PROJECT</span>
              <span className="text-sm font-medium text-center sm:text-left flex items-center">
                This is a portfolio demonstration only. No actual products or services are available.
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <span className="mr-0 sm:mr-3 font-medium mb-2 sm:mb-0 text-center">Need a Developer? Work with Me!</span>
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