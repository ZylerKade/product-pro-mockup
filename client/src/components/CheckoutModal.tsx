import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PricingPlan, CheckoutFormData } from '@/types';
import { formatCurrency, formatCardNumber, formatExpiryDate } from '@/lib/utils';
import { Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  selectedPlan: PricingPlan | null;
  isSuccess: boolean;
  orderId: string;
  orderDate: string;
  onClose: () => void;
  onSubmit: (formData: CheckoutFormData) => void;
}

export default function CheckoutModal({ 
  isOpen, 
  selectedPlan, 
  isSuccess, 
  orderId, 
  orderDate, 
  onClose, 
  onSubmit 
}: CheckoutModalProps) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [errors, setErrors] = useState({
    cardName: false,
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;
    
    // Format input values
    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value);
    } else if (name === 'cardExpiry') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cardCvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 3);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = () => {
    // Validate form
    const newErrors = {
      cardName: !formData.cardName.trim(),
      cardNumber: !formData.cardNumber.trim() || formData.cardNumber.replace(/\s/g, '').length !== 16,
      cardExpiry: !formData.cardExpiry.trim() || !/^\d{2}\/\d{2}$/.test(formData.cardExpiry),
      cardCvc: !formData.cardCvc.trim() || formData.cardCvc.length !== 3
    };
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some(Boolean)) {
      onSubmit(formData);
      
      // Reset form for next use
      setFormData({
        cardName: '',
        cardNumber: '',
        cardExpiry: '',
        cardCvc: ''
      });
    }
  };

  // If no plan is selected, don't render the modal
  if (!selectedPlan) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>
        
        {!isSuccess ? (
          // Checkout form
          <div className="mt-4">
            <p className="text-sm text-gray-500 mb-4">
              You are purchasing: <span className="font-medium text-gray-900">{selectedPlan.name} Plan</span>
            </p>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardName" className="text-sm font-medium text-gray-700 mb-1">Name on Card</Label>
                <Input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  className={errors.cardName ? 'border-red-500' : ''}
                  placeholder="John Doe"
                />
                {errors.cardName && (
                  <p className="text-red-500 text-xs mt-1">Please enter the name on your card</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="cardNumber" className="text-sm font-medium text-gray-700 mb-1">Card Number</Label>
                <div className="relative">
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    className={errors.cardNumber ? 'border-red-500' : ''}
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                  />
                  <div className="absolute right-3 top-2">
                    <svg className="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2H4zm0 2h16v12H4V6zm4 3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-2 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-2 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm2 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm5-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"></path>
                    </svg>
                  </div>
                </div>
                {errors.cardNumber && (
                  <p className="text-red-500 text-xs mt-1">Please enter a valid card number</p>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cardExpiry" className="text-sm font-medium text-gray-700 mb-1">Expiration Date</Label>
                  <Input
                    type="text"
                    id="cardExpiry"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    className={errors.cardExpiry ? 'border-red-500' : ''}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  {errors.cardExpiry && (
                    <p className="text-red-500 text-xs mt-1">Enter a valid date</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="cardCvc" className="text-sm font-medium text-gray-700 mb-1">CVC</Label>
                  <Input
                    type="text"
                    id="cardCvc"
                    name="cardCvc"
                    value={formData.cardCvc}
                    onChange={handleChange}
                    className={errors.cardCvc ? 'border-red-500' : ''}
                    placeholder="123"
                    maxLength={3}
                  />
                  {errors.cardCvc && (
                    <p className="text-red-500 text-xs mt-1">Enter a valid CVC</p>
                  )}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between font-medium">
                  <span>Subtotal</span>
                  <span>{formatCurrency(selectedPlan.price)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>Tax</span>
                  <span>{formatCurrency(0)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total</span>
                  <span>{formatCurrency(selectedPlan.price)}</span>
                </div>
              </div>
            </div>
            
            <DialogFooter className="mt-6">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSubmit}>Complete Payment</Button>
            </DialogFooter>
          </div>
        ) : (
          // Success message
          <div className="mt-4">
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">Payment successful</h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>Thank you for your purchase! You will receive a confirmation email shortly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="font-medium">Order Summary</h4>
                <div className="mt-2 text-sm text-gray-600">
                  <div className="flex justify-between py-1">
                    <span>Plan:</span>
                    <span>{selectedPlan.name} Plan</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Amount:</span>
                    <span>{formatCurrency(selectedPlan.price)}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Order ID:</span>
                    <span>{orderId}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Date:</span>
                    <span>{orderDate}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Next steps: Check your email for account setup instructions.
              </p>
            </div>
            
            <DialogFooter className="mt-6">
              <Button onClick={onClose}>Close</Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
