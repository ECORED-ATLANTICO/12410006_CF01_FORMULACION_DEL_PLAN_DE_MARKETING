<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Empresa

    .bg_img_12.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-4(data-aos="zoom-in-right") La empresa constituye el eje central del plan de marketing, ya que es el sujeto estratégico que interactúa con el mercado, gestiona recursos y define su propuesta de valor. Su análisis permite comprender la capacidad organizacional, su direccionamiento estratégico y su oferta, elementos fundamentales para la formulación de decisiones comerciales coherentes con el entorno.
           .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema3/img_2.png', class="img-fluid")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 El estudio de la empresa dentro del plan de marketing no se limita a su descripción general, sino que implica un análisis estructurado de su evolución, su orientación estratégica, su portafolio y las fuentes de información que soportan la toma de decisiones. Este enfoque permite articular el diagnóstico interno con las oportunidades del mercado.
        .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema3/img_3.png', class="img-fluid") 

      Separador

      #t_3_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.1 Reseña histórica
      .mb-0 
      
      p.mb-4(data-aos="zoom-in-right") La empresa, como unidad económica organizada, no surge de manera inmediata en su forma actual, sino que es el resultado de un proceso evolutivo ligado al desarrollo de la actividad comercial, los sistemas productivos y las transformaciones sociales. A lo largo de la historia, su estructura, objetivos y formas de organización han cambiado según las condiciones económicas de cada época.

    .bg_img_13.mb-0
</template>

<script>
export default {
  name: 'Tema3',
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
