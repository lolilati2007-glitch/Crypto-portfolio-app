import { CryptoAsset } from '../types';

const STORAGE_KEY = 'crypto-portfolio';

export function loadPortfolio(): CryptoAsset[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load portfolio:', error);
    return [];
  }
}

export function savePortfolio(assets: CryptoAsset[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assets));
  } catch (error) {
    console.error('Failed to save portfolio:', error);
  }
}

export function addAsset(assets: CryptoAsset[], asset: CryptoAsset): CryptoAsset[] {
  return [...assets, asset];
}

export function removeAsset(assets: CryptoAsset[], id: string): CryptoAsset[] {
  return assets.filter(asset => asset.id !== id);
}

export function updateAsset(assets: CryptoAsset[], id: string, updates: Partial<CryptoAsset>): CryptoAsset[] {
  return assets.map(asset => asset.id === id ? { ...asset, ...updates } : asset);
}
