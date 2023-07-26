export default {
  global: {
    componenteFormativo:
      'Operación y seguimiento de las estrategias de entornos saludables',
    descripcionCurso:
      'En este componente formativo, se presentan las orientaciones para la operación a través de entornos saludables, qué herramientas se requieren para realizarla, cómo se articulan los entornos, y cómo se hace el proceso de evaluación y seguimiento para proyectar las acciones de mejora.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo:
          'Orientaciones para la operación de cada entorno en el marco de los componentes y líneas de acción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Herramientas para la implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Herramientas para la caracterización social y ambiental',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas para el seguimiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Herramientas educativas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Articulación entre entornos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguimiento y monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Resultados esperados',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Indicadores: fichas de indicadores',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Análisis y resultados',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Acciones de mejora',
            hash: 't_4_4',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '2. Herramientas para la implementación',
      referencia:
        'Ministerio de la Protección Social, Ministerio de Educación Nacional, Ministerio del Medio Ambiente y Desarrollo Territorial, Agencia Presidencial para la Acción Social y la Cooperación Internacional, Departamento Nacional de Planeación, Ministerio de Agricultura y Organización Panamericana de la Salud. (2009). Manual de gestión territorial de las estrategias de entornos saludables.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/manual-de-gestion-territorial-de-la-ees.pdf',
    },
    {
      tema: '4.2. Indicadores: fichas de indicadores',
      referencia:
        'Organización Panamericana de la Salud y Organización Mundial de la Salud. (s. f.). Indicadores de salud.',
      tipo: 'Artículo',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=14411:health-indicators-conceptual-and-operational-considerations-section-4&Itemid=0&limitstart=1&lang=es',
    },
  ],
  glosario: [
    {
      termino: 'Ambiente escolar',
      significado:
        'son escenarios o elementos asociados a las dinámicas y relaciones existentes entre los miembros de la comunidad educativa, factores relacionados con el ambiente físico y de infraestructura en la escuela, con su forma de organización y con el entorno social y cultural que rodea a la institución educativa.',
    },
    {
      termino: 'Comunidad',
      significado:
        'sistema de relaciones sociales que se dan en un espacio definido, integrado con base en intereses y necesidades compartidas en un conjunto de interacciones sustentadas en la identidad, la cultura, los valores, las tradiciones y creencias, elementos que constituyen un factor determinante del desarrollo, tanto individual como colectivo, de una sociedad.',
    },
    {
      termino: 'Familia',
      significado:
        'grupo cercano y estable de personas, con el cual se dan los momentos de vida, como nacimiento, crecimiento, se establecen vínculos afectivos; está integrada principalmente por padres e hijos, y esta puede tener alcance mayor teniendo en cuenta los diversos tipos de familias, debido a relaciones consanguíneas, jurídicas, de parentesco o de afinidad y solidaridad. Generalmente, las familias conviven por un proyecto de vida a favor de los integrantes de esta.',
    },
    {
      termino: 'Integral',
      significado:
        'es la articulación o coordinación y convergencia de acciones de diferentes actores centrada en las personas.',
    },
    {
      termino: 'Momentos del curso de vida',
      significado:
        'conjunto de trayectorias o roles que sigue el desarrollo de las personas a lo largo del tiempo, que es moldeado por interacciones y la interdependencia de los aspectos biológicos y sociales del individuo.',
    },
    {
      termino: 'Vivienda',
      significado:
        'microhábitat y ambiente facilitador para satisfacer necesidades, como la del sueño, el reposo, la alimentación, el impulso gregario de la familia, la protección contra factores del intemperismo, como el calor y la lluvia.',
    },
    {
      termino: 'Vivienda saludable',
      significado:
        'es aquella que puede proveer factores protectores, como privacidad, higiene, confort, luminosidad, servicios básicos y espacios adecuados que permitan la convivencia y el relacionamiento de sus habitantes.',
    },
  ],
  referencias: [
    {
      referencia:
        'CONASA. (2016). Lineamientos Nacionales de Entornos. MinSalud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf#:~:text=El%20Lineamiento%20Nacional%20de%20Entornos%20Saludables%20LNES%2C%20tiene,intervenci%C3%B3n%20de%20los%20determinantes%20sociales%20sanitarios%20y%20ambientales.',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2008). Qué es SUISA. Salud Ambiental.',
      link:
        'https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/salud-ambiental/#:~:text=El%20SUISA%20es%20un%20sistema,la%20poblaci%C3%B3n%2C%20que%20apoya%20la',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2006). Lineamientos nacionales para la aplicación y el desarrollo de las Estrategias de Entornos Saludables. Escuela Saludable y Vivienda Saludable. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2009). Manual de Gestión Territorial. Estrategia de Entornos Saludables. Documento 05.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/manual-de-gestion-territorial-de-la-ees.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Lineamientos nacionales de entornos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf#:~:text=El%20Lineamiento%20Nacional%20de%20Entornos%20Saludables%20LNES%2C%20tiene,intervenci%C3%B3n%20de%20los%20determinantes%20sociales%20sanitarios%20y%20ambientales.',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). Estrategia de entorno educativo saludable.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/estrategia-entorno-educativo-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2020). Documento con información para la caracterización social y ambiental de las estrategias de entornos saludables.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/informacion-caracterizacion-social-ambiental-estrategias-entornos-saludables.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social y Organización Panamericana de la Salud. (2008). Salud ambiental en terminales nacionales e internacionales en el marco del CONPES 3550 de 2008 y el Reglamento Sanitario Internacional 2005.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/marco-conpes-3550-2008-RSI-2005.pdf',
    },
    {
      referencia:
        'Organización Panamericana de Salud. (s .f.). Indicadores de Salud.',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=14411:health-indicators-conceptual-and-operational-considerations-section-4&Itemid=0&limitstart=1&lang=es',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Patricia Díaz Gutiérrez',
          cargo: 'Experta Temática',
          centro:
            'Regional Huila - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
