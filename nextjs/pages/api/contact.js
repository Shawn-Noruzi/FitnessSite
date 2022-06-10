export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "loganwongclub16@gmail.com",
      pass: "LoganWongGlenEagle007",
    },
    secure: true,
  });
  const mailData = {
    from: "loganwongclub16@gmail.com",
    to: "loganwongclub16@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.msg + " | Sent from: " + req.body.email,
    html: `<div>${req.body.msg}</div><p>Sent from:
      ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log("error: ",err);
    else console.log("error: ", info);
  });
  res.status(200);
}
