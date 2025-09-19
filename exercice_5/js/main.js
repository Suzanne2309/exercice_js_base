//On crée les variables des containers en indiquant de chercher l'élément par l'id dans le document HTML
const quotesContainer = document.getElementById("quotes_container");
const favoritesContainer = document.getElementById("favorites_container");


//Création d'une variable qui peut être changé, qui sera le tableau vide pour les favoris
let favorites = [];

/********************************************************** Local storage **********************************************************/
//On crée la fonction qui va permettre de harger les favoris depuis le LocalStorage au démarrage de la page (ou après renouvellement)
function loadFavorites() {
    // On crée la variable qui va permettre de récupérer la chaîne (string) stockées sous la clé "favorites" dans l'API du navigateur "localstorage"
    const storedFavorites = localStorage.getItem("favorites");
    //SI stored favorites est une chaîne ... (Cette condition SI permet de vérifier si storedFavorites est vide ou une chaîne. Si c'est vide, on ne va pas exécuter JSON car il y a rien à encoder)
    if (storedFavorites) {
        //ALORS JSON.parse avec encoder storedFavorites dechaîne en tableau pour qu'il puisse être afficher sur la page
        favorites = JSON.parse(storedFavorites);
    }
}

//On crée la fonction qui va permettre de sauvegarder la liste des favoris même au renouvellement
function saveFavorites() {
    //Ici setItem va enregistrer une valeur (citation) dans le localstorage sous la clé ("favorites"), mais comme favorites est un tableau, on utilise JSON.stringify(favorites) qui va permettre de transformer le tableau en chaîne (cela permet la bonne récupération des données)
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

/********************************************************** Fonction qui va faire apparaître les quotes **********************************************************/

//On crée ici la fonction qui affichera toutes les citations
function showQuotes() {
    //Ici on vide le container des quotes avant de réafficher les quotes (on peut utiliser cette technique car la liste est pas longue, sinon il faudrait trouver quelque chose de plus adapté)
    quotesContainer.innerHTML = "";

    //Ici on utilise une boucle for (let in) car nous voulons répéter l'action pour chaque quote, et comme nos quotes sont considéré comme un objet (ils sont pas dans un tableau) on utilise plutôt let in
    for (let author in quotes) {
        //On crée la variable div (let car elle va être modifié) en passant par le DOM pour créer une div dans le HTML
        let div = document.createElement("div");
        //Ici on va ajouter la class "quote" à la div fraîchement crée
        div.classList.add("quote");

        //On crée la variable p qui va permettre de créer l'élément du contenue textuel de la div "quote"
        let p = document.createElement("p");
        //Ici on va permettre de créer le contenue textuel dans p en cherchant la quote(valeur) correspondante à l'auteur (la clé)
        p.textContent = quotes[author];

        //Ici on va créer un contenaire small cans le HTML
        let small = document.createElement("small");
        //Ici on va créer le contenue textuel dans small, qui sera donc le nom de l'auteur de la quote au-dessus
        small.textContent = "- " + author;

        // Ajoute un bouton pour les favoris
        let btn = document.createElement("button");
        btn.innerHTML = '<i class="fa-solid fa-star"></i>'; // tu peux changer le texte par une icône
        // Quand on clique → ajoute ou retire le favori
        btn.addEventListener("click", function () {
            toggleFavorite(author);
        });

        //On ajoute les éléments au bloc de div qu'on à crée
        div.appendChild(p);
        div.appendChild(small);
        div.appendChild(btn);

        //Et ici on ajoute la div quote qu'on a crée dans le quotes container
        quotesContainer.appendChild(div);
    }
}


/********************************************************** Fonctions de gestion des favoris **********************************************************/

//On crée cette fonction qui va permettre de afficher les favoris
function showFavorites() {
    //Ici on vide le container des favoris avant de réafficher les favoris
    favoritesContainer.innerHTML = "";

    //SI le tableau est strictement vide (.length === 0) ALORS on ajoute le text dans le conteneur pour indiquer qu'il y a pas de favoris. Return permet de quitter immédiatement la fonction si le tableau est vide, pusiqu'il y a déjà le message (ça éviter de rester enfermé dans ce tableau vide)
    if (favorites.length === 0) {
        favoritesContainer.textContent = "Aucun favori pour le moment.";
        return;
    }

    //On crée une fonction de boucle de type forEach pour créer la div quote dans le container, et dans la div on va recréer la citation (p) et l'auteur (small)
    favorites.forEach(author => {
        let div = document.createElement("div");
        div.classList.add("quote");

        let p = document.createElement("p");
        p.textContent = quotes[author];

        let small = document.createElement("small");
        small.textContent = "- " + author;

        div.appendChild(p);
        div.appendChild(small);

        favoritesContainer.appendChild(div);
    });
}

//Ici on crée la fonction qui va permettre d'ajouter et de retirer une citation des favoris à partir de l'auteur 
function toggleFavorite(author) {
    //SI  l'auteur est déjà dans les favoris (vérification grâce à includes(author))
    if (favorites.includes(author)) {
        //ALORS on le retire des favoris en faisant le trie grâce à une fonction flèche (a => a !== author) qui conserve tous les a différents de author. Comment il le retire ? En créeant un nouveau tableau sans cette citation (filter)
        favorites = favorites.filter(a => a !== author);
    } else { //SINON on modifie le tableau (push) pour ajouter l'auteur à la fin de la liste
        favorites.push(author);
    }

    //On fait appelle à la fonction d'enregistrement dans le localstorage
    saveFavorites();
    //On appelle à la fonction pour réactualiser les modifications
    showFavorites();
}

//Ici on appelle la fonction  loadFavorites pour que les favoris apparaîssent tel quel au chargement/renouvellement de la page
loadFavorites();

//On appelle les fonctions pour afficher tout au chargement
showQuotes();
showFavorites();




