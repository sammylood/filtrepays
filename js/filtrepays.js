(function(){
    let filtre__bouton = document.querySelectorAll('.filtre__bouton button');
    console.log(filtre__bouton.length);

    for(const elm of filtre__bouton){
    elm.addEventListener('mousedown', function(e){
        console.log(e.target.dataset.id)
        extraire_pays(e.target.dataset.id);
    })
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
.catch((error) => console.error("Erreur lors de l’extraction des pays: ", error)); // En cas d’erreur
}


});

function afficherArticles(data){
     console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer
    const conteneur = document.querySelector(".contenu__restapi");
        conteneur.innerHTML = "";


        data.forEach((destination) => {
          const item = document.createElement("div");
          item.className = "destination-item";

          const titre = document.createElement("h3");
          titre.className = "destination-titre";
          titre.textContent = "> " + destination.title.rendered;

          const description = document.createElement("div");
          description.className = "destination-description";
          description.innerHTML = destination.excerpt.rendered;
          description.style.display = "none";

          titre.addEventListener("click", () => {
            if (description.style.display === "none") {
              description.style.display = "block";
            } else {
              description.style.display = "none";
            }
          });

          item.appendChild(titre);
          item.appendChild(description);
          conteneur.appendChild(item);
        });
        }
