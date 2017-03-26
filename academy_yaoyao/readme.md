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

中文字符长度为2使用的是正则表达式实现的，如果直接使用`string`的`length`属性计算，一个中文字符长度为1。

### 效果预览

[任务一：表单（一）单个表单项的检验](https://miraclezys.github.io/IFE/academy_yaoyao/code/task01.html)

### 代码列表

* task01.html


---

## 任务二：表单（二）多个表单项的动态校验

### 要求

[任务二：表单（二）多个表单项的动态校验](http://ife.baidu.com/course/detail/id/101?t=1490236190163#learn)

### 完成情况

应该基本符合要求

### 效果预览

[任务二：表单（二）多个表单项的动态校验](https://miraclezys.github.io/IFE/academy_yaoyao/code/task02.html)

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

### 效果预览

[任务三：表单（三）联动](https://miraclezys.github.io/IFE/academy_yaoyao/code/task03.html)

### 代码列表

* task03.html
* task03.js

---

## 任务四：听指令的小方块（一）

### 要求

[任务四：听指令的小方块（一）](http://ife.baidu.com/course/detail/id/109?t=1490331957938#learn)

### 完成情况

应该基本符合要求

### 效果预览

[任务四：听指令的小方块（一）](https://miraclezys.github.io/IFE/academy_yaoyao/code/task04.html)

### 代码列表

* task04.html
* task04.js

---

## 任务五：听指令的小方块（二）

### 要求

[任务五：听指令的小方块（二）](http://ife.baidu.com/course/detail/id/112?t=1490357899570#learn)

### 完成情况

应该基本符合要求

### 效果预览

[任务五：听指令的小方块（二）](https://miraclezys.github.io/IFE/academy_yaoyao/code/task05.html)

### 代码列表

* task05.html
* task05.js





div的父元素没有撑满，body和html都要100%

```css
html,body{
    height: 100%;
    width: 100%;
}
```

---

## 任务六：UI组件之浮出层

### 要求

[任务六：UI组件之浮出层](http://ife.baidu.com/course/detail/id/115?t=1490490748008#learn)

### 完成情况

实现点击浮出层`确定`或`取消`按钮，或者点击浮出层以外的部分，关闭浮出层。实现浮出层可以通过鼠标拖拽移动。

拖拽移动效果部分变量解释：

![img](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_yaoyao/image/jiexi.png)

>  橙色的箭头代表鼠标

* `clientX `事件属性返回当事件被触发时鼠标指针向对于浏览器页面（或客户区）的水平坐标。客户区指的是当前窗口。不考虑窗口的滚动。
* `clientY `事件属性返回当事件被触发时鼠标指针向对于浏览器页面（客户区）的垂直坐标。
* `offsetLeft`是指返回当前元素左上角相对于  [`HTMLElement.offsetParent`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent) 节点（父元素）的左边界偏移的像素值
* `offsetTop`是指返回当前元素左上角相对于其 [`offsetParent`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/offsetParent) 元素的顶部的距离。
* `offsetWidth`返回一个元素的布局宽度(width+padding+border)
* `offsetHeight`返回一个元素的布局高度(height+padding+border)
* `document.body.clientWidth `是指`<body>`元素的宽度，即网页可见区域宽度
* `document.body.clientHeight `是指`<body>`元素的高度，即网页可见区域高度



运算一下：

变量`x`指的是当前鼠标指针距离小窗口左边界的距离

```javascript
var x = event.clientX - popUp.offsetLeft;
```

变量`y`指的是当前鼠标指针距离小窗口上边界的距离

```javascript
var y = event.clientY = popUp.offsetTop;
```

变量`left`指的是小窗口距离`<body>`元素，即网页可见区域左边界（可暂时通俗理解为屏幕左边界）的距离

```javascript
var left = event.clientX - x;	
```

变量`top`指的是小窗口距离`<body>`元素，即网页可见区域上边界（不包括工具栏）的距离

```javascript
var top = event.clientY - y;
```

所以我们通过计算得到的`left`和`top`的值就可以作为小窗口`pop-up`的`.style.left`和`.style.top`的值，从而在拖动鼠标的时候，可以实时更新小窗口的值，从而实现小窗口可拖拽的效果。

不过要记得判断`left`和`top`的值是否超出窗口的值：

```javascript
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
```

### 代码列表

* task06.html
* task06.js