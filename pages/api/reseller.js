const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

// function to read PDF file
const getPDFAttachment = async () => {
    try {
        const pdfPath = path.join(process.cwd(), "public", "pdf", "preisliste_weingebaeck_small.pdf");
        const pdf = await fs.promises.readFile(pdfPath);
        return { filename: "preisliste_weingebaeck_small.pdf", content: pdf };
    } catch (error) {
        console.log("Error reading PDF file: ", error);
        return null;
    }
};

const sendEmail = async (to, subject, html, attachments) => {
    console.log(process.env.NEXT_DEV == "true");
    try {
        // create a transporter object
        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_DEV == "true" ? "smtp.gmail.com" : "smtp.world4you.com",
            port: process.env.NEXT_DEV == "true" ? 465 : 587,
            secure: false,
            auth: {
                user: process.env.NEXT_DEV == "true" ? process.env.NEXT_USER : process.env.NEXT_W4YUSER,
                pass: process.env.NEXT_DEV == "true" ? process.env.NEXT_PASSWORD_PIZ : process.env.NEXT_W4YPASSWORD,
            },
        });

        // send the email
        await transporter.sendMail({
            from: process.env.NEXT_DEV == "true" ? "johabuch@gmail.com" : "office@atelierbuchner.at",
            to,
            subject,
            html,
            attachments,
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
        const htmlClient = `

            <p>Hallo ${name},</p>
            <p>
              vielen Dank für Ihre Anfrage zu meinem Weingebäck.<br />
              Anbei ein PDF mit den Preisen & Lieferbedinungen zu meinem Produkt.
            </p>
            <p>
              Bitte zögern Sie nicht, sich bei Fragen oder Bestellungen an mich unter
              <a href="mailto:office@baeckerin.at">office@baeckerin.at</a> zu wenden. Ich bin sicher,
              dass meine Produkte Ihre Kunden begeistern werden.
            </p>
            <p>
              Vielen Dank noch einmal für Ihr Interesse. Ich freue mich darauf, von Ihnen zu hören.
            </p>
            <p>Herzliche Grüße,<br />Denise Pölzelbauer</p>
        `;

        const html = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
            <p><strong>Nachricht:<br/></strong> ${message.replace(/\n/g, "<br>")}</p>
        `;

        // get PDF attachment
        const pdfAttachment = await getPDFAttachment();

        // send the email
        await sendEmail("office@atelierbuchner.at", `Anfrage Weingebäck von ${name}`, html);
        await sendEmail(email, `Anfrage Weingebäck - Denise Bäckerin`, htmlClient, [pdfAttachment]);

        // return success response
        res.status(200).json(req.body);
    } else {
        // return error response
        res.status(403).json({ error: "First name is required" });
    }
};
