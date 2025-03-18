declare module 'react-native-cookies' {
    interface CookieManager {
      setFromResponse(url: string, cookie: string): Promise<void>;
      get(url: string): Promise<Record<string, string>>;
      clearAll(): Promise<void>;
    }
  
    const CookieManager: CookieManager;
    export default CookieManager;
  }