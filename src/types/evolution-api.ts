// Tipos TypeScript para Evolution API - WhatsApp Integration

export interface EvolutionApiConfig {
  baseUrl: string;
  apiKey: string;
  instanceName: string;
}

export interface SendTextRequest {
  number: string; // Recipient number with Country Code (e.g., "5512991246207")
  text: string;
  delay?: number;
  quoted?: {
    key?: {
      id: string;
    };
    message?: {
      conversation: string;
    };
  };
  linkPreview?: boolean;
  mentionsEveryOne?: boolean;
  mentioned?: string[];
}

export interface SendTextResponse {
  key: {
    remoteJid: string;
    fromMe: boolean;
    id: string;
  };
  message: {
    messageTimestamp: number;
    extendedTextMessage?: {
      text: string;
    };
    conversation?: string;
  };
  messageTimestamp: number;
  status: string;
}

export interface EvolutionApiError {
  error: string;
  message: string;
  statusCode: number;
}

export interface LeadFormData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface WhatsAppMessageData extends LeadFormData {
  timestamp: string;
  source: 'lead-capture';
}

// Utility type for API responses
export type ApiResponse<T> = {
  success: true;
  data: T;
} | {
  success: false;
  error: EvolutionApiError;
};