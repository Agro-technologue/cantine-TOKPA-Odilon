Projet Gestion de commande Automatique (GCA)

Presentation du projet :

ce projet consiste à développer un programme en JavaScript permettant de gerer la commande d'un client dans une cantine.
Il permet de selectionner un plat, de préciser la quantité de commande, de calculer le montant total à payer et de vérifier si le montant versé par le client est suffisant pour sa commande.
C'est un exercice réalisé dans le cadre du SAS_DFS.
L'objectif de ce projet est d'avoir un programme capable d'identifier un client, selectionner un plat à partir de son code, verifier que le code est compris entre 1 et 3 et que la quantité est un entier strictement positif; calculer le montant total de la commande, la monnaie à rendre ou le montant manquant et enfin, afficher le recapitulatif de la commande.

## Utilisation

Avec Node.js installé, ouvrez un terminal dans le dossier du projet et lancez :

```bash
node cantine.js
```

Le programme demande le nom du client, le numéro du plat, la quantité souhaitée et le montant versé. Choisissez un plat avec son numéro :

1. Attiéké-poisson — 1500 FCFA
2. Riz-poulet — 2000 FCFA
3. Alloco-oeuf — 1000 FCFA

La quantité doit être un entier strictement positif. Le programme affiche ensuite le récapitulatif de la commande, le total à payer et la monnaie à rendre ou le montant restant à payer.