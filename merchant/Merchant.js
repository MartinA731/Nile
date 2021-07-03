
"use strict";
const btn = document.getElementsByClassName("button")[0];

//toggles style of "Receiving on/off" button when clicked
function toggleBtn() {
	if(btn.innerHTML === "Receiving on") {
		//change text
		btn.innerHTML = "Receiving off";
		//change color
		btn.style.setProperty("--r", 171);
		btn.style.setProperty("--g", 171);
		btn.style.setProperty("--b", 171);
	}
	else {
		//change text
		btn.innerHTML = "Receiving on";
		//change color
		btn.style.setProperty("--r", 235);
		btn.style.setProperty("--g", 133);
		btn.style.setProperty("--b", 35);
	}
}