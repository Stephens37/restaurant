import Pasta from './pasta.jpeg'

const content = document.querySelector('#content')

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
  
  document.body.content.appendChild(component)