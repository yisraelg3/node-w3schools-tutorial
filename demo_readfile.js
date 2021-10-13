import http from 'http'
import fs from 'fs'

http.createServer( function (req, res) {
    fs.readFile('demofile1.html', function (err, data) {
        res.writeHead(200, {'ContentType' : 'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(8080)
