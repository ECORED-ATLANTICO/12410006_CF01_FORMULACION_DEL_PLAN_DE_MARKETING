<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Análisis PESTEL
  
    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema6/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 El análisis PESTEL es una herramienta que facilita la comprensión del contexto en el que opera la empresa, contribuyendo a anticipar cambios, reducir riesgos y detectar oportunidades en el mercado.
 
    Separador

    .bg_img_26.mb-0

      #t_6_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.1 Concepto
      .mb-0 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema6/img_3.png', class="img-fluid") 
        .col-12.col-lg-8
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 El análisis PESTEL es un método de diagnóstico que permite evaluar factores externos que impactan a la organización desde diferentes dimensiones del entorno. Su finalidad es proporcionar una visión estructurada del contexto en el que se desarrollan las actividades empresariales.
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema6/img_4.png', class="img-fluid")
          p.mb-3(data-aos="zoom-in-right") A través de este análisis, la empresa puede anticiparse a cambios del entorno y adaptar sus estrategias de <em>marketing</em> y operación de manera oportuna.
          .tarjeta.color-primario-10.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
            p.mb-0 Una empresa de alimentos puede analizar regulaciones sanitarias (legal), cambios en el poder adquisitivo (económico) y tendencias de consumo saludable (social) para ajustar su portafolio.

    .bg_img_27.mb-0

      Separador

      #t_6_2.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.2 Características
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El análisis PESTEL presenta características que lo convierten en una herramienta clave dentro del diagnóstico estratégico:
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Enfoque externo:] analiza factores del entorno que la empresa no controla directamente.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Carácter integral:] considera múltiples dimensiones del contexto.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Orientación preventiva:] permite anticipar riesgos y cambios del mercado.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Apoyo estratégico:] facilita la toma de decisiones informadas.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Adaptabilidad:] puede aplicarse a diferentes sectores y tipos de empresa.
        .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema6/img_6.png', class="img-fluid") 
      
      .tarjeta.color-terciario-10.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 Una empresa tecnológica utiliza el análisis PESTEL para anticipar cambios en normativas digitales y evolución tecnológica.

    Separador

    .bg_img_28.mb-0

      #t_6_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 6.3 Componentes
      .mb-0

      p.mb-4(data-aos="zoom-in-right") La estructura del modelo PESTEL se basa en seis factores que permiten analizar el entorno externo de la empresa desde diferentes dimensiones:

      .row.justify-content-center.align-items-start.mb-5
        .col-8.col-lg-5.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema6/img_8.png', class="img-fluid")
        .col-12.col-lg-7.mb-3(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-acento-contenido-10")
            div(titulo="Político (P)")
              p.mb-0 Factores relacionados con las decisiones del gobierno, estabilidad política y políticas públicas. Ejemplo: regulaciones del comercio o incentivos a ciertos sectores económicos.
            div(titulo="Económico (E)")
              p.mb-0 Condiciones económicas que influyen en el mercado y en el poder adquisitivo del consumidor. Ejemplo: inflación, tasas de interés o crecimiento económico.
            div(titulo="Social (S)")
              p.mb-0 Aspectos relacionados con la cultura, hábitos y comportamiento de los consumidores. Ejemplo: cambios en las preferencias de consumo o estilos de vida.
            div(titulo="Tecnológico (T)")
              p.mb-0 Avances e innovaciones que impactan los procesos productivos y comerciales. Ejemplo: desarrollo del comercio electrónico o automatización.
            div(titulo="Ecológico (E)")
              p.mb-0 Factores ambientales y de sostenibilidad que afectan a las organizaciones. Ejemplo: normativas ambientales o prácticas ecológicas.
            div(titulo="Legal (L)")
              p.mb-0 Leyes y regulaciones que deben cumplir las empresas. Ejemplo: protección al consumidor, normas laborales o requisitos sanitarios.

    p.mb-0(data-aos="zoom-in-right") Estos componentes permiten analizar de manera estructurada el entorno externo, facilitando la identificación de oportunidades y riesgos para la toma de decisiones estratégicas.

    Separador

    #t_6_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 6.4 Técnica de elaboración
    .mb-0

    p.mb-4(data-aos="zoom-in-right") La elaboración del análisis PESTEL implica un proceso estructurado que permite organizar la información del entorno y facilitar su interpretación estratégica.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-lg-8.mb-3.mb-lg-0
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-5.h-100(data-aos="zoom-in-right")
          h5.mb-3 Fases para su desarrollo
          ul.list-unstyled.cita-decorada__texto.mb-0
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Identificación de variables:] reconocer factores relevantes del entorno en cada dimensión.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Recolección de información:] obtener datos de fuentes confiables (informes, estadísticas, estudios).
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Análisis de impacto:] evaluar cómo cada factor puede afectar a la empresa.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Priorización:] determinar los factores más relevantes según su nivel de influencia.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#FF707E; font-size: 15px; line-height: 1.5;").mb-0
              span #[strong Interpretación estratégica:] estratégica: relacionar los resultados con decisiones empresariales.
      .col-12.col-lg-4.mb-3.mb-lg-0
        .tarjeta.color-primario-10.p-4.rounded-4.mb-5.h-100(data-aos="zoom-in-right")
          h5.mb-3 Aplicación
          p.mb-0 Se identifican variables del entorno macro (políticas, económicas, sociales, tecnológicas, ecológicas y legales), se analiza su impacto en la empresa y se priorizan según su nivel de influencia.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 10.
      |  Matriz PESTEL – EcoMarket S.A.S.
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p <b>Nota.</b> SENA, (2026).
        thead
          tr
            th.col-auto.col-lg-3 Factor
            th.col-auto.col-lg-auto Análisis ampliado
            th.col-auto.col-lg-auto Impacto
        tbody
          tr
            td.text-start Político.
            td.text-start Existencia de políticas públicas que promueven la sostenibilidad y economía verde.
            td.text-start Positivo.
          tr
            td.text-start Económico.
            td.text-start Inflación y reducción del poder adquisitivo afectan la disposición de compra.
            td.text-start Negativo.
          tr
            td.text-start Social.
            td.text-start Consumidores más conscientes del impacto ambiental de sus compras.
            td.text-start Positivo.
          tr
            td.text-start Tecnológico.
            td.text-start Crecimiento del comercio electrónico y herramientas digitales accesibles.
            td.text-start Positivo.
          tr
            td.text-start Ecológico.
            td.text-start Regulaciones que favorecen productos sostenibles y responsables.
            td.text-start Positivo.
          tr
            td.text-start Legal.
            td.text-start Normativas sobre certificación, etiquetado y calidad de productos ecológicos
            td.text-start Medio.

    p.mb-5(data-aos="zoom-in-right") Interpretación técnica de la Tabla 10. El entorno resulta favorable para EcoMarket S.A.S., impulsado por factores sociales, tecnológicos y ecológicos que fortalecen la demanda de productos sostenibles. Sin embargo, las condiciones económicas representan un riesgo, ya que pueden limitar la capacidad de compra del consumidor y afectar la competitividad.

    .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 En este contexto, la empresa debe aprovechar las oportunidades del mercado y fortalecer su propuesta de valor. Asimismo, es clave implementar estrategias que permitan optimizar costos y mejorar su posicionamiento.
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema6/img_9.png', class="img-fluid")

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-0
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_17.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Con el fin de fortalecer la comprensión de la matriz PESTEL y su aplicación en el análisis estratégico, se recomienda revisar el siguiente recurso audiovisual, donde se abordan los factores políticos, económicos, sociales, tecnológicos, ambientales y legales que inciden en el entorno empresarial. 
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=zr19Z0kVA1w&t=148s" target="_blank")
                span Análisis PESTEL. fácil rápido y sencillo
                i.fas.fa-play-circle.ms-2
</template>

<script>
export default {
  name: 'Tema6',
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
