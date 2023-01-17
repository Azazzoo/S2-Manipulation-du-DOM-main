const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}

// Pour afficher le nombre de pommes dans la facture détaillée
document.querySelector("#qtePommes").textContent = panier.pommes;

function ajouter(choix){

    if (choix === 'pomme')
    {
        prix = document.getElementById("prixPommes").innerText;
        prix = parseInt(prix) + 13.50;
        document.getElementById("prixPommes").innerText = prix
        alert("L'item pomme est bien ajouté") // Fait un Pop-up
    }
    else if (choix === 'poire')
    {
        alert("L'item poire est bien ajouté") // Fait un Pop-up
    }
    else
    {
        alert("L'item prune est bien ajouté") // Fait un Pop-up
    }



}
