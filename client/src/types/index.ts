export interface Testimonial {
  id: number;
  name: string;
  role: string;
  initials: string;
  rating: number;
  content: string;
  date: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

export interface Logo {
  id: number;
  name: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  popular?: boolean;
  features: string[];
}

export interface LeadFormData {
  name: string;
  email: string;
}

export interface CheckoutFormData {
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export interface LeadCaptureData {
  name: string;
  email: string;
  date: string;
  source: string;
}

export interface DownloadData {
  resource: string;
  date: string;
}

export interface CheckoutData {
  plan: string;
  date: string;
  completed: boolean;
}

export interface PurchaseData {
  plan: string;
  amount: string;
  orderId: string;
  date: string;
}
