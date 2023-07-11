//Le script du code permettant d'effectuer les opérations
/*
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
let final = ""*/

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
let affTable = [];
let valeur1 = []
let valeur2 = []
let signe = []
let test = true
let valeur3
let resultat = document.querySelector(".egal")
let valeur11
let valeur22

function Addition(x,y) {
    return(parseFloat(x) + parseFloat(y) )
}
function Soustraction (x,y) {
    return (parseFloat(x) - parseFloat(y) )
}
function Multiplication(x,y) {
    return (parseFloat(x) * parseFloat(y) )
}
function Division(x,y) {
    return (parseFloat(x) / parseFloat(y) )
}

/* ici on charge le document dans le dom */
document.addEventListener("DOMContentLoaded", function() {
  /*  on va juste recuperer tous les buttons avect SelectAll et ca va retourner cela dans un array*/
    var buttons = document.querySelectorAll("button");
    
   
    let valeur 
    /* on va marcher dans le array and utilisans for. tu peux console.log(button) pour voir sont contenue
    ensuite on va ajouter le eventListener a tous les buttons et afficher le button qui a ete afficher.
    le innerHTML afficher la valuer qu'il y a ici <button> variable </button> qui est soit 1,2,etc*/ 
   for (var i = 0; i < buttons.length ; i++ ) {
    if(i==14) {continue }
      buttons[i].addEventListener("click", function() {
        var value = this.innerHTML;
        affTable.push(this.innerHTML)
        valeur=affTable.join("");
        ecranResultat.value = valeur
        valeur=parseInt(valeur)
        
       // console.log(affTable);
       
        if(value=="+"|| value=="-"|| value=="*"|| value=="/") {
        signe = value
        test = false
        console.log("voici un signe");
        } else if(value==Number,test==true){
        valeur1.push(this.innerHTML)
        valeur11=valeur1.join("")
        //valeur1=parseFloat(value)     
       // ecranResultat.value=parseFloat(valeur11)
        console.log(valeur11); 
        }else if(value==Number,test==false){
            valeur2.push(this.innerHTML)
            valeur22=valeur2.join("")
         //   valeur2=parseFloat (value)
        // ecranResultat.value=parseFloat(valeur22)
           console.log(valeur22);
        } 
   
    })
    
    }

  });
;
resultat.addEventListener("click",() => {
   if(signe=="+"){
    ecranResultat.value= Addition(valeur11,valeur22)
   }
   if(signe=="-"){
    ecranResultat.value=Soustraction(valeur11,valeur22)
   }
   if(signe=="*") {
    ecranResultat.value= Multiplication(valeur11,valeur22)
   }
   if(signe=="/") {
    ecranResultat.value= Division(valeur11,valeur22)
   }
})


/*------------------------affichage-------------------------------*/
/*
let numero0 = document.querySelector(".number0")
let numero1 = document.querySelector(".number1")
let numero2 = document.querySelector(".number2")
let numero3 = document.querySelector(".number3")
let numero4 = document.querySelector(".number4")
let numero5 = document.querySelector(".number5")
let numero6 = document.querySelector(".number6")
let numero7 = document.querySelector(".number7")
let numero8 = document.querySelector(".number8")
let numero9 = document.querySelector(".number9")
let virgule = document.querySelector(".point")
let affichage = document.querySelector("#ecranResultat")
let Addition = document.querySelector(".sign1")
let nombre0 =""
let nombre1 =""
let nombre2 =""
let nombre3 =""
let nombre4 =""
let nombre5 =""
let nombre6 =""
let nombre7 =""
let nombre8 =""
let nombre9 =""
let x = affichage.value



  /*for (var a=0; a<10; a++) {
    var numero[a] = document.querySelectorAll(".number[a]")
  }*/
 /* 
numero0.addEventListener("click",(e) => {
    nombre0 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre0
    }
})
numero1.addEventListener("click",(e) => {
    nombre1 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre1
    }
})
numero2.addEventListener("click",(e) => {
    nombre2 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre2
    }
})
numero3.addEventListener("click",(e) => {
    nombre3 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre3
    }
})
numero4.addEventListener("click",(e) => {
    nombre4 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre4
    }
})
numero5.addEventListener("click",(e) => {
    nombre5 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre5
    }
})
numero6.addEventListener("click",(e) => {
    nombre6 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre6
    }
})
numero7.addEventListener("click",(e) => {
    nombre7 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre7
    }
})
numero8.addEventListener("click",(e) => {
    nombre8 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre8
    }
})
numero9.addEventListener("click",(e) => {
    nombre9 = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ nombre9
    }
})
virgule.addEventListener("click", (e) => {
    comma = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ comma
    }
})
Addition.addEventListener("click", (e) => {
    asign = e.target.value
    if(x !==null) {
        affichage.value = affichage.value+ asign
    }
})

*/


/*------------------------affichage-------------------------------*/

/*
let premiereValeur = ""
let deuxiemeValeur = ""
let resultat = document.querySelector(".egal")
let asign =""
tableau = [premiereValeur,asign,deuxiemeValeur]

Addition.addEventListener("click", (e) => {
    tableau[1] = e.target.value
    if(x !==null) {
        tableau[0] = parseFloat(affichage.value)
        console.log();
    }
   
})


resultat.addEventListener("click", () => {
    tableau[2] =  parseFloat(x)
    console.log(tableau[2]);
})
*/










/* ############################################################################ */


/* NOTE:
1) Pour l'instant, la calculatrice n'effectue pas de calcule. a toi de voir comment le faire bon Courage
2) pour l'instant ca affiche aussi '=' sur l'ecran, il faut reajuster cela que ca affiche tout sauf '='


*/

