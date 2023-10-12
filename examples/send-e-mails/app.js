const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 25,
  secure: false,
  auth: {
    user: 'leaderywl@163.com',
    pass: 'DIUXJCBAIPOOBHUN'
  }
})

async function main() {
  const info = await transporter.sendMail({
    from: 'leaderywl@163.com', // from 必须是授权过的邮件 pass 的值是有效的
    to: '332851456@qq.com',
    subject: 'hello 111',
    text: '1111111111111111'
  })
  /**
   * accepted: [ '332851456@qq.com' ],
  rejected: [],
  ehlo: [
    'PIPELINING',
    'AUTH LOGIN PLAIN XOAUTH2',
    'AUTH=LOGIN PLAIN XOAUTH2',
    'coremail 1Uxr2xKj7kG0xkI17xGrU7I0s8FY2U3Uj8Cz28x1UUUUU7Ic2I0Y2UFu54zzUCa0xDrUUUUj',
    'STARTTLS',
    'ID',
    '8BITMIME'
  ],
  envelopeTime: 26,
  messageTime: 33,
  messageSize: 282,
  response: '250 Mail OK queued as zwqz-smtp-mta-g0-1,_____wDnF4jOiCdlWH9UAQ--.45967S3 1697089742',
  envelope: { from: 'leaderywl@163.com', to: [ '332851456@qq.com' ] },
  messageId: '<68eb7b77-c18a-8ca7-58bb-deb048b582bf@163.com>'
   */
  console.log('邮件发送成功', info)
}

main().catch((err) => {
  console.log('执行异常', err)
})
