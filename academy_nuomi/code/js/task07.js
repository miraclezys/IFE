function Observer(data) {
	this.data = data;
	this.walk(data);
}

let property = Observer.prototype;

property.walk = function(obj) {
	for(let key in obj) {
		if(obj.hasOwnProperty(key)) {
			let val = obj[key];

			if(typeof val === 'object') {
				new Observer(val);
			}

			this.convert(key, val);
		}
	}
};

property.convert = function(key, val) {
	Object.defineProperty(this.data, key, {
		enumerable: true,
		configurable: true,
		get: function() {
			console.log("你访问了 " + key);
			return val;
		},
		set: function(newVal) {
			console.log("你设置了 " + key + "，新的值为" + newVal);
			if(val != newVal) {
				val = newVal;
			}
			return;
		}
	})
};


let app1 = new Observer({
	name: 'youngwind',
	age: 25
});

let app2 = new Observer({
	university: 'bupt',
	major: 'computer'
});

// 要实现的结果如下：
app1.data.name // 你访问了 name
app1.data.age = 100;  // 你设置了 age，新的值为100
app2.data.university // 你访问了 university
app2.data.major = 'science'  // 你设置了 major，新的值为 science