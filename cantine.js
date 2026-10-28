const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");
let plat = " ";
let prixUnitaire = 0;

async function main() {
    const rl = readline.createInterface({ input, output });
    let client;
    let codePlat;
    let quantite;
    let montantVerse;

    try {
        client = (await rl.question("Nom du client : ")).trim();
        console.log("Plats disponibles : 1. Attiéké-poisson (1500 FCFA), 2. Riz-poulet (2000 FCFA), 3. Alloco-oeuf (1000 FCFA)");
        codePlat = Number(await rl.question("Entrez le numéro du plat souhaité : "));
        quantite = Number(await rl.question("Entrez la quantité souhaitée : "));
        montantVerse = Number(await rl.question("Montant versé (FCFA) : "));
    } finally {
        rl.close();
    }

    // 1. Vérifier les données saisies
    if (!client || !Number.isInteger(codePlat) || codePlat < 1 || codePlat > 3) {
        console.log("Nom du client ou numéro de plat invalide.");
        return;
    }

    if (!Number.isInteger(quantite) || quantite <= 0) {
        console.log("La quantité doit être un entier strictement positif.");
        return;
    }

    if (!Number.isInteger(montantVerse) || montantVerse < 0) {
        console.log("Le montant versé doit être un nombre entier positif ou nul.");
        return;
    }

    // 2. Trouver le plat et son prix
    switch (codePlat) {
        case 1:
            plat = "Attiéké-poisson";
            prixUnitaire = 1500;
            break;
        case 2:
            plat = "Riz-poulet";
            prixUnitaire = 2000;
            break;
        case 3:
            plat = "Alloco-oeuf";
            prixUnitaire = 1000;
            break;
    }

    // 3. Calculer le montant total
    function calculerTotal(prix, nombre) {
        return prix * nombre;
    }

    const total = calculerTotal(prixUnitaire, quantite);

    // 4. Afficher le récapitulatif
    console.log(`Client: ${client}`);
    console.log(`Plat commandé: ${plat}`);
    console.log(`Prix unitaire: ${prixUnitaire} FCFA`);
    console.log(`Quantité: ${quantite}`);
    for (let i = 1; i <= quantite; i++) {
        console.log(`Portion ${i} : ${plat}`);
    }
    console.log(`Total à payer: ${total} FCFA`);

    // 5. Vérifier le paiement
    if (montantVerse >= total) {
        const monnaie = montantVerse - total;
        console.log(`Monnaie à rendre : ${monnaie} FCFA`);
    } else {
        const manque = total - montantVerse;
        console.log(`Montant manquant: ${manque} FCFA`);
    }
}

main().catch((error) => {
    console.error("Erreur lors de la saisie de la commande :", error);
    process.exitCode = 1;
});
