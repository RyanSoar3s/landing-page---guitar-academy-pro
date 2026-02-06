import { qs, createElement } from "../../core/dom"

const renderFaq = () => {
  const main = qs("main")

  const faqs = [
    {
      title: "O acesso ao curso é imediato?",
      res: "Sim! Assim que seu pagamento for confirmado, você receberá automaticamente os dados de acesso em seu e-mail."

    },
    {
      title: "Quais as formas de pagamento?",
      res: "Você pode pagar via Cartão de Crédito (em até 12x), PIX ou Boleto Bancário através da nossa plataforma segura."

    },
    {
      title: "Como funciona a garantia?",
      res: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não gostar do curso, devolvemos 100% do seu dinheiro."

    },
    {
      title: "Vou ter suporte para dúvidas?",
      res: "Sim! Temos uma área de membros exclusiva onde você pode deixar suas perguntas e o professor responde pessoalmente."

    },
    {
      title: "Por quanto tempo terei acesso?",
      res: "O acesso é vitalício. Você pode assistir às aulas no seu ritmo, quantas vezes quiser, para sempre."

    }

  ]

  let content = `
    <h2 class="faqs-title text-center">Dúvidas frequentes</h2>
    <div class="faqs-list flex-center flex-col">

  `

  for (const faq of faqs) {
    content += `
        <div class="faqs-faq">
          <button class="faqs-button flex-center justify-between color-gold font-semibold">${faq.title}</button>
          <div class="faqs-res font-light color-gray">${faq.res}</div>

        </div>

    `

  }

  content += `
    </div>
  
  `

  const classes = [ "faqs", "flex-center", "flex-col" ]

  createElement(main, "section", classes, content)

}

export default renderFaq
