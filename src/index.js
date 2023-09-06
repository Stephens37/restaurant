import _ from 'lodash';
import './style.css'
import { homeFunction } from './elements.js'
import { menuFunction } from './menu.js'
import { contactFunction } from './contact.js'

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
  home.addEventListener('click', homeFunction)
  home.addEventListener('click', whichPage)
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
  menu.addEventListener('click', menuFunction)
  menu.addEventListener('click', whichPage)
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
  contact.addEventListener('click', contactFunction)
  contact.addEventListener('click', whichPage)
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

  const homeContent = document.querySelector('#homecontent')
  const menuContent = document.querySelector('#menucontent')
  const contactContent = document.querySelector('#contactcontent')

  if (homes.addEventListener('click', whichPage) === true) {
    homeContent.style.display = 'grid'
    menuContent.style.display = 'none'
    contactContent.style.display = 'none'
  } else if (menus.addEventListener('click', whichPage) === true) {
    menuContent.style.display = 'grid'
    homeContent.style.display = 'none'
    contactContent.style.display = 'none'
  } else if (contacts.addEventListener('click', whichPage) === true) {
    contactContent.style.display = 'grid'
    homeContent.style.display = 'none'
    menuContent.style.display = 'none'
  }
}
whichPage()