 // Compteur de clics personnalisé
let nbLikes = 0;
const boutonLike = document.getElementById("mon-bouton-like");

if (boutonLike) {
    boutonLike.addEventListener("click", () => {
        nbLikes = nbLikes + 1;
        boutonLike.textContent = "❤ J'aime (" + nbLikes + ")";

    });
}
