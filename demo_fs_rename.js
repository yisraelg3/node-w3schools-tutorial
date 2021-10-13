import fs from 'fs'

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err
    console.log('Renamed!')
})