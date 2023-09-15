import MainSandwich from './mainsandwich.jpg'
import _ from 'lodash'
import './style.css'

const content = document.querySelector('#content')

export function homeFunction () {
  // Add the image to our existing div.
  const homeContent = document.createElement('div')
  homeContent.setAttribute('id', 'homecontent')

  content.appendChild(homeContent)

  const name = document.createElement('div')
  name.setAttribute('id', 'name')
  name.innerText = 'Santiagos Sandwiches'
  homeContent.appendChild(name)

  const mainSandwich = new Image()
  mainSandwich.src = MainSandwich
  mainSandwich.setAttribute('id', 'mainsandwich')
  homeContent.appendChild(mainSandwich)

  const review = document.createElement('div')
  review.setAttribute = ('id', 'description')
  review.innerText = 'This restaurant is great'
  homeContent.appendChild(review)

  const hours = document.createElement('div')
  hours.setAttribute('id', 'hours')
  hours.innerText = 'Open every day 9AM-7PM'
  homeContent.appendChild(hours)

  const location = document.createElement('div')
  location.setAttribute('id', 'location')
  location.innerText = 'Located at 555 Tomato Ave'
  homeContent.appendChild(location)

  return homeContent
}
