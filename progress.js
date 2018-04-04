var result=process.argv.filter((val,index) => {
    if (index==0) {
        val='241'
    }else if(index==1){
        val = '';
    }
   return index==0||index==1;
});



