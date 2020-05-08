// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// const topicsArray = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
// ]

const entryPoint = document.querySelector('div.topics')
const tabMaker = (tab) => {
    axios.get("https://lambda-times-backend.herokuapp.com/topics")
        .then(response => {
            const tabs = response.data.topics
            tabs.map(tab => {
                const tabDiv = document.createElement('div')
                tabDiv.classList.add('tab')
                tabDiv.textContent = tab
                console.log(tabDiv)
                entryPoint.appendChild(tabDiv)

                return tabDiv
            })

            return entryPoint

        })
}

tabMaker();
