const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
    try {
        // create a transporter object
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.NEXT_USER,
                pass: process.env.NEXT_PASSWORD_PIZ,
            },
        });

        // send the email
        await transporter.sendMail({
            from: "johabuch@gmail.com",
            to,
            subject,
            html,
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.log("Error sending email: ", error);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { firstName, name, email, message } = req.body;

    if (!firstName) {
        // construct the html message
        const html = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nachricht:<br/></strong> ${message.replace(/\n/g, "<br>")}</p>
        `;

        // send the email
        await sendEmail("office@atelierbuchner.at", `Email von ${name}`, html);

        // return success response
        res.status(200).json(req.body);
    } else {
        // return error response
        res.status(403).json({ error: "First name is required" });
    }
};
