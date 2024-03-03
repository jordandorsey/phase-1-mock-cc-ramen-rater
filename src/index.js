function renderOneRamen(ramen){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
    <img src = "${ramen.imageurl}">
    <div id = "${ramen.id}
    `
}

const { json } = require("stream/consumers");

function getAlltheRamens() {
    fetch ('http://localhost:3000/characters')
    .then(res => res.json())
    .then(Ramensdata => (Ramensdata.forEach(Ramen => renderOneRamen(Ramen))))
    console.log('fetch before returns')
}


function intiliaze(){
    getAlltheRamens()
    console.log('fetch after returns')
}

intiliaze()