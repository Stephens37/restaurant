import Sandwich1 from './mainsandwich.jpg'
import _ from 'lodash'
import './style.css'

const content = document.querySelector('#content')

export function component () {
  // Add the image to our existing div.

  const name = document.createElement('div')
  name.setAttribute('id', name)
  name.innerText = 'Santiagos Sandwiches'
  content.appendChild(name)

  const mainSandwich = new Image();
  mainSandwich.src = Sandwich1;
  mainSandwich.setAttribute('id', 'mainsandwich')
  content.appendChild(mainSandwich)

  const review = document.createElement('div')
  review.setAttribute = ('id', 'description')
  review.innerText = 'This restaurant is great'
  content.appendChild(review)

  const hours = document.createElement('div')
  hours.setAttribute('id', 'hours')
  hours.innerText = 'Open every day 9AM-7PM'
  content.appendChild(hours)

  const location = document.createElement('div')
  location.setAttribute('id', 'location')
  location.innerText = 'Located at 555 Tomato Ave'
  content.appendChild(location)

  return { name, mainSandwich, review }
}
