import "../styles/style.css"
import { qs } from "./core/dom"
import renderHeader from "./components/header/header"

const initializeApp = () => {
  const app = qs("#app")

  const components = [ renderHeader ]

  components.forEach((component) => component(app))

}

export default initializeApp
