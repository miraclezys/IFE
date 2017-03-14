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
* task03.css   // 使用float实现
* task03_p.css  // 使用position实现




