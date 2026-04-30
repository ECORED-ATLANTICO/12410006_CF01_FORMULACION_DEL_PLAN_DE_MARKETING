<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Fundamentos del plan de <em>marketing</em> aborda los conceptos de plan, sus modelos y herramientas de análisis, junto con los fundamentos del mercadeo, sus principios, variables del <em>marketing mix</em> y segmentación, para comprender el entorno organizacional. Asimismo, integra el análisis de la empresa, su estructura, portafolio y fuentes de información, junto con herramientas de análisis de mercadeo como DOFA, PESTEL y la matriz de Ansoff, permitiendo diagnosticar la situación empresarial, identificar oportunidades y orientar la formulación de estrategias alineadas con los objetivos organizacionales.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Fundamentos del plan de marketing aborda los conceptos de plan, sus modelos y herramientas de análisis, junto con los fundamentos del mercadeo, sus principios, variables del marketing mix y segmentación, para comprender el entorno organizacional. Asimismo, integra el análisis de la empresa, su estructura, portafolio y fuentes de información, junto con herramientas de análisis de mercadeo como DOFA, PESTEL y la matriz de Ansoff, permitiendo diagnosticar la situación empresarial, identificar oportunidades y orientar la formulación de estrategias alineadas con los objetivos organizacionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
