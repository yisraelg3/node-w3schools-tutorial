import http from 'http';
import {myDateTime as dt} from './myfirstmodule.js'
import url from 'url'

// http.createServer(function(req,res) {
//     res.writeHead(200, {"Content-Type":'text/html'})
//     res.write('The date and time are currently: ' + dt()+' ')
//     res.end(req.url)
// }).listen(8080)

http.createServer(function(req,res) {
    res.writeHead(200, {"Content-Type":'text/html'})
    const q = url.parse(req.url, true).query
    const txt = q.year + ' ' + q.month
    res.end(txt)
}).listen(8080)

