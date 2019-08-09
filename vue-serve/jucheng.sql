SET NAMES UTF8;
DROP DATABASE IF EXISTS jucheng;
CREATE DATABASE  jucheng  CHARSET=UTF8;
USE jucheng;
 CREATE TABLE jucheng_login(
	 id int primary key AUTO_INCREMENT,
     uname varchar(255),
     upwd varchar(200)
);
insert into jucheng_login values(null,"dongdada",md5("123456"));
insert into jucheng_login values(null,"qidada",md5("123455"))
