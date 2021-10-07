const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function (req, res) {
  const body = JSON.parse(req.body);

  const message = `
    Email: ${body.mail}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}
  `;

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
    subject: `Req from ${body.firstName} ${body.lastName}`,
    text: message,
    html: message.replace("/\r\n/g", "<br>"),
  };

  try {
    await mail.send(msg);
  } catch (error) {
    console.error(error);
  }

  res.status(200).json({ status: "ok" });
}
