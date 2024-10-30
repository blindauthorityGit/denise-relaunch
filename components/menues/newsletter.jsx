import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa/index.js";
import { IoMdMail } from "react-icons/io/index.js";
import { MdEmail } from "react-icons/md/index.js";

function Newsletter(props) {
    const [showForm, setShowForm] = useState(false);

    function handleButtonClick() {
        setShowForm(true);
    }

    return (
        <div onClick={props.onClick} className="md:w-[10rem]">
            <div className="navbar-container flex h-full items-center justify-around rounded-md bg-primaryColor-200 px-3 py-1 md:py-3">
                <div className="navbar-brand text-blackText text-xs font-semibold md:text-sm">Newsletter</div>
                <div className="navbar-button text-blackText">
                    <FaPaperPlane className="navbar-icon" />
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
