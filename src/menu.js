import _ from 'lodash'
import './style.css'

const content = document.querySelector('#content')

export function menu () {
  const menuContent = document.createElement('div')
  menuContent.setAttribute('id', 'menucontent')
  content.appendChild(menuContent)

  const menuTitle = document.createElement('div')
  menuTitle.setAttribute('id', 'menutitle')
  menuTitle.innerText = 'Sandwich Selects'
  menuContent.appendChild(menuTitle)
}
menu()