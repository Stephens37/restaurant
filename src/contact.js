import _ from 'lodash'
import './style.css'
import Delicious from './delicious.jpg'

const content = document.querySelector('#content')

export function contactFunction () {
  const contactContent = document.createElement('div')
  contactContent.setAttribute('id', 'contactcontent')
  content.appendChild(contactContent)

  const contactTitle = document.createElement('div')
  contactTitle.setAttribute('id', 'contactTitle')
  contactTitle.innerText = 'Contact Us'
  content.appendChild(contactTitle)

  const delicious = new Image()
  delicious.src = Delicious
  delicious.setAttribute('id', 'delicious')
  contactContent.appendChild(delicious)

  const contactNumber = document.createElement('div')
  contactNumber.setAttribute('id', 'contactNumber')
  contactNumber.innerText = '1-555-555-5555'
  content.appendChild(contactNumber)

  const contactLocation = document.createElement('div')
  contactLocation.setAttribute('id', 'contactLocation')
  contactLocation.innerText = '123 Street Ave'
  content.appendChild(contactLocation)

  return contactContent
}
