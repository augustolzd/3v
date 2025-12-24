export type Language = 'es' | 'en';

export interface Translations {
  header: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    author: string;
    download: string;
  };
  instructions: {
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  pyramid: {
    layer01Label: string;
    layer01Title: string;
    layer01Subtitle: string;
    layer02Label: string;
    layer02Title: string;
    layer02Subtitle: string;
    layer03Label: string;
    layer03Title: string;
    layer03Subtitle: string;
    frameworkBadge: string;
  };
  sections: {
    viasTitle: string;
    viasResources: string;
    viasKpis: string;
    viasRisks: string;
    valorTitle: string;
    valorResources: string;
    valorKpis: string;
    valorRisks: string;
    ventajaTitle: string;
    ventajaResources: string;
    ventajaKpis: string;
    ventajaRisks: string;
  };
  content: {
    viasResources: string;
    viasKpis: string;
    viasRisks: string;
    valorResources: string;
    valorKpis: string;
    valorRisks: string;
    ventajaResources: string;
    ventajaKpis: string;
    ventajaRisks: string;
  };
  footer: {
    license: string;
    year: string;
    methodology: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    header: {
      badge: 'Marco Estratégico Público',
      title: 'Lienzo Estratégico',
      titleHighlight: '3V',
      subtitle: 'Marco de alineación universal para infraestructuras digitales escalables.',
      author: 'Autoría de Augusto Lozada',
      download: 'Descargar PDF',
    },
    instructions: {
      step1Title: '1. Definir la Base (Vías)',
      step1Desc: 'Infraestructura y canales que permiten que la operación exista.',
      step2Title: '2. Orquestar el Valor',
      step2Desc: 'Lógica de monetización y rentabilidad del flujo de datos.',
      step3Title: '3. Escalar la Ventaja',
      step3Desc: 'Propuesta de valor final e integraciones inteligentes con IA.',
    },
    pyramid: {
      layer01Label: 'CAPA 01',
      layer01Title: 'VÍAS',
      layer01Subtitle: 'Infraestructura & Canales',
      layer02Label: 'CAPA 02',
      layer02Title: 'VALOR',
      layer02Subtitle: 'Lógica & Rentabilidad',
      layer03Label: 'CAPA 03',
      layer03Title: 'VENTAJA',
      layer03Subtitle: 'Diferenciación & Innovación',
      frameworkBadge: 'Marco Estratégico Público',
    },
    sections: {
      viasTitle: 'INFRAESTRUCTURA (VÍAS)',
      viasResources: 'Recursos Técnicos',
      viasKpis: 'KPIs Operativos',
      viasRisks: 'Barreras',
      valorTitle: 'NEGOCIO (VALOR)',
      valorResources: 'Modelos de Valor',
      valorKpis: 'Métricas Económicas',
      valorRisks: 'Mitigación',
      ventajaTitle: 'INNOVACIÓN (VENTAJA)',
      ventajaResources: 'Integraciones Inteligentes',
      ventajaKpis: 'Impacto en Usuario',
      ventajaRisks: 'Escalabilidad',
    },
    content: {
      viasResources: 'Proveedores, Nube, APIs',
      viasKpis: 'Uptime, % Entrega',
      viasRisks: 'Regulaciones',
      valorResources: 'Lógica, LCR, Facturación',
      valorKpis: 'Margen, ROI',
      valorRisks: 'Costos variables',
      ventajaResources: 'IA, Omnicanalidad, UX',
      ventajaKpis: 'CSAT, Retención',
      ventajaRisks: 'Adopción',
    },
    footer: {
      license: 'Creative Commons BY-NC 4.0',
      year: '2024',
      methodology: 'Metodología Original de',
    },
  },
  en: {
    header: {
      badge: 'Public Strategy Framework',
      title: 'Strategic Canvas',
      titleHighlight: '3V',
      subtitle: 'Universal alignment framework for scalable digital infrastructures.',
      author: 'Authored by Augusto Lozada',
      download: 'Download PDF',
    },
    instructions: {
      step1Title: '1. Define the Foundation (Pathways)',
      step1Desc: 'Infrastructure and channels that enable operations to exist.',
      step2Title: '2. Orchestrate Value',
      step2Desc: 'Monetization logic and profitability of data flows.',
      step3Title: '3. Scale the Advantage',
      step3Desc: 'Final value proposition and intelligent AI integrations.',
    },
    pyramid: {
      layer01Label: 'LAYER 01',
      layer01Title: 'PATHWAYS',
      layer01Subtitle: 'Infrastructure & Channels',
      layer02Label: 'LAYER 02',
      layer02Title: 'VALUE',
      layer02Subtitle: 'Logic & Profitability',
      layer03Label: 'LAYER 03',
      layer03Title: 'ADVANTAGE',
      layer03Subtitle: 'Differentiation & Innovation',
      frameworkBadge: 'Public Strategy Framework',
    },
    sections: {
      viasTitle: 'INFRASTRUCTURE (PATHWAYS)',
      viasResources: 'Technical Resources',
      viasKpis: 'Operational KPIs',
      viasRisks: 'Barriers',
      valorTitle: 'BUSINESS (VALUE)',
      valorResources: 'Value Models',
      valorKpis: 'Economic Metrics',
      valorRisks: 'Mitigation',
      ventajaTitle: 'INNOVATION (ADVANTAGE)',
      ventajaResources: 'Smart Integrations',
      ventajaKpis: 'User Impact',
      ventajaRisks: 'Scalability',
    },
    content: {
      viasResources: 'Providers, Cloud, APIs',
      viasKpis: 'Uptime, Delivery %',
      viasRisks: 'Regulations',
      valorResources: 'Logic, LCR, Billing',
      valorKpis: 'Margin, ROI',
      valorRisks: 'Variable costs',
      ventajaResources: 'AI, Omnichannel, UX',
      ventajaKpis: 'CSAT, Retention',
      ventajaRisks: 'Adoption',
    },
    footer: {
      license: 'Creative Commons BY-NC 4.0',
      year: '2024',
      methodology: 'Original Methodology by',
    },
  },
};
