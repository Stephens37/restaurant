import _ from 'lodash';
import './style.css'
import { homeFunction } from './elements.js'
import { menuFunction } from './menu.js'
import { contactFunction } from './contact.js'

homeFunction()
menuFunction()
contactFunction()

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
  function whichPage () {
    document.querySelector('#homecontent').style.display = 'grid'
    document.querySelector('#menucontent').style.display = 'none'
    document.querySelector('#contactcontent').style.display = 'none'
  }
  document.querySelector('#homebutton').addEventListener('click', whichPage)
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
  function whichPage () {
    document.querySelector('#menucontent').style.display = 'grid'
    document.querySelector('#homecontent').style.display = 'none'
    document.querySelector('#contactcontent').style.display = 'none'
  }
  document.querySelector('#menubutton').addEventListener('click', whichPage)
}
menuButton()

function contactButton () {
  const headers = document.querySelector('#headergrid')
  const contact = document.createElement('button')
  contact.setAttribute('class', 'contact')
  contact.setAttribute('id', 'contactbutton')
  contact.innerText = 'Contact'
  headers.append(contact)
  function whichPage () {
    document.querySelector('#contactcontent').style.display = 'grid'
    document.querySelector('#homecontent').style.display = 'none'
    document.querySelector('#menucontent').style.display = 'none'
  }
  document.querySelector('#contactbutton').addEventListener('click', whichPage)
  return contact
}
contactButton()

function footer () {
  const footer = document.createElement('footer')
  body.appendChild(footer)
}
footer()
