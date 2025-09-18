
//On crée la variable socials qui va chercher tous les éléments contenant l'attribut "social" (ALL) dans le document HTML
const socials = document.querySelectorAll(".social");

//On crée la variable containerS(ocial) qui contient nos blocks social, on l'utilisera pour switcher la background-color entre gris de base et couleur de l'icone
const containerS = document.querySelector(".socials");

//On crée une fonction de boucle qui va elle contenire l'écouteur d'événement du "click"
socials.forEach(social => {
    social.addEventListener("click", () => {
        //Ce click déclenchera la focntion if/else
        if (social.classList.contains("active")) { //IF va permettre de réanisialiser les changements SEULEMENT sur lélément qui vient d'être cliqué (par exemple si on clique sur l'icone et qu'on veut revenir, il y a juste besoin de cliquer une deuxième fois dessu)
            //SI social contient déjà la classe active, ALORS on retire la classe active, on met la background-color de Socials en gris à nouveau et on fait disparaitre le nom du social (h2) en remettant sont display à none dans le css
            social.classList.remove("active");
            containerS.style.backgroundColor = "#c0c0c0";
            //Ici on dit qu'on veut changer la variable social.en allant target le h2 dans le HTML. ensuite on accéde au fichier css. on cherche display (du h2) = pour le remettre sur none
            social.querySelector("h2").style.display = "none";
        } else { //ELSE va permettre de réinissialiser TOUTES les icones pour activer UNIQUEMENT celle sur laquelle on a cliqué. Donc quand on vlique sur une icône et qu'on clique ensuite sur une nouvelle, alors 
            //On crée une nouvelle boucle, qui s'occupe de réinitialiser tous les "social" on modifie les variables à l'intérieur pour éviter la répétition et d'indiquer que ce sont les autres icones qui seront réinitialiser (social2)
            socials.forEach(social2 => {
                social2.classList.remove("active");
                social2.querySelector("h2").style.display = "none";
            });

            //Ici on active ajoute la classe active à social
            social.classList.add("active");

            //Ici on va s'occuper du switch de background-color de gris en couleur de l'icone. grâce à getAttribute, on peut target data-color puis on dit que le style background-color de socials doit être remplacé par la couleur de data-color identifié
            const color = social.getAttribute("data-color");
            containerS.style.backgroundColor = color;

            //On va target ici le h2 (title) et plus précisement sont display dnas le css pour le changer de none à block. AInsi il sera visible lorsqu'on clique sur l'icone
            const title = social.querySelector("h2");
            title.style.display = "block";
        }
    });
});