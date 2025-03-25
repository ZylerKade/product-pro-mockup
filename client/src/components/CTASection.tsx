import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Digital Business?</h2>
          <p className="text-xl mb-8">Join thousands of successful creators who are selling digital products with confidence.</p>
          <Button asChild size="lg" variant="secondary" className="text-primary hover:bg-gray-100 shadow-lg">
            <a href="#lead-form">Get Started Today</a>
          </Button>
          <p className="mt-4 text-blue-100">No credit card required</p>
        </div>
      </div>
    </section>
  );
}
