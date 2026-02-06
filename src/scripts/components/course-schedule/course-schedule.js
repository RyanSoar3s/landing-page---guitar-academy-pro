import { qs, createElement } from "../../core/dom"

const renderCourseSchedule = () => {
  const app = qs("#app")

  createElement(app, "main", [], "")

  const main = qs("main")

  const schedule = [
    {
      number: 1,
      moduleName: "Introdução & Base",
      desc: "Apresentação da guitarra, acordes básicos, leitura de cifras e o início da teoria musical aplicada.",
      tag: ""

    },
    {
      number: 2,
      moduleName: "Estrutura Harmônica",
      desc: "Intervalos, escala maior e menor, campos harmônicos, formação de acordes e o sistema CAGED.",
      tag: ""

    },
    {
      number: 3,
      moduleName: "Harmonia Sofisticada",
      desc: "Inversões, acordes aumentados, suspensos, alterados, meio diminuto e diminuto, tensões e resoluções.",
      tag: ""

    },
    {
      number: 4,
      moduleName: "Percepção Musical",
      desc: "Função dos acordes, identificação de tonalidades, como tirar melodias e harmonias de ouvido.",
      tag: ""

    },
    {
      number: 5,
      moduleName: "Técnica & Improviso",
      desc: "Arpejos, pentatônicas, penta blues, tipos de palhetadas, tapping, two hands, harmônicos e pedais.",
      tag: "Popular"

    },
    {
      number: 6,
      moduleName: "Escalas & Modos",
      desc: "Focado nas escalas menor harmônica e melódica e uma introdução estratégica aos modos para improviso.",
      tag: ""

    },
    {
      number: 7,
      moduleName: "Maestria Modal & Velocidade",
      desc: "Campos harmônicos modais, música tonal vs modal, exercícios para velocidade e técnicas avançadas.",
      tag: "Master"

    }

  ]

  let content = `
    <h2 class="cs-title relative font-bolder text-center">Cronograma do <span class="color-gold">Curso</span></h2>
    <div class="cs-cards relative flex flex-col relative">

  `

  for (const sch of schedule) {
    content += `
        <div class="cs-card relative flex">
          <div class="cs-number flex-center font-bolder">
            <div>0${sch.number}</div>

          </div>
          <div class="cs-info">
            <h3 class="color-gold">${sch.moduleName}</h3>
            <p class="color-gray font-light">${sch.desc}</p>

          </div>
    `

    if (sch.tag) {
      content += `
          <h4 class="cs-tag color-gold absolute">${sch.tag}</h4>

      `

    }

    content += `
        </div>
    
    `

  }
  content += `
    </div>
  
  `

  const classes = [ "flex-center", "flex-col" ]
  createElement(main, "section", classes, content)

}

export default renderCourseSchedule
