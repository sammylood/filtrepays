<?php
/*
plugin name: Filtre pays
author: Samuel Dorneval
description: Une extension qui permettra de filtrer nos articles
author uri: samueldorneval.ca
*/
function charger_css_js()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "/style.css");
    $version_js =  filemtime(plugin_dir_path(__FILE__) . "js/filtrepays.js");

    wp_enqueue_style(
        "filtrepays",
        plugin_dir_url(__FILE__) . "/style.css",
        array(),
        $version_css
    );
    wp_enqueue_script(
        "filtrepays",
        plugin_dir_url(__FILE__) . "js/filtrepays.js",
        array(),
        $version_js,
        true
    );
}
add_action("wp_enqueue_scripts", "charger_css_js");

function genere_boutons(){
    $pays = ["France", "États-Unis", "Canada", "Argentine", "Chili", "Belgique", "Maroc", "Mexique", "Japon", "Italie", "Islande", "Chine", "Grèce", "Suisse"]; //array des pays : liste 
    $contenu = "";
    foreach($pays as $elm){
        $nom = $elm;

        $contenu .= "<button data-id='$nom'> $nom </button>";
    }
    return "<div class='filtre__bouton'>$contenu</div>";
}
add_shortcode('extraire_pays', 'genere_boutons');