const nodemailer = require("nodemailer");
const transparter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "", // Your email address
    pass: "", // Your password
  },
});

const sendMessageStatus = (email, statusText) => {
  const mailOptions = {
    from: "test@wd-node.com",
    to: email,
    subject: "Message wd-node",
    text: statusText,
  };
  return transparter.sendMail(mailOptions);
};

module.exports = sendMessageStatus;
