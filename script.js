// tester que j'accéde bien au champs proposal

let affichage_dynamique_liste = document.querySelector("#proposal p span")
const liste_mots = document.getElementById("mots")
const liste_phrases = document.getElementById("phrases")
const mot_utilisateur = document.querySelector(".validation input")
const bouton_validation = document.querySelector(".validate")
let score_change = document.querySelector(".score")
let list_change = document.querySelector(".liste")

let index_mots = 0
let index_phrases = 0
let score = 0


function lancerJeu(){  
    affichage_dynamique_liste.innerHTML = listes_mots[index_mots] 
    console.log(affichage_dynamique_liste.innerHTML)

    bouton_validation.addEventListener('click', ()=>{
        if (mot_utilisateur.value === affichage_dynamique_liste.innerHTML){
            score++
            mot_utilisateur.value = " "
            score_change.textContent = score 
            list_change.textContent = listes_mots.length
            index_mots++ 
            affichage_dynamique_liste.innerHTML = listes_mots[index_mots] 
        }
        else{
            affichage_dynamique_liste.innerHTML = "Le jeu est fini"
           }
    }) 
      
}


