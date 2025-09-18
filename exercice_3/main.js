//On crée la variable carres qui va parcourir le DOM pour trouver tous les éléments contenant la classe carre
const carres = document.querySelectorAll('.carre');

//On crée une fonction de boucle qui va permettre que l'écouteur d'évenement va ajouter une class "active" au carré sur lequel on vient de cliquer pour qu'ensuite il puisse prendre les propriétés du css qui lui sont attribué 
carres.forEach(carres => {
    carres.addEventListener('click', () => {
        carres.classList.toggle('active');
    });
});

