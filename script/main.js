// création des variables global
let nombrePhotocopies;
let prixPhotocopies; 
let bouton = document.getElementById("bouton");
let message = document.getElementById("message");

// fonction de traitement 

function calcul() {
    nombrePhotocopies = document.getElementById("valeurSaisie").value;
    if (nombrePhotocopies <= 10) {
        prixPhotocopies = nombrePhotocopies * 0.1;
    } else if (nombrePhotocopies <= 30) {
        prixPhotocopies = (nombrePhotocopies -10) * 0.09 + 1;
    } else {
        prixPhotocopies = (nombrePhotocopies - 30) * 0.08 + 2.8;
    }
    // arrondie à la deuxième décimale
    prixPhotocopies = prixPhotocopies.toFixed(2);
    message.innerHTML = "Le prix total est de : " + prixPhotocopies + " euros.";
}

// écoute de l'envoie

bouton.addEventListener("click", calcul, false);