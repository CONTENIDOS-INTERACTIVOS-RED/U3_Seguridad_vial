<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Mecanismos de comunicación y participación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-lg
        p.mb-0 La implementación de mecanismos efectivos de comunicación y participación es esencial para garantizar el éxito de las políticas y actividades relacionadas con la seguridad vial en todos los niveles de la organización. Estos mecanismos deben promover la inclusión, la bidireccionalidad y la responsabilidad compartida, integrando desde la alta dirección hasta los colaboradores operativos. Principales componentes de la comunicación y participación organizacional.     
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/37.png")          

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/38.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Canales de comunicación interna")
            p Deben ser claros, abiertos y efectivos, permitiendo la difusión oportuna de políticas, lineamientos, procedimientos y actividades del PESV. Incluyen reuniones, boletines, plataformas digitales, correos electrónicos, carteles y materiales visuales.
          .div(titulo="Comunicación bidireccional")
            p Se debe fomentar un flujo de información en doble vía, donde los colaboradores puedan expresar inquietudes, dudas o propuestas de mejora.   
          .div(titulo="Espacios de participación activa")
            p Se recomienda contar con encuestas, buzones de sugerencias, reuniones, comités de seguridad vial y otros mecanismos que fortalezcan el diálogo y la toma de decisiones colectivas.  
          .div(titulo="Canales para comunicaciones externas")
            p La organización debe atender de forma eficiente consultas, denuncias, incidentes y comunicaciones con actores externos: autoridades, proveedores y comunidad.  
    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Formación y sensibilización")
            p Campañas educativas, talleres y capacitaciones deben reforzar hábitos y comportamientos seguros en el uso de la vía pública.
          .div(titulo="Lecciones aprendidas")
            p Cada siniestro vial debe analizarse para identificar causas raíz, evaluar fallas y difundir aprendizajes, promoviendo la mejora continua.  
          .div(titulo="Periodicidad mínima")
            p La comunicación sobre seguridad vial debe realizarse, como mínimo, de forma trimestral, incluyendo informes o reuniones sobre el avance del PESV y los indicadores.           
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/39.png", alt="") 

    p(data-aos="fade-down") Los objetivos claves de los mecanismos de comunicación y participación, son: 
    .bg-full-width.bg-color-3(data-aos="fade-left")
      .px-4    
        .row.mb-5
          .col-lg-8.j1.mb-3.mb-lg-0
            .bg-color-3.p-4(data-aos="fade-left")
              ul.lista-ul--color.mb-0            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Difundir de forma comprensible las políticas y procedimientos del PESV.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Fomentar la participación activa de todos los niveles organizacionales.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Promover una cultura de seguridad vial basada en la responsabilidad, la prevención y el aprendizaje continuo.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Fortalecer el análisis crítico de los incidentes viales y convertirlos en oportunidades de mejora.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Mantener alineación y compromiso organizacional mediante información sistemática y actualizada.
              p(data-aos="fade-left") La organización tiene la obligación de documentar y mantener actualizados estos mecanismos, asegurando que respondan a las necesidades del entorno operativo y permitan una comunicación efectiva y participativa. Establecer una frecuencia regular, al menos trimestral, es clave para mantener informados, involucrados y comprometidos a todos los actores, consolidando una cultura preventiva robusta y sostenible.           
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/40.png", data-aos="zoom-in")   

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://minciencias.gov.co/planeacion_gestion/plan-estrategico-seguridad-vial-2025" target="_blank" rel="noopener noreferrer") Minciencias. (2025). Plan estratégico de seguridad vial 2025. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.isotools.us/normas/riesgos-y-seguridad/iso-39001/" target="_blank" rel="noopener noreferrer") ISOTools. (2025). ISO 39001 - Software ISO 39001 de Sistemas de Gestión. Software ISO. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
