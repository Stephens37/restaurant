import _ from 'lodash';
import { homeContent } from './elements.js'
import { component } from './elements.js'
import './style.css'
import { menuContent } from './menu.js'
import { menu } from './menu.js'

component()
menu()

const body = document.querySelector('body')

function header () {
  const headerConst = document.createElement('header')
  body.appendChild(headerConst)
  const headerGrid = document.createElement('div')
  headerGrid.setAttribute('id', 'headergrid')
  headerConst.appendChild(headerGrid)
  return headerGrid
}
header()

function homeButton () {
  const headers = document.querySelector('#headergrid')
  const home = document.createElement('button')
  home.setAttribute('class', '.buttons')
  home.setAttribute('id', 'homebutton')
  home.innerText = 'Home'
  headers.append(home)
  home.addEventListener('click', component)
  return home
}
homeButton()

function menuButton () {
  const headers = document.querySelector('#headergrid')
  const menu = document.createElement('button')
  menu.setAttribute('class', '.buttons')
  menu.setAttribute('id', 'menubutton')
  menu.innerText = 'Menu'
  headers.append(menu)
  return menu
}
menuButton()

function contactButton () {
  const headers = document.querySelector('#headergrid')
  const contact = document.createElement('button')
  contact.setAttribute('class', 'contact')
  contact.setAttribute('id', 'contactbutton')
  contact.innerText = 'Contact'
  headers.append(contact)
  return contact
}
contactButton()

function footer () {
  const footer = document.createElement('footer')
  body.appendChild(footer)
}
footer()

function whichPage () {
  const homes = document.querySelector('#homebutton')
  const menus = document.querySelector('#menubutton')
  const contacts = document.querySelector('#contactbutton')

  if (homes.addEventListener('click', component) === true) {
    homeContent.style.display = 'grid'
    menuContent.style.display = 'none'
    contactContent.style.display = 'none'
  } else if (menus.addEventListener('click', component) === true) {
    menuContent.style.display = 'grid'
    homeContent.style.display = 'none'
    contactContent.style.display = 'none'
  } else if (contacts.addEventListener('click', component) === true) {
    contactContent.style.display = 'grid'
    homeContent.style.display = 'none'
    menuContent.style.display = 'none'
  } else {
    homeContent.style.display = 'grid'
    menuContent.style.display = 'none'
    contactContent.style.display = 'none'
  }
}
whichPage()
