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
    $categories = get_categories(); //array des pays : liste 
    $contenu = "";
    foreach($categories as $elm){
        $nom = $elm->name;
        $id = $elm->term_id;
        $contenu .= "<button data-id='$id'> $nom </button>";
    } return "<div class='filtre__bouton'>$contenu</div>";
}
add_shortcode('extraire_categories', 'genere_boutons');