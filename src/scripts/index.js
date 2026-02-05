import { qs } from "./core/dom"
import renderHeader from "./components/header/header"
import renderCourseSchedule from "./components/course-schedule/course-schedule"

const initializeApp = () => {
  const app = qs("#app")

  const components = [ renderHeader, renderCourseSchedule ]

  components.forEach((component) => component(app))

}

export default initializeApp
