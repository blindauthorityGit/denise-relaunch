import { useState } from "react";
import Image from "next/image";
import Newsletter from "../../assets/newsletter.jpg";

//COMPS
import { MainButton } from "../buttons";

const NewsletterSub = () => {
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(JSON.stringify({ email }));
        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            console.log(response.status);
            if (response.status === 200 || response.status === "subscribed") {
                console.log("SUCCESSSSS");
                setEmail("");
                setSuccessMessage("Vielen Dank! Sie sind nun in unserem Email Verteiler.");
                setErrorMessage("");
            } else {
                setSuccessMessage("");
                setErrorMessage("Es gab einen Fehler. Eventuell sind sie schon im Verteiler.");
            }
        } catch (error) {
            setSuccessMessage("");
            setErrorMessage("Es gab einen Fehler. Eventuell sind sie schon im Verteiler.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <label className="col-span-2 text-lg text-primaryColor-100 mr-4" htmlFor="email">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="border-b text-lg border-blackText text-blackText bg-white text-darkText col-span-10 "
            />
            <div className="button">
                <MainButton type="submit">Abonnieren</MainButton>
            </div>

            {successMessage && (
                <div className="success-message text-greenColor text-sm mt-4 font-semibold col-span-12">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="error-message text-redColor text-sm font-semibold mt-4 col-span-12">{errorMessage}</div>
            )}
            <p className="col-span-12 text-sm text-primaryColor-200 mt-6">
                Durch den Eintrag in unseren Newsletter stimmen Sie zu, <br />
                Ihre personenbezogenen Daten für den Erhalt von Newslettern zu verwenden.
            </p>
        </form>
    );
};

export default NewsletterSub;
