import { useState } from 'react';
import { PricingPlan, CheckoutFormData } from '@/types';
import { 
  trackCheckout, 
  trackPurchase, 
  updateLatestCheckout 
} from '@/lib/analytics';
import { generateOrderId, getCurrentDate } from '@/lib/utils';

export function useCheckout() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const openCheckout = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsSuccess(false);
    setIsOpen(true);
    
    trackCheckout({
      plan: plan.id,
      date: new Date().toISOString(),
      completed: false
    });
  };

  const closeCheckout = () => {
    setIsOpen(false);
    if (isSuccess) {
      // Reset success state after closing
      setTimeout(() => {
        setIsSuccess(false);
      }, 500);
    }
  };

  const processPayment = (formData: CheckoutFormData) => {
    // Simulate payment processing
    // In a real app, this would be an API call to Stripe or another payment processor
    
    const newOrderId = generateOrderId();
    const date = getCurrentDate();
    
    setOrderId(newOrderId);
    setOrderDate(date);
    setIsSuccess(true);
    
    if (selectedPlan) {
      trackPurchase({
        plan: selectedPlan.name,
        amount: `$${selectedPlan.price.toFixed(2)}`,
        orderId: newOrderId,
        date: new Date().toISOString()
      });
      
      updateLatestCheckout(true);
    }
  };

  return {
    isOpen,
    selectedPlan,
    isSuccess,
    orderId,
    orderDate,
    openCheckout,
    closeCheckout,
    processPayment
  };
}
