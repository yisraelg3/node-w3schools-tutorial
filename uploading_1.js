import formidable from 'formidable'
import http from 'http'
import fs from 'fs'

http.createServer(function(req, res) {
    if (req.url == '/fileupload') {
        const form = new formidable.IncomingForm()
        form.parse(req, function(err, fields, files) {
            const oldpath = files.fileupload.path
            const newpath = '/Users/yisraelgurkow/Development/code/nodejs-practice/' + files.fileupload.name
            fs.rename(oldpath, newpath, function(err) {
                if (err ) throw err
                res.write('File uploaded and moved')
                res.end()
            })
        })
    } else {
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">')
        res.write('<input type="file" name="fileupload"><br>')
        res.write('<input type="submit">')
        res.write('</form>')
        return res.end()
    }
}).listen(8080)
