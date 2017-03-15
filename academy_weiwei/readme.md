# 微微学院

## 任务一：零基础HTML编码

### 要求

[零基础HTML编码](http://ife.baidu.com/course/detail/id/90)

### 资料

- [Web相关名词通俗解释](https://www.zhihu.com/question/22689579)
- [MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)

### 完成情况

虽然没有与示例的效果完全一致，但具体结构相近。对HTML有了大体的了解，特别是对不同标签所代表的含义有了更深入的理解。

### 代码列表

* task01.html


---

## 任务二：零基础HTML及CSS编码（一）

### 要求

[零基础HTML及CSS编码（一）](http://ife.baidu.com/course/detail/id/92)

### 资料

- [MDN CSS入门教程](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)

### 完成情况

在任务一的基础上编写CSS代码过程中，发现任务一编写的HTML代码的结构不够完善，并且发现部分使用的标签不符合语义，所以也对基于任务一中的HTML代码进行了更改。

###  代码列表

* task02.html
* task02.css


---

## 任务三：三栏式布局

### 要求

[三栏式布局](http://ife.baidu.com/course/detail/id/94)

### 资料

- [MDN：position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)：了解 CSS position 属性的基本知识
- [MDN：float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)：了解 CSS float 属性的基本知识
- [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)：通过具体的例子熟悉 position 属性
- [清除浮动（clearfix hack）](http://zh.learnlayout.com/clearfix.html)：清除浮动是什么，如何简单地清除浮动
- [StackOverflow：Which method of ‘clearfix’ is best?](http://stackoverflow.com/questions/211383/which-method-of-clearfix-is-best)：清除浮动黑科技完整解读

### 完成情况

应该基本符合任务要求。

三栏式布局要点：

如果想要使用浮动实现三栏式布局，需要将浮动的列写在固定列的前面，不然可能会出现浮动列在固定列下方的情况。

```html
<div>
  <div class="left" style="float:left"></div>
  <div class="right" style="float:right"></div>
  <div class="main"></div>
  </div>
</div>
```

> [yubolun's 2017 Baidu IFE](http://ife.yubolun.com/html&css/2017/02/26/task-3-three-column.html)



加入了响应式设计，即当屏幕大小小于某个值时，取消浮动。但是只是简单的应用了一下，对响应式布局设计还不了解，之后会认真学习这方面的知识。

### 代码列表

* task03.html
* task03.css   


---

## 任务四：定位和居中问题

### 要求

[定位和居中问题](http://ife.baidu.com/course/detail/id/95)

### 资料

- [HTML和CSS高级指南之二——定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)：大漠老师手把手教你，这次彻底搞懂定位问题
- [Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)：完整讨论了不同情况下的居中方案，建议自己思考之后再看答案
- [Get HTML & CSS Tips In Your Inbox](http://howtocenterincss.com/)：有人写了一个作弊工具生成居中代码，但是看着代码你明白为什么吗

### 完成情况

应该基本符合要求。觉得对于垂直居中还要继续深入了解

### 代码列表

* task04.html
* task04.css


---

## 任务五：零基础HTML及CSS编码（二）

### 要求

[任务五：零基础HTML及CSS编码（二）](http://ife.baidu.com/course/detail/id/96?t=1489561632644#learn)

### 完成情况

基本符合要求

### 代码列表

* task05.html
* task05.css

