function Personne(nom, prenom, age, couleurYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurYeux = couleurYeux;
};

Personne.prototype.nationalite = "française";

Personne.prototype.name = function() {
    console.log(this.prenom + " " + this.nom);
};




function Personne2(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
    this.estomac = [];
};

Personne2.prototype.manger = function(nourriture) {
    if (this.estomac.length < 10) {
        this.estomac.push(nourriture);
    } else {
        console.log("L'estomac est plein !");
    }
};

Personne2.prototype.digestionOK = function() {
    this.estomac = [];
};

Personne2.prototype.name = function() {
    console.log(this.prenom + " " + this.nom);
};




function Car(model, conso100km, reservoirlitre = 0, compteurkm = 0) {
    this.model = model;
    this.conso100km = conso100km;
    this.reservoirlitre = reservoirlitre;
    this.compteurkm = compteurkm;
};
Car.prototype.addfuel = function(nblt) {
    this.reservoirlitre += nblt;
};

Car.prototype.drive = function(nbkm) {
    const distance_possible = this.reservoirlitre / this.conso100km * 100;
    if (nbkm <= distance_possible) {
        this.reservoirlitre -= nbkm / 100 * this.conso100km;
        this.compteurkm += nbkm;
    } else {
        const xx = distance_possible;
        console.log("Je serai à cours de carburant dans "+xx+" km");
        this.compteurkm += distance_possible;
        this.reservoirlitre = 0;
    }
};




function Baby(nom, prenom, jouetFavori) {
    Personne2.call(this, nom, prenom);
    this.jouetFavori = jouetFavori;
};

Baby.prototype = Object.create(Personne.prototype);

Baby.prototype.jouer = function() {
    return "Je joue avec mon jouet favori " + this.jouetFavori;
}