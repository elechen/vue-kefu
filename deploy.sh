#!/usr/bin/expect                   # 指定shebang;

set timeout 3;                       # 设定超时时间为3秒

spawn scp -r dist root@120.78.209.7:/opt/lampp/htdocs/vue-kefu/

expect "*password*"; 
send "YueLang2017\r";                # 向命令行输入密码并回车;
expect "*Welcome*";
send "cd /opt/lampp/htdocs/vue-kefu\r"; # 帮我切换到常用的工作目录;
interact;