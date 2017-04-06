function phoneJudge() {
	var phoneNum = document.getElementById("phone").value;
	var result = document.getElementById("phone-result");
	var phoneMatch = /[1][358]\d{9}/;
	console.log(phoneNum.search(phoneMatch));
	if(phoneNum.search(phoneMatch) == -1 || phoneNum.length != 11) {
		result.innerHTML = "手机号码输入的格式错误哦！";
		result.className = "error";
	}
	else {
		result.innerHTML = "手机号码输入的格式正确哦！";
		result.className = "correct";
	}
}

function wordJudge() {
	var word = document.getElementById("word").value;
	var result = document.getElementById("word-result");
	var wordMatch = /\b(\w+)\b\s+\1\b/;
	console.log(word.search(wordMatch));
	if(word.search(wordMatch) == -1) {
		result.innerHTML = "输入的字符串没有相邻重复单词哦！";
		result.className = "error";
	}
	else {
		result.innerHTML = "输入的字符串有相邻重复单词哦！";
		result.className = "correct";
	}
}

function init() {
	var button1 = document.getElementById("phone-button");
	button1.addEventListener('click', function() {
		phoneJudge();
	});

	var button2 = document.getElementById("word-button");
	button2.addEventListener('click', function() {
		wordJudge();
	});
}

init();