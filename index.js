// The DOM
// Document Object Model
// Document is the document, which has a data type of Object, Model is the representation of the page
// How to use javascript to modify a webpage
// document.getElementById("count").innerText = 5


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// Tells the computer to get the element with the specified ID
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count += 1
    // inside this element tag add a text and the text was set to the count so every time we click it adds one
    countEl.textContent = count
}

// this save function is in our HTML as part of the onclick action
// So every time the save button is clicked it will run this function
function save() {
    let countDash = count + " - "
    // Here it is saying get the saveEl element by the ID of "save-el" and put the inner text of the following below
    saveEl.textContent += countDash
    count = 0
    countEl.textContent = count
    console.log(count)
}