/**
* 
* M413 - TD3 - Taquin Game
* * 
* @author Jean-Michel Bruneau
* @copyright UCA - IUT -INFO
* @version	1.0
* @date			2021-01-31
*
*/
"use strict";

const boxlist = document.querySelectorAll(".box");

boxlist.forEach(function (box) {
	box.addEventListener('click', function selection(event) {
		let clickedBox = event.target;
		let emptyBox = document.querySelector(".empty")

		if (clickedBox !== box) {
			clickedBox = clickedBox.parentNode;
		}

		if (clickedBox === emptyBox) {
			return;
		}

		const clickedBoxRow = clickedBox.id.charAt(1);
		const clickedBoxColumn = clickedBox.id.charAt(4);
		const emptyBoxRow = emptyBox.id.charAt(1);
		const emptyBoxColumn = emptyBox.id.charAt(4);

		if (Math.abs(parseInt(emptyBoxColumn - clickedBoxColumn) + parseInt(emptyBoxRow - clickedBoxRow)) === 1) {
			clickedBox.classList.add('empty');
			emptyBox.classList.remove('empty');
			let cellSpan = clickedBox.getElementsByTagName('span')[0];
			clickedBox.removeChild(cellSpan);
			emptyBox.appendChild(cellSpan);
		}

		/*
		const distanceRow = emptyBoxRow - clickedBoxRow;
		const distanceColumn = emptyBoxColumn - clickedBoxColumn;

		if (clickedBoxColumn === emptyBoxColumn || clickedBoxRow === emptyBoxRow) {
			if ((distanceColumn === 1 || distanceColumn === -1)(distanceRow === 1 || distanceRow === -1)) {
				clickedBox.classList.add('empty');
				emptyBox.classList.remove('empty');

				let cellSpan = clickedBox.getElementsByTagName('span')[0];
				clickedBox.removeChild(cellSpan);
				emptyBox.appendChild(cellSpan);
			}
		}
		*/
	})
})

