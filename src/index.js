import _ from 'lodash';
import { component } from './elements.js'
import './style.css'

component()

const body = document.querySelector('body')

function header () {
  const header = document.createElement('header')
  const headerGrid = document.createElement('div')
  headerGrid.setAttribute('id', 'headergrid')
  header.appendChild(headerGrid)

  const home = document.createElement('button')
  home.setAttribute('class', '.buttons')
  home.setAttribute('id', 'homebutton')
  home.innerText = 'Home'
  home.addEventListener('click', component)

  const menu = document.createElement('button')
  menu.setAttribute('class', '.buttons')
  menu.setAttribute('id', 'menubutton')
  menu.innerText = 'Menu'

  const contact = document.createElement('button')
  contact.setAttribute('class', 'contact')
  contact.setAttribute('id', 'contactbutton')
  contact.innerText = 'Contact'

  headerGrid.appendChild(home)
  headerGrid.appendChild(menu)
  headerGrid.appendChild(contact)
  body.appendChild(header)
}
header()

function footer () {
  const footer = document.createElement('footer')
  body.appendChild(footer)
}
footer()
