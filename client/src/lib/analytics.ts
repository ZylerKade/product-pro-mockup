import { LeadCaptureData, DownloadData, CheckoutData, PurchaseData } from '@/types';

const STORAGE_KEYS = {
  LEADS: 'productProLeads',
  DOWNLOADS: 'productProDownloads',
  CHECKOUTS: 'productProCheckouts',
  PURCHASES: 'productProPurchases'
};

export function trackLeadCapture(data: LeadCaptureData): void {
  try {
    const leads = getLeads();
    leads.push(data);
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  } catch (error) {
    console.error('Error saving lead to localStorage:', error);
  }
}

export function getLeads(): LeadCaptureData[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.LEADS) || '[]');
  } catch (error) {
    console.error('Error getting leads from localStorage:', error);
    return [];
  }
}

export function trackDownload(data: DownloadData): void {
  try {
    const downloads = getDownloads();
    downloads.push(data);
    localStorage.setItem(STORAGE_KEYS.DOWNLOADS, JSON.stringify(downloads));
  } catch (error) {
    console.error('Error saving download to localStorage:', error);
  }
}

export function getDownloads(): DownloadData[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.DOWNLOADS) || '[]');
  } catch (error) {
    console.error('Error getting downloads from localStorage:', error);
    return [];
  }
}

export function trackCheckout(data: CheckoutData): void {
  try {
    const checkouts = getCheckouts();
    checkouts.push(data);
    localStorage.setItem(STORAGE_KEYS.CHECKOUTS, JSON.stringify(checkouts));
  } catch (error) {
    console.error('Error saving checkout to localStorage:', error);
  }
}

export function getCheckouts(): CheckoutData[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CHECKOUTS) || '[]');
  } catch (error) {
    console.error('Error getting checkouts from localStorage:', error);
    return [];
  }
}

export function updateLatestCheckout(completed: boolean): void {
  try {
    const checkouts = getCheckouts();
    if (checkouts.length > 0) {
      checkouts[checkouts.length - 1].completed = completed;
      localStorage.setItem(STORAGE_KEYS.CHECKOUTS, JSON.stringify(checkouts));
    }
  } catch (error) {
    console.error('Error updating checkout in localStorage:', error);
  }
}

export function trackPurchase(data: PurchaseData): void {
  try {
    const purchases = getPurchases();
    purchases.push(data);
    localStorage.setItem(STORAGE_KEYS.PURCHASES, JSON.stringify(purchases));
  } catch (error) {
    console.error('Error saving purchase to localStorage:', error);
  }
}

export function getPurchases(): PurchaseData[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PURCHASES) || '[]');
  } catch (error) {
    console.error('Error getting purchases from localStorage:', error);
    return [];
  }
}
