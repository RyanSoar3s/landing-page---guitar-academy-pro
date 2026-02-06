import events from "./events/event"
import renderHeader from "./components/header/header"
import renderCourseSchedule from "./components/course-schedule/course-schedule"
import renderReviews from "./components/reviews/reviews"
import renderFaq from "./components/faq/faq"

const initializeApp = () => {
  const components = [ 
    renderHeader, 
    renderCourseSchedule, 
    renderReviews,
    renderFaq
  
  ]

  components.forEach((component) => component())
  events()

}

export default initializeApp
