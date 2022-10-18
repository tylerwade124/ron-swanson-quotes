

//GLOBAL variables
let searchButton = document.querySelector(`#searchButton`)

let input = document.querySelector(`#inputBar`)

let img = document.querySelector(`#gif`)
// let imgText = document.querySelector(`#img-text`)

let topics = document.querySelector(`#tpcButton`)




//FUNCTIONS/FETCH URL

async function getData (event) {

    event.preventDefault()

    //user is able to type in any variatian of capitals, and get the same textInput value
    let textInput = document.querySelector(`#inputbar`).value.toLowerCase()

    fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/search/${textInput}`)

        .then(res => {
            return res.json()
        })

        .then (res => {

            console.log(`success`, res)


            //adds gifs/images to HTML if the user types certain key words
                if (textInput !== `hate` || `clear` || `food` || `100` || `government` || `bacon` || `fishing` || `money` || `capitalism` || `love` || `taxes` || `rage` || `cry` || `1776` || `dog` || `hair`) {
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

                if (textInput === `100`) {
                    img.src = "https://thumbs.gfycat.com/AridRapidHumpbackwhale-size_restricted.gif"
                }

                if (textInput === `government`) {
                    img.src = "https://media2.giphy.com/media/AyRaqAiZnvt1OdMWHl/200w.gif?cid=82a1493b4vpuxpaf6guzqbvrc0pgm2yeye6emjj97i42afk5&rid=200w.gif&ct=g"
                }

                if (textInput === `bacon`) {
                    img.src = "https://media.tenor.com/YhZle7PjLaMAAAAC/ron-swanson.gif"
                }

                if (textInput === `fishing`) {
                    img.src = "https://c.tenor.com/0jUz-pFWtaUAAAAC/ron-swanson-dont-teach-a-man-to-fish.gif"
                }

                if (textInput === `money`) {
                    img.src = "https://i.gifer.com/9Ul.gif"
                }

                if (textInput === `capitalism`) {
                    img.src = "http://badbooksgoodtimes.com/wp-content/uploads/2017/08/parks-and-rec-ron-swanson-capitalism.gif"
                }

                if (textInput === `love`) {
                    img.src = "https://thumbs.gfycat.com/AlertRepentantAustrianpinscher-size_restricted.gif"
                }

                if (textInput === `taxes`) {
                    img.src = "https://c.tenor.com/eokeeHofehEAAAAC/nick-offerman-ron-swanson.gif"
                }

                if (textInput === `cry`) {
                    img.src = "https://c.tenor.com/aTuHbF8mqZMAAAAM/yeeeeeh-about-to-cry.gif"
                }

                if (textInput === `1776`) {
                    img.src = "https://c.tenor.com/H4VasWntNpEAAAAC/parcs-and-rec-nick-offerman.gif"
                }

                if (textInput === `dog`) {
                    img.src = "https://c.tenor.com/NE9-xlLqgD0AAAAC/kisses-dog.gif"
                }

                if (textInput === `hair`) {
                    img.src = "https://c.tenor.com/yBWBwJ09JVoAAAAC/parks-and-rec-ron-swanson.gif"
                }

                if (textInput === `rage`) {
                    img.src = "https://media.tenor.com/Sme2KnZNaLgAAAAC/relaxes-relaxed.gif"
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

    //fetch
    searchButton.addEventListener(`click`, getData)

    //enter key = search
    input.addEventListener(`keypress`, function(event) {
        if (event.key === `Enter`) {
            event.preventDefault()
            document.getElementById(`searchButton`).click()
        }
    })

    //GIF-quote list alert
    topics.addEventListener(`click`, function(event) {
        alert(`List of keywords that also include a GIF: hate, food, clear, 100, government, bacon, fishing, money, capitalism, love, taxes, rage, cry, 1776, dog, hair`)
    })
