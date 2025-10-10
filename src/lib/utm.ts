"use client";

import { useEffect, useState } from 'react';

interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  [key: string]: string | undefined;
}

export const useUTM = () => {
  const [params, setParams] = useState<UTMParams>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Função para extrair parâmetros UTM da URL
    const extractUTMParams = () => {
      if (typeof window === 'undefined') return {};
      
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams: UTMParams = {};
      
      // Extrair parâmetros UTM padrão
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
        const value = urlParams.get(param);
        if (value) utmParams[param] = value;
      });
      
      // Salvar no localStorage para persistência entre páginas
      if (Object.keys(utmParams).length > 0) {
        localStorage.setItem('utm_params', JSON.stringify(utmParams));
      }
      
      return utmParams;
    };

    // Tentar carregar do localStorage primeiro
    const loadUTMParams = () => {
      if (typeof window === 'undefined') return {};
      
      const storedParams = localStorage.getItem('utm_params');
      let utmParams: UTMParams = {};
      
      if (storedParams) {
        try {
          utmParams = JSON.parse(storedParams);
        } catch (e) {
          console.error('Erro ao carregar parâmetros UTM:', e);
        }
      }
      
      // Verificar se há novos parâmetros na URL atual
      const currentParams = extractUTMParams();
      
      // Mesclar parâmetros, priorizando os novos
      const mergedParams = { ...utmParams, ...currentParams };
      
      setParams(mergedParams);
      setIsLoaded(true);
    };

    loadUTMParams();
  }, []);

  return { params, isLoaded };
};