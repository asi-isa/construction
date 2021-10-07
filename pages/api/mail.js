import mail from "@sendgrid/mail";
import fetch from "node-fetch";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const { method, body } = req;
  const { captcha, formData } = body;

  if (method === "POST") {
    // If formData or captcha are missing return an error
    if (!formData || !captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();

      if (captchaValidation.success) {
        const message = `
            Email: ${formData.mail}\r\n
            Phone: ${formData.phone}\r\n
            Message: ${formData.message}
          `;

        const msg = {
          to: process.env.EMAIL_TO,
          from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
          subject: `Req from ${formData.firstName} ${formData.lastName}`,
          text: message,
          html: message.replace("/\r\n/g", "<br>"),
        };

        try {
          await mail.send(msg);
        } catch (error) {
          console.error(error);
          return res.status(422).json({ message: "Something went wrong" });
        }

        // Return 200 if everything is successful
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send("Not found");
}
