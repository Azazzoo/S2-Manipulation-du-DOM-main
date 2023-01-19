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
        prixnom = 'prixPommes';
        poidsnom = 'poidsPommes';
        qtsnom = 'qtePommes'
        tarif = document.getElementById("prixpomme");
        weight = 10;
    }
    else if (choix === 'poire')
    {
        prixnom = 'prixPoires';
        poidsnom = 'poidsPoires';
        qtsnom = 'qtePoires'
        tarif = document.getElementById("prixPoires");
        weight = 12;
    }
    else
    {
        prixnom = 'prixPrunes';
        poidsnom = 'poidsPrunes';
        qtsnom = 'qtePrunes'
        tarif = document.getElementById("prixPrunes");
        weight = 15;
    }
    // Ajoute le montant total de l'article
    prix = document.getElementById(prixnom).innerText;
    prix = +prix + +tarif;
    document.getElementById(prixnom).innerText = prix.toFixed(2)
    // Ajoute le montant au prix total de la facture
    prixtotal = document.getElementById("prixTotal").innerText;
    prixtotal = +prixtotal + +prix
    document.getElementById("prixTotal").innerText = prixtotal.toFixed(2)

    // Ajouter le poids au poids total de l'article
    poids = document.getElementById(poidsnom).innerText;
    poids = +poids + +weight ;
    document.getElementById(poidsnom).innerText = poids;
    // ajouter le poid au poid total de la facture
    poidstotal = document.getElementById("poidsTotal").innerText;
    poidstotal = +poidstotal + +poids ;
    document.getElementById("poidsTotal").innerText = poidstotal;

    // Ajouter la qts au pommes
    qts = document.getElementById(qtsnom).innerText;
    qts = +qts + 1;
    document.getElementById(qtsnom).innerText = qts;
    // Ajouter la QTS au total
    qtsTotal = document.getElementById("qteTotal").innerText;
    qtsTotal = +qtsTotal + 1;
    document.getElementById("qteTotal").innerText = qtsTotal;

}
