# css3 的相关介绍和学习

::: warning
 CSS3是CSS（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、
 列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块.
:::

## css3 的相关模块有哪些?
- 选择器
- 盒模型
- 背景和边框
- 文字特效
- 2D/3D转换
- 动画
- 多列布局
- 用户界面


## 详解css3----选择器
### 结构伪类选择器

:first-child  ---------选择元素中的第一个子元素
:last-child   ---------选择元素中的最后一个子元素
:nth-child(n) -------- 定位某个父元素的一个或多个特定的子元素


### 伪元素选择器
::before -----在元素内容的前面插入内容
::after  -----在元素内容的后面插入内容

语法: 元素为==行内元素....必须要结合content属性使用
```sh
  
```

## 详解css3----2D转换(transform)

::: warning
  CSS3 2D转换可以对元素进行移动，缩放，旋转，拉伸，从而达到改变元素的位置，大小和形状。
:::

用 transform 实现2D 转换的相关方法:
- <font face="黑体" color= red  size= 3>translate()   ----进行X轴，Y轴位移的转换</font>
- <font face="黑体" color= red  size= 3>rotate()      -----旋转</font>
- <font face="黑体" color= red  size= 3>scale()       -----缩放</font>
- <font face="黑体" color= red  size= 3>skew()        -----倾斜</font>
- <font face="黑体" color= red  size= 3>matrix()      -----matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。</font>

## 详解css3----动画(animation)

::: warning
  CSS3 动画是使元素从一种样式逐渐变化为另一种样式的效果。
:::

animation相关参数说明:
- <font face="黑体" color= red  size= 3>animation-name                   ---- 规定 @keyframes 动画的名称。</font>
- <font face="黑体" color= red  size= 3>animation-duration               ---- 规定动画完成一个周期所花费的秒或毫秒。默认是 0。</font>
- <font face="黑体" color= red  size= 3>animation-timing-function        ---- 规定动画的速度曲线。默认是 "ease"。</font>
- <font face="黑体" color= red  size= 3>animation-fill-mode              ---- 规定当动画不播放时，要应用到元素的样式。</font>

- <font face="黑体" color= red  size= 3>animation-delay                  ----	规定动画何时开始。默认是 0。</font>
- <font face="黑体" color= red  size= 3>animation-iteration-count        ---- 规定动画被播放的次数。默认是 1。</font>
- <font face="黑体" color= red  size= 3>animation-direction              ---- 规定动画是否在下一周期逆向地播放。默认是 "normal"。</font>
- <font face="黑体" color= red  size= 3>animation-play-state             ---- 规定动画是否正在运行或暂停。默认是 "running"。</font>



## 相关动画使用实例

用例: 实现文字打印机效果，如下图:

```sh
    <div class="details_info">
        <p class="params1">
          <span class="word text1">Yingying</span>
          <span class="word text2">is</span>
          <span class="word text3">a</span>
          <span class="word text4">beautiful</span>
          <span class="word text5">and</span>
          <span class="word text6">talented</span>
        </p>
        <p class="params2">
          <span class="word text7">woman</span>
          <span class="word text8">Yingying</span>
          <span class="word text9">is</span>
          <span class="word text10">a</span>
          <span class="word text11">beautiful</span>
          <span class="word text12">and</span>
          <span class="word text13">talented</span>
          <span class="word text14">woman</span>
        </p>
      </div>
```
```sh
  <style lang="scss">
          @keyframes typer{
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        .details_info{
              font-size: 18px;
              color: #fefefe;
              font-weight: normal;
              .word{
                opacity: 0;
                animation: typer 1s linear forwards;
              }
              .text1{
                animation-delay: 0.1s;
              }
              .text2{
                  animation-delay: 0.2s;
              }
              .text3{
                  animation-delay: 0.3s;
              }
              .text4{
                  animation-delay: 0.4s;
              }
              .text5{
                  animation-delay: 0.5s;
              }
              .text6{
                  animation-delay: 0.6s;
              }
              .text7{
                  animation-delay: 0.7s;
              }
              .text8{
                  animation-delay: 0.8s;
              }
              .text9{
                  animation-delay: 0.9s;
              }
              .text10{
                  animation-delay: 1.0s;
              }
              .text11{
                  animation-delay: 1.1s;
              }
              .text12{
                  animation-delay: 1.2s;
              }
              .text13{
                  animation-delay: 1.3s;
              }
              .text14{
                  animation-delay: 1.4s;
              }
          }
  </style>
```

用例: 实现图片缩放效果: 如下图；
```sh
   <div class="titleLogo">
     <img v-if="item.imgUrl"  :src= "item.imgUrl" alt="">
     <img v-else src="../assets/images/noImg.jpg" alt="" class="">
   </div>
```
```sh
        .titleLogo{
              width: 201px;
              margin-right: 30px;
              img{
                 height: 207px;
                 width: 210px;
              }
        }
        .titleLogo:hover{
            cursor: pointer;
            //  缩放
             transform: scale(1.1);
             transition: All 0.4s linear;

            //  y 轴延伸
             transform: translateY(-6px);
             box-shadow: 0 26px 40px -24px rgba(0,36,100,0.3);
             transition: All 0.4s ease;
        }
```
 
用例: 文字从中间向两边扩散效果

```sh
       <h5 class="articleTitle">
            <nuxt-link to="">
              {{item.title}}
            </nuxt-link>
        </h5>
```

```
         .articleTitle{
                a{
                    position: relative;
                    margin-top: 20px;
                    font-size: 20px;
                    font-weight: bold;
                    color: #333333;
                    line-height: 25px;
                    cursor: pointer;
                }
                a::after{
                    content: "";
                    position: absolute;
                    left: 50%;
                    top: 100%;
                    width: 0;
                    height: 2px;
                    background: #222;
                } 
                a:hover::after{
                    left: 0;
                    transition: all 0.1s;
                    width: 100%;
                }
              }
```
