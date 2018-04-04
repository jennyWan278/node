'use strict';

//通过require引入hello模块，块引入的模块作为变量保存在greet变量中
var greet=require('./hello');   

var s='Michael';
greet(s);   //Hello,Michael!


//一个模块想要引用其他模块暴露的变量，用var ref=require('module_name');
//引入的对象具体是什么，取决于引入模块输出的对象