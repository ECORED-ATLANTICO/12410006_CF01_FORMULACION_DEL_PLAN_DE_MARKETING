<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Mercadeo

    .bloque-texto-g.color-secundario-20.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El mercadeo constituye una función estratégica dentro de las organizaciones, orientada a identificar, anticipar y satisfacer las necesidades del mercado mediante la generación de valor. Su comprensión implica analizar principios, variables y estructuras que permiten orientar las decisiones comerciales en entornos competitivos.

    Separador

    .bg_img_6.mb-0

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Concepto
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El mercadeo es un proceso estratégico mediante el cual las organizaciones identifican, analizan y comprenden las necesidades y deseos del mercado, con el propósito de generar valor a través de productos, servicios y experiencias significativas. Este proceso no se limita únicamente a la venta, sino que abarca un conjunto de actividades interrelacionadas que incluyen la investigación de mercados, la segmentación del público objetivo, la planificación de estrategias y la comunicación efectiva.
           .tarjeta.tarjeta--fondo-img-1.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_3.png', class="img-fluid")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Además, el mercadeo implica construir y mantener relaciones sólidas con los clientes, buscando no solo satisfacer sus expectativas, sino también fidelizarlos a largo plazo. Para ello, las empresas deben adaptarse constantemente a los cambios del entorno, las tendencias de consumo y los avances tecnológicos, asegurando así su competitividad y sostenibilidad en el mercado.
          p.mb-0(data-aos="zoom-in-right") Por ejemplo, una empresa como Netflix no solo vende entretenimiento, sino que analiza el comportamiento del usuario para ofrecer contenido personalizado, fortaleciendo la fidelización.
        .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_4.png', class="img-fluid") 

      Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Principios
    .mb-0 
    
    .row.justify-content-center.align-items-center.mb-0
      .col-2.col-lg-1.mb-3.mb-lg-0.p-4.d-lg-block.d-none(data-aos="zoom-in-right")
        figure.p-2
          img(src='@/assets/curso/tema2/img_5.svg', class="img-fluid") 
      .col-12.col-lg-11(data-aos="zoom-in-right")
        p.mb-3 Los principios del mercadeo orientan la gestión comercial, asegurando coherencia entre la empresa y el mercado. Se fundamentan en el enfoque al cliente, la generación de valor y la sostenibilidad de las relaciones comerciales.
        p.mb-3 Antes de presentar los principios, es importante reconocer que estos permiten orientar la toma de decisiones en función del mercado.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 2.
      |  Principios del mercadeo
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptada de Kotler y Armstrong, (2017).
        thead
          tr
            th.col-auto.col-lg-3 Principio
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Aplicación
            th.col-auto.col-lg-3 Ejemplo de empresas
        tbody
          tr
            td.text-start Orientación al cliente.
            td.text-start Comprender necesidades y expectativas.
            td.text-start Diseño de productos centrados en el usuario. Personalización de la experiencia.
            td.text-start Amazon, Apple.
          tr
            td.text-start Generación de valor.
            td.text-start Ofrecer beneficios diferenciales.
            td.text-start Propuesta de valor competitiva. Diferenciación clara frente a competidores.
            td.text-start Nike, Tesla.
          tr
            td.text-start Relación a largo plazo.
            td.text-start Fidelización del cliente.
            td.text-start Programas de lealtad. Seguimiento y servicio postventa.
            td.text-start Starbucks, Coca-Cola.
          tr
            td.text-start Adaptación al entorno.
            td.text-start Ajuste a cambios del mercado.
            td.text-start Innovación continua. Uso de tendencias y tecnología emergente.
            td.text-start Netflix, Samsung.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.col-xl-3.order-2.order-lg-1
        .tarjeta.color-primario-5.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-12.mb-0(data-aos="zoom-in-right")
              p.mb-3 Por ejemplo, marcas como Amazon y Apple aplican estos principios al priorizar la experiencia del cliente y la mejora continua de sus servicios.
            .col-lg-6.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_6.png', class="img-fluid")
      .col-12.col-lg-8.col-xl-9.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_7.png', class="img-fluid")

    Separador

    .bg_img_7.mb-0

      #t_2_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.3 Variables del <em>mix</em> 
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_9.png', class="img-fluid") 
        .col-12.col-lg-8
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 El <em>marketing mix</em> corresponde al conjunto de variables que la empresa controla para influir en el mercado y en las decisiones de compra de los consumidores. Estas variables permiten estructurar la oferta, definir estrategias comerciales y posicionar productos o servicios de manera efectiva frente a la competencia.
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_10.png', class="img-fluid")
          p.mb-0(data-aos="zoom-in-right") A través del manejo adecuado del producto, precio, plaza y promoción, las organizaciones pueden responder a las necesidades del cliente, generar valor y alcanzar sus objetivos comerciales. Además, el <em>marketing mix</em> facilita la toma de decisiones estratégicas, permitiendo ajustar las acciones según el comportamiento del mercado y las tendencias del entorno.  A continuación, se presentan las variables y aplicabilidad:

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 3.
        |  Variables del <em>marketing mix</em>
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. Adaptado de Kotler y Armstrong, (2017).
        thead
          tr
            th.col-auto.col-lg-3 Variable
            th.col-auto.col-lg-auto Descripción
            th.col-auto.col-lg-auto Ejemplos
            th.col-auto.col-lg-3 Empresas que lo aplican
        tbody
          tr
            td.text-start Producto.
            td.text-start Bien o servicio ofrecido que satisface una necesidad o deseo del cliente.
            td.text-start Teléfonos inteligentes, ropa, alimentos, servicios de <em>streaming</em>.
            td.text-start Apple, Nike, Éxito, Netflix.
          tr
            td.text-start Precio.
            td.text-start Valor monetario asignado según costos, competencia y percepción de valor.
            td.text-start Precios bajos diarios, descuentos por temporada, precios <em>premium</em>, combos promocionales.
            td.text-start Walmart, D1, Ara, Amazon.
          tr
            td.text-start Plaza.
            td.text-start Canales de distribución utilizados para llevar el producto al consumidor.
            td.text-start Tiendas físicas, supermercados, comercio electrónico, domicilios, <em>apps</em> móviles.
            td.text-start Éxito, Olímpica, Mercado Libre, Rappi.
          tr
            td.text-start Promoción.
            td.text-start Estrategias de comunicación para dar a conocer y posicionar el producto.
            td.text-start Publicidad en redes sociales, ofertas 2 x 1, cupones, <em>influencers</em>, campañas en TV.
            td.text-start Coca-Cola, Pepsi, Falabella, Jumbo.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.col-xl-3.order-2.order-lg-1
        .tarjeta.color-primario-5.p-5.rounded-4.mb-3(data-aos="zoom-in-right")
          .row.justify-content-center.align-items-center.mb-0
            .col-12.col-lg-12.mb-0(data-aos="zoom-in-right")
              p.mb-3 Por ejemplo, Apple combina diseño (producto), precios <em>premium</em>, distribución selectiva y campañas publicitarias para fortalecer su posicionamiento.
            .col-lg-6.d-lg-block.d-none(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/tema2/img_11.png', class="img-fluid")
      .col-12.col-lg-8.col-xl-9.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_12.png', class="img-fluid")

    Separador

    .bg_img_8.mb-0

      #t_2_4.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.4 Objetivo
      .mb-0 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El objetivo del mercadeo es satisfacer necesidades del cliente de manera rentable, generando valor tanto para la organización como para el consumidor. En el contexto empresarial, esto implica no solo vender, sino construir relaciones sostenibles. Por ejemplo, una empresa puede buscar aumentar su participación de mercado mediante estrategias de fidelización.
           .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Además, el mercadeo busca identificar oportunidades de crecimiento, anticiparse a las tendencias y adaptarse a los cambios del entorno competitivo. De igual manera, contribuye a fortalecer la imagen de marca y a generar confianza en los clientes, lo que favorece la lealtad y la recompra a largo plazo.
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_14.png', class="img-fluid")
        .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_15.png', class="img-fluid") 

      Separador

      #t_2_5.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.5 Beneficios
      .mb-0 

    .bg_img_9.mb-0
    
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-md-8.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_17.png', class="img-fluid")
        .col-12.col-lg-8
          p.mb-3(data-aos="zoom-in-right") El mercadeo aporta beneficios tanto a la empresa como al consumidor, ya que facilita el intercambio de valor y mejora la competitividad organizacional. A través de sus estrategias, las empresas pueden posicionarse en el mercado, aumentar sus ventas y construir relaciones sólidas con sus clientes. Por ejemplo, el adecuado posicionamiento de una marca permite incrementar su reconocimiento y la preferencia del consumidor.
          p.mb-3(data-aos="zoom-in-right") Entre los principales beneficios del mercadeo se destacan:
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                .tarjeta--slider__content.text-center.mb-3 Mejora la competitividad: permite diferenciarse en el mercado.
              .tarjeta--color-white.h-100
                .tarjeta--02
                .tarjeta--slider__content.text-center.mb-3 Incrementa las ventas: aumenta la demanda de productos o servicios.
              .tarjeta--color-white.h-100
                .tarjeta--03
                .tarjeta--slider__content.text-center.mb-3 Fortalece la marca: posiciona la empresa en la mente del consumidor.
              .tarjeta--color-white.h-100
                .tarjeta--04
                .tarjeta--slider__content.text-center.mb-3 Fideliza clientes: genera relaciones a largo plazo.
    
      Separador

    .bg_img_10.mb-0
      
      #t_2_6.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.6 Características
      .mb-0 

      p.mb-3(data-aos="zoom-in-right") El mercadeo se caracteriza por ser dinámico, estratégico y orientado al cliente, adaptándose constantemente a los cambios del entorno. Entre sus principales características se destacan: 
      p.mb-5(data-aos="zoom-in-right") Estas características permiten a las organizaciones responder de manera efectiva a las demandas del mercado.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-4.mb-3.mb-lg-0
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Enfoque en el cliente.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Orientación estratégica.
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_23.png', class="img-fluid")
        .col-12.col-lg-4.mb-3.mb-lg-0
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Adaptabilidad al entorno.
          .tarjeta.color-primario-5.p-3.rounded-4.mb-3(data-aos="zoom-in-right")
            p.mb-0(data-aos="zoom-in-right") Uso de información para decisiones.

      Separador

    #t_2_7.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.7 Estructura
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") La estructura del mercadeo dentro de una organización define cómo se organizan las funciones comerciales para alcanzar los objetivos estratégicos. Además, permite coordinar áreas como ventas, publicidad e investigación de mercados, optimizando recursos y mejorando la toma de decisiones.

    br
    br
    br

    .bg_img_4.mb-0
    
      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Investigación de mercados
            p.mb-4 #[strong Función:] analizar información del entorno, comportamiento del consumidor y competencia para la toma de decisiones.
            p.mb-0 #[strong Ejemplos:] encuestas de satisfacción, estudios de tendencias, análisis de datos de clientes.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_24.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Ventas
            p.mb-4 #[strong Función:] ejecutar estrategias comerciales para cerrar negocios y generar ingresos.
            p.mb-0 #[strong Ejemplos:] ventas en tiendas físicas, comercio electrónico, atención personalizada al cliente.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_25.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Publicidad
            p.mb-4 #[strong Función:] comunicar el valor del producto o servicio para atraer y persuadir al consumidor.
            p.mb-0 #[strong Ejemplos:] anuncios en redes sociales, campañas en televisión, <em>marketing</em> con <em>influencers</em>.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_26.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Servicio al cliente
            p.mb-4 #[strong Función:] gestionar la relación con el cliente antes, durante y después de la compra.
            p.mb-0 #[strong Ejemplos:] atención en <em>call center</em>, soporte por chat, manejo de quejas y programas de fidelización.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema2/img_27.png', class="img-fluid")

      br
    br
    br

    p.mb-4(data-aos="zoom-in-right") En este contexto, una empresa de servicios integra de manera sistemática estas áreas para garantizar la coherencia entre el análisis, la planificación estratégica y la ejecución operativa, favoreciendo el logro de resultados consistentes.

    Separador

    .bg_img_11.mb-0
      
      #t_2_8.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.8 Segmentación
      .mb-0 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") La segmentación identifica y clasifica a los clientes en grupos homogéneos según características demográficas, geográficas, psicográficas y de comportamiento. Esta práctica permite a la empresa adaptar su oferta, productos y estrategias comerciales a las necesidades específicas de cada segmento, aumentando la efectividad de sus acciones y optimizando los recursos. Además, facilita la toma de decisiones, la personalización de la experiencia del cliente y la focalización en los segmentos con mayor potencial de crecimiento y fidelización.
           .tarjeta.tarjeta--fondo-img-2.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/tema2/img_30.png', class="img-fluid")
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Un caso ilustrativo es el de una cadena de supermercados que puede segmentar a sus clientes según el nivel socioeconómico, los hábitos de compra y la ubicación. De esta manera, tiene la posibilidad de ofrecer productos económicos para ciertos sectores, promociones específicas por zona y surtidos diferenciados de acuerdo con las preferencias del consumidor, lo que contribuye a mejorar la satisfacción y las ventas.
          p.mb-0(data-aos="zoom-in-right") De manera similar, Spotify segmenta a sus usuarios teniendo en cuenta la edad, los gustos musicales, los hábitos de escucha y el tipo de suscripción (gratuita o <em>premium</em>). Gracias a esta segmentación, la plataforma puede enviar recomendaciones personalizadas, generar <em>playlists</em> adaptadas a cada perfil y ofrecer promociones específicas que fomenten la suscripción <em>premium</em> y el <em>engagement</em> de los usuarios.
        .col-10.col-md-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_31.png', class="img-fluid") 

    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-acento-contenido.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema1/img_17.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Se invita a consultar el siguiente video para profundizar en el concepto de mercadeo, las variables del <em>marketing mix</em> y su aplicación en contextos empresariales:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://www.youtube.com/watch?v=KiqUOstzOsk" target="_blank")
                span <em>Marketing</em> mix, Las 4p del <em>Marketing</em>: cómo aplicarlas y ejemplos
                i.fas.fa-play-circle.ms-2
    
    .row.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12.col-lg-10.mb-5
        .tarjeta--bg-img.color-primario-70.rounded-3.overflow-hidden.p-2
          .row.align-items-center.mb-0
            .col-6.col-md-4.col-lg-2.mx-auto.text-center.p-4
              figure.m-2
                img(src="@/assets/curso/tema2/img_32.svg" )
            .col-12.col-md-8.col-lg-10.p-4
              p.fw-bold.text-white.mb-3 Con el fin de ampliar la información, se sugiere revisar la unidad de mercadeo y el <em>marketing mix</em> (pp. 77-105), a la cual se puede acceder a través del siguiente enlace:
              a.boton.color-acento-botones.d-inline-flex.mb-2(href="https://unimayor.edu.co/web/images/investigacionesunimayor/Sello_Editorial/2025/Libros_PDF/Gu%C3%ADa_Fundamentos_Marketing.pdf" target="_blank")
                span Guía de fundamentos de <em>marketing</em>
                i.fas.fa-play-circle.ms-2
</template>

<script>
export default {
  name: 'Tema2',
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
