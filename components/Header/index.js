// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('div.header-container')
// console.log(headerContainer)
function Header(attrs) {
    // creating DOM elements
    const pubHeader = document.createElement('div')
    const currentDate = document.createElement('span')
    const pubTitle = document.createElement('h1')
    const currentTemp = document.createElement('span')

    // adding classes to DOM elements
    pubHeader.classList.add('header')
    currentDate.classList.add('date')
    currentTemp.classList.add('temp')

    // adding content to DOM elements
    currentDate.textContent = 'SMARCH 28, 2019'
    pubTitle.textContent = 'Lambda Times'
    currentTemp.textContent = '98°'

    // appending elements to DOM
    headerContainer.appendChild(pubHeader)
    pubHeader.appendChild(currentDate)
    pubHeader.appendChild(pubTitle)
    pubHeader.appendChild(currentTemp)

    return pubHeader
}

Header();