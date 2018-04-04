'use strict';

var fs=require('fs');


//异步读取文件
/* fs.readFile('sample.txt','utf-8',function(err,data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
    }
}) */


//同步读取文件
/* var data=fs.readFileSync('sample.txt','utf-8');
console.log(data); */


//异步写文件
/* var data='hello,node.js';
fs.writeFile('sample.txt',data,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
})
 */

//  同步写文件
/* var data='hi,world'
fs.writeFileSync('sample.txt',data); */

//获取文件的大小
fs.stat('sample.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log('isFile:'+stat.isFile());
        //是否是目录
        console.log('isDirectory:'+stat.isDirectory());
        
        if(stat.isFile()){
            //文件大小
            console.log('size:'+stat.size);
            //创建时间，Data对象
            console.log('birth time:'+stat.birthtime);
            //修改时间，Data对象
            console.log('modified time:'+stat.mtime);
        }
    }
})