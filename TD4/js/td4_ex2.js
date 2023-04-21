const personne = {
    nom : "nom",
    prenom : "prenom",
    age : 30,
    taille : 153,
    langue: "français",
    get lang() {
        return this.langue;
    },
    set lang(newLangue) {
        this.langue = newLangue;
    }
};

const obj = {counter: 0};

Object.defineProperty(obj, "reset", {
    get: function() {
        this.counter = 0;
    }
});

Object.defineProperty(obj, "inc", {
    get: function() {
        this.counter++;
    }
});

Object.defineProperty(obj, "dec", {
    get: function() {
        this.counter--;
    }
});

Object.defineProperty(obj, "add", {
    set: function(value) {
        this.counter += value;
    }
});

Object.defineProperty(obj, "subs", {
    set: function(value) {
        this.counter -= value;
    }
});

function Personne(nom, prenom, age, couleurYeux) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.couleurYeux = couleurYeux;
    this.name = function() {
        console.log(this.prenom + " " + this.nom);
    };
    this.changeName = function(newNom) {
        this.nom = newNom;
      };
};

const pere = new Personne("Miranda", "Jean", 71, "marron");
const mere = new Personne("Miranda", "Therese", 73, "vert");

console.log(Math.random());
console.log(Math.pow(2,3));