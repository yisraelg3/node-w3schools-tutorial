import fs from 'fs'

// fs.writeFile('mynewfile3.txt', 'Hello Content', function(err) {
//     if (err) throw err
//     console.log('Saved!')
// })

fs.writeFile('mynewfile3.txt', 'This is my text', function(err) {
    if (err) throw err
    console.log('Updated!')
})