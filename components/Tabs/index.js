// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const entryPoint = document.querySelector('div.topics')

const tabMaker = (tab) => {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('tab')
    tabDiv.textContent = tab
    entryPoint.appendChild(tabDiv)

    return tabDiv
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        const tabs = response.data.topics
        tabs.map(tab => {
            tabMaker(tab);
        })

        return entryPoint
    })
    .catch(error => {
        console.log('Get "topics" failed')
    })
