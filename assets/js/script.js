var input = document.getElementById("input"); //Input de la barre de recherche en section 2
var recherche = document.getElementById("recherche"); //Bouton rechercher

input.addEventListener("focus", function (){ /*À la selection de l'input, on ajoute une bordure 
    au bouton rechercher parce que le navigateur n'ajoute cette bordure qu'à l'inut, le rendu n'est
    pas harmonieux*/
    bordure();
})

input.addEventListener("focusout", function (){ /*À la désélectionne l'input, on retire une bordure 
au bouton rechercher*/
    bordurenone();
})

function bordure () { //Ajout bordure
    recherche.style.outline="auto";
}
function bordurenone () { //Retrait
    recherche.style.outline="none";
}


