import { createTransport } from "nodemailer";
import { env as _env } from 'process'

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: "linhmailsender@gmail.com",
    pass: _env.MAIL_AUTH_PASS,
  },
});

const sendVerifyCode = async (target, content) => {
  await transporter.sendMail({
    from: '"CỬA HÀNG LINHVUCOMPUTER" <linhmailsender@gmail.com>', // sender address
    to: target, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `Your code is ${content}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }).then((res) => {return res}).catch((e) => {throw new Error(`Send mail Error ${e}`)});
}

const sendDoneOrder = async (target, orderID) => {
  await transporter.sendMail({
    from: '"CỬA HÀNG LINHVUCOMPUTER" <linhmailsender@gmail.com>', // sender address
    to: target, // list of receivers
    subject: "Xác nhận đơn hàng đã vận chuyển", // Subject line
    text: `Đơn hàng ${orderID} đã được vận chuyển thành công!`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  }).then((res) => {return res}).catch((e) => {throw new Error(`Send mail Error ${e}`)});
}
module.exports = { sendVerifyCode, sendDoneOrder };