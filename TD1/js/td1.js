'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	//defineHeading1();
	//defineHeading2();
	//defineHeading3();
	//defineHeading4();
	//swapInnerHTML();
	//dateAlter();
	getNbDate();
	updateClock1();
	//updateGraphicClock();
	inputNb();
}

function defineHeading1() {
	let h1 = document.getElementById("title");
	document.title = h1.innerHTML;
}

function defineHeading2() {
	let h2 = document.getElementsByTagName("h2")[0];
	document.title = h2.innerHTML;
}


function defineHeading3() {
	var h2Elements = document.getElementsByTagName('h2');
	const h2count = h2Elements.length;
	if (h2count > 0) {
		document.title = h2Elements[h2count - 1].innerHTML;
	} else {
		document.title = "Soares M Sydalia";
	}
}

function defineHeading4() {
	let elements = document.getElementsByClassName("firstOrLast");
	const count = elements.length;
	if (count === 0) {
		document.title = "Soares M Sydalia";
	} else if (count % 2 === 0) {
		document.title = elements[0].innerHTML;
	} else {
		document.title = elements[count - 1].innerHTML;
	}
}

function swapInnerHTML() {
	let p = document.getElementsByTagName("p");
	let change = p[0].innerHTML;
	p[0].innerHTML = p[1].innerHTML;
	p[1].innerHTML = change;
}

function dateAlter() {
	const dateUp = new Date(document.lastModified);
	/*
	const [day, date, month, year] = [
		dateUp.getDay(modifed),
		dateUp.getDate(modifed),
		dateUp.getMonth(modifed),
		dateUp.getFullYear(modifed)
	];
	*/
	let meta = document.getElementsByTagName("meta");
	const count = meta.length;
	let author = meta[1].getAttribute("content");
	//let author = meta[count-1].getAttribute("content");
	document.getElementById("update-date").innerHTML =
	"Dernière Modification : le "+ dateUp.toDateString()+" par " + author;
}

function getNbDate() {
	let pDate = document.getElementById("nbDays");
	const dateNow = Date.now();
	let fromDate = new Date("2023-07-19");
	let date = fromDate-dateNow;
	date = date/86400000;
	date = Math.trunc(date);
	let s;
	if (date>1) s = "s"
	else s = ""
	document.addEventListener("click", function() {
		var texte = "il reste "+date+" jour"+s+" avant le 19 juillet 2023";
		pDate.innerText = texte;	
	})
}

function updateClock1() {
	let pClock = document.getElementById("clock");
	let clock1 = new Date;
	let timeInterv;
	const [hours, minutes, seconds] = [
		clock1.getHours(),
		clock1.getMinutes(),
		clock1.getSeconds()
	];
	pClock.innerText = hours+":"+minutes+":"+seconds;
	timeInterv = setInterval(updateClock1, 1000);
}

function updateClock2() {
	let pClock = document.getElementById("clock");
	let clock1 = new Date;
	let timeTimeout;
	let [hours, minutes, seconds] = [
		clock1.getHours(),
		clock1.getMinutes(),
		clock1.getSeconds()
	];
	pClock.innerText = hours+":"+minutes+":"+seconds;
	timeTimeout = setTimeout(updateClock2, 1000);
}

function updateGraphicClock() {
	let divClock = document.getElementById("graphic-clock");
	let clock = new Date();
	let secInterv;
	let [hours, minutes, seconds] = [
		clock.getHours(),
		clock.getMinutes(),
		clock.getSeconds()
	];
	let [strHours, strMinutes, strSeconds] = [
		hours.toString(),
		minutes.toString(),
		seconds.toString()
	];
	document.getElementById("hour1").src="assets/images/"+strHours[0]+".gif";
	document.getElementById("hour2").src="assets/images/"+strHours[1]+".gif";
	document.getElementById("minute1").src="assets/images/"+strMinutes[0]+".gif";
	document.getElementById("minute2").src="assets/images/"+strMinutes[1]+".gif";
	document.getElementById("second1").src="assets/images/"+strSeconds[0]+".gif";
	document.getElementById("second2").src="assets/images/"+strSeconds[1]+".gif";
	secInterv = setInterval(updateGraphicClock, 1000);
}

function inputNb() {
	let input = document.getElementById("txt");
	input.addEventListener("input", function() {
		if (input.value == "") {
			input.className = "white"
		} else if (isNaN(input.value)) {
			input.className = "red"
		} else if (!isNaN(input.value)){
			input.className = "green"
		}
	})

	function menuDeroulant() {
		const menu = document.querySelector("")
	}
}