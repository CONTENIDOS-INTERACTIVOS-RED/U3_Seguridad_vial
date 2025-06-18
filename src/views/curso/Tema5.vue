<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Integración de la seguridad vial con otros sistemas de gestión'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-lg
        p.mb-0 La integración de la seguridad vial con otros sistemas de gestión, como las normas ISO 39001, ISO 45001 e ISO 14001, representa una estrategia integral para mejorar la seguridad, la eficiencia y la sostenibilidad en las organizaciones. Esta integración permite abordar de manera holística los riesgos y responsabilidades operacionales, mediante una visión unificada que favorece el cumplimiento normativo, la mejora continua y la gestión eficiente de recursos. Cada norma aporta un enfoque complementario. La siguiente tabla resume sus aportes claves:   
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/41.png")    

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Normas ISO 

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Norma ISO
            th Enfoque principal
            th Aportes a la seguridad vial
        tbody
          tr
            td.text-bold ISO 39001
            td Gestión de la seguridad vial.
            td Reduce riesgos viales, protege la vida e integridad de empleados y comunidades, y gestiona peligros en el tránsito.
          tr
            td.text-bold ISO 45001
            td Gestión de la salud y seguridad en el trabajo.
            td Fortalece políticas preventivas, promueve ambientes laborales seguros e integra la seguridad vial como parte del entorno.
          tr
            td.text-bold ISO 14001
            td Gestión ambiental.
            td Minimiza impactos ambientales, optimiza rutas, fomenta mantenimiento responsable y promueve la conducción sostenible.                       

    p(data-aos="fade-down") La implementación conjunta de estas normas permite:

    .bg-full-width.bg-color-3(data-aos="fade-left")
      .px-4    
        .row
          .col-lg-8.j1.mb-3.mb-lg-0
            .bg-color-3.p-4(data-aos="fade-left")
              ul.lista-ul--color.mb-0            
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Reducir accidentes] y sus costos asociados.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Fortalecer la reputación corporativa] mediante la responsabilidad social y el compromiso con la seguridad.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 #[b Promover una cultura organizacional] orientada a la #[b prevención], la #[b sostenibilidad] y la #[b excelencia operativa].
                li.d-flex
                  i.far.fa-arrow-alt-circle-right.color-1
                  p.mb-0 Garantizar una #[b movilidad segura y sostenible], con procesos alineados a buenas prácticas internacionales.
              p(data-aos="fade-left") La integración de la seguridad vial con sistemas de gestión como ISO 39001, ISO 45001 e ISO 14001 potencia la protección de las personas, el medio ambiente y los activos de la organización, consolidando un marco estratégico robusto para la toma de decisiones responsables.     
          .col-lg-4
            figure
              img.img-a.img-t(src="@/assets/curso/temas/42.png", data-aos="zoom-in")   


    .bg-full-width.bg-color-8.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Elaboración de plan de emergencias y contingencias viales
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Elaboración de plan de emergencias y contingencias viales, donde se aborda la importancia de diseñar un plan integral para gestionar eficazmente emergencias en las vías.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Elaboración de plan de emergencias y contingencias viales
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/43.png', alt='') 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.arlsura.com/index.php/173-noticias-riesgos-profesionales/noticias/2282-como-se-debe-implementar-el-plan-estrategico-de-seguridad-vial" target="_blank" rel="noopener noreferrer") ARL SURA (s.f.). ¿Cómo se debe implementar el Plan estratégico de seguridad vial? 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.policia.gov.co/jefatura-nacional-del-servicio-de-policia/ditra/transito-y-transporte" target="_blank" rel="noopener noreferrer") Cisc. (2025). Tránsito y Transporte | Policía Nacional de Colombia. Policía Nacional de Colombia. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.insst.es/" target="_blank" rel="noopener noreferrer") Instituto Nacional de Seguridad y Salud en el Trabajo - INSST - Prevención de Riesgos Laborales - Portal INSST - INSST. (s.f.). Portal INSST.  



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Seguridad vial en el entorno laboral',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes elementos NO es un indicador obligatorio del PESV en todos los niveles de implementación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tasa de siniestros viales por nivel de pérdida (TSV)',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Registro y análisis estadístico de siniestros viales.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Cumplimiento de actividades del plan anual (CPtan PESV)',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Cumplimiento del plan de formación en seguridad vial (CPF PESV)',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el propósito principal de la auditoría interna en el contexto del PESV?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluar la eficiencia del personal de seguridad vial.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Verificar la correcta planificación, implementación y mejora del PESV.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Recolectar datos sobre siniestros para enviarlos al ministerio.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Capacitar al comité de seguridad vial.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué característica debe cumplir todo indicador adicional propuesto en el PESV para ser considerado funcional y efectivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Tener un diseño visual atractivo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Contar con fuentes de información confiables y verificables.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Estar alineado con la legislación internacional.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ser evaluado por el Ministerio de Transporte.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué se debe garantizar al planificar una auditoría interna del PESV?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Que sea aprobada por la Superintendencia de Transporte.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Que exista independencia entre el auditor y el implementador.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Que los auditores sean los mismos que implementaron el PESV.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Que se realice de manera virtual obligatoriamente.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué norma internacional se enfoca específicamente en la gestión de la seguridad vial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'ISO 14001.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'ISO 39001.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'ISO 9001.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'ISO 49001.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
