const qs = (selector, scope = document) => {
  return scope.querySelector(selector)

}

const qsAll = (selector, scope = document) => {
  return scope.querySelectorAll(selector)

}

const createElement = (element, tagName, classNames = [], content) => {
  const tag = document.createElement(tagName)

  if (classNames.length) tag.classList.add(...classNames)

  tag.innerHTML = content

  element.append(tag)

}

export {
  qs,
  qsAll,
  createElement

}
