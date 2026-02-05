import { createElement } from "../../core/dom"

const renderCourseSchedule = (app) => {
  const content = `
    <h2 class="cs-title relative font-bolder text-center">Cronograma do <span class="color-gold">Curso</span></h2>
    <div class="cs-cards relative flex flex-col relative">
      <div class="cs-card flex">
        <div class="cs-number flex-center font-bolder">
          <div>01</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Introdução & Base</h3>
          <p class="color-gray font-light">Apresentação da guitarra, acordes básicos, leitura de cifras e o início da teoria musical aplicada.</p>

        </div>

      </div>     
      <div class="cs-card flex">
        <div class="cs-number flex-center font-bolder">
          <div>02</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Estrutura Harmônica</h3>
          <p class="color-gray font-light">Intervalos, escala maior e menor, campos harmônicos, formação de acordes e o sistema CAGED.</p>

        </div>

      </div>
      <div class="cs-card flex">
        <div class="cs-number flex-center font-bolder">
          <div>03</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Harmonia Sofisticada</h3>
          <p class="color-gray font-light">Inversões, acordes aumentados, suspensos, alterados, meio diminuto e diminuto, tensões e resoluções.</p>

        </div>

      </div>
      <div class="cs-card flex">
        <div class="cs-number flex-center font-bolder">
          <div>04</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Percepção Musical</h3>
          <p class="color-gray font-light">Função dos acordes, identificação de tonalidades, como tirar melodias e harmonias de ouvido.</p>

        </div>

      </div>
      <div class="cs-card relative flex">
        <div class="cs-number flex-center font-bolder">
          <div>05</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Técnica & Improviso</h3>
          <p class="color-gray font-light">Arpejos, pentatônicas, penta blues, tipos de palhetadas, tapping, two hands, harmônicos e pedais.</p>

        </div>
        <h4 class="cs-tag color-gold absolute">Popular</h4>
 
      </div>
      <div class="cs-card flex">
        <div class="cs-number flex-center font-bolder">
          <div>06</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Escalas & Modos</h3>
          <p class="color-gray font-light">Focado nas escalas menor harmônica e melódica e uma introdução estratégica aos modos para improviso.</p>

        </div>

      </div>   
      <div class="cs-card relative flex">
        <div class="cs-number flex-center font-bolder">
          <div>07</div>

        </div>
        <div class="cs-info">
          <h3 class="color-gold">Maestria Modal & Velocidade</h3>
          <p class="color-gray font-light">Campos harmônicos modais, música tonal vs modal, exercícios para velocidade e técnicas avançadas.</p>

        </div>
        <h4 class="cs-tag color-gold absolute">Master</h4>

      </div>    

    </div>
  
  `

  const classes = [ "flex-center", "flex-col" ]

  createElement(app, "main", classes, content)

}

export default renderCourseSchedule
