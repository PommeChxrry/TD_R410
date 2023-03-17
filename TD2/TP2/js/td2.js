/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log( message);

function onLoad() {
	console.log( 'Processus de chargement du document terminé…');
	initSelect();
	insertElement();
}

function initSelect() {
	var body = document.body;
    body.addEventListener('click', select2);
}

function select(event) {
	if (event.target.style.backgroundColor == 'red') {
		event.target.style.backgroundColor = '';
	} else {
		event.target.style.backgroundColor = 'red';
	}
}

function select2(event) {
	const div = document.getElementById('insert-div');
	const type = document.getElementById('insert-type');
	const text = document.getElementById('insert-text');
	if (event.target == div || event.target == type || event.target == text) {
		return;
	}
	const elementsselected = document.querySelectorAll('.selected');
	elementsselected.forEach(e => {
		e.style.backgroundColor = '';
		e.classList.remove('selected');
	}
		);
	event.target.classList.add("selected");
	if (event.target.style.backgroundColor == 'blue') {
		event.target.style.backgroundColor = '';
	} else {
		event.target.style.backgroundColor = 'blue';
	}
	
	insertElement(event.target);
	
}

function insertElement(target) {
	var elementType = document.getElementById("insert-type").value;
	var elementText = document.getElementById("insert-text").value;

	var newElement = document.createElement(elementType);
	var newText = document.createTextNode(elementText);
	newElement.appendChild(newText);

	target.parentNode.insertBefore(newElement, target);
}



// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;
