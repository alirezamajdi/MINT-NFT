import { RefreshTokenName, AccessTokenName } from './constants';

export const setLocalStorageWithExpiry = (
  key: string,
  value: string | number | undefined,
  ttl: number
) => {
  if (typeof window !== 'undefined') {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }
};

export const getLocalStorageWithExpiry = (key: string) => {
  if (typeof window !== 'undefined') {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      window.location.reload();
      return null;
    }
    return item.value;
  }
};

export const getLocalStorageWithKey = (key: string) => {
  if (typeof window !== 'undefined') {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
      return null;
    }
    return itemStr;
  }
};

export const removeItemLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

export const getRefreshToken = () => {
  if (typeof window !== 'undefined') {
    const itemStr = localStorage.getItem(RefreshTokenName);
    if (!itemStr) {
      return null;
    }
    return itemStr;
  }
};
export const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    const itemStr = localStorage.getItem(AccessTokenName);
    if (!itemStr) {
      return null;
    }
    return itemStr;
  }
};
