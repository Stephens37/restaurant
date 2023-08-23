import _ from 'lodash';
import './style.css';

import Pasta from './pasta.jpeg';

const content = document.querySelector('#content')

function component () {
  const header = document.createElement('header');

  // Lodash, now imported by this script
  header.textContent = 'Restaurant';

 // Add the image to our existing div.

  const myPasta = new Image();

  myPasta.src = Pasta;

  const description = document.createElement('div')
  description.classList = 'description'
  description.innerText = 'This restaurant is great'

  return { header, myPasta, description }
}

content.appendChild(component());