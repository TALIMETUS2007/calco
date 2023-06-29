//Le script du code permettant d'effectuer les opérations

let chat = document.querySelector("#btn1")
let chien = document.querySelector("#btn2")
let rat = document.getElementById("btn3")
let requin = document.querySelector(".calcul")
let Addition = document.querySelector(".addition")
let Soustraction = document.querySelector(".soustraction")
let Division = document.querySelector(".division")
let Multiplication = document.querySelector(".multiplication")
let ecranResultat = document.getElementById('ecranResultat')
let valeur1 = ""
let valeur2 = ""
let signe = ""
let final = ""

/* chat.addEventListener("input", (e) => {
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
}) */









/* 
##########################################################################
code utile pour detecter le button aspect-ratio--object 
########################################################################## */


/* ici on charge le dicumnet dans le dom */
document.addEventListener("DOMContentLoaded", function() {
    /* on va juste recuperer tous les buttons avect SelectAll et ca va retourner cela dans un array*/
    var buttons = document.querySelectorAll("button");
    /* on va marcher dans le array and utilisans for. tu peux console.log(button) pour voir sont contenue
    ensuite on va ajouter le eventListener a tout les buttons et afficher le button qui a ete afficher.
    le innerHTML afficher la valuer qu'il y a ici <button> variable </button> qui est soit 1,2,etc*/ 
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var value = this.innerHTML;
        console.log(value);
        ecranResultat.value = value
      });
    }
  });

/* ############################################################################ */


/* NOTE:
1) Pour l'instant, la calculatrice n'effectue pas de calcule. a toi de voir comment le faire bon Counrage
2) pour l'instant ca affiche aussi '=' sur l'ecran, il faut reajuster cela que ca affiche tout sauf '='


*/


