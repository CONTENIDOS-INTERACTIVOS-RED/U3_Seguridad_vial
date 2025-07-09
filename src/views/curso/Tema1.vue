<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Seguimiento, auditoría y mejora continua de la seguridad vial laboral.'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/3.svg")
            .col-lg
              p.mb-0 La seguridad vial laboral es un pilar esencial para garantizar un entorno de trabajo seguro y saludable, especialmente en sectores como la construcción, la logística o el transporte de mercancías y pasajeros, donde la movilidad es parte fundamental de las operaciones. Una gestión eficaz en esta área reduce accidentes y lesiones, mejora la productividad, promueve la responsabilidad social corporativa y refuerza la imagen institucional.
        p(data-aos="fade-left") En este marco, el seguimiento, la auditoría y la mejora continua, se consolidan como herramientas claves para una gestión proactiva y eficiente. A continuación, se presenta una comparación de estos tres elementos:

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/4.png", data-aos="zoom-in")

    .bg-full-width.bg-color-info.mb-5
      .p-4.pb-0
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img.img-a.img-t(src='@/assets/curso/temas/5.png', alt='')

                .bg-color-white.box-shadow.p-3(x="8.1%" y="28%" numero="+")
                  h5 Seguimiento     
                  p.mb-0 Implica la #[b monitorización constante] de condiciones, comportamientos y resultados relacionados con la seguridad vial. Permite detectar riesgos o desviaciones a tiempo.
                .bg-color-white.box-shadow.p-3(x="23.4%" y="66.8%" numero="+")
                  h5 Auditoría     
                  p.mb-0 Consiste en una #[b evaluación sistemática y objetiva] de las prácticas y controles implementados. Verifica su cumplimiento y eficacia.
                .bg-color-white.box-shadow.p-3(x="89%" y="20.7%" numero="+")
                  h5 Mejora continua      
                  p.mb-0 Es una #[b filosofía de perfeccionamiento permanente] basada en ciclos de evaluación, retroalimentación y ajuste. Fortalece la adaptación y sostenibilidad.                                    

    p(data-aos="fade-down") Este enfoque integral permite:

    .row.justify-content-center.mb-5           
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.h-100.p-3
          .row        
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/6.svg")
            .col-lg        
              h5(data-aos="fade-down") 01                           
              p.mb-0(data-aos="fade-up") Identificar y corregir deficiencias.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.h-100.p-3
          .row        
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/7.svg")
            .col-lg        
              h5(data-aos="fade-down") 02                           
              p.mb-0(data-aos="fade-up") Fomentar una gestión participativa y orientada a la prevención.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-6.h-100.p-3
          .row
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/8.svg")
            .col-lg
              h5(data-aos="fade-down") 03                          
              p.mb-0(data-aos="fade-up") Alinear la seguridad vial con los objetivos de salud ocupacional y sostenibilidad.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/9.png", data-aos="zoom-in")      
      .col-lg-8.j1
        p(data-aos="fade-left") Para lograr una implementación efectiva, se requiere:

        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          ul.lista-ul--color.mb-0            
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Compromiso firme de la alta dirección.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Formación continua del personal.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Uso de tecnologías de monitoreo y análisis de datos.
            li.d-flex
              i.far.fa-arrow-alt-circle-right.color-1
              p.mb-0 Una cultura organizacional centrada en la prevención y la responsabilidad compartida.
        p(data-aos="fade-left") En resumen, una gestión robusta basada en seguimiento, auditoría y mejora continua, asegura entornos laborales más seguros, eficientes y responsables.

    h3(data-aos="fade-down") Seguimiento y medición del desempeño en seguridad vial laboral


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El seguimiento dentro del Plan Estratégico de Seguridad Vial (PESV) corresponde al conjunto de acciones sistemáticas implementadas por una organización para supervisar, verificar y garantizar la correcta ejecución del plan. Este proceso implica la observación continua, la medición del cumplimiento de objetivos y la identificación de desviaciones que puedan requerir ajustes o mejoras.

        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/10.svg")
            .col-lg
              p.mb-0 Durante esta fase, el Comité de Seguridad Vial desempeña un rol fundamental, dado que se encarga de revisar trimestralmente los datos estadísticos, los indicadores de desempeño y los resultados derivados de auditorías internas o externas. Esta evaluación periódica permite determinar la efectividad de las estrategias aplicadas y facilita una toma de decisiones informada para fortalecer la seguridad vial en el entorno laboral.
        p(data-aos="fade-left") A continuación se presentan los pasos estructurados para el seguimiento del PESV, diferenciados por nivel de implementación:

      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", data-aos="zoom-in")    

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Pasos operativos según el nivel de implementación del PESV

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Paso
            th PESV Básico
            th PESV Estándar
            th PESV Avanzado
        tbody
          tr
            td Indicadores y reporte de autogestión del PESV.
            td Aplica.
            td Aplica.
            td Aplica.
          tr
            td Registro y análisis estadístico de siniestros viales.
            td No aplica.
            td No aplica.
            td Aplica.
          tr
            td Auditoría anual.
            td Aplica.
            td Aplica.
            td Aplica. 

    h3(data-aos="fade-down") Gestión de indicadores de seguimiento
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img.img-a.img-t(src="@/assets/curso/temas/12.png", data-aos="zoom-in")      
      .col-lg-8.j1
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          p(data-aos="fade-down") La organización debe establecer un protocolo único para gestionar los indicadores que permitan realizar el seguimiento, medición, análisis y evaluación en materia de seguridad vial. Estos indicadores deben estar directamente vinculados con las etapas del PESV: planificación, implementación, monitoreo y mejora, así como con la verificación del impacto y resultados de las acciones y estrategias definidas en el Paso 9: Plan anual de trabajo (aplicable a todos los niveles).

        p(data-aos="fade-down") Los datos relacionados con las variables a medir, los resultados obtenidos y el grado de cumplimiento deben ser analizados y evaluados por el Comité de Seguridad Vial, asegurando así una retroalimentación continua que contribuya a la mejora del desempeño en seguridad vial laboral.


    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Indicadores de Gestión en Seguridad Vial
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Indicadores de Gestión en Seguridad Vial, donde se aborda un conjunto detallado de indicadores diseñados para medir, evaluar y mejorar la seguridad vial en una organización o flota vehicular. 
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Indicadores de Gestión en Seguridad Vial
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/13.png', alt='')  

    p(data-aos="fade-down") En el proceso de definición de indicadores adicionales a los establecidos como mínimos del Plan Estratégico de Seguridad Vial (PESV), la organización deberá garantizar que cada uno cumpla con una serie de criterios esenciales que aseguren su funcionalidad y efectividad. Estos criterios son los siguientes:

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5 
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src='@/assets/curso/temas/14.png', alt='')   

          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Claridad y especificidad
                p El indicador debe ser claro, específico y comprensible, evitando ambigüedades o interpretaciones múltiples.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Precisión en la medición
                p Debe expresar con exactitud qué se pretende medir, de modo que cualquier persona pueda entender su propósito, sin explicaciones técnicas adicionales.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Nombre representativo
                p Su denominación debe permitir inferir la tendencia del resultado esperado: creciente, decreciente o estable.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Fuente de información confiable
                p Es indispensable que los datos provengan de fuentes verificables y confiables.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Línea base y metas 
                p Se debe definir una línea base y establecer metas concretas para evaluar el desempeño.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Periodicidad de medición 
                p Los indicadores deben medirse en cortes trimestrales fijos: 31 de marzo, 30 de junio, 30 de septiembre y 31 de diciembre. 

        p(data-aos="fade-down") A continuación, se presenta una descripción formal y estructurada del contenido requerido para el reporte anual de autogestión del Plan Estratégico de Seguridad Vial (PESV), el cual debe ser enviado a las autoridades competentes utilizando los canales oficiales dispuestos.

        .row.justify-content-center.align-items-center
          .col-lg-6.mb-3.mb-lg-0             
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Reporte anual del PESV: requisitos y contenido"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )    
          .col-lg-6.p-0
            figure
              img.img-a.img-t(src="@/assets/curso/temas/21.svg", data-aos="zoom-in")    


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mintransporte.gov.co/publicaciones/2942/seguridad-vial/" target="_blank" rel="noopener noreferrer") Ministerio de Transporte – Colombia Seguridad Vial. (2014). 2º. ENCUENTRO NACIONAL DE INVESTIGACIONES SOBRE SEGURIDAD VIAL, Octubre 23 de 2014. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.movilidadbogota.gov.co/web/" target="_blank" rel="noopener noreferrer") Secretaría Distrital de Movilidad. (s.f.). Secretaría Distrital de Movilidad. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://open.spotify.com/show/1HDGyC9yrho7cK2RL3r4Lf?si=21aacd3d7b38491d" target="_blank" rel="noopener noreferrer") SGI empresarial. (2024). ISO 39001: La Norma de Gestión para Reducir Accidentes de Tránsito. Capítulo 4. (pódcast). 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
