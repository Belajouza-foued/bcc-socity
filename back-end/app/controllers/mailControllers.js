// mailer.js ou dans un controller
const nodemailer = require('nodemailer');

exports.sendConfirmationEmail = async (req, res) => {
  const { email } = req.body;

  // Configuration du transporteur
  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou ton service SMTP
    auth: {
      user: 'foued.belajouza@gmail.com',
      pass: 'foued123'
    }
  });

  

  const mailOptions = {
    from: 'foued.belajouza@gmail.com',
    to: email,
    subject: 'Confirmation d’inscription',
    html: `<h3>Merci pour votre inscription</h3><p>Nous vous tiendrons informé.</p>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email envoyé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur d'envoi", error });
  }
};
