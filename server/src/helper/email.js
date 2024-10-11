const nodemailer = require("nodemailer");
const { smtpUserName, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: smtpUserName,
      pass: smtpPassword,
    },
  });


  const EmailWithNodeMail = async(emailData)=>{
    console.log(emailData.email);
    
    try {
        const mailOptions = {
            from: smtpUserName,
            to: emailData.email,
            subject:emailData.subject,
            text: "Nazmul vai",
            html: emailData.html
        }
        const info = await transporter.sendMail(mailOptions)
        console.log("Email send : %s", info.response);
    } catch (error) {
        console.error(error, "While sending email");
        throw error
    }
    
  }

  module.exports = {EmailWithNodeMail}