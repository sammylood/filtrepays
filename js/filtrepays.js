let pays = "France"; // France par defaut

extraire_pays(pays);

    let filtre__bouton = document.querySelectorAll('.filtre__bouton button');
    console.log(filtre__bouton.length);

    for(const elm of bouton__pays){
    elm.addEventListener('mousedown', function(e){
        // console.log(e.target.dataset.id)
        pays = e.target.dataset.id;
        extraire_pays(pays);
        document.addEventListener("DOMContentLoaded", extraire_pays);
    });
}


function extraire_pays(pays) {
// Construction de l’URL pour appeler l’API REST en fonction de la catégorie sélectionnée
fetch(
`http://localhost/31w/wp-json/wp/v2/posts?search=${pays}&per_page=30`
)
.then((response) => response.json()) // Conversion de la réponse en JSON
.then((data) => {
console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer

afficherArticles(data); // Appel à la fonction pour afficher les articles
})
.catch((error) => console.error("Erreur lors de l’extraction des cours: ", error)); // En cas d’erreur
}


function afficherArticles(data){
     console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer
     const container = document.querySelector("filtre__pays");
     container.innerHTML = "";

     data.forEach((data) => {
        const item = document.createElement("div");
        item.className = "pays-item";
        
        const nomPays = document.createElement("h2");
        nomPays.className = "pays-titre";
        nomPays.textContent = nomPays.title.rendered;
     }
    );
}
