const client = "Awa";
const codeplat = 1;
const quantiteVerse = 5000;
const quantite = Number("5");
let plat = " ";
let prixUnitaire = 0;
// 1. Verification des données
if (
    !Number.islnteger(codeplat) //
    codeplat < 1 //
    codeplat > 3 //
    !Number.islnteger(quantite) //
    quantite <= 0
) {
    console.log("Le plat non disponible ou la quantité invalide.");  
} else {
    // 2. Trouver le plat et son prix
    switch(codeplat) {
        case 1:
            plat = "Attiéké-poisson";
            prixUnitaire = 1500;
            break;
        case 2:
            plat = Riz-poulet;
            prixUnitaire =2000;
            break;
        case 3:
            plat = Alloco-oeuf;
            prixUnitaire = 1000;
            break;
    }
}
// 3. Fonction de calcul du montant total
function calculerTotal(ptrixUnitaire, quantite) {
    return prixUnitaire * quantite;
}
const Total = calculerTotal(prixUnitaire, quantite);
// 4. Afficher le récapitulatif
console.log(`client: ${client}`);
console.log(`Plat commandé: ${plat}`);
console.log(`Prix unitaire: ${prixUnitaire} FCFA`);
console.log(`Quantité: ${quantite}`);
for (let i = 1; i <= quantite, i++) {
    console.log(`Portion ${i} : ${plat}`).
}
console.log(`Total à payer: ${total} FCFA`).

// 5. Verication du paiement
if (montantVerse >= total) {
    const monnaie = montantVerse - total;
    console.log(`Monnaie à rendre : ${monnaie} FCFA`);
} else {
    const manque = total - montantVerse;
    console.log(`Montant manquant: ${manque} FCFA`).
}