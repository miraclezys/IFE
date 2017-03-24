var block = {
	direction: 'top',
	dir_pos: 0,
	left_pos: 245,
	top_pos: -243.5,
	left: 6,
	top: 6
};

function go () {
	var mblock = document.getElementById('block');
	switch(block.direction){
		case 'top':
			if((block.top - 1) == 0) {
				alert("超出界了哦( ⊙ o ⊙ )！");
			}
			else {
				block.top_pos -= 40;
				block.top -= 1;
			}
			break;
		case 'down':
			if((block.top + 1) == 11) {
				alert("超出界了哦( ⊙ o ⊙ )！");
			}
			else {
				block.top_pos += 40;
				block.top += 1;
			}
			break;
		case 'left':
			if((block.left - 1) == 0) {
				alert("超出界了哦( ⊙ o ⊙ )！");
			}
			else {
				block.left_pos -= 40;
				block.left -= 1;
			}
			break;
		case 'right':
			if((block.left + 1) == 11) {
				alert("超出界了哦( ⊙ o ⊙ )！");
			}
			else {
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
	switch(block.direction) {
		case 'top':
			block.direction = 'left';
			break;
		case 'left':
			block.direction = 'down';
			break;
		case 'down':
			block.direction = 'right';
			break;
		case 'right':
			block.direction = 'top';
			break;
		default:
			break;
	}

	block.dir_pos = (block.dir_pos - 90) % 360;
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function tunRig () {
	var mblock = document.getElementById('block');
	switch(block.direction) {
		case 'top':
			block.direction = 'right';
			break;
		case 'right':
			block.direction = 'down';
			break;
		case 'down':
			block.direction = 'left';
			break;
		case 'left':
			block.direction = 'top';
			break;
		default:
			break;
	}

	block.dir_pos = (block.dir_pos + 90) % 360;
	mblock.style.transform = "rotate(" + block.dir_pos + "deg)";
}

function tunBac () {
	var mblock = document.getElementById('block');
	switch(block.direction) {
		case 'top':
			block.direction = 'down';
			break;
		case 'right':
			block.direction = 'left';
			break;
		case 'down':
			block.direction = 'top';
			break;
		case 'left':
			block.direction = 'right';
			break;
		default:
			break;
	}

	block.dir_pos = (block.dir_pos + 180) % 360;
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