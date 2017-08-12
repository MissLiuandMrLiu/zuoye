/**
 * Created by My love on 2017/8/11.
 */
var fs = require('fs');
var data = fs.readFile('4/1.txt',function(err,data){
    if(err) return console.error(err);
    console.log(data.toString().split('\n').length)

});