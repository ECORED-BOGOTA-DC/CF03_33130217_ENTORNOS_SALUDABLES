<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A través del siguiente mapa, podrá ver la conceptualización abordada en este componente formativo, el cual resume de manera puntual lo visto en él:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la operación y seguimiento de las estrategias de entornos saludables, lo cual se compone de:<br>Orientaciones para la operación de cada entorno:Políticas y normatividad.Ambientes para el desarrollo humano.Gestión de servicios sociales.Educación integral.Participación social y comunitaria.Gestión del conocimiento.<br>Herramientas para la implementación:Social y ambiental.Seguimiento.Educativas.<br>Seguimiento y monitoreo:Resultados esperados.Indicadores.Análisis y resultados.Acciones de mejora.<br>Articulaciones entre entornos:Hogar.Educativo.Laboral.Comunitario.Institucional.")
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
