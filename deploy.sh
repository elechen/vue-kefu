#!/usr/bin/expect                   # 指定shebang;

set timeout 3;                       # 设定超时时间为3秒

spawn scp -r dist root@8.134.39.170:/srv/www/kefu.169youxi.com/

expect "*password*"; 
send "SifengELEL\r";                # 向命令行输入密码并回车;

interact;