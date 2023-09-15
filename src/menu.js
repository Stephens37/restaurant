import _ from 'lodash'
import './style.css'
import Sandwich1 from './cucumber_sandwich.jpg'
import Sandwich2 from './Dads-Denver-Sandwiches-600x400.jpg'
import Sandwich3 from './SPAGHETTI-SANDWICHES3.jpg'

const content = document.querySelector('#content')

export function menuFunction () {
  const menuContent = document.createElement('div')
  menuContent.setAttribute('id', 'menucontent')
  content.appendChild(menuContent)

  const menuTitle = document.createElement('div')
  menuTitle.setAttribute('id', 'menutitle')
  menuTitle.innerText = 'Sandwich Selects'
  menuContent.appendChild(menuTitle)

  const sandwich1 = new Image()
  sandwich1.src = Sandwich1
  sandwich1.setAttribute('id', 'sandwich1')
  sandwich1.setAttribute('class', 'sandwiches')
  menuContent.appendChild(sandwich1)

  const sand1Text = document.createElement('div')
  sand1Text.setAttribute('id', 'sand1text')
  sand1Text.setAttribute('class', 'sandtexts')
  sand1Text.innerText = 'Cucumber Sandwich'
  menuContent.appendChild(sand1Text)

  const sandwich2 = new Image()
  sandwich2.src = Sandwich2
  sandwich2.setAttribute('id', 'sandwich2')
  sandwich2.setAttribute('class', 'sandwiches')
  menuContent.appendChild(sandwich2)

  const sand2Text = document.createElement('div')
  sand2Text.setAttribute('id', 'sand2text')
  sand2Text.setAttribute('class', 'sandtexts')
  sand2Text.innerText = 'Dads Denver Sandwich'
  menuContent.appendChild(sand2Text)

  const sandwich3 = new Image()
  sandwich3.src = Sandwich3
  sandwich3.setAttribute('id', 'sandwich3')
  sandwich3.setAttribute('class', 'sandwiches')
  menuContent.appendChild(sandwich3)

  const sand3Text = document.createElement('div')
  sand3Text.setAttribute('id', 'sand3text')
  sand3Text.setAttribute('class', 'sandtexts')
  sand3Text.innerText = 'Spaghetti Sandwich'
  menuContent.appendChild(sand3Text)
}
