/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
// Initialisation
// Nombre choisi par l'utilisateur
var nbreChoisi = 0;
var nbreEssai = 0;
// Nombre d'essais max
var nbreEssaisMax = 8;

// Tant que le nombreChoisi n'est pas égal à la solution 
// et que le nombre d'essai est inférieur au nombre d'essais max
// l'utilisateur a droit de faire une nouvelle tentative
while ((nbreChoisi !== solution) && (nbreEssai < nbreEssaisMax)) {
	nbreChoisi = Number(prompt("Entrez un nombre entre 1 et 100 :"));
	if (nbreChoisi < solution) {
		console.log(nbreChoisi + " est trop petit");
	}
	else {
		console.log(nbreChoisi + " est trop grand");
	}
	
	nbreEssai++;	
}

if (nbreChoisi === solution) {
	console.log("Bravo ! La solution était " + solution + ".");
	console.log("Vous avez trouvé en " + nbreEssai + " essai(s).");
}	
else {
	console.log("Perdu ... La solution était " + solution + ".");
}
