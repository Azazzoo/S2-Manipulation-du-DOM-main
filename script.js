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
        prix = +prix + 13.50;
        document.getElementById("prixPommes").innerText = prix.toFixed(2)
        prixtotal = document.getElementById("prixTotal").innerText;
        prixtotal = +prixtotal + +prix
        document.getElementById("prixTotal").innerText = prixtotal.toFixed(2)

    }
    else if (choix === 'poire')
    {
        prix = document.getElementById("prixPoires").innerText;
        prix = +prix + 20.00;
        document.getElementById("prixPoires").innerText = prix.toFixed(2)
        prixtotal = document.getElementById("prixTotal").innerText;
        prixtotal = +prixtotal + +prix
        document.getElementById("prixTotal").innerText = prixtotal.toFixed(2)
    }
    else
    {
        prix = document.getElementById("prixPrunes").innerText;
        prix = +prix + 22.00;
        document.getElementById("prixPrunes").innerText = prix.toFixed(2)
        prixtotal = document.getElementById("prixTotal").innerText;
        prixtotal = +prixtotal + +prix
        document.getElementById("prixTotal").innerText = prixtotal.toFixed(2)
    }



}
