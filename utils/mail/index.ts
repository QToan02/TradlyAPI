import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

export const sendMail = async (receiver: string, subject: string, html: string) => {
  try {
    const info = await transporter.sendMail({
      from: `"Tradly App" <${process.env.MAIL_USER}>`,
      to: receiver,
      subject,
      html,
      attachments: [
        {
          filename: 'logo.png',
          path: __dirname + '/logo.png',
          cid: 'unique@nodemailer.com',
        },
      ],
    })

    console.log('Message sent: %s', info.messageId)
  } catch (error) {
    if (error instanceof Error) return console.error(error.message)
  }
}
