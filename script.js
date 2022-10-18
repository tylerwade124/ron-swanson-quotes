

//GLOBAL variables
let searchButton = document.querySelector(`#searchButton`)

const input = document.querySelector(`#inputBar`)

let img = document.querySelector(`img`)
let imgText = document.querySelector(`#img-text`)




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


            //adds gifs/images to HTML if the user types certain key words
            if (textInput !== `hate` || `clear` || `food`) {
                img.src = ``
            }

            if (textInput === `hate`) {
                img.src = "https://giffiles.alphacoders.com/107/10706.gif"
            } 
            
            if (textInput === `clear`) {
                img.src = "http://imageshack.com/a/img910/9677/Xo43Fa.gif"
            } 

            if (textInput === `food`) {
                img.src = "https://c.tenor.com/A8N47snFCdIAAAAC/ron-swanson.gif"
            }


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
