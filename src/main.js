import './style.css'
import { qs } from './scripts/core/dom'
import renderHeader from './scripts/components/header/header'

const app = qs("#app")

const components = [ renderHeader ]

components.forEach((component) => component(app))
