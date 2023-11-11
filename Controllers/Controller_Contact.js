const nodemailer = require('nodemailer');
require('dotenv').config()


module.exports = {

    sendMail: async (req, res) => {
        const { name, email, message } = req.body

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'yrmnccarrillo@gmail.com',
                pass: process.env.PASS
            }
        });

        const mailOptions = {
            from: process.env.FROM,
            to: process.env.TO,
            subject: `Contacto desde Pagina Personal Por: ${name}`,
            text: `${message}. Correo Electronico: ${email}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error al enviar el correo electrónico:', error);
                return res.status(500).json({ "state": false, "message": error })
            } else {
                console.log('Correo electrónico enviado con éxito:', info.response);
                return res.status(200).json({ "state": true, "message": "Correo Enviado.." })
            }
        });
    }

}