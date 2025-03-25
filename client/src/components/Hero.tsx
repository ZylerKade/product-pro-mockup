import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-500 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Digital Business Today
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Our all-in-one platform gives you everything you need to launch, scale, and succeed with your digital products.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild variant="secondary" size="lg" className="text-primary hover:bg-gray-100 shadow-lg">
                <a href="#lead-form">Get Free Template</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-2 border-white hover:bg-white/10 text-white">
                <a href="#pricing">View Pricing</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center text-blue-100">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>No credit card required to start</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">P</div>
                      <div className="ml-3">
                        <div className="font-bold text-gray-900">ProductPro Dashboard</div>
                        <div className="text-sm text-gray-500">Analytics & Sales</div>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold">+18.3%</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Revenue</span>
                      <span className="font-medium text-gray-900">$12,853</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 py-3">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <div className="text-sm text-gray-500">Conversions</div>
                        <div className="font-bold text-xl text-gray-900">324</div>
                      </div>
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <div className="text-sm text-gray-500">Avg. Sale</div>
                        <div className="font-bold text-xl text-gray-900">$39.67</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-40 w-40 bg-purple-500/20 rounded-full blur-2xl z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
