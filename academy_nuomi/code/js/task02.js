function disappearList (event) {
	var list = document.getElementById("list");
	list.style.display = "none";
}

function appearList (event) {
	var list = document.getElementById("list");
	list.style.display = "block";

	if((document.body.clientWidth - event.clientX) > list.offsetWidth 
		&& (document.body.clientHeight - event.clientY) > list.offsetHeight) {
		var left = event.clientX;
		var top = event.clientY;
	}
	else if(event.clientX > list.offsetWidth 
		&& (document.body.clientHeight - event.clientY) > list.offsetHeight) {
		var left = event.clientX - list.offsetWidth;
		var top = event.clientY;
	}
	else if((document.body.clientWidth - event.clientX) > list.offsetWidth 
		&& event.clientY > list.offsetHeight) {
		var left = event.clientX;
		var top = event.clientY - list.offsetHeight;
	}
	else {
		var left = event.clientX - list.offsetWidth;
		var top = event.clientY - list.offsetHeight;
	}

	list.style.left = left + "px";
	list.style.top = top + "px";
}

function init() {
	document.oncontextmenu = function(event) {
		event.preventDefault();
	};

	var menu = document.getElementById("main-menu");
	menu.onmousedown = function(event) {
		if(event.button == 2) {
			appearList(event);
		}
		else if(event.button == 0) {
			disappearList(event);
		}
	}

	document.getElementById("container").onmousedown = function(event) {
		if(event.button == 0) {
			disappearList(event);
		}
	}
}

init();