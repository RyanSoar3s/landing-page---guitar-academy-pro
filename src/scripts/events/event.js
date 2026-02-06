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
    hourEl.textContent = (hour / 10 >= 1) ? hour : `0${hour}`
    minEl.textContent = (min / 10 >= 1) ? min : `0${min}`
    secEl.textContent = (sec / 10 >= 1) ? sec : `0${sec}`

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
