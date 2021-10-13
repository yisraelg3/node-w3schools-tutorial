import fs from 'fs'

const rs = fs.createReadStream('./demofile.txt')
rs.on('open', function(){
    console.log('tHe file is open')
})