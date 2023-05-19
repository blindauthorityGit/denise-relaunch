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
            <label className="col-span-2 mr-4 text-lg text-primaryColor-100" htmlFor="email">
                Email:
            </label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="border-blackText text-blackText col-span-10 border-b bg-white p-2 text-lg text-darkText "
            />
            <div className="button">
                <MainButton type="submit">Abonnieren</MainButton>
            </div>

            {successMessage && (
                <div className="success-message col-span-12 mt-4 text-sm font-semibold text-greenColor">
                    {successMessage}
                </div>
            )}
            {errorMessage && (
                <div className="error-message col-span-12 mt-4 text-sm font-semibold text-redColor">{errorMessage}</div>
            )}
            <p className="col-span-12 mt-6 text-sm text-primaryColor-200">
                Durch den Eintrag in unseren Newsletter stimmen Sie zu, Ihre personenbezogenen Daten für den Erhalt von
                Newslettern zu verwenden.
            </p>
        </form>
    );
};

export default NewsletterSub;
