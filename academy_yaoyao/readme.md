# 耀耀学院

## 任务一：表单（一）单个表单项的检验

### 要求

[表单（一）单个表单项的检验](ife.baidu.com/course/detail/id/97)

### 资料

- [HTML表单指南](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms)

### 完成情况

应该基本完成要求。

使用`<from>`的`<button>`时，如果没有指明`type="button"`，会自动提交表单。解决办法：

* 使用`<input type="button">`
* 使用`<button type="button">`

如果需要给`addEventListener`中的第二个参数`function`传入参数，可以这样做：

```javascript
function test () {
  console.log("test");
}

button.addEventListener('click', function() {
  test(i);
});
```

中文字符长度为2使用的是正则表达式实现的，如果直接使用`string`的`length`属性计算，一个中文字符长度为1.

### 代码列表

* task01.html


---

## 任务二：表单（二）多个表单项的动态校验

### 要求

[任务二：表单（二）多个表单项的动态校验](http://ife.baidu.com/course/detail/id/101?t=1490236190163#learn)

### 完成情况

应该基本符合要求

### 代码列表

* task02.html
* task02.js

---

## 任务三：表单（三）联动

### 要求

[任务三：表单（三）联动](http://ife.baidu.com/course/detail/id/106?t=1490249610232#learn)

### 完成情况

应该基本符合要求

单选按钮找出选中项：

```jsx
<input type="radio" name="school" value="in-school" checked="checked" />在校生
<input type="radio" name="school" value="out-school" />非在校生
		
var radio = document.getElementsByName("school");
var checked = "";

radio.forEach(function(x) {
	if(x.checked == true) {
		checked = x.value;
	}
});
```

选择列表找出选中项：

```jsx
<select id="area">
	<option value="beijing" checked="checked">北京</option>
	<option value="guangzhou">广州</option>
</select>
			
var select1 = document.getElementById("area");
var value = select1.options[select1.selectedIndex].value;
```



### 代码列表

* task03.html
* task03.js

---

## 任务四：听指令的小方块（一）

### 要求

[任务四：听指令的小方块（一）](http://ife.baidu.com/course/detail/id/109?t=1490331957938#learn)

### 完成情况

应该基本符合要求

### 代码列表

* task04.html
* task04.js