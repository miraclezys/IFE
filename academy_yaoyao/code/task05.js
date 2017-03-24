var block = {
	dir_pos: 0,
	left_pos: 245,
	top_pos: -243.5,
	left: 6,
	top: 6
};

function go () {
	var mblock = document.getElementById('block');
	if(block.dir_pos == -0) block.dir_pos = 0;
	switch(block.dir_pos){
		case 0:
			if((block.top - 1) >= 1) {
				block.top_pos -= 40;
				block.top -= 1;
			}
			break;
		case 180:
			if((block.top + 1) <= 10) {
				block.top_pos += 40;
				block.top += 1;
			}
			break;
		case 270:
			if((block.left - 1) >= 1) {
				block.left_pos -= 40;
				block.left -= 1;
			}
			break;
		case -90:
			if((block.left - 1) >= 1) {
				block.left_pos -= 40;
				block.left -= 1;
			}
			break;
		case 90:
			if((block.left + 1) <= 10) {
				block.left_pos += 40;
				block.left += 1;
			}
			break;
		case 270:
			if((block.left + 1) <= 10) {
				block.left_pos += 40;
				block.left += 1;
			}
			break;
		default:
			break;
	}

	mblock.style.top = block.top_pos + "px";
	mblock.style.left = block.left_pos + "px";
}

function tunLef () {
	var mblock = document.getElementById('block');
	block.dir_pos = (block.dir_pos - 90) % 360;
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function tunRig () {
	var mblock = document.getElementById('block');
	block.dir_pos = (block.dir_pos + 90) % 360;
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function tunBac () {
	var mblock = document.getElementById('block');
	block.dir_pos = (block.dir_pos + 180) % 360;
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function tra (str) {
	var mblock = document.getElementById('block');
	switch(str) {
		case 'TRA LEF':
			if((block.left - 1) >= 1) {
				block.left -= 1;
				block.left_pos -= 40;
			}
			break;
		case 'TRA TOP':
			if((block.top - 1) >= 1) {
				block.top -= 1;
				block.top_pos -= 40;
			}
			break;
		case 'TRA RIG':
			if((block.left + 1) <= 10) {
				block.left += 1;
				block.left_pos += 40;
			}
			break;
		case 'TRA BOT':
			if((block.top + 1) <= 10) {
				block.top += 1;
				block.top_pos += 40;
			}
			break;
		default:
			break;
	}

	mblock.style.top = block.top_pos + "px";
	mblock.style.left = block.left_pos + "px";
}

function mov (str) {
	var mblock = document.getElementById('block');
	switch(str) {
		case 'MOV LEF':
			block.dir_pos = -90;
			tra("TRA LEF");
			break;
		case 'MOV TOP':
			block.dir_pos = 0;
			tra("TRA TOP");
			break;
		case "MOV RIG":
			block.dir_pos = 90;
			tra("TRA RIG");
			break;
		case "MOV BOT":
			block.dir_pos = 180;
			tra("TRA BOT");
			break;
		default:
			break;
	}
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function action (str) {
	switch(str) {
		case 'GO':
			go();
			break;
		case 'TUN LEF':
			tunLef();
			break;
		case 'TUN RIG':
			tunRig();
			break;
		case 'TUN BAC':
			tunBac();
			break;
		case 'TRA LEF':
			tra(str);
			break;
		case 'TRA TOP':
			tra(str);
			break;
		case 'TRA RIG':
			tra(str);
			break;
		case 'TRA BOT':
			tra(str);
			break;
		case 'MOV LEF':
			mov(str);
			break;
		case 'MOV TOP':
			mov(str);
			break;
		case 'MOV RIG':
			mov(str);
			break;
		case 'MOV BOT':
			mov(str);
			break;
		default:
			alert("输入格式不正确哦！");
			break;
	}
}

function init () {
	var button = document.getElementById("button");
	button.addEventListener('click', function() {
		action(document.getElementById("input-action").value);
	});
}

init();