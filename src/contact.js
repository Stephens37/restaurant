import _ from 'lodash'
import './style.css'
import Delicious from './delicious.jpg'

const content = document.querySelector('#content')

export function contactFunction () {
  const contactContent = document.createElement('div')
  contactContent.setAttribute('id', 'contactcontent')
  content.appendChild(contactContent)

  const contactTitle = document.createElement('div')
  contactTitle.setAttribute('id', 'contacttitle')
  contactTitle.innerText = 'Contact Us'
  contactContent.appendChild(contactTitle)

  const delicious = new Image()
  delicious.src = Delicious
  delicious.setAttribute('id', 'delicious')
  contactContent.appendChild(delicious)

  const contactNumber = document.createElement('div')
  contactNumber.setAttribute('id', 'contactnumber')
  contactNumber.innerText = '1-555-555-5555'
  contactContent.appendChild(contactNumber)

  const contactLocation = document.createElement('div')
  contactLocation.setAttribute('id', 'contactlocation')
  contactLocation.innerText = '555 Tomato Ave'
  contactContent.appendChild(contactLocation)

  return contactContent
}
