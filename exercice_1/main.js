//On crée la variable carre pour permettre l'accés au DOM et donc l'interaction avec le HTML
const carre = document.querySelector('.carre')

//On crée ici l'écouteur d'événement qui réagira au moment du "click" sur notre carré
carre.addEventListener('click', () => {
    //La variable va permettre de récupérer les éléments css qu'on demande, ce sera la version "finale" du navigateur (donc si en css l'unité de width est en em le navigateur lui l'aura peut-être transformé en px, et c'est ce qui serra dans le message)
    const styles = window.getComputedStyle(carre);
    //On crée les variables pour chaque information que l'on veut afficher dans le message, en disant de chercher le style de (.) l'information demandé
    const classe = carre.className;
    const couleurTexte = styles.color;
    const couleurFond = styles.backgroundColor;
    const largeur = styles.width;
    const hauteur = styles.height;
    const police = styles.fontFamily;
    const taillePolice = styles.fontSize;

    // On crée la boîte d'alerte qui affichera le message lorsque l'on clique sur notre carre
    alert(`
    Classe CSS : ${classe}
    Couleur du texte : ${couleurTexte}
    Couleur de fond : ${couleurFond}
    Largeur : ${largeur}
    Hauteur : ${hauteur}
    Police : ${police}
    Taille du texte : ${taillePolice}
      `);
    //Comme on a le message entre '' on peut utiliser la template string ${} pour éviter de devoir faire de la concaténation. la valeur de la variable va être inséré à la place de cette template
});
