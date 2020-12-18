# toppgo APP项目说明文档

## 项目介绍
toppgo 混合版APP  适用于安卓机和苹果机。利用 HBuilder 开发，前端UI 框架使用 mui（开发时间较早，后期主要进行迭代更新）

## toppgo APP重要项目点


### 1,app返回上一页面并刷新上一页面

```sh
  // 1,子页面代码（在script 标签中填写）

    mui.init({
      beforeback: function() {
  　　　　 //获得父页面的webview
          var list = plus.webview.currentWebview().opener(); 
  　　　　 //触发父页面的自定义事件(refresh),从而进行刷新
          mui.fire(list, 'refresh');
          //返回true,继续页面关闭逻辑
          return true;
      }
  });

  // 2,在逻辑代码中执行 mui.back() 方法   比如：

  $('.backBtn').('tap',function(e) {
        mui.back() 
  })
    
  // 3，父页面(要返回的页面)执行刷新操作

  window.addEventListener('refresh', function(e){//执行刷新
      location.reload();
  });


```

### 2,app input框中 disabled 和 readOnly  的区别

::: warning
    disabled属性 和 readonly属性本质上都是使input文本框变成只读不可编辑。其两者的主要区别是：
    disabled： 会使文本框变灰，通过js 获取不到的（比如： $("input [name='aaa']").val() 是获取不到数据的）；
    readonly： 不会使input 中的单选 radio 和 多选checkbox 不可编辑，状态是无效的。
:::
