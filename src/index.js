import { component } from './elements.js'

component()

function header () {
  const header = document.createElement('header')

  const home = document.createElement('button')
  home.classList('buttons')
  home.setAttribute('id', 'homebutton')
  home.addEventListener(component)

  const menu = document.createElement('button')
  menu.classList('buttons')
  menu.setAttribute('id', 'menubutton')

  const contact = document.createElement('button')
  contact.classList('contact')
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