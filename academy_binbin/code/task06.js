var arr = [];

function itemPos (text, start, end, arr1) {
	arr1.push({
		text: text.substring(start, end),
		start: start,
		end: end,
		pair: false
	});
}

function group () {
	var text = document.getElementById("text-input").value;
	var start = -1;
	var end = -1;
	var arr1 = [];
	for(var i=0; i<text.length; i++) {
		if(!text.charAt(i).match(/[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g)) {
			if(start == -1) {
				start = i;
			}
		}
		else {
			if(end == -1 && start != -1) {
				end = i;
				itemPos(text, start, end, arr1);
				start = -1;
				end = -1;
			}
		}

		if(i == text.length-1 && start != -1) {
			end = text.length;
			itemPos(text, start, end, arr1);
			start = -1;
			end = -1;
		}
	}
	return arr1;
}

function search () {
	var searchText = document.getElementById("search-input").value;
	arr.forEach(function(x) {
		x.pair = false;
	})

	arr.forEach(function(x, i) {
		if(x.text.indexOf(searchText) != -1) {
			arr[i].pair = true;
		}
	});
	render(1);
}

function deleteItem () {
	list = document.getElementById("result");
	list.innerHTML = "";
}

function leftIn () {
	value = document.getElementById("text-input").value;
	if(value == "") {
		alert("输入内容不能为空哦！");
	}
	else {
		var arr1 = group();
		for(var i=0; i<arr1.length; i++) {
			arr.unshift(arr1[i]);
		}
		deleteItem();
		render();
	}
}

function rightIn () {
	value = document.getElementById("text-input").value;
	if(value == "") {
		alert("输入内容不能为空");
	}
	else {
		var arr1 = group();
		arr1.forEach(function(x) {
			arr.push(x);
		});
		deleteItem();
		render();
	}
}

function leftOut () {
	temp = arr[0].text;
	arr.shift();
	deleteItem();
	render();
	alert(temp);
}

function rightOut () {
	temp = arr[arr.length-1].text;
	arr.pop();
	deleteItem();
	render();
	alert(temp);
}

function onClick (i) {
	var temp = document.getElementById("item-" + i);
	var id = temp.id;
	temp.addEventListener('click', function() {
		num = id.substr(5);
		arr.splice(num, 1);
		deleteItem();
		render();
	});
}

function addListener () {
	arr.forEach(function(x, i) {
		onClick(i);
	})
}

function render (k) {
	var result = "";
	if(k == 1) {
		result = "<p>匹配结果如下:</p>";
		arr.forEach(function(x, i) {
			if(x.pair) {
				result += ("<span class='want' " + " id='item-" + i + "'>" + x.text + "</span>");
			}
			else {
				result += ("<span" + " id='item-" + i + "'>" + x.text  + "</span>");
			}
		});
		document.getElementById("result").innerHTML = result + "<p>黄色的是匹配成功的结果哦</p>";
	}
	else {
		arr.forEach(function(x, i) {
			result += ("<span" + " id='item-" + i + "'>" + x.text  + "</span>");
		});
		document.getElementById("result").innerHTML = result;	
	}
	addListener ();	
}	

function init () {
	var button1 = document.getElementById("left-in");
	button1.addEventListener('click', leftIn);
	var button2 = document.getElementById("right-in");
	button2.addEventListener('click', rightIn);
	var button3 = document.getElementById("left-out");
	button3.addEventListener('click', leftOut);
	var button4 = document.getElementById("right-out");
	button4.addEventListener('click', rightOut);
	var button = document.getElementById("search-button");
	button.addEventListener('click',search);
}

init();