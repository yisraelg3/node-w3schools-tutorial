import fs from 'fs'

// fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err) {
//     if (err) throw err
//     console.log('Saved')
// })

fs.appendFile('mynewfile1.txt', '\n this is my text.', function(err) {
    if (err) throw err
    console.log('Updated!')
})