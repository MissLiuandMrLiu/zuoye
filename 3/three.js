/**
 * Created by My love on 2017/8/11.
*/
var fs = require("fs");
var data = fs.readFileSync('3/1.txt')
console.log(data.toString().split('\n').length)
