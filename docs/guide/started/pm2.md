# pm2是什么?
管理多个node 服务端口，自启动

## pm2 的相关使用命令
```sh
pm2 start npm --name 'nuxtDemo' -- run start  //创建一个新的pm2 项目
pm2 list 查看管理的项目列表
pm2 restart 10 重启对应序号的项目服务
pm2 stop 10 停止对应序号的项目服务
pm2 del 10 删除对应序号的项目服务

```