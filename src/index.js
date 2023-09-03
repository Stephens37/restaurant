import _ from 'lodash';
import { component } from './elements.js'

component()

function header () {
  const header = document.createElement('header')

  const home = document.createElement('button')
  home.setAttribute('class', '.buttons')
  home.setAttribute('id', 'homebutton')
  home.addEventListener('click', component)

  const menu = document.createElement('button')
  menu.setAttribute('class', '.buttons')
  menu.setAttribute('id', 'menubutton')

  const contact = document.createElement('button')
  contact.setAttribute('class', 'contact')
  contact.setAttribute('id', 'contactbutton')

  header.appendChild(home)
  header.appendChild(menu)
  header.appendChild(contact)
}
header()

function footer () {
  const footer = document.createElement('footer')

  const resource1 = document.createElement('div')
  resource1.innerText = 'Resource'
  footer.append(resource1)
}
footer()
