// Meta Pixel TypeScript declarations
declare global {
  interface Window {
    fbq: (
      action: 'track' | 'trackCustom' | 'init' | 'consent',
      eventName: string,
      parameters?: {
        content_name?: string;
        content_category?: string;
        value?: number;
        currency?: string;
        content_ids?: string[];
        content_type?: string;
        num_items?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export {};
