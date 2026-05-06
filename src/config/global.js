export default {
  global: {
    Name: 'Fundamentos del plan de <em>marketing</em>',
    Description:
      'El componente formativo desarrolla los fundamentos del plan de <em>marketing</em>, orientando el análisis del entorno empresarial y las variables del mercadeo. Integra herramientas estratégicas que permiten interpretar la situación organizacional, identificar oportunidades y apoyar la toma de decisiones comerciales. Asimismo, fortalece la comprensión del mercado, la segmentación y la planificación como base para estructurar estrategias alineadas con los objetivos empresariales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas de análisis',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Principios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Variables del <em>mix</em>',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Objetivo',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Beneficios',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Características',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Estructura',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Segmentación',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Empresa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reseña histórica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Planteamiento estratégico',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Portafolio',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Fuentes de información',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas de análisis de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Matriz DOFA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Características',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Componentes',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Técnica de elaboración',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Análisis PESTEL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Componentes',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Técnica de elaboración',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Análisis vectorial de crecimiento de la empresa (matriz de Ansoff)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Características',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Componentes',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Técnica de elaboración',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_12410006_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de mercado',
      significado:
        'Estudio del entorno, clientes y competencia para la toma de decisiones.',
    },
    {
      termino: 'Análisis estratégico',
      significado:
        'Evaluación de factores internos y externos que afectan la empresa.',
    },
    {
      termino: 'Ansoff',
      significado: 'Matriz que define estrategias de crecimiento empresarial.',
    },
    {
      termino: 'Amenazas',
      significado:
        'Factores externos que pueden afectar negativamente a la organización.',
    },
    {
      termino: 'Debilidades',
      significado: 'Aspectos internos que limitan el desempeño de la empresa.',
    },
    {
      termino: 'DOFA',
      significado:
        'Herramienta que analiza debilidades, oportunidades, fortalezas y amenazas.',
    },
    {
      termino: 'Empresa',
      significado:
        'Organización que ofrece bienes o servicios para satisfacer necesidades.',
    },
    {
      termino: 'Entorno',
      significado:
        'Conjunto de factores externos que influyen en la organización.',
    },
    {
      termino: 'Estrategia',
      significado: 'Plan de acción para alcanzar objetivos organizacionales.',
    },
    {
      termino: 'Fortalezas',
      significado: 'Capacidades internas que generan ventaja competitiva.',
    },
    {
      termino: 'Fuentes de información',
      significado:
        'Medios para obtener datos relevantes del mercado o empresa.',
    },
    {
      termino: '<em>Marketing mix</em>',
      significado:
        'Conjunto de variables controlables: producto, precio, plaza y promoción.',
    },
    {
      termino: 'Mercado',
      significado: 'Espacio donde interactúan compradores y vendedores.',
    },
    {
      termino: 'Mercadeo',
      significado:
        'Proceso de creación de valor para satisfacer necesidades del cliente.',
    },
    {
      termino: 'Objetivo',
      significado:
        'Resultado que la empresa desea alcanzar en un tiempo determinado.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'Factores externos favorables para el crecimiento empresarial.',
    },
    {
      termino: 'PESTEL',
      significado:
        'Análisis del macroentorno: político, económico, social, tecnológico, ecológico y legal.',
    },
    {
      termino: 'Plan de <em>marketing</em>',
      significado: 'Documento estratégico que guía las acciones comerciales.',
    },
    {
      termino: 'Portafolio',
      significado: 'Conjunto de productos o servicios que ofrece una empresa.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },
    {
      termino: 'Variables del <em>mix</em>',
      significado:
        'Elementos del <em>marketing mix</em> que la empresa puede controlar.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Característica que diferencia a una empresa de sus competidores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2017). <em>Fundamentos de marketing</em>. Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },
    {
      referencia:
        'Meza Paúl, M. A. (2017). <em>Análisis DOFA para plan estratégico de ventas</em>. Universidad EAFIT.',
      link:
        'https://repository.eafit.edu.co/server/api/core/bitstreams/beb79e0e-7e93-4875-ae77-1eec9828e4df/content',
    },
    {
      referencia:
        'Sainz de Vicuña, J. M. (2017). <em>Plan de marketing: diseño, implementación y control</em>. ESIC Editorial.',
      link:
        'https://gc.scalahed.com/recursos/files/r161r/w24257w/LibroPlandeMarketing-1-92.pdf',
    },
    {
      referencia:
        'Johnson, G., Scholes, K., & Whittington, R. (2014). <em>Dirección estratégica</em> (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Sánchez Vargas, L. A. (2019). <em>Fundamentos para la elaboración de planes estratégicos</em>. UNAD.',
      link:
        'https://libros.unad.edu.co/index.php/selloeditorial/catalog/download/118/105/469',
    },
    {
      referencia:
        'Universidad Santiago de Cali. (2025). <em>Guía fundamentos de marketing</em>.',
      link:
        'https://unimayor.edu.co/web/images/investigacionesunimayor/Sello_Editorial/2025/Libros_PDF/Gu%C3%ADa_Fundamentos_Marketing.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
