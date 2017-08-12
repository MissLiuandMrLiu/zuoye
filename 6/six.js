/**
 * Created by My love on 2017/8/12.
 */
var filterFn = require('./six-1.js')
var dir = process.argv[2]
var filterStr = process.argv[3]
filterFn(dir, filterStr, function (err, list) {
    if (err)
       if(err) throw err
    list.forEach(function (file) {
        console.log(file)
    })
})