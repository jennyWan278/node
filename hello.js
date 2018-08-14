'use strict'
var s='Hello'
function greet (name) {
    console.log(s+','+name+'!');
}
module.exports=greet;  //把函数greet作为模块的输出，这样其他模块就可以使用greet函数了

//一个模块想要对外暴露变量（函数也是变量），可以使用module.exports=variable;  
//输出的变量可以是任意对象，函数，数组等等。


