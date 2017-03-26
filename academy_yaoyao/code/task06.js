function drag () {
	var popUp = document.getElementById("pop-up");

	popUp.onmousedown = function(event) {
		var x = event.clientX - popUp.offsetLeft;
		var y = event.clientY - popUp.offsetTop;
		
		document.onmousemove = function(event) {
			var left = event.clientX - x;
			var top = event.clientY - y;
			popUp.style.margin = 0;
			
			if(left < 0) {
				left = 0;
			}
			else if(left > document.body.clientWidth - popUp.offsetWidth) {
				left = document.body.clientWidth - popUp.offsetWidth;
			}

			if(top < 0) {
				top = 0;
			}
			else if(top > document.body.clientHeight - popUp.offsetHeight) {
				top = document.body.clientHeight - popUp.offsetHeight;
			}

			popUp.style.left = left + "px";
			popUp.style.top = top + "px";
		}

		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmousedown = null;
			return false;
		}
	}
}

function popClear () {
	var popUp = document.getElementById("pop-up");
	var background = document.getElementById("background");
	popUp.style.display = "none";
	background.style.display = "none";
}

function popAppear () {
	var popUp = document.getElementById("pop-up");
	var background = document.getElementById("background");
	popUp.style.display = "block";
	popUp.style.margin = "0 auto";
	popUp.style.top = "20%";
	popUp.style.left = 0;
	popUp.style.right = 0;
	background.style.display = "block";
}

function init () {
	var sure_button = document.getElementById("sure");
	var cancel_button = document.getElementById("cancel");
	var background = document.getElementById("background");
	var appear = document.getElementById("appear");

	sure_button.addEventListener('click', popClear);
	cancel_button.addEventListener('click', popClear);
	background.addEventListener('click', popClear);
	appear.addEventListener('click', popAppear);
	
	drag();
}

init();