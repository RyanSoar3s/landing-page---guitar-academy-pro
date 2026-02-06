import { qs, createElement } from "../../core/dom"

const renderPurchaseArea = () => {
  const main = qs("main")

  const content = `
    <div class="purchase-area-timer">
      <div id="hour" class="purchase-area-value relative color-danger font-bolder"></div>
      <div class="color-danger font-bolder">:</div>
      <div id="min" class="purchase-area-value relative color-danger font-bolder"></div>
      <div class="color-danger font-bolder">:</div>
      <div id="sec" class="purchase-area-value relative color-danger font-bolder"></div>

    </div>
    <div class="purchase-area-prices flex-center flex-col">
      <span class="purchase-area-old-price text-center">De R$ 1.297,00</span>
      <span class="purchase-area-new-price text-center">12x R$ 49,70</span>
      <p class="text-center">ou R$ 497,00 à vista</p>

    </div>
    <a href="#" class="purchase-area-btn-buy bg-button text-center">QUERO MINHA VAGA AGORA</a>
    <p>🔒 Pagamento seguro via Hotmart</p>

  `

  const classes = [ "purchase-area", "flex-center", "flex-col" ]

  createElement(main, "section", classes, content)

}

export default renderPurchaseArea
