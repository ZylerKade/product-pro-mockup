import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function generateOrderId(): string {
  return `ORD-${Math.floor(Math.random() * 9000000 + 1000000)}`;
}

export function getCurrentDate(): string {
  return new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, '');
  return digits.replace(/(.{4})/g, '$1 ').trim();
}

export function formatExpiryDate(value: string): string {
  const digits = value.replace(/\D/g, '');
  if (digits.length > 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`;
  }
  return digits;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
