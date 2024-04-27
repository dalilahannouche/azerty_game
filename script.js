// tester que j'accéde bien au champs proposal

let affichage_dynamique_liste = document.querySelector("#proposal p span")
const liste_mots = document.getElementById("mots")
const liste_phrases = document.getElementById("phrases")
const mot_utilisateur = document.querySelector(".validation input")
const bouton_validation = document.querySelector(".validate")
let score_change = document.getElementById("score")

let index_mots = 0
let index_phrases = 0
let score = 0


liste_mots.addEventListener('click', ()=> {
    
    if (index_mots < listes_mots.length){
        affichage_dynamique_liste.innerHTML = listes_mots[index_mots]
        index_mots++ 
    } else{
        affichage_dynamique_liste.innerHTML = " "
    }
    
    
})


liste_phrases.addEventListener('click', ()=> {
    
    if (index_phrases < listes_phrases.length){
        affichage_dynamique_liste.innerHTML = listes_phrases[index_phrases]
        index_phrases++
    } else{
        affichage_dynamique_liste.innerHTML = " "
    }
    
    
})


bouton_validation.addEventListener('click', ()=>{
    if (mot_utilisateur.value === affichage_dynamique_liste.innerHTML){
        score++
        mot_utilisateur.value = " "
        score_change.textContent = "Votre score : " + score + "/" + listes_mots.length
    }
})