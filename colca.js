//Le script du code permettant d'effectuer les opérations

let chat = document.querySelector("#btn1")
let chien = document.querySelector("#btn2")
let rat = document.getElementById("btn3")
let requin = document.querySelector(".calcul")
let Addition = document.querySelector(".addition")
let Soustraction = document.querySelector(".soustraction")
let Division = document.querySelector(".division")
let Multiplication = document.querySelector(".multiplication")
let resultat = document.getElementById('btn3')
let valeur1 = ""
let valeur2 = ""
let signe = ""
let final = ""

chat.addEventListener("input", (e) => {
    valeur1 = parseInt( e.target.value )
})

chien.addEventListener("input", (e) => {
    valeur2 = parseInt( e.target.value )
})

Addition.addEventListener("click", (e) => {
    final = valeur1+valeur2
    rat.value = final
})

Soustraction.addEventListener("click", () => {
    final = valeur1-valeur2
    rat.value = final
})

Division.addEventListener("click", () => {
    final = valeur1/valeur2
    rat.value = final
})

Multiplication.addEventListener("click", () => {
    final = valeur1*valeur2
    rat.value = final
})






