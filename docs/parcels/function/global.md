# 配置项目的公共方法库
- 全局过滤器（相关方法）
```sh
  // //将数字转为金额，保留两位小数
  Vue.filter('currency', function (val) {
  if(val == null || val == undefined){
    return "0.00";
  }
  val = val.toString().replace(/\$|\,/g,'');
  if(isNaN(val)) {
  val = "0";
  }
  let sign = (val == (val = Math.abs(val)));
  val = Math.floor(val*100+0.50000000001);
  let cents = val%100;
  val = Math.floor(val/100).toString();
  if(cents<10) {
  cents = "0" + cents
  }
  for (var i = 0; i < Math.floor((val.length-(1+i))/3); i++) {
      val = val.substring(0,val.length-(4*i+3))+',' + val.substring(val.length-(4*i+3));
  }

  return (((sign)?'':'-') + val + '.' + cents);
})

....  


```
- 在入口文件中引入相关文件
```sh
  import '../parcels-common/utils/filter' // 全局过滤方法
```
- 页面中直接使用定义好的值 例: currency
```sh
    <el-table-column :label="$t('custombill.金额')+'(￥)'" min-width="90">
    <template slot-scope="scope">
      {{ scope.row.price | currency }}
    </template>
  </el-table-column>
```