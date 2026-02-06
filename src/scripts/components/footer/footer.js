import { qs, createElement } from "../../core/dom";

const renderFooter = () => {
  const app = qs("#app")

  const date = new Date()

  const content = `
    <h4 class="text-center font-semibold color-gray">GUITAR ACADEMY PRO © ${date.getFullYear()}</h4>

    <p class="text-center color-gray font-light">CNPJ: 00.000.000/0001-00 | Todos os direitos reservados.</p>

    <p class="text-center color-gray font-light">Aracaju, Sergipe, Brasil.</p>

  `

  const classes = [ "footer", "flex-center", "flex-col", "bg-dark" ]

  createElement(app, "footer", classes, content)

}

export default renderFooter
