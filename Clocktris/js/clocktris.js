window.onload = function () {
	var date = new Date();
	var currentTimeMilliseconds = date.getTime() - date.getTimezoneOffset() * 60 * 1000;
	var secondsOffset = ((currentTimeMilliseconds / 1000) % 60) * 6;
	var minutesOffset = ((currentTimeMilliseconds / 1000 / 60) % 60) * 6;
	var hoursOffset   = ((currentTimeMilliseconds / 1000 / 60 / 60) % 12) * 30;

	document.getElementsByClassName("seconds-hand")[0].children[0].setAttribute("from", secondsOffset + " 250 250");
	document.getElementsByClassName("seconds-hand")[0].children[0].setAttribute("to", (secondsOffset + 360) + " 250 250");
	document.getElementsByClassName("minutes-hand")[0].children[0].setAttribute("from", minutesOffset + " 250 250");
	document.getElementsByClassName("minutes-hand")[0].children[0].setAttribute("to", (minutesOffset + 360) + " 250, 250");
	document.getElementsByClassName("hours-hand")[0].children[0].setAttribute("from", hoursOffset + " 250 250");
	document.getElementsByClassName("hours-hand")[0].children[0].setAttribute("to", (hoursOffset + 360) + " 250 250");
}