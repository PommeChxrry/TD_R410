const personne = {
    nom : "nom",
    prenom : "prenom",
    age : 30,
    taille : 153
};

personne.nom;
personne.prenom;
personne.age;
personne.taille;

const x = personne;

x.age = 10;

// méthode 1
console.log(personne.nom);

// méthode 2
console.log(personne["taille"]);

// méthode 3
const taille = "taille";
console.log(personne[taille]);

for (let attribut in personne) {
    console.log(attribut + " : " + personne[attribut]);
}

personne.poids = 41;
delete personne.poids;

personne.sports = {
    sport1 : "basketball",
    sport2 : "tennis",
    sport3 : "volleyball"
}

console.log(personne.sports);

for (let i in personne.sports) {
    console.log(i + " : " + personne.sports[i]);
}

personne.sports = [
    {nom : "basketball", equipement : ["maillot", "ballon"]},
    {nom : "tennis", equipement : ["raquette", "balle"]},
    {nom : "volleyball", equipement : ["ballon", "filet"]}
];

for (let j in personne.sports) {
    console.log("Nom sport : " + personne.sports[j].nom);
    console.log("Equipements : " + personne.sports[j].equipement);
}

personne.qui = function() {
    console.log("Nom : "+this.nom+" - Prénom : "+this.prenom);
}
personne.qui();

personne.quimaj = function() {
    console.log("Nom : "+this.nom.toUpperCase()+" - Prénom : "+this.prenom.toUpperCase());
}
personne.quimaj();

const div1 = document.createElement("div");
div1.innerHTML = Object.values(personne);
document.body.appendChild(div1);

const div2 = document.createElement("div");
div2.innerHTML = JSON.stringify(personne);
document.body.appendChild(div2);

personne.dateDeNaissance = new Date(2003, 0, 26);

const div3 = document.createElement("div");
div3.innerHTML = JSON.stringify(personne);
document.body.appendChild(div3);

personne.methodAge = function() {
    return this.age;
}.toString()