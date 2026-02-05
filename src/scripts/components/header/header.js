import { createElement } from "../../core/dom"

const renderHeader = (app) => {
  const content = `
    <h1 class="header-title text-center font-xbold">O MAPA DA <span class="color-gold">MAESTRIA</span> NA GUITARRA</h1>
    <p class="font-light text-center color-gray">De iniciante a guitarrista avançado com um cronograma focado em resultados reais.</p>

  `

  const classes = [ "flex-center", "flex-col" ]

  createElement(app, "header", classes, content)

}

export default renderHeader
