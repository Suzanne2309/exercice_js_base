//Ici, on va utiliser queryselectorALL pour qu'il vise tous les éléments contenant l'attribut carre dans le HTML
const carres = document.querySelectorAll('.carre')
const evolutif = document.getElementById('evolutif')
const result = document.querySelector('#result')

//On crée une boucle (forEach) pour que le carré evolutif reprenne la couleur de chaque carre sur lequel on clique
carres.forEach(carres => {

    carres.addEventListener('click', event => {
        // Ici on crée la variable qui va récupérer la couleur du carrée (background)mais comme la boucle va récupérer plusieurs informations (carre All) donc on utilise ici (event.target) en plus pour cibler l'événement de click(le carré sur lequel on a clické)
        const couleur = getComputedStyle(event.target).backgroundColor;

        // Ici on applique la l'information du style de backgroundColor que l'on a récupérer au carré du bas (evolutif)
        evolutif.style.backgroundColor = couleur;

        // Ici on va pouvoir modifier la balise p (result) grâce à textContent pour y insérer le texte du code couleur rgb (${couleur})
        result.textContent = `${couleur}`;
    });
});