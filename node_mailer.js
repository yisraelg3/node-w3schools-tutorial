import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yisraelg3@gmail.com',
        pass: 'central 5963'
    }
})

const mailOptions = {
    from: 'me@gmail.com',
    to: 'chanalulu94@gmail.com',
    subject: 'Sending email with Node.js',
    html: '<h1>Good night</h1> <p>See you tomorrow</p>'
}

transport.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err)
    } else {
        console.log('Email sent ' + info.response)
    }
})
