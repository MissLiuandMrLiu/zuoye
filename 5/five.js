/**
 * Created by My love on 2017/8/12.
 */
var fs = require('fs')
var path = require('path')

fs.readdir('5', function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) == '.txt')
            console.log(file)
    })
})