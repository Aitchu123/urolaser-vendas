// Serviço de integração com Evolution API - WhatsApp
import { 
  EvolutionApiConfig, 
  SendTextRequest, 
  SendTextResponse, 
  EvolutionApiError,
  ApiResponse,
  LeadFormData,
  WhatsAppMessageData
} from '@/types/evolution-api';

class EvolutionApiService {
  private config: EvolutionApiConfig;

  constructor(config: EvolutionApiConfig) {
    this.config = config;
  }

  /**
   * Envia mensagem de texto via WhatsApp usando Evolution API
   */
  async sendText(request: SendTextRequest): Promise<ApiResponse<SendTextResponse>> {
    try {
      const url = `${this.config.baseUrl}/message/sendText/${this.config.instanceName}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.config.apiKey,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData: EvolutionApiError = await response.json();
        return {
          success: false,
          error: errorData,
        };
      }

      const data: SendTextResponse = await response.json();
      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: {
          error: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Erro de conexão',
          statusCode: 0,
        },
      };
    }
  }

  /**
   * Formata dados do lead para mensagem WhatsApp
   */
  private formatLeadMessage(leadData: WhatsAppMessageData): string {
    return `🎯 *NOVO LEAD CAPTURADO - UroLaser*

📝 *Dados do Lead:*
• *Nome:* ${leadData.name}
• *Email:* ${leadData.email}
• *WhatsApp:* ${leadData.whatsapp}

⏰ *Data/Hora:* ${leadData.timestamp}
🔗 *Origem:* ${leadData.source}

---
*Lead interessado em descobrir o segredo para trabalhar em cirurgias sem formação na área da saúde.*

✅ *Próximos passos:*
1. Entrar em contato via WhatsApp
2. Enviar material sobre Representante Hospitalar
3. Agendar conversa para apresentação`;
  }

  /**
   * Envia dados do lead capturado via WhatsApp
   */
  async sendLeadNotification(
    leadData: LeadFormData, 
    recipientNumber: string = "5512991246207"
  ): Promise<ApiResponse<SendTextResponse>> {
    const messageData: WhatsAppMessageData = {
      ...leadData,
      timestamp: new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      source: 'lead-capture',
    };

    const message = this.formatLeadMessage(messageData);

    const request: SendTextRequest = {
      number: recipientNumber,
      text: message,
      delay: 1000, // 1 segundo de delay
      linkPreview: false,
    };

    return this.sendText(request);
  }

  /**
   * Valida configuração da API
   */
  validateConfig(): boolean {
    return !!(
      this.config.baseUrl &&
      this.config.apiKey &&
      this.config.instanceName
    );
  }

  /**
   * Testa conexão com a API
   */
  async testConnection(): Promise<boolean> {
    try {
      const testMessage: SendTextRequest = {
        number: "5512991246207", // Número de teste
        text: "🔧 Teste de conexão - Evolution API",
      };

      const result = await this.sendText(testMessage);
      return result.success;
    } catch {
      return false;
    }
  }
}

// Configuração padrão (deve ser movida para variáveis de ambiente)
const defaultConfig: EvolutionApiConfig = {
  baseUrl: process.env.NEXT_PUBLIC_EVOLUTION_API_URL || 'https://sub.domain.com',
  apiKey: process.env.NEXT_PUBLIC_EVOLUTION_API_KEY || 'YOUR_API_KEY',
  instanceName: process.env.NEXT_PUBLIC_EVOLUTION_INSTANCE_NAME || 'formulario',
};

// Instância singleton do serviço
export const evolutionApiService = new EvolutionApiService(defaultConfig);

export default EvolutionApiService;