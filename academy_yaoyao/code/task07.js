function Data(arr) {
	this.arr = arr;
	this.c_sort = "up";
	this.m_sort = "up";
	this.e_sort = "up";
	this.s_sort = "up";
	this.sort_type = "s_sort";
}

function inputData(data) {
	var name = document.getElementById("name").value;
	var chinese = parseInt(document.getElementById("chinese").value);
	var english = parseInt(document.getElementById("english").value);
	var math = parseInt(document.getElementById("math").value);
	if(name.length == 0) {
		alert("姓名不能为空哦");
	}
	else if(chinese.length == 0 || isNaN(chinese)) {
		alert("语文成绩输入不对哦");
	}
	else if(english.length == 0 || isNaN(english)) {
		alert("英语成绩输入不对哦");
	}
	else if(math.length == 0 || isNaN(math)) {
		alert("数学成绩输入不对哦");
	}
	else {
		var sum = chinese + english + math;
		data.arr.push([name, chinese, math, english, sum]);
		(data[data.sort_type] == "up") ? (data[data.sort_type] = "down") : (data[data.sort_type] = "up");
		return selectSort(data);
	}
	return data;
}

function sort(data, num) {
	if(data[data.sort_type] == "up") {
		data.arr.sort(function(a,b) {
			if(a[num] < b[num]) return 1;
			if(a[num] > b[num]) return -1;
		})
		data[data.sort_type] = "down";
	}
	else {
		data.arr.sort(function(a,b) {
			if(a[num] > b[num]) return 1;
			if(a[num] < b[num]) return -1;
		})
		data[data.sort_type] = "up";
	}
	return data;
}

function selectSort(data) {
	switch(data.sort_type) {
		case 'c_sort':
			data = sort(data, 1);
			break;
		case 'm_sort':
			data = sort(data, 2);
			break;
		case 'e_sort':
			data = sort(data, 3);
			break;
		case 's_sort':
			data = sort(data, 4);
			break;
		default:
			break;
	}
	render(data);
	return data;
}

function render(data) {
	var render = document.getElementById("render");
	var result = "";
	data.arr.forEach(function(x) {
		result += "<tr>";
		x.forEach(function(y) {
			result += "<td>" + y + "</td>";
		})
		result += "</tr>";
	})
	render.innerHTML = result;
}

function init() {
	var arr = [["小明", 80, 30, 60, 170], ["小花", 90, 100, 80, 270], ["小美", 70, 60, 80, 210]];
	var data = new Data(arr);
	data = selectSort(data);
	var submit = document.getElementById("submit");
	submit.addEventListener('click', function() {
		data = inputData(data);
	});
	var button = ["sort-chinese", "sort-math", "sort-english", "sort-sum"];
	var type = ["c_sort", "m_sort", "e_sort", "s_sort"];
	button.forEach(function(x, i) {
		var mbutton = document.getElementById(x);
		mbutton.addEventListener('click', function() {
			data.sort_type = type[i];
			data = selectSort(data);
		})
	})
}

init();