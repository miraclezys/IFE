var arr = [];
function check (type) {
	switch(type) {
		case 'name':
			var input = document.getElementById("name");
			var hint = document.getElementById("hint-name");
			if(input.value.length == 0) {
				hint.innerHTML = "<span class='warning'>名称不能为空</span>";
				input.style.border = "1px solid #DC0115";
				arr[0] = false;
			}
			else if(getLength(input.value) < 4 || getLength(input.value) > 16) {
				hint.innerHTML = "<span class='warning'>长度不对哦，名字长度为4~16字符</span>";
				input.style.border = "1px solid #DC0115";
				arr[0] = false;
			}
			else {
				hint.innerHTML = "<span class='good'>名称格式正确</span>";
				input.style.border = "1px solid #61BE49";
				arr[0] = true;
			}
			break;
		case 'password':
			var input = document.getElementById("password");
			var hint = document.getElementById("hint-pass");
			if(input.value.length == 0) {
				hint.innerHTML = "<span class='warning'>密码不能为空</span>";
				input.style.border = "1px solid #DC0115";
				arr[1] = false;
			}
			else if(input.value.length < 5 || input.value.length > 16) {
				hint.innerHTML = "<span class='warning'>密码长度要为5~16字符</span>";
				input.style.border = "1px solid #DC0115";
				arr[1] = false;
			}
			else {
				hint.innerHTML = "<span class='good'>密码可用</span>";
				input.style.border = "1px solid #61BE49";
				arr[1] = true;
			}
			break;
		case 'a-password':
			var input = document.getElementById("a-password");
			var input2 = document.getElementById("password");
			var hint = document.getElementById("hint-apass");
			if(input.value.length == 0) {
				hint.innerHTML = "<span class='warning'>密码不能为空</span>";
				input.style.border = "1px solid #DC0115";
				arr[2] = false;
			}
			else if(input.value != input2.value) {
				hint.innerHTML = "<span class='warning'>密码输入不一致</span>";
				input.style.border = "1px solid #DC0115";
				arr[2] = false;
			}
			else {
				hint.innerHTML = "<span class='good'>密码输入一致</span>";
				input.style.border = "1px solid #61BE49";
				arr[2] = true;
			}
			break;
		case 'email':
			var input = document.getElementById("email");
			var hint = document.getElementById("hint-email");
			if(input.value.length == 0) {
				hint.innerHTML = "<span class='warning'>邮箱不能为空</span>";
				input.style.border = "1px solid #DC0115";
				arr[3] = false;
			}
			else if(input.value.indexOf("@") == -1 || input.value.indexOf(".") == -1
				|| input.value.indexOf("@") > input.value.indexOf(".") 
				|| input.value.indexOf(".") == input.value.length-1) {
				hint.innerHTML = "<span class='warning'>邮箱格式错误</span>";
				input.style.border = "1px solid #DC0115";
				arr[3] = false;
			}
			else {
				hint.innerHTML = "<span class='good'>邮箱格式正确</span>";
				input.style.border = "1px solid #61BE49";
				arr[3] = true;
			}
			break;
		case 'phone':
			var input = document.getElementById("phone");
			var hint = document.getElementById("hint-phone");
			if(input.value.length == 0) {
				hint.innerHTML = "<span class='warning'>手机号码不能为空</span>";
				input.style.border = "1px solid #DC0115";
				arr[4] = false;
			}
			else if(isNaN(input.value) || input.value.length != 11) {
				hint.innerHTML = "<span class='warning'>手机号码输入格式不正确</span>";
				input.style.border = "1px solid #DC0115";
				arr[4] = false;
			}
			else {
				hint.innerHTML = "<span class='good'>手机号码输入格式正确</span>";
				input.style.border = "1px solid #61BE49";
				arr[4] = true;
			}
			break;
		case 'submit':
			console.log(arr);
			if(arr.length < 5) {
				alert("输入有误");
				break;
			}
			for(var i=0; i<arr.length; i++) {
				if(arr.length < 5 || arr[i] == false || arr[i] == undefined) {
					alert("输入有误");
					break;
				}
			}
			alert("输入正确");
			break;
		default:
			break;
	}
}

function tips (type) {
	switch(type) {
		case 'name':
			var hint = document.getElementById("hint-name");
			hint.innerHTML = "<span>必填，长度为4~16字符/span>";
			break;
		case 'password':
			var hint = document.getElementById("hint-pass");
			hint.innerHTML = "<span>必填，长度为5~16字符/span>";
			break;
		case 'a-password':
			var hint = document.getElementById("hint-apass");
			hint.innerHTML = "<span>再次输入相同的密码哦</span>";
			break;
		case 'email':
			var hint = document.getElementById("hint-email");
			hint.innerHTML = "<span>输入你的邮箱</span>";
			break;
		case 'phone':
			var hint = document.getElementById("hint-phone");
			hint.innerHTML = "<span>输入你的手机号码</span>";
			break;
		default:
			break;
	}
}

function getLength (text) {
	var len = 0;
	for(var i=0; i<text.length; i++) {
		if(text.charAt(i).match(/[^\x00-\xff]/ig) != null) {
			len += 2;
		}
		else {
			len += 1;
		}
	}
	return len;
}

function addListener (str) {
	var button = document.getElementById(str);
	button.addEventListener('click', function() {
		tips(str);
	});
	button.addEventListener('blur', function() {
		check(str);
	});
}

function init () {
	var arr1 = ["name", "password", "a-password", "email", "phone"];
	arr1.forEach(function(x) {
		addListener(x);
	})
	var button = document.getElementById("submit");
	button.addEventListener('click', function() {
		check("submit");
	})
}

init();