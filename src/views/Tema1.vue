<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Orientaciones para la operación de cada entorno en el marco de los componentes y líneas de acción
    
    p Antes de presentar las orientaciones, se recomienda que recuerde el concepto de entornos y, así, comprender la operación de estos:
    p.mb-5 Los entornos, según Conasa (2015, p. 22), se conciben como:

    .row.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        .bloque-texto-b.color-acento-contenido.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #72C3E0; font-size: 2em")
            p.mb-0 Los escenarios de vida cotidiana en los cuales los sujetos se desarrollan, donde constituyen su vida subjetiva, construyen vínculos y relaciones con la vida social, histórica, cultural y política de la sociedad a la que pertenecen. Son escenarios configurados por dinámicas y por condiciones sociales, físicas, ambientales, culturales, políticas y económicas, donde las personas, las familias y las comunidades conviven y en los que se produce una intensa y continua interacción y transformación entre ellos y el contexto que les rodea. Se caracterizan por tener sujetos con roles definidos y una estructura organizativa, que comprende condiciones de base sociodemográfica que pueden ser urbanas o rurales.
            i.fas.fa-quote-right(style="color: #72C3E0; font-size: 2em")
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p Teniendo claridad sobre el concepto de entorno, se precisa que, en Colombia, se definen seis componentes con sus respectivas líneas de acción que permiten la operación de entornos saludables para la comunidad en general. 
        p.mb-0 Estas líneas plantean, de manera integral, las actuaciones y participaciones que coadyuven en el desarrollo humano, la condición de vida y el adelanto ostensible de las personas, familias y comunidades. 

    .BGM02.pt-4.px-md-5.px-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-9.order-lg-1.order-2
          p Los seis componentes dan respuesta a las dimensiones ambientales, sociales, políticas y económicas, las cuales conforman las bases fundamentales para desarrollar integralmente las líneas de acción, las que, a su vez, se despliegan en actuaciones encaminadas a fortalecer e ilustrar lo propuesto en cada componente. Por esto, es importante conocer la interrelación que existe entre los componentes y sus respectivas líneas de acción para la operación de cada entorno.
          p.mb-0 La siguiente tabla presenta los seis componentes con sus correspondientes líneas de acción:
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img03.png' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Tabla 1.
          span Componentes de la operación de los entornos
        .tabla-a.color-secundario.mb-5 
          table(data-aos="zoom-in"  alt="Tabla que relaciona los componentes de la operación de los entornos.")
            caption Nota. <a style="font-weight: 400">MinSalud (2016).</a>
            thead
              tr
                th(style="background-color: #288640; width: 20%;").text-center.text-white Componente
                th(style="background-color: #288640; width: 25%;").text-center.text-white Nombre
                th(style="background-color: #288640; width: 55%;").text-center.text-white Líneas de acción
            tbody
              tr
                th(style="border: 1px solid #D3D3D3").text-center 1
                td(style="border: 1px solid #D3D3D3") Políticas y normatividad para la promoción del desarrollo humano, la calidad de vida y el desarrollo sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 1.1
                      | Formulación, implementación, adopción, consolidación, seguimiento y evaluación de políticas.
                    li(style="display: flex") 
                      span.text-bold 1.2
                      | Armonización y articulación de políticas e instrumentos (nacionales, territoriales, institucionales).
              tr
                th(style="border: 1px solid #D3D3D3").text-center 2
                td(style="border: 1px solid #D3D3D3") Ambientes que favorecen el desarrollo humano, la calidad de vida y el Desarrollo Sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 2.1
                      | Implementación y fortalecimiento de estrategias de promoción de espacios físicos, sociales y ambientales seguros, incluyentes, equitativos y sostenibles.
                    li(style="display: flex") 
                      span.text-bold 2.2
                      | Consolidación y acuerdos intersectoriales para la promoción de entornos saludables.
                    li(style="display: flex") 
                      span.text-bold 2.3
                      | Coordinación y articulación para la gestión de infraestructuras, bienes y servicios seguros, incluyentes y sostenibles.
              tr
                th(style="border: 1px solid #D3D3D3").text-center 3
                td(style="border: 1px solid #D3D3D3") Gestión de servicios sociales orientados a la respuesta integral e integrada para el desarrollo humano, la calidad de vida y el desarrollo sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 3.1
                      | Identificación y análisis de necesidades, brechas y potencialidades sociales y de salud para la promoción de entornos saludables.
                    li(style="display: flex") 
                      span.text-bold 3.2
                      | Gestión para la dinamización de respuestas integrales e integradas.
                    li(style="display: flex") 
                      span.text-bold 3.3
                      | Fortalecimiento de redes y alianzas estratégicas para dinamización de respuestas integrales.
                    li(style="display: flex") 
                      span.text-bold 3.4
                      | Fortalecimiento de las entidades territoriales.
              tr
                th(style="border: 1px solid #D3D3D3").text-center 4
                td(style="border: 1px solid #D3D3D3") Educación integral e integrada para la promoción del desarrollo humano, la calidad de vida y el desarrollo sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 4.1
                      | Diseño e implementación de procesos de información y herramientas de educación y comunicación.
                    li(style="display: flex") 
                      span.text-bold 4.2
                      | Coordinación de acciones sectoriales e intersectoriales orientadas a generar procesos de formación.
                    li(style="display: flex") 
                      span.text-bold 4.3
                      | Fortalecimiento de capacidades institucionales para el desarrollo de procesos formativos.
              tr
                th(style="border: 1px solid #D3D3D3").text-center 5
                td(style="border: 1px solid #D3D3D3") Participación social y comunitaria para el desarrollo humano, la calidad de vida y el desarrollo sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 5.1
                      | Fortalecimiento de capacidades individuales, colectivas, institucionales para el ejercicio de la ciudadanía.
                    li(style="display: flex") 
                      span.text-bold 5.2
                      | Gestión para el fortalecimiento de la participación social en los 31 espacios y mecanismos establecidos.
                    li(style="display: flex") 
                      span.text-bold 5.3
                      | Conformación y/o fortalecimiento de redes o grupos de gestión para la movilización y el control social.
              tr
                th(style="border: 1px solid #D3D3D3").text-center 6
                td(style="border: 1px solid #D3D3D3") Gestión del conocimiento para la promoción del desarrollo humano, la calidad de vida y desarrollo sostenible.
                td(style="border: 1px solid #D3D3D3")
                  ol.lista-ol
                    li(style="display: flex") 
                      span.text-bold 6.1
                      | Articulación con sectores y actores públicos, privados, académicos, ONGs y comunitarios para la difusión, gestión y/o construcción del conocimiento.
                    li(style="display: flex") 
                      span.text-bold 6.2
                      | Sistematización y apropiación de conocimientos enmarcados en los principios de la investigación social.
                    li(style="display: flex") 
                      span.text-bold 6.3
                      | Investigación e innovación social.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .BGR03.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-3.col-lg-2.px-4
              img(src="@/assets/curso/temas/img02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Componentes de los entornos saludables
                  p.mb-0 En el video “Componentes de los entornos saludables”, se describen cada uno de los componentes de manera concreta, con sus principales características:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/gknpxVuqG3I" target="_blank")
                    span Ver
                    i.fas.fa-link 

    p.mb-5 Para la implementación de cada una de las líneas de acción, se hace necesario conocer los espacios definidos, los procesos y las actividades que se requieren dentro de cada componente, para permitir la operación de los entornos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .BGR04.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-3.col-lg-2.px-4
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Lineamientos nacionales de entornos
                  p.mb-0 En el siguiente documento suministrado por el Ministerio de Salud, en su página 25, está dispuesta esta información de manera detallada, revísela con detalle:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf#" target="_blank")
                    span Descargar
                    i.fas.fa-link
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
