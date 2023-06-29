//Le script du code permettant d'effectuer les opérations

const chat = document.querySelector("#btn1")
const chien = document.querySelector("#btn2")
const rat = document.querySelector("#btn3")
const reponse = document.querySelector(".selection")
const requin = document.querySelector(".calcul")
let valeur1 =""
let valeur2 =""
let signe =""
let final =""


if(reponse=="Addition") {
 rat ==chat+chien
}

document.addEventListener("keypress", (e) => {
    
})

chat.addEventListener("input", (e) => {
    valeur1 = e.target.value
})

chien.addEventListener("input", (e) => {
    valeur2 = e.target.value
    console.log(valeur2);

})

reponse.addEventListener("input", (e) => {
    signe = e.target.value
    console.log(signe)
})

btn3.addEventListener("input", (e) => {
    final = e.target.value
    console.log(final)
})

requin.addEventListener("submit", (e) => {
    e.preventDefault
    if(signe==="Addition"){
        final ===valeur1+valeur2
    }

})


