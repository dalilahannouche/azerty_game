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
let index_list = 0

let score = 0

function listeChoix(listeToChoose, index_list){
    listeToChoose.addEventListener('click', ()=>{
        affichage_dynamique_liste.innerHTML = listeToChoose[index_list]
        bouton_validation.addEventListener('click', ()=>{
            if (mot_utilisateur.value === affichage_dynamique_liste.innerHTML){
                score++
                score_change.textContent = score 
                list_change.textContent = listeToChoose.length
                index_list++ 
                if (index_list < listeToChoose.length) {
                    affichage_dynamique_liste.innerHTML = listeToChoose[index_list];
                } else {
                    affichage_dynamique_liste.innerHTML = "Le jeu est fini";
                    mot_utilisateur.disabled = true;
                }
                mot_utilisateur.value = ""
            }
    
            else{
                index_list++ 
                if (index_list < listeToChoose.length) {
                    affichage_dynamique_liste.innerHTML = listeToChoose[index_list];
                } else {
                    affichage_dynamique_liste.innerHTML = "Le jeu est fini";
                    mot_utilisateur.disabled = true;
                }
                mot_utilisateur.value = "" 
            }
    
        })  
    })
}

function lancerJeu(){  
    liste_mots.addEventListener('click', ()=>{
    listeChoix(listes_mots, index_mots)
    })
      
}


