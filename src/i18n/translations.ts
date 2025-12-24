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
  framework: {
    title: string;
    intro: string;
    viasTitle: string;
    viasDesc: string;
    viasPoint1: string;
    viasPoint2: string;
    viasPoint3: string;
    valorTitle: string;
    valorDesc: string;
    valorPoint1: string;
    valorPoint2: string;
    valorPoint3: string;
    ventajaTitle: string;
    ventajaDesc: string;
    ventajaPoint1: string;
    ventajaPoint2: string;
    ventajaPoint3: string;
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
    framework: {
      title: 'Sobre el Framework',
      intro: 'La Pirámide de las 3V es un framework que he desarrollado basándome en los patrones y retos que he enfrentado en este sector. No es solo un diagrama conceptual; es la visión que transmito a mi equipo de ingeniería al momento de desarrollar: no construimos funciones aisladas, construimos capas interdependientes de valor.',
      viasTitle: '1. Vías (Infraestructura y Canales)',
      viasDesc: 'Es la base de todo lo que construimos. En este nivel, la prioridad es la robustez y la confianza.',
      viasPoint1: 'Disponibilidad: Garantizamos una infraestructura de alta disponibilidad que soporte la carga sin degradación.',
      viasPoint2: 'Trazabilidad: Aseguramos la entrega y el seguimiento del mensaje en todas las plataformas multicanal.',
      viasPoint3: 'Cultura de Ingeniería: A mi equipo siempre le digo que sin Vías sólidas, cualquier innovación superior es irrelevante.',
      valorTitle: '2. Valor (Lógica de Negocio)',
      valorDesc: 'Es el nivel donde el código se transforma en ingresos. Aquí es donde ocurre la orquestación de procesos para maximizar la rentabilidad.',
      valorPoint1: 'Monetización: Definimos modelos claros para generar valor y monetizar el servicio técnico.',
      valorPoint2: 'Eficiencia Operativa: Orquestamos procesos para que la tecnología no sea un centro de costos, sino una ventaja financiera.',
      valorPoint3: 'Cultura de Ingeniería: Desarrollar con Valor significa entender el flujo del dinero detrás de cada API o base de datos.',
      ventajaTitle: '3. Ventaja (Producto y Valor Agregado)',
      ventajaDesc: 'En la cúspide se encuentra la experiencia final. Es el ecosistema de soluciones que genera la diferenciación en el mercado.',
      ventajaPoint1: 'Automatización: Implementación de bots y automatización de CX (Customer Experience).',
      ventajaPoint2: 'Soluciones Digitales: Campañas y servicios que transforman la conectividad básica en una experiencia integral.',
      ventajaPoint3: 'Cultura de Ingeniería: La Ventaja es el resultado de una ejecución técnica impecable en las capas inferiores.',
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
    framework: {
      title: 'About the Framework',
      intro: 'The 3V Pyramid is a framework I developed based on patterns and challenges I\'ve faced in this sector. It\'s not just a conceptual diagram; it\'s the vision I convey to my engineering team when developing: we don\'t build isolated functions, we build interdependent value layers.',
      viasTitle: '1. Pathways (Infrastructure and Channels)',
      viasDesc: 'This is the foundation of everything we build. At this level, the priority is robustness and trust.',
      viasPoint1: 'Availability: We guarantee high-availability infrastructure that supports load without degradation.',
      viasPoint2: 'Traceability: We ensure message delivery and tracking across all multichannel platforms.',
      viasPoint3: 'Engineering Culture: I always tell my team that without solid Pathways, any higher innovation is irrelevant.',
      valorTitle: '2. Value (Business Logic)',
      valorDesc: 'This is the level where code transforms into revenue. This is where process orchestration happens to maximize profitability.',
      valorPoint1: 'Monetization: We define clear models to generate value and monetize the technical service.',
      valorPoint2: 'Operational Efficiency: We orchestrate processes so technology is not a cost center, but a financial advantage.',
      valorPoint3: 'Engineering Culture: Developing with Value means understanding the money flow behind each API or database.',
      ventajaTitle: '3. Advantage (Product and Added Value)',
      ventajaDesc: 'At the top is the final experience. It\'s the ecosystem of solutions that generates market differentiation.',
      ventajaPoint1: 'Automation: Implementation of bots and CX (Customer Experience) automation.',
      ventajaPoint2: 'Digital Solutions: Campaigns and services that transform basic connectivity into a comprehensive experience.',
      ventajaPoint3: 'Engineering Culture: Advantage is the result of impeccable technical execution in the lower layers.',
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
