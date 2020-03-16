const mailer = require("../nodemailer");

const userRegistrationControllerPost = (req, res) => {
  console.log("body", req.body);

  if (!req.body.email || !req.body.text) return res.sendStatus(400);
  const message = {
    to: process.env.EMAIL, //почта на которую отправляется письмо
    subject: "Письмо с сайта ItBeard",
    html: `
          <h2>Пляши, пришло письмо с сайта!</h2>

          <i>Таааакс, что тут нам написали:</i>
          <ul>
              <li>email: ${req.body.email}</li>

              <li>email text: ${req.body.text}</li>

          </ul>
         
          `
  };
  mailer(message);

  res.status(200).send("Email отправлен!");
};

module.exports = {
  userRegistrationControllerPost
};
