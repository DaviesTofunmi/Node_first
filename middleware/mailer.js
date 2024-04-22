const nodemailer= require('nodemailer')
const mail = async(email, username)=>{
    const transporter= nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'daviestofunmi11@gmail.com',
            pass: 'rupmqaazatbmyxkd'
        }
    })
    const messageTemplate= `
    <div>
    <h1>Welcome to SQi<strong>${username}</strong></h1>
    </div>`
    const mailOptions={
        from: 'daviestofunmi11@gmail.com',
        to: email,
        subject: 'Registration Message',
        text: 'Test App',
        html: messageTemplate
    }
    try {
        await transporter.sendMail(mailOptions)
        console.log(`Email has been sent to ${email}`)
        
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports= mail;