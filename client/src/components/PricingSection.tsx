import { Button } from '@/components/ui/button';
import { PricingPlan } from '@/types';
import { Check } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

interface PricingSectionProps {
  plans: PricingPlan[];
  onSelectPlan: (plan: PricingPlan) => void;
}

export default function PricingSection({ plans, onSelectPlan }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the plan that fits your business needs. All plans include our core features.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`bg-white rounded-xl shadow-sm overflow-hidden border ${
                plan.popular 
                ? 'border-2 border-primary transform scale-105 z-10 relative shadow-lg' 
                : 'border-gray-100 transition-all hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold">{formatCurrency(plan.price)}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-6 ${
                    plan.popular 
                    ? 'bg-primary hover:bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
