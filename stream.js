'use strict'

var fs=require('fs');

//打开一个流
/* var rs=fs.createReadStream('sample.txt','utf-8');

rs.on('data',function(chunk){
    console.log('DATA:');
    console.log(chunk);      //每次传递的chunk是流的一部分数据。
});

rs.on('end',function(){
    console.log('END');
});

rs.on('error',function(err){
    console.log('ERROR'+err)
}); */


//以流的形式写入文件，只需要不断的调用write()方法，最后以end()结束
/* var ws1=fs.createWriteStream('write1.txt','utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('这是一段测试文字\n');
ws1.write('END.');
ws1.end(); */


/* var ws2 = fs.createWriteStream('write2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('END.','utf-8'));
ws2.end(); */


// 使用pipe()将读和写两个流串连起来,将从rs中读取的内容写到ws中的文件中
var rs=fs.createReadStream('sample.txt');
var ws=fs.createWriteStream('copied.txt');
rs.pipe(ws);



