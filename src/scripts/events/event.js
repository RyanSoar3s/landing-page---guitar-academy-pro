import { qsAll } from "../core/dom"

const events = () => {
  const faqsButton = qsAll(".faqs-button")
  const faqsRes = qsAll(".faqs-res")

  faqsButton.forEach((faq, index) => {
    faq.onclick = () => {
      faq.classList.toggle("active")
      faqsRes[index].classList.toggle("open")

    }

  })

}

export default events
