<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Planificación, preparación y ejecución de la auditoría interna'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/22.svg")
            .col-lg
              p.mb-0 La organización debe realizar al menos una auditoría interna anual, con el objetivo de evaluar, de forma exhaustiva, el cumplimiento y la efectividad de las acciones asociadas al Plan Estratégico de Seguridad Vial (PESV). Esta auditoría debe abarcar todas las fases del plan: planificación, implementación, seguimiento y mejora continua, asegurando su alineación con los lineamientos del Capítulo I de la Metodología del diseño, implementación y verificación de Planes Estratégicos de Seguridad Vial.
        p(data-aos="fade-left") Asimismo, deben considerarse los requisitos legales aplicables y aquellos requisitos adicionales que la organización haya definido. En caso de que algunos pasos del PESV no sean aplicables, esta condición debe validarse y documentarse adecuadamente, durante la auditoría. Los elementos fundamentales del procedimiento de auditoría son: 

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in")

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/24.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Documentación del procedimiento")
            p Debe existir un procedimiento formal que regule la auditoría interna, incluyendo planificación, ejecución, responsables y estructura del informe.
          .div(titulo="Seguimiento de hallazgos")
            p Se requiere un proceso riguroso para gestionar #[b no conformidades], así como planes de acción correctiva o preventiva.    
          .div(titulo="Competencia del auditor")
            p Debe cumplir los criterios establecidos en el Paso 10 del PESV: contar con formación específica y conocimientos técnicos en auditoría.    
          .div(titulo="Plan de formación")
            p La organización debe contar con un #[b plan anual de formación] para auditores internos, que incluya todos los niveles organizacionales.                                                                  
            

    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Independencia del auditor")
            p El auditor no debe ser el mismo que lidera el diseño e implementación del PESV, garantizando la #[b objetividad e imparcialidad.]
          .div(titulo="Participación del Comité de Seguridad Vial")
            p Este comité debe intervenir en la #[b planificación de la auditoría], definiendo fechas, alcances y responsables.    
          .div(titulo="Modalidad de auditoría")
            p Se permite la modalidad virtual, aunque se recomienda que sea #[b presencial] para facilitar observaciones directas y aplicar técnicas de muestreo.    
          .div(titulo="Auditorías integradas")
            p La organización puede realizar auditorías que integren varios sistemas de gestión, siguiendo las directrices de la norma ISO 19011.             
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", alt="")   

    .bg-full-width.bg-color-2.p-4.mb-4(data-aos="fade-left")
      .row.align-items-start
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/26.svg")
        .col-lg
          p.mb-0 La auditoría interna es un insumo esencial del Paso 20 del PESV, dado que su informe debe ser incluido en el reporte anual de autogestión, asegurando la transparencia, el cumplimiento normativo y la mejora continua de la gestión en seguridad vial. 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.movilidadbogota.gov.co/web/preguntas_frecuentes/en_que_consiste_el_plan_estrategico_de_seguridad_vial_pesv_quienes_deben" target="_blank" rel="noopener noreferrer") Secretaría Distrital de Movilidad. (2025). ¿En qué consiste el Plan Estratégico de Seguridad Vial -PESV-, quiénes deben implementarlo y que entidad vigila su correcta ejecución? 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.colombiaaprende.edu.co/contenidos/plataforma/escuela-virtual-de-seguridad-vial" target="_blank" rel="noopener noreferrer") Acarreno. (s.f.). Escuela virtual de seguridad vial | Colombia Aprende. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/episode/2DwT6gUNAfS8dtHoNpsjEr" target="_blank" rel="noopener noreferrer") SGI empresarial. (2024). ISO 39001: La Norma de Gestión para Reducir Accidentes de Tránsito. Capítulo 1. (pódcast). 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
