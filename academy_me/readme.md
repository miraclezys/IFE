# 我的学院

> 用来记录一下学JavaScript的小练习



## 正则表达式练习（替换）

### 要求

这是阿里今年实习生招聘的一道在线编程题，好像也是CVTE笔试的其中一道编程题。

完成`render`函数，将`greeting`的使用`${}`描述的内容替换为`employee`中的对应属性的值，要求具有灵活性，且如果不符合要求的内容要使用`concole.log()`输出提示。

```javascript
var greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}.';
var employee = {
  name: 'XiaoMing', 
  age: 11,
  job: {
    jobName: 'designer',
    jobLevel: 'senior'
  }
};

var result = greeting.render(greeting, employee);
console.log(result);  //My name is XiaoMing, age 11, I am a designer
```



### 完成情况

我是用正则表达式做的，不过觉得自己的做法有点麻烦，觉得还需要继续完善，之后会再完善的。



### 效果预览

[正则表达式练习（替换）](https://miraclezys.github.io/IFE/academy_me/code/task01.html)

### 代码列表

* task01.html


---

