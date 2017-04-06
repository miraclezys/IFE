# 糯米学院

## 自定义checkbox， radio样式

### 要求

[自定义checkbox， radio样式](http://ife.baidu.com/course/detail/id/23?t=1490620696985#learn)

### 资料

- [MDN label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label): 了解html中label的基本知识
- [MDN background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position): 了解背景图片定位相关知识
- [MDN :checked](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked): 了解input的`:checked`伪类的基本知识以及应用场景
- [MDN :before](https://developer.mozilla.org/en-US/docs/Web/CSS/::before):了解input的`:before`伪元素的基本知识
- [MDN :after](https://developer.mozilla.org/en-US/docs/Web/CSS/::after):了解input的`:after`伪元素的基本知识

### 完成情况

应该基本完成要求。

分别使用了伪元素和图片实现自定义checkbox, radio样式。

### 效果预览

[自定义checkbox， radio样式](https://miraclezys.github.io/IFE/academy_nuomi/code/task01.html)

### 代码列表

* task01.html
* task01.css


---

## 自定义网页右键菜单

### 要求

[自定义网页右键菜单](http://ife.baidu.com/course/detail/id/26?t=1490693259217#learn)

### 完成情况

应该基本符合要求。

自定义菜单出现在鼠标指针右下方，当右边区域不够大，展示在左下方，同理，当下方区域不够时，展示在鼠标指针上方。

### 效果预览

[自定义网页右键菜单](https://miraclezys.github.io/IFE/academy_nuomi/code/task02.html)

### 代码列表

* task02.html
* task02.css
* task02.js


---

## 有趣的鼠标悬浮模糊效果

### 要求

[有趣的鼠标悬浮模糊效果](http://ife.baidu.com/course/detail/id/14)

### 资料

[CSS3 Transition](http://www.w3cplus.com/content/css3-transition)

[深入理解CSS3 gradient斜向线性渐变](http://www.zhangxinxu.com/wordpress/2013/09/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3css3-gradient%E6%96%9C%E5%90%91%E7%BA%BF%E6%80%A7%E6%B8%90%E5%8F%98/)

### 完成情况

应该基本符合要求。

用到的相关CSS属性还要更深入的理解。

### 效果预览

[有趣的鼠标悬浮模糊效果](https://miraclezys.github.io/IFE/academy_nuomi/code/task03.html)

### 代码列表

* task03.html
* task03.css


---

##  使用CSS实现折叠面板

### 要求

[使用CSS实现折叠面板](http://ife.baidu.com/course/detail/id/27)

### 完成情况

基本符合要求。

使用input的radio单选框特性结合CSS中的伪元素实现[bootstrap中折叠面板](http://v3.bootcss.com/javascript/#collapse-example-accordion)。

实现动画是使用`max-height`实现的，因为想`height`设为`auto`。但是如果将`transition`的`property`设为`max-height`，由于是对`label:after`进行动画设置，`content`中的内容就会提前出现，此时需要设置`overflow: hidden`就能解决这一问题，动画过渡也会比较自然。

### 效果预览

[ 使用CSS实现折叠面板](https://miraclezys.github.io/IFE/academy_nuomi/code/task04.html)

### 代码列表

* task04.html
* task04.css

---

## CSS3饼状loading效果

### 要求

[CSS3饼状loading效果](http://ife.baidu.com/course/detail/id/36)

### 完成情况

应该基本符合要求。

具体做法：

需要实现的效果：

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle3.gif)

内层圆分为三层：

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle1.png)

将一次圆周旋转分为以下几个部分(0%~100%)：

0%

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle1.png)

25%

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle25.png)

50%

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle50.png)

75%

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle75.png)

100%

![circle](https://raw.githubusercontent.com/miraclezys/IFE/master/academy_nuomi/image/circle100.png)

### 预览效果

[ CSS3饼状loading效果](https://miraclezys.github.io/IFE/academy_nuomi/code/task05.html)

### 代码列表

* task05.html
* task05.css

---

## 正则表达式之入门

### 要求

[正则表达式之入门](http://ife.baidu.com/course/detail/id/29)

### 完成情况

应该基本符合要求

### 预览效果

[正则表达式之入门](https://miraclezys.github.io/IFE/academy_nuomi/code/task06.html)

### 代码列表

* task06.html
* task06.css
* task06.js