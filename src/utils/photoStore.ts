import { useState, useEffect } from 'react';

const STORAGE_KEY = 'jayasri_custom_photo';
export const DEFAULT_PHOTO_PATH = '/22TH0023.jpg';

export function getStoredPhoto(): string {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
  } catch {
    // Ignore storage errors
  }
  return DEFAULT_PHOTO_PATH;
}

export function saveProfilePhoto(dataUrl: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, dataUrl);
    window.dispatchEvent(new CustomEvent('jayasri-photo-change', { detail: dataUrl }));
  } catch (err) {
    console.warn('Could not save photo to localStorage', err);
  }
}

export function clearProfilePhoto(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent('jayasri-photo-change', { detail: DEFAULT_PHOTO_PATH }));
  } catch (err) {
    console.warn('Could not clear photo from localStorage', err);
  }
}

export function useProfilePhoto(): [string, (dataUrl: string) => void, () => void] {
  const [photo, setPhoto] = useState<string>(getStoredPhoto);

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhoto(customEvent.detail);
      } else {
        setPhoto(getStoredPhoto());
      }
    };

    window.addEventListener('jayasri-photo-change', handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener('jayasri-photo-change', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  return [photo, saveProfilePhoto, clearProfilePhoto];
}
