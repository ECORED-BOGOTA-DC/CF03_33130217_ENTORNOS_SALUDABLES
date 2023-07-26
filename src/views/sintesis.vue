<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Los entornos saludables son vitales para el mejoramiento de la calidad de vida de las personas, es por esto que no solo se deben aplicar estrategias para el mejoramiento continuo de la calidad de la prestación de salud, sino que debe incluir de igual manera estrategias para los demás contextos, como el hogar, los lugares de trabajo, oportunidades de crecimiento, mejoramiento en las áreas de esparcimiento, entre otros, de manera que el bienestar sea completo logrando con esto la articulación de los diferentes entornos lo que permitirá proteger  tanto los factores físicos como los sociales. A través del siguiente mapa, se esquematizan los temas abordados en este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
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
