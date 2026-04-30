<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Matriz DOFA

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La matriz DOFA permite analizar de manera estructurada la relación entre las capacidades internas de la empresa y las condiciones del entorno, facilitando la toma de decisiones.

    Separador

    #t_5_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.1 Concepto
    .mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
           .row.justify-content-center.align-items-center.mb-0
             .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
               figure
                 img(src='@/assets/curso/tema5/img_2.png', class="img-fluid")
             .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
               p.mb-0 La matriz DOFA es un instrumento de análisis que permite evaluar la posición estratégica de una empresa mediante la identificación de cuatro elementos clave: fortalezas, debilidades, oportunidades y amenazas. Su finalidad es proporcionar una visión integral de la organización, relacionando factores internos y externos para orientar la formulación de estrategias coherentes con el entorno.
      .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema5/img_3.png', class="img-fluid") 

    .bg_img_21.mb-0

      Separador

      #t_5_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.2 Características
      .mb-0 

      p.mb-4(data-aos="zoom-in-right") La matriz DOFA presenta características que la convierten en una herramienta fundamental en el análisis estratégico:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.order-2.order-lg-1
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Permite integrar factores internos y externos en un solo análisis.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Facilita la identificación de ventajas competitivas.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Apoya la toma de decisiones estratégicas.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Es adaptable a diferentes sectores y tipos de empresa.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Contribuye a la formulación de estrategias orientadas al crecimiento y sostenibilidad.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_5.png', class="img-fluid")

    .bg_img_22.mb-0

      Separador

      #t_5_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 5.3 Componentes
      .mb-0 

      p.mb-4(data-aos="zoom-in-right") La estructura de la matriz DOFA se basa en cuatro elementos principales, clasificados en factores internos y externos:
      
      .row.justify-content-center.align-items-stretch.mb-4
        .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
          .tarjeta-numerada.color-primario-10.h-100
            .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
              figure
                img(src='@/assets/curso/tema5/img_7.svg', class="img-fluid") 
            p.mb-0 #[strong Fortalezas (F):] capacidades y recursos internos que generan ventajas competitivas. Ejemplo: plataforma tecnológica robusta, buena experiencia de usuario, base de datos de clientes.
        .col-12.col-lg-6.mb-4(data-aos="zoom-in-right")
          .tarjeta-numerada.color-secundario-10.h-100
            .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
              figure
                img(src='@/assets/curso/tema5/img_8.svg', class="img-fluid") 
            p.mb-0 #[strong Debilidades (D):] limitaciones internas que afectan el desempeño organizacional. Ejemplo: baja visibilidad en el mercado, deficiencias logísticas o falta de analítica de datos.
        .col-12.col-lg-6.mb-lg-0.mb-4(data-aos="zoom-in-right")
          .tarjeta-numerada.color-terciario-10.h-100
            .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
              figure
                img(src='@/assets/curso/tema5/img_9.svg', class="img-fluid") 
            p.mb-0 #[strong Oportunidades (O):] factores externos favorables que la empresa puede aprovechar. Ejemplo: crecimiento del comercio electrónico, nuevas tecnologías o cambios en hábitos de consumo.
        .col-12.col-lg-6.mb-lg-0.mb-4(data-aos="zoom-in-right")
          .tarjeta-numerada.color-acento-contenido-10.h-100
            .tarjeta-numerada__numero.d-flex.align-items-center.justify-content-center
              figure
                img(src='@/assets/curso/tema5/img_10.svg', class="img-fluid") 
            p.mb-0 #[strong Amenazas (A):] factores externos que pueden afectar negativamente a la empresa. Ejemplo: aumento de la competencia, cambios normativos o riesgos de ciberseguridad.

      p.mb-4(data-aos="zoom-in-right") Estos componentes permiten organizar la información de manera clara y estructurada, facilitando el análisis estratégico.

    Separador

    #t_5_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 5.4 Técnica de elaboración 
    .mb-0 

    p.mb-4(data-aos="zoom-in-right") La elaboración de la matriz DOFA implica un proceso organizado que permite identificar y relacionar los factores estratégicos de la empresa. 

    .bg_img_23.mb-0

      .row.justify-content-center.mb-5
        .col-12
          .row.g-0.overflow-hidden.rounded-4
            .col-lg-6
              .tarjeta.color-secundario-10.rounded-0.h-100.p-5(style="background-color:#dbeeff;")
                .d-flex.align-items-end.mb-4
                  img(src="@/assets/curso/tema5/img_11.svg", class="img-fluid", style="width:70px").me-3
                  h5.mb-0 Fases para su desarrollo

                ul.list-unstyled.mb-0
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong Identificación de factores internos:] reconocer fortalezas y debilidades de la organización.

                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong Identificación de factores externos:] analizar oportunidades y amenazas del entorno.

                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong Organización de la información:] clasificar los factores en la matriz DOFA.

                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong Análisis cruzado:] relacionar los elementos para generar estrategias.

                  li.d-flex.align-items-start
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong Formulación estratégica:] definir acciones a partir de las combinaciones DOFA.
            .col-lg-6
              .tarjeta.color-primario-10.rounded-0.h-100.p-5(style="background-color:#f2e6fa;")
                .d-flex.align-items-end.mb-4
                  img(src="@/assets/curso/tema5/img_12.svg", class="img-fluid", style="width:70px").me-3
                  h5.mb-0 Estrategias DOFA

                p.mb-4 Las estrategias se generan a partir de la relación entre factores internos y externos:

                ul.list-unstyled.mb-0
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong FO (Fortalezas – Oportunidades):] aprovechar fortalezas para explotar oportunidades.

                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong DO (Debilidades – Oportunidades):] superar debilidades utilizando oportunidades.

                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong FA (Fortalezas – Amenazas):] usar fortalezas para enfrentar amenazas.

                  li.d-flex.align-items-start
                    i.fa-solid.fa-circle-check.me-2.mt-1(style="color:#ff6b81; font-size:12px;")
                    span #[strong DA (Debilidades – Amenazas):] minimizar debilidades y evitar riesgos.

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 1.
            |    Estrategias DOFA
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema5/img_14.svg', class="img-fluid").mb-5
            figcaption Nota. SENA, (2026).

    .bg_img_24.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10
          .subtitulo-destacado.mb-5
            .subtitulo-destacado__icono
              img(src='@/assets/curso/tema3/img_5.png', aria-hidden='true').subtitulo-destacado__img
            .subtitulo-destacado__fondo
              h4.subtitulo-destacado__texto Aplicación del análisis DOFA

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_16.png', class="img-fluid") 
        .col-12.col-lg-8
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 El análisis DOFA permite interpretar la situación estratégica de la empresa y orientar la toma de decisiones. Veamos la aplicación de esta herramienta en el siguiente ejemplo de la empresa EcoMarket S.A.S.:
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema5/img_17.png', class="img-fluid")
          p.mb-0(data-aos="zoom-in-right") EcoMarket S.A.S. es una empresa colombiana creada en 2023, dedicada a la comercialización de productos ecológicos y sostenibles. Su modelo de negocio integra canales físicos y digitales, orientado a consumidores con conciencia ambiental. Su portafolio incluye alimentos orgánicos, productos biodegradables y artículos de cuidado personal. 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .tarjeta.color-primario-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Fundamentación del análisis (fuentes de información). Esta información permite construir un análisis integral, articulando la realidad interna de la empresa con las condiciones del entorno.
          .tarjeta.color-secundario-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-3 El desarrollo del diagnóstico estratégico se basa en la recolección y análisis de información proveniente de:
            ul.list-unstyled.cita-decorada__texto.mb-3
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span #[strong Fuentes internas:] reportes de ventas, comportamiento de clientes, estructura de costos, capacidad logística. 
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span #[strong Fuentes externas:] tendencias de consumo, estudios de mercado, análisis de competencia, normativa vigente. 
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span #[strong Fuentes primarias:] observación del cliente, encuestas de hábitos de consumo. 
              li.d-flex.align-items-start.mb-0
                i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
                span #[strong Fuentes secundarias:] informes sectoriales, datos económicos, publicaciones especializadas. 
        .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_18.png', class="img-fluid") 

          
    .tarjeta.color-terciario-10.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
      p.mb-0 Técnica de elaboración: el análisis DOFA se construye a partir de la identificación sistemática de factores internos (fortalezas y debilidades) y externos (oportunidades y amenazas). Posteriormente, estos factores se priorizan y se cruzan para formular estrategias que orienten la toma de decisiones.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 9.
      |   Matriz DOFA – EcoMarket S.A.S.
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, (2026).
        tbody
          tr
            td.bg-table-01 Fortalezas (F)
            td.bg-table-02 Debilidades (D)
          tr
            td.text-start 
              p.mb-2 #[strong F1:] portafolio de productos ecológicos certificados que generan confianza en el consumidor.
              p.mb-2 #[strong F2:] canal de ventas digital activo que permite cobertura más amplia.
              p.mb-2 #[strong F3:] relación directa con proveedores locales que garantiza trazabilidad.
              p.mb-2 #[strong F4:] imagen de marca alineada con sostenibilidad y responsabilidad ambiental.
            td.text-start 
              p.mb-2 #[strong D1:] bajo reconocimiento de marca en el mercado nacional.
              p.mb-2 #[strong D2:] costos operativos elevados que impactan el precio final.
              p.mb-2 #[strong D3:] limitaciones logísticas en tiempos de entrega.
              p.mb-2 #[strong D4:] baja inversión en estrategias de <em>marketing</em> y posicionamiento.
          tr
            td.bg-table-03 Oportunidades (O)
            td.bg-table-04 Amenazas (A)
          tr
            td.text-start 
              p.mb-2 #[strong O1:] crecimiento sostenido del consumo responsable.
              p.mb-2 #[strong O2:] expansión del comercio electrónico en el país
              p.mb-2 #[strong O3:] programas de apoyo a emprendimientos sostenibles.
              p.mb-2 #[strong O4:] mayor conciencia ambiental en los consumidores.
            td.text-start 
              p.mb-2 #[strong A1:] competencia de grandes superficies con mayor capacidad operativa.
              p.mb-2 #[strong A2:] alta sensibilidad del consumidor frente al precio.
              p.mb-2 #[strong A3:] cambios en regulaciones sanitarias y ambientales.
              p.mb-2 #[strong A4:] disponibilidad de productos sustitutos a menor costo.

    .bg_img_25.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema5/img_16.png', class="img-fluid") 
        .col-12.col-lg-8
          h5.mb-4(data-aos="zoom-in-right") Formulación de estrategias DOFA (FO, DO, DA, FA) de la tabla 9.
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong F1O1:] posicionar el portafolio ecológico aprovechando el crecimiento del consumo sostenible.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong F2O2:] fortalecer el canal e-commerce para ampliar cobertura geográfica.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong D1O4:] implementar campañas digitales para aumentar reconocimiento de marca.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong D2O3:] acceder a programas de apoyo para mejorar estructura de costos.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong F4A2:] diferenciar la marca mediante valor ambiental frente a productos económicos.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong D3A1:] optimizar la logística para competir con grandes superficies.
            
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-12.col-lg-10.mb-0
          .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
            .row.align-items-center.mb-0
              .col-8.col-md-4.col-lg-2.mx-auto.text-center.p-4
                figure.m-2
                  img(src="@/assets/curso/tema1/img_17.svg" )
              .col-12.col-md-8.col-lg-10.p-4
                p.fw-bold.text-white.mb-3 Para reforzar la comprensión de la matriz DOFA y su aplicación en el análisis estratégico, se invita a consultar el siguiente recurso audiovisual, el cual presenta de manera clara sus componentes y ejemplos prácticos de implementación en contextos organizacionales:
                a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=84fuGpQeYg0&t=4s" target="_blank")
                  span Matriz DOFA
                  i.fas.fa-play-circle.ms-2
</template>

<script>
export default {
  name: 'Tema5',
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
