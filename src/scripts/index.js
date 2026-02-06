import renderHeader from "./components/header/header"
import renderCourseSchedule from "./components/course-schedule/course-schedule"
import renderReviews from "./components/reviews/reviews"

const initializeApp = () => {
  const components = [ renderHeader, renderCourseSchedule, renderReviews ]

  components.forEach((component) => component())

}

export default initializeApp
