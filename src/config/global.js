export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Seguimiento, auditoría y mejora continua de la seguridad vial laboral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Seguimiento, auditoría y mejora continua de la seguridad vial laboral.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Planificación, preparación y ejecución de la auditoría interna',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mejora continua del plan estratégico de seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mecanismos de comunicación y participación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Integración de la seguridad vial con otros sistemas de gestión',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Resolución 40595 de 2022. Por la cual se adopta la metodología para el diseño, implementación y verificación de los Planes Estratégicos de Seguridad Vial y se dictan otras disposiciones. 12 de julio de 2022. ',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_mintransporte_40595_2022.htm',
    },
    {
      referencia:
        'Truyols Mateu, S. & Sampedro Rodríguez, Á. (2011). <i>Fundamentos de la seguridad vial</i> (3a ed.). Delta Publicaciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170200',
    },
    {
      referencia:
        'Jiménez Fernández, C., Trillo Miravalles, M. P. & Goig Martínez, R. M. (2015). <i>Educación vial: hacia el tránsito seguro y sostenible</i>. McGraw-Hill España. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50321',
    },
    {
      referencia:
        'Ramírez Soriano, A. (2020). <i>Prevención de riesgos laborales: prevención de accidentes. Seguridad vial</i>. Marge Books. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/160741?page=14',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de tránsito',
      significado:
        'Evento inesperado en la vía que involucra al menos un vehículo y puede causar daños o lesiones.',
    },
    {
      termino: 'Auditoría interna',
      significado:
        'Proceso sistemático para evaluar la eficacia de los procedimientos establecidos en el PESV.',
    },
    {
      termino: 'Comité de Seguridad Vial',
      significado:
        'Grupo responsable del seguimiento, evaluación y mejora del PESV.',
    },
    {
      termino: 'Conductor',
      significado:
        'Persona que maneja un vehículo motorizado o no motorizado en el entorno laboral.',
    },
    {
      termino: 'Desempeño',
      significado:
        'Medición de los resultados obtenidos en relación con los objetivos de seguridad vial establecidos.',
    },
    {
      termino: 'Emergencia vial',
      significado:
        'Situación imprevista en la vía que requiere una respuesta rápida y adecuada.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de análisis de la eficacia de las acciones implementadas en el PESV.',
    },
    {
      termino: 'Indicador',
      significado:
        'Medida cuantitativa utilizada para monitorear y evaluar el progreso del PESV.',
    },
    {
      termino: 'Infraestructura vial',
      significado:
        'Conjunto de elementos físicos que componen las vías de tránsito, como señales, carriles y semáforos.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'Enfoque para incrementar sistemáticamente la eficacia y eficiencia del sistema de seguridad vial.',
    },
    {
      termino: 'Movilidad laboral',
      significado:
        'Desplazamiento de trabajadores hacia o desde el lugar de trabajo.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de reglas y leyes aplicables al contexto de la seguridad vial laboral.',
    },
    {
      termino: 'PESV',
      significado:
        'Plan Estratégico de Seguridad Vial implementado en las organizaciones para reducir siniestros.',
    },
    {
      termino: 'Prevención',
      significado:
        'Conjunto de acciones dirigidas a evitar accidentes o reducir sus efectos.',
    },
    {
      termino: 'Reporte de autogestión',
      significado:
        'Documento que consolida los resultados anuales de seguimiento del PESV.',
    },
    {
      termino: 'Riesgo vial',
      significado:
        'Probabilidad de que ocurra un evento adverso en el entorno vial laboral.',
    },
    {
      termino: 'Seguimiento',
      significado:
        'Actividades para supervisar y validar la implementación del PESV.',
    },
    {
      termino: 'Siniestro vial',
      significado:
        'Accidente que ocurre en la vía con consecuencias materiales o humanas.',
    },
    {
      termino: 'Sistema de gestión',
      significado:
        'Marco organizacional que coordina políticas, procedimientos y recursos para mejorar la seguridad vial.',
    },
    {
      termino: 'Velocidad segura',
      significado:
        'Límite de velocidad que minimiza el riesgo de accidentes según el contexto y entorno.',
    },
  ],
}
