const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
     },
});

transporter.verify((error,sucess) =>{
    if (error){
        console.error('Error connecting to the email server:',error);
    }
    else{
        console.log('Email server is ready to send message');
    }
});

const sendEmail = async (to,subject,text,html) => {
    try{
        const info = await transporter.sendMail({
            from: `"Bank Backend" <${process.env.EMAIL_USER}>`, // This is sender address,
            to, // This is the list of receivers
            subject, // This is the subject line
            text, // This is the plain text body
            html, // This is the html body part
        });

        console.log('Message sent: %s',info.messageId);
        console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));
    } catch(err){
        console.error('Errir sending email:', err);
    }
};

async function sendRegistrationEmail(userEmail, name) {
    const subject = 'Welcome to Chautari Bank!';
    const text = `Hello ${name}, \n\nThank you for registering at Chautari Bank. We're excited to have you on board!\n\nBest regards,\nThe Chautari Bank Team`
    const html = `
        <p>Hello <strong>${name}</strong>,</p>
        <p>Thank you for registering at Chautari Bank. We're excited to have you on board!</p>
        <p>Best regards,<br><strong>The Chautari Bank Team</strong></p>
    `;

    await sendEmail(userEmail,subject,text,html);
    
}

module.exports = {sendRegistrationEmail};
