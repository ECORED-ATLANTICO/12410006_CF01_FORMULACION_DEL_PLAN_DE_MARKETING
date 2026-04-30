<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-0.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_img_1.mb-0
      .row.justify-content-center.align-items-center.mb-3
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_2.png', class="img-fluid") 
        .col-12.col-lg-8
          p.mb-3(data-aos="zoom-in-right") El componente formativo Fundamentos del plan de <em>marketing</em> aborda el análisis de los elementos esenciales del mercadeo y su aplicación en el contexto organizacional. Integra el estudio del entorno empresarial, las variables del <em>marketing mix</em> y las herramientas de diagnóstico estratégico como base para comprender la situación actual de la empresa y orientar la toma de decisiones comerciales.
          .tarjeta.tarjeta--fondo-img-1.p-5.rounded-4.mb-0(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Su importancia radica en que permite identificar factores internos y externos que inciden en el desempeño organizacional, facilitando la interpretación del mercado, la segmentación y la definición de estrategias coherentes con los objetivos empresariales. Asimismo, fortalece el uso de herramientas analíticas que permiten estructurar un diagnóstico estratégico sólido y fundamentado.
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/introduccion/img_4.png', class="img-fluid")
    
      .row.justify-content-center.align-items-center.mb-0
        .col-2.col-lg-1.mb-3.mb-lg-0.p-4(data-aos="zoom-in-right")
          figure.p-2
            img(src='@/assets/curso/introduccion/img_5.svg', class="img-fluid") 
        .col-12.col-lg-11
          p.mb-0(data-aos="zoom-in-right") El desarrollo temático se abordará de manera progresiva, iniciando con los conceptos de plan de <em>marketing</em>, mercadeo y empresa. Posteriormente, se estudiarán las variables del <em>marketing mix</em> y la segmentación de mercados, para avanzar hacia la aplicación de herramientas de análisis como DOFA, PESTEL y Ansoff, integrando los resultados en la comprensión del entorno empresarial y la formulación de decisiones estratégicas en <em>marketing</em>. De esta manera, el componente formativo permite desarrollar competencias analíticas que fortalecen la toma de decisiones estratégicas en contextos empresariales reales.
      br
      br
      br
      br
    
    //figure.mb-5
    //  .video.mb-2
    //    iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //  figcaption Video: Leyenda del video
    
</template>

<script>
export default {
  name: 'Introduccion',
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
