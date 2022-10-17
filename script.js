

//GLOBAL variables
let searchButton = document.querySelector(`#searchButton`)


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
         
            let list = document.getElementById(`myList`)
            res.forEach ((item) => {
                let li = document.createElement("li")
                li.innerText = item
                list.appendChild(li)
            })


        })
        .catch (err => {
            console.log("error!", err)
        })
}


//EVENT LISTENERS

searchButton.addEventListener(`click`, getData)
