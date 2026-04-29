<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Análisis vectorial de crecimiento de la empresa (matriz de Ansoff)

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis vectorial de crecimiento, conocido como matriz de Ansoff, es una herramienta estratégica que orienta a la organización en la definición de rutas de crecimiento, evaluando el nivel de riesgo y las oportunidades asociadas a cada estrategia.

    Separador

    #t_7_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
           .row.justify-content-center.align-items-center.mb-0
             .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
               figure
                 img(src='@/assets/curso/tema7/img_2.png', class="img-fluid")
             .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
               p.mb-0 La matriz de Ansoff es un modelo que permite analizar las opciones de crecimiento empresarial mediante la combinación de dos variables: productos y (existentes o nuevos) y mercados (existentes o nuevos). A partir de esta relación, se establecen diferentes estrategias que guían la expansión de la empresa. Su utilidad radica en que permite estructurar decisiones estratégicas de manera clara, identificando caminos de crecimiento según el contexto organizacional.
        p.mb-0(data-aos="zoom-in-right") Una empresa puede decidir vender más de sus productos actuales en el mismo mercado o desarrollar nuevos productos para atraer nuevos clientes.
      .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema7/img_3.png', class="img-fluid") 

    .bg_img_29.mb-0

      Separador

      #t_7_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 7.2 Características
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_5.png', class="img-fluid") 
        .col-12.col-lg-8
          p.mb-3(data-aos="zoom-in-right") La matriz de Ansoff presenta características que la hacen relevante en la planificación estratégica:
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Enfoque en crecimiento:] orienta decisiones relacionadas con expansión empresarial.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Estructura simple:] se basa en la relación producto mercado.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Clasificación estratégica:] organiza las opciones de crecimiento en categorías claras.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Análisis de riesgo:] cada estrategia implica diferentes niveles de incertidumbre.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Aplicabilidad general:] puede utilizarse en distintos sectores económicos.
      
      .tarjeta.color-primario-10.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 Una empresa puede optar por estrategias de bajo riesgo como aumentar ventas en su mercado actual, o asumir mayor riesgo al ingresar a nuevos mercados.

      Separador

    .bg_img_30.mb-0

      #t_7_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 7.3 Componentes
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") La matriz de Ansoff se compone de cuatro estrategias principales que surgen de la combinación entre productos y mercados, permitiendo a la empresa definir rutas de crecimiento según su nivel de riesgo y expansión: 
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Penetración de mercado:] consiste en incrementar las ventas de productos actuales en mercados actuales, mediante estrategias como promociones, descuentos o fidelización. Ejemplo: campañas para aumentar el consumo en clientes habituales.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Desarrollo de mercado:] implica llevar productos existentes a nuevos mercados, ya sea geográficos o segmentos diferentes. Ejemplo: expansión a nuevas ciudades o regiones.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Desarrollo de producto:] se enfoca en crear o mejorar productos para los mercados actuales, respondiendo a nuevas necesidades del cliente. Ejemplo: lanzamiento de nuevas líneas o versiones mejoradas.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Diversificación:] consiste en introducir nuevos productos en nuevos mercados, siendo la estrategia de mayor riesgo. Ejemplo: entrada a nuevos sectores o unidades de negocio.
        .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_7.png', class="img-fluid") 
      
      p.mb-5(data-aos="zoom-in-right") Estos componentes permiten estructurar de manera clara las alternativas de crecimiento empresarial, facilitando la toma de decisiones estratégicas.

    .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 En este contexto, una cadena de supermercados puede implementar estrategias como la expansión hacia nuevas ciudades, correspondiente al desarrollo de mercado, o el lanzamiento de marcas propias para sus clientes actuales, asociado al desarrollo de producto. Ambas alternativas contribuyen al crecimiento empresarial, al incremento de la participación en el mercado y a la generación de ventajas competitivas sostenibles.
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_8.png', class="img-fluid")

    Separador

    #t_7_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 7.4 Técnica de elaboración
    .mb-0 
    
    p.mb-5(data-aos="zoom-in-right") La construcción de la matriz de Ansoff requiere un proceso analítico que permita definir la estrategia de crecimiento más adecuada.

    .bg_img_31.mb-0

      .subtitulo-destacado.mb-5
        .subtitulo-destacado__icono
          img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Pasos para su elaboración
      
      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_10.png', class="img-fluid") 
        .col-12.col-lg-8
          LineaTiempoD.color-secundario-20
            .row.justify-content-center.align-items-center(numero="1" titulo="Identificar la situación actual")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Definir productos y mercados actuales de la empresa.
            .row.justify-content-center.align-items-center(numero="2" titulo="Analizar oportunidades")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Evaluar posibilidades de expansión o innovación.
            .row.justify-content-center.align-items-center(numero="3" titulo="Clasificar estrategias")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Ubicar cada opción dentro de la matriz (penetración, desarrollo, diversificación).
            .row.justify-content-center.align-items-center(numero="4" titulo="Evaluar riesgos")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Analizar el nivel de incertidumbre de cada alternativa.
            .row.justify-content-center.align-items-center(numero="5" titulo="Seleccionar estrategia")
              .col-12.col-lg-12.mb-md-0
                p.mb-0 Elegir la opción más viable según objetivos y capacidades.

      p.mb-5(data-aos="zoom-in-right") Una empresa digital, por ejemplo, puede analizar su mercado actual, identificar oportunidades en nuevos segmentos y decidir expandirse mediante nuevos servicios.

    .bg_img_32.mb-0

      .subtitulo-destacado.mb-5
        .subtitulo-destacado__icono
          img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Aplicación

      p.mb-4(data-aos="zoom-in-right") Se analizan productos actuales y potenciales, junto con mercados actuales y nuevos, para definir estrategias de crecimiento según el nivel de riesgo.

      p.mb-5(data-aos="zoom-in-right") A continuación, se presenta la matriz de crecimiento para de la empresa EcoMarket S.A.S

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema7/img_12.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-0.rounded-3
              .tarjeta--color-white-2.h-100
                .tarjeta--05
                .tarjeta--slider__content.mb-0
                  h5.text-center.mb-3 Penetración de mercado
                  ul.list-unstyled.cita-decorada__texto.mb-3
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Incrementar la frecuencia de compra mediante promociones y programas de fidelización.
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Fortalecer la comunicación de beneficios ecológicos en clientes actuales.
              .tarjeta--color-white-2.h-100
                .tarjeta--06
                .tarjeta--slider__content.mb-0
                  h5.text-center.mb-3 Desarrollo de mercado
                  ul.list-unstyled.cita-decorada__texto.mb-3
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Expandir operaciones a nuevas ciudades mediante el canal digital.
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      spano Llegar a nuevos segmentos interesados en consumo sostenible.
              .tarjeta--color-white-2.h-100
                .tarjeta--07
                .tarjeta--slider__content.mb-0
                  h5.text-center.mb-3 Desarrollo de producto
                  ul.list-unstyled.cita-decorada__texto.mb-3
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Introducir nuevas líneas como cosmética natural y productos veganos.
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Innovar en empaques biodegradables para diferenciar la oferta.
              .tarjeta--color-white-2.h-100
                .tarjeta--08
                .tarjeta--slider__content.mb-0
                  h5.text-center.mb-3 Diversificación
                  ul.list-unstyled.cita-decorada__texto.mb-3
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Crear servicios de suscripción mensual de productos ecológicos.
                    li.d-flex.align-items-start.mb-3
                      i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                      span Ingresar a líneas de educación ambiental o kits sostenibles.
    
    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Análisis estratégico

    p.mb-4(data-aos="zoom-in-right") EcoMarket S.A.S. puede fortalecer su posición mediante estrategias de penetración y desarrollo de mercado, que representan menor riesgo y permiten aumentar ventas y cobertura. El desarrollo de producto aporta diferenciación, mientras que la diversificación implica mayor inversión, pero abre oportunidades de crecimiento a largo plazo.

    .tarjeta.color-terciario-5.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
      p.mb-0 Estas estrategias deben implementarse de forma gradual, priorizando aquellas que generen resultados en el corto plazo. De igual manera, es clave evaluar continuamente el entorno para ajustar las decisiones estratégicas.
    
    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Integración del análisis

    p.mb-4(data-aos="zoom-in-right") El cruce de herramientas evidencia que EcoMarket S.A.S. se encuentra en un entorno favorable para el crecimiento, impulsado por tendencias sociales y ambientales. Sin embargo, enfrenta retos internos relacionados con costos, posicionamiento y logística.
    
    .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 La articulación de DOFA, PESTEL y Ansoff permite definir estrategias orientadas a mejorar la competitividad, fortalecer la presencia en el mercado y garantizar la sostenibilidad del modelo de negocio.
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema7/img_17.png', class="img-fluid")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_17.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Para fortalecer la comprensión de la matriz de Ansoff y su aplicación en el análisis estratégico, se invita a consultar el siguiente recurso audiovisual, el cual ofrece una explicación clara y práctica de sus componentes:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=iwls3gsqJt4" target="_blank")
                span ¿Cómo desarrollar una Matriz de Ansoff?
                i.fas.fa-play-circle.ms-2
                
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-12.col-lg-8
        .tarjeta.color-primario-60.p-5.rounded-3.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-8.col-lg-6.mb-lg-0.mb-3
              figure
                img(src="@/assets/curso/tema1/img_16.png", class="img-fluid w-100")
            .col-12.col-lg-6.mb-lg-0
              h2.mb-5.text-white Pódcast
              TarjetaAudio.color-acento-botones.mb-0.p-4(
                texto="<I>Herramientas de análisis estratégico</I>"
                :audio="require('@/assets/curso/tema1/img_16.png')"
                @audio-hover="mostrarIndicadorTarjetaAudio = True")
                .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
