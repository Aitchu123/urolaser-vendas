"use client";

/**
 * Função para rastrear cliques em elementos de Call to Action
 * @param source Origem do clique (ex: 'sticky_cta', 'hero_section')
 * @param action Ação realizada (ex: 'trial', 'buy')
 * @param utmParams Parâmetros UTM associados
 */
export const trackCTAClick = (
  source: string,
  action: string,
  utmParams?: Record<string, string>
) => {
  // Dados do evento
  const eventData = {
    event_name: 'cta_click',
    event_source: source,
    event_action: action,
    timestamp: new Date().toISOString(),
    ...utmParams
  };

  console.warn('CTA Click:', eventData);

  // Aqui você pode implementar a integração com Google Analytics, Facebook Pixel, etc.
  // Exemplo para Google Analytics 4
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // @ts-expect-error - gtag is a global function from Google Analytics
    window.gtag('event', 'cta_click', {
      event_category: source,
      event_label: action,
      ...utmParams
    });
  }

  // Exemplo para Facebook Pixel
  if (typeof window !== 'undefined' && 'fbq' in window) {
    // @ts-expect-error - fbq is a global function from Facebook Pixel
    window.fbq('track', 'Lead', {
      content_name: `${source}_${action}`,
      ...utmParams
    });
  }

  return eventData;
};
