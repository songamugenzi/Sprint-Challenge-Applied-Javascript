// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

const insertPoint = document.querySelector('.cards-container')

function cardMaker(attrs) {
    const { headline, authorPhoto, authorName } = attrs

    // creating DOM elements
    const cardDiv = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgContainerDiv = document.createElement('div')
    const authorImg = document.createElement('img')
    const author = document.createElement('span')

    // adding classes to DOM elements
    cardDiv.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgContainerDiv.classList.add('img-container')

    // adding content to DOM elements
    headlineDiv.textContent = `${headline}`
    authorImg.src = `${authorPhoto}`
    author.textContent = `${authorName}`

    // appending elements to DOM
    cardDiv.appendChild(headlineDiv)
    cardDiv.appendChild(authorDiv)
    authorDiv.appendChild(imgContainerDiv)
    authorDiv.appendChild(author)
    imgContainerDiv.appendChild(authorImg)
    insertPoint.appendChild(cardDiv)

    return cardDiv
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const articles = response.data.articles
        articles.javascript.map(article => {
            cardMaker(article);
        })
        articles.bootstrap.map(article => {
            cardMaker(article);
        })
        articles.technology.map(article => {
            cardMaker(article);
        })
        articles.jquery.map(article => {
            cardMaker(article);
        })
        articles.node.map(article => {
            cardMaker(article);
        })
    })
