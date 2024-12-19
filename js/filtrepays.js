(function(){
    let filtre__bouton = document.querySelectorAll('.filtre__bouton button');
    console.log(filtre__bouton.length);

    for(const elm of filtre__bouton){
    elm.addEventListener('mousedown', function(e){
        console.log(e.target.dataset.id)
        extraire_cours(e.target.dataset.id);
    })
}

function afficherArticles(data){
     console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer
}

function extraire_cours(categorie) {
// Construction de l’URL pour appeler l’API REST en fonction de la catégorie sélectionnée
fetch(
`http://localhost/31w/wp-json/wp/v2/posts?categories=${categorie}&per_page=30`
)
.then((response) => response.json()) // Conversion de la réponse en JSON
.then((data) => {
console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer

afficherArticles(data); // Appel à la fonction pour afficher les articles
})
.catch((error) => console.error("Erreur lors de l’extraction des cours: ", error)); // En cas d’erreur
}


})();

