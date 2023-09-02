import Pasta from './pasta.jpeg'
import _ from 'lodash'
require('./style.css')

const body = document.getElementsByTagName('body')
let contentParent = document.createElement('div')
contentParent = document.querySelector('id', '#contentparent')
const content = document.querySelector('#content')

export function frame () {
  body.appendChild(contentParent)
  contentParent.appendChild(content)
}

export function component () {
  const header = document.createElement('header');

  // Lodash, now imported by this script
  header.textContent = 'Restaurant';
  content.appendChild(header)

  // Add the image to our existing div.

  const myPasta = new Image();

  myPasta.src = Pasta;
  content.appendChild(myPasta)

  const description = document.createElement('div')
  description.classList = 'description'
  description.innerText = 'This restaurant is great'
  content.appendChild(description)

  return { header, myPasta, description }
}
