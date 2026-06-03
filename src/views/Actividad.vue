<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de un plan de <em>marketing</em>.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión del plan de <em>marketing</em> mediante el análisis del entorno y las variables del mercadeo para apoyar decisiones comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del plan de <em>marketing</em> dentro de una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar, analizar y orientar las acciones comerciales de la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la gestión financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar exclusivamente la producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar únicamente los recursos humanos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de <em>marketing</em> permite organizar y orientar las acciones comerciales en función de los objetivos empresariales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el plan de <em>marketing</em> y su finalidad estratégica.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento permite conectar las capacidades de la empresa con las oportunidades del entorno?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El manual de funciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El plan de <em>marketing</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El reglamento interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El organigrama.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de <em>marketing</em> integra análisis y planificación para aprovechar las oportunidades del entorno.',
          mensaje_incorrecto:
            'Revise nuevamente los conceptos relacionados con el plan de <em>marketing</em>.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una de las fases del modelo de plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Archivo empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Análisis situacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Liquidación financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis situacional permite evaluar el entorno interno y externo de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente la estructura del modelo del plan de <em>marketing</em>.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes herramientas analiza factores políticos, económicos, sociales, tecnológicos, ecológicos y legales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DOFA.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ansoff.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Marketing Mix</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'PESTEL.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis PESTEL permite estudiar los factores del macroentorno que afectan a la organización.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con las herramientas de análisis de mercadeo.',
        },
        {
          id: 5,
          texto: '¿Cuál es el propósito principal del mercadeo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Generar valor mediante la satisfacción de necesidades y deseos del mercado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Controlar únicamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir la investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mercadeo busca comprender las necesidades del mercado para generar valor a través de productos y servicios.',
          mensaje_incorrecto:
            'Revise nuevamente los conceptos fundamentales del mercadeo.',
        },
        {
          id: 6,
          texto: '¿Qué permite identificar el análisis DOFA?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalezas, debilidades, oportunidades y amenazas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estructura salarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La matriz DOFA analiza factores internos y externos que influyen en la organización.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la matriz DOFA.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes elementos hace parte del <em>marketing mix</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nómina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Producto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Organigrama.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El producto es uno de los componentes fundamentales del <em>marketing mix</em>.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el <em>marketing mix</em>.',
        },
        {
          id: 8,
          texto: '¿Cuál es la finalidad de la segmentación de mercados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir el mercado en grupos con características similares.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar costos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La segmentación permite identificar grupos de clientes con necesidades y características similares.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la segmentación de mercados.',
        },
        {
          id: 9,
          texto: '¿Qué representa el precio dentro del <em>marketing mix</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El valor que el cliente paga por un producto o servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El diseño del producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ubicación del negocio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El precio corresponde al valor monetario asignado a un producto o servicio.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el <em>marketing mix</em>.',
        },
        {
          id: 10,
          texto: '¿Qué analiza principalmente la matriz de Ansoff?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estados financieros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Procesos logísticos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estrategias de crecimiento empresarial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La matriz de Ansoff permite identificar alternativas de crecimiento empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la matriz de Ansoff.',
        },
        {
          id: 11,
          texto:
            '¿Qué elemento del <em>marketing mix</em> se relaciona con la distribución de productos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Promoción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plaza.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Precio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La plaza hace referencia a los canales y mecanismos de distribución.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el <em>marketing mix</em>.',
        },
        {
          id: 12,
          texto: '¿Qué busca una estrategia de promoción?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la comunicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Informar y persuadir al mercado objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuir la visibilidad de la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La promoción busca comunicar y persuadir al mercado para favorecer la decisión de compra.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la promoción comercial.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una característica de una empresa orientada al mercado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignora las necesidades del cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Produce sin analizar el entorno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se enfoca en comprender y satisfacer al consumidor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Elimina la investigación comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las organizaciones orientadas al mercado centran sus acciones en las necesidades del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con orientación al mercado.',
        },
        {
          id: 14,
          texto: '¿Cuál es uno de los beneficios del análisis PESTEL?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar únicamente factores internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elaborar presupuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evaluar factores externos que afectan a la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gestionar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis PESTEL permite evaluar variables externas del entorno empresarial.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con PESTEL.',
        },
        {
          id: 15,
          texto:
            '¿Qué componente del <em>marketing mix</em> se relaciona con la comunicación comercial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Promoción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Plaza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La promoción reúne las acciones de comunicación dirigidas al mercado objetivo.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el <em>marketing mix</em>.',
        },
        {
          id: 16,
          texto:
            '¿Qué estrategia de Ansoff consiste en vender nuevos productos en nuevos mercados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Penetración de mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollo de mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diversificación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fidelización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La diversificación implica nuevos productos dirigidos a nuevos mercados.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con la matriz de Ansoff.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el objetivo del análisis situacional dentro del plan de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocer las condiciones internas y externas de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elaborar contratos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestionar nómina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis situacional permite comprender la realidad de la organización y su entorno.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el análisis situacional.',
        },
        {
          id: 18,
          texto: '¿Qué permite la investigación de mercados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la comunicación empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el plan de <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Obtener información para la toma de decisiones comerciales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La investigación de mercados aporta información relevante para la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con investigación de mercados.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la importancia de establecer objetivos de <em>marketing</em>?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Orientar las acciones y medir resultados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir estrategias.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la participación del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los objetivos permiten orientar la gestión comercial y evaluar el desempeño.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con objetivos de <em>marketing</em>.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante el plan de <em>marketing</em> para una organización?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque elimina la competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la gestión financiera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque guía las estrategias para alcanzar los objetivos comerciales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque sustituye la administración empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El plan de <em>marketing</em> orienta las decisiones y estrategias necesarias para alcanzar los objetivos organizacionales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con el plan de <em>marketing</em>.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
