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


