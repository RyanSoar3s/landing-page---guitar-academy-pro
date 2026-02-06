import { qs, qsAll } from "../core/dom"

const eventFaq = () => {
  const faqsButton = qsAll(".faqs-button")
  const faqsRes = qsAll(".faqs-res")

  faqsButton.forEach((faq, index) => {
    faq.onclick = () => {
      faq.classList.toggle("active")
      faqsRes[index].classList.toggle("open")

    }

  })

}

const eventPurchaseArea = () => {
  const hourEl = qs("#hour")
  const minEl = qs("#min")
  const secEl = qs("#sec")

  const timeRef = 7200
  let time = timeRef

  let hour = Math.floor(time / 3600)
  let min = Math.floor((time % 3600) / 60)
  let sec = Math.floor(time % 60)

  setInterval(() => {
    hourEl.textContent = hour
    minEl.textContent = min
    secEl.textContent = sec

    time = (time - 1 === -1) ? timeRef : time - 1

    hour = Math.floor(time / 3600)
    min = Math.floor((time % 3600) / 60)
    sec = Math.floor(time % 60)

  }, 1000)

}

const events = () => {
  eventFaq()
  eventPurchaseArea()

}

export default events
