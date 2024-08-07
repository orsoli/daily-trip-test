/* 
    Click hamburger menu to show the menu bar
*/

// -- Preparation phase
//Retrive the elements interested in DOM
const burgerMenuElement = document.getElementById("burger-menu");
const navBarElement = document.getElementById("navbarSupportedContent");
const mainElement = document.querySelector('main');
const modalImagesElement = document.getElementById("modalImages");
// Create elements we need
const unorderListEelement = document.createElement('ul');
// Define the variables we have
let destinations = ['./img/3-islands-ksmil-min.jpg', './img/blue-eye-saranda-min.jpg', './img/Ksamil-albania-min.jpg', './img/ksamil-v1-min.jpg', './img/ksamil-v2-min.jpg', './img/Lukove-min.jpg', './img/mirror-beach-min.jpg', './img/permeti-canions-min.jpg', './img/porto-palermo-min.jpg', './img/saranda-beaches-min.jpg', './img/saranda-min.jpg']

//--- Preparation processing
// Define a function to open the menu bar when click on brger menu
function burgerClickHandler() {
  console.log("menu bar");
  navBarElement.classList.toggle("collapse");
}

//--- Processing phase
// Add click event
burgerMenuElement.addEventListener("click", burgerClickHandler);

// Add destination elements
mainElement.appendChild(unorderListEelement)
for(i = 0; i < destinations.length; i++){
  // defined every destination
  const destination = destinations[destinations.length - (destinations.length-i)]
  // create elements we need
  const listItemElement = document.createElement('li');
  const aElement = document.createElement('a');
  const hexagonElement = document.createElement('div')
  const imgElement = document.createElement('img');
  // append <li> in <ul>
  unorderListEelement.appendChild(listItemElement)
  // append <a> in <li>
  listItemElement.appendChild(aElement)
  // append hexagon <div>in <a>
  aElement.appendChild(hexagonElement)
  // append <img> in hexagon <div>
  hexagonElement.appendChild(imgElement)
  // Add an attributes in elements
  unorderListEelement.setAttribute('class',("d-flex list-unstyled overflow-x-scroll opacity-75 p-3 gap-2"))
  aElement.setAttribute('href', '')
  hexagonElement.setAttribute('class', "hexagon")
  console.log(destination)
  imgElement.setAttribute('src',destination)
  imgElement.setAttribute('alt', 'ksamil albania')
  // Destination Modal function
  aElement.setAttribute('data-bs-toggle','modal')
  aElement.setAttribute('data-bs-target','#destinationModal')
  // Add click event in <a>
  aElement.addEventListener("click", function(){
    // Define a function onmouseover in hexagonal photos
    // Destination Image source variable
    const imageSrc = imgElement.src
    modalImagesElement.setAttribute('src', imageSrc)
  })
}




