# M413 - TD1 : Réponses aux Questions

# Exercice 1
## 6.1
    - On utilise la fonction onLoad() pour déclancher l'appelle de la fonction

    - document.getElementById("title");

    - 

    - document.getElementsByTagName("h2")[0];

    - var h2Elements = document.getElementsByTagName('h2');
    const h2count = h2Elements.length;

    - document.getElementsByClassName("firstOrLast");

    - if (elements.length % 2 === 0)

## 6.2

    - InnerHTML : récupère ou définit la syntaxe HTML décrivant les descendants de l'élément
    - InnerText : représente le contenue textuel « visuellement rendu » d’un noeud
    - textContent : représente le contenue textuel d'un noeud et de c'est descendant

## 6.3

    - let author = meta[0].getAttribute("content");
	- let author = meta[count-1].getAttribute("content");

# Exercice 2
## 7

    - const dateNow = Date.now();
	let fromDate = new Date("2023-07-19");
	let date = fromDate-dateNow;
	date = date/86400000;
	date = Math.trunc(date);

    - document.addEventListener("click", function() { //code }})

## 7.1

    - setInterval() car elle met à jour le temps et lance la fonction à chaque fin d'intervalle comparé à setTimeout() qui lance la fonction quand l'intervalle expire

## 8.1

    - input.addEventListener("input", function() {})
    - avec une condition et input.className = "le nom de la couleur"

## 8.2

    