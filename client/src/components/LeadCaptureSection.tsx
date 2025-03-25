import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';
import { LeadFormData } from '@/types';
import { validateEmail } from '@/lib/utils';
import { trackLeadCapture, trackDownload } from '@/lib/analytics';
import { useToast } from '@/hooks/use-toast';

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !validateEmail(formData.email)
    };
    
    setErrors(newErrors);
    
    if (!newErrors.name && !newErrors.email) {
      // Track lead capture
      trackLeadCapture({
        name: formData.name,
        email: formData.email,
        date: new Date().toISOString(),
        source: 'lead-form'
      });
      
      // Show success state
      setIsSubmitted(true);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track download
    trackDownload({
      resource: 'starter-kit',
      date: new Date().toISOString()
    });
    
    // Show toast notification
    toast({
      title: "Download Started",
      description: "Your free starter kit download has begun.",
    });
  };

  return (
    <section id="lead-form" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {!isSubmitted ? (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Starter Kit</h3>
                    <p className="text-gray-600 mb-6">Enter your details below to receive our exclusive digital product starter kit with templates and guides.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Full Name</Label>
                        <Input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          className={`px-4 py-3 ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="John Doe" 
                        />
                        {errors.name && (
                          <div className="text-red-500 text-sm mt-1">Please enter your name</div>
                        )}
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email Address</Label>
                        <Input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className={`px-4 py-3 ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="john@example.com" 
                        />
                        {errors.email && (
                          <div className="text-red-500 text-sm mt-1">Please enter a valid email address</div>
                        )}
                      </div>
                      
                      <div className="pt-2">
                        <Button type="submit" className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-6">
                          Get Free Access
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-500 mt-4">
                        By submitting this form, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a> and to receive marketing emails.
                      </p>
                    </form>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-600">Thank You!</h3>
                    <p className="text-gray-600 mb-6">Your starter kit is on its way to your inbox. Please check your email in the next few minutes.</p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <div className="flex">
                        <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-800">Email Sent Successfully</p>
                          <p className="text-green-700 text-sm">Check your inbox or spam folder</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3"
                    >
                      Download Resource Now
                    </Button>
                    
                    <p className="text-sm text-gray-500 mt-4">
                      Having trouble? <a href="#" className="text-primary hover:underline">Contact our support team</a>
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-gradient-to-br from-primary to-purple-600 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">What's Included:</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Check className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold">Digital Product Checklist</span>
                      <p className="text-blue-100 mt-1">A comprehensive guide to ensure your product launch success</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold">Sales Page Templates</span>
                      <p className="text-blue-100 mt-1">Ready-to-use templates that convert visitors to customers</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold">Email Marketing Sequence</span>
                      <p className="text-blue-100 mt-1">7-day email sequence to nurture leads into buyers</p>
                    </div>
                  </li>
                  <li className="flex">
                    <Check className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-bold">Pricing Strategy Guide</span>
                      <p className="text-blue-100 mt-1">Expert tips on how to price your digital products for maximum profit</p>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">AW</span>
                  </div>
                  <div>
                    <p className="italic">"This starter kit helped me launch my first ebook and generate $12,000 in the first month!"</p>
                    <p className="font-bold mt-1">- Amy W., Author</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
