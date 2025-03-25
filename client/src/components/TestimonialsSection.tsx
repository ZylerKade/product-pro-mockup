import { Testimonial } from '@/types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Williams',
    role: 'Digital Course Creator',
    initials: 'SW',
    rating: 5,
    content: '"Since switching to ProductPro, my course sales have increased by 43%. The automated delivery and marketing tools save me hours every week."',
    date: 'July 15, 2023'
  },
  {
    id: 2,
    name: 'Michael Johnson',
    role: 'eBook Publisher',
    initials: 'MJ',
    rating: 5,
    content: '"The analytics dashboard is incredible. I can see exactly which marketing channels are driving sales and optimize my strategy accordingly."',
    date: 'August 3, 2023'
  },
  {
    id: 3,
    name: 'Alex Thompson',
    role: 'Software Developer',
    initials: 'AT',
    rating: 5,
    content: '"I was able to set up my entire digital product store in just one afternoon. The payment processing is flawless and my customers love the experience."',
    date: 'September 12, 2023'
  },
  {
    id: 4,
    name: 'Jessica Davis',
    role: 'Marketing Consultant',
    initials: 'JD',
    rating: 5,
    content: '"The email marketing integration is a game-changer. I\'ve been able to create targeted campaigns that have doubled my conversion rates."',
    date: 'October 7, 2023'
  },
  {
    id: 5,
    name: 'Ryan Kim',
    role: 'Photography Instructor',
    initials: 'RK',
    rating: 5,
    content: '"ProductPro has allowed me to scale my photography course business beyond what I thought possible. Customer support is exceptional too."',
    date: 'November 18, 2023'
  },
  {
    id: 6,
    name: 'Emma Lewis',
    role: 'Fitness Entrepreneur',
    initials: 'EL',
    rating: 5,
    content: '"The upsell features have increased my average order value by 28%. I\'m now making more money with the same number of customers."',
    date: 'December 5, 2023'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Digital Creators</h2>
          <p className="text-lg text-gray-600">See what our customers are saying about how ProductPro has transformed their digital product businesses.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                  <span className="text-lg font-bold">{testimonial.initials}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4 flex">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <p className="text-sm text-gray-500 font-medium">{testimonial.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
