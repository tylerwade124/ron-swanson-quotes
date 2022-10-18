

//GLOBAL variables
let searchButton = document.querySelector(`#searchButton`)
const input = document.querySelector(`#inputBar`)


//FUNCTIONS/FETCH URL

async function getData (event) {
    event.preventDefault()
    let textInput = document.querySelector(`#inputbar`).value.toLowerCase()

    fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${textInput}`)
        .then(res => {
            return res.json()
        })
        .then (res => {
            console.log(`success`, res)
            //creates a new list item for each quote, and resets, and recreates the list each time a new term is searched
            let list = document.getElementById(`quote-list`)
            list.innerHTML = ``
            res.forEach ((item) => {
                let li = document.createElement(`li`)
                li.innerText = item
                list.appendChild(li)
            })
        })
        .catch (err => {
            console.log(`error!`, err)
        })
}


//EVENT LISTENERS

searchButton.addEventListener(`click`, getData)

    
    //enter key = search
    input.addEventListener(`keypress`, function(event) {
        if (event.key === `Enter`) {
            event.preventDefault()
            document.getElementById(`searchButton`).click()
        }
    })
