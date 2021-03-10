# css 知识点合集
::: warning
 CSS（Cascading Style Sheet）定义如何显示 HTML 元素，用于控制Web页面的外观。
:::

## 盒模型

**<font size= 5> 1，什么是 css 盒模型？</font>**

元素的外边距（margin）、边框（border）、内边距（padding）、内容（content）就构成了CSS盒模型。


<div style="text-align:center;">
    <img src="../../.vuepress/public/img/css/boxSizing.png"  style="margin:0 auto;">
    
</div>
<div style="text-align:center; font-size: 14px;">盒模型</div>



**<font size= 5> 2，IE盒模型<font size= 3 color=green>（怪异模式）</font>和 W3C盒模型 <font size= 3 color=green>（标准模式）</font></font>**

<div style="text-align:center;">
    <img src="../../.vuepress/public/img/css/ieBox.png"  style="margin:0 auto;">
    
</div>
<div style="text-align:center; font-size: 14px;">IE盒模型</div>

- IE盒模型的计算方式为： width/height = content + padding + border

<div style="text-align:center; margin-top: 20px;">
    <img src="../../.vuepress/public/img/css/w3cBox.png"  style="margin:0 auto;">
    
</div>
<div style="text-align:center; font-size: 14px;">W3C盒模型</div>

- W3C盒模型的计算方式为： width/height = content


**<font size= 5> 3，盒模型的使用</font>**

```sh
    box-sizing: content-box | border-box | inherit
    //默认值为content-box
    // content-box: W3C盒模型
    // border-box: IE盒模型
    // inherit: 该属性的值应该从父元素继承
    
```


## 页面布局
## flex
## position
## css3动画
## 移动端适配
## BFC
## CSS 预处理器