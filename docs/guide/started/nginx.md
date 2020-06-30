# nginx的简要说明及配置
## nginx 是什么?

:::  warning
  nginx 是一个高性能的 http 和反向代理 <font face="黑体" color= red  size= 7>web服务器</font>
  nginx 以事件驱动的方式编写，所以有非常好的性能。在性能上，nginx 占用很少的系统资源，能支持更多的并发连接，达到更高的访问效率
  在功能上，nginx 是优秀的代理服务器和负载均衡服务器；在安装配置上，Nginx安装简单、配置灵活。
:::

## 服务器下安装nginx 
- 选定安装文件目录
```sh
  cd /usr/local
```
- 安装PCRE库
```sh
  cd /usr/local/src
  wget ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/pcre-8.39.tar.gz 
  tar -zxvf pcre-8.37.tar.gz
  cd pcre-8.34
  ./configure
  make
  make install
```
-安装zlib库
```sh
  cd /usr/local/src
  wget http://zlib.net/zlib-1.2.11.tar.gz
  tar -zxvf zlib-1.2.11.tar.gz
  cd zlib-1.2.11
  ./configure
  make
  make install
```
-安装nginx
```sh
  cd /usr/local/src
  wget http://nginx.org/download/nginx-1.1.10.tar.gz
  tar -zxvf nginx-1.1.10.tar.gz
  cd nginx-1.1.10
  ./configure
  make
  make install
```
-启动nginx
```sh
  sudo /usr/local/nginx/nginx
```

##  nginx的常用命令
```sh
  /usr/local/nginx/sbin/nginx -C /usr/local/nginx/conf/nginx.conf //启动nginx
  nginx -t  //查看nginx 的配置文件是否正确
  nginx -s reload  //重启nginx 服务
  nginx -v  //查看是否安装nginx 及其版本号
```

## nginx 的配置文件结构
```sh
  ### 每个指令必须有分号结束。###
  user administrator ;  #配置用户或者组，默认为nobody
  worker_processes 2;  #允许生成的进程数，默认为1
  pid /nginx/pid/nginx.pid;   #指定nginx进程运行文件存放地址
  error_log log/error.log debug;  #制定日志路径，级别。这个设置可以放入全局块，http块，server块，级别以此为：debug|info|notice|warn|error|crit|alert|emerg
  events {
      accept_mutex on;   #设置网路连接序列化，防止惊群现象发生，默认为on
      multi_accept on;  #设置一个进程是否同时接受多个网络连接，默认为off
      use epoll;      #事件驱动模型，select|poll|kqueue|epoll|resig|/dev/poll|eventport
      worker_connections  1024;    #最大连接数，默认为512
  }
  http {
      include       mime.types;   #文件扩展名与文件类型映射表
      default_type  application/octet-stream;  #默认文件类型，默认为text/plain
      access_log off; #取消服务日志    
      log_format myFormat '$remote_addr–$remote_user [$time_local] $request $status $body_bytes_sent $http_referer $http_user_agent $http_x_forwarded_for'; #自定义格式
      access_log log/access.log myFormat;  #combined为日志格式的默认值
      sendfile on;   #允许sendfile方式传输文件，默认为off，可以在http块，server块，location块。
      sendfile_max_chunk 100k;  #每个进程每次调用传输数量不能大于设定的值，默认为0，即不设上限。
      keepalive_timeout 65;  #连接超时时间，默认为75s，可以在http，server，location块。

      include  /usr/local/nginx/conf/cyy/*.conf  #(映射该路径下所有的 .conf 文件)
      upstream mysvr {   
        server 127.0.0.1:7878;
        server 192.168.10.121:3333 backup;  #热备
      }
      error_page 404 https://www.baidu.com;  #错误页
      server {
          keepalive_requests 120; #单连接请求上限次数。
          listen       80;   #监听端口
          server_name  127.0.0.1;   #监听地址       
          location / {       #请求的url过滤
            root  path;  #根目录(vue的dist 文件目录)
            index index.html index.htm;  #设置默认页
            proxy_pass  http://127.0.0.1:8088;;  #请求转向mysvr 定义的服务器列表
            deny 127.0.0.1;  #拒绝的ip
            allow 172.18.5.54; #允许的ip           
          } 
      }
  }
```





