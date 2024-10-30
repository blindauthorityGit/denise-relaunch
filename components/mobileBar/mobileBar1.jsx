import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa/index.js";

// COMPS
import Overlay from "../modal/overlay";
import ModalMobile from "../modal/modalMobile";
import { Opening, Contact } from "../modalContent";
import { AiOutlineClockCircle } from "react-icons/ai/index.js";

const MobileBar = (props) => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showOpening, setShowOpening] = useState(false);

    return (
        <>
            {showOverlay ? (
                <>
                    <ModalMobile
                        onClick={() => {
                            setShowOverlay(false);
                        }}
                    >
                        {showOpening && <Opening data={props.data} />}
                        {showContact && <Contact />}
                    </ModalMobile>
                    <Overlay
                        onClick={() => {
                            setShowOverlay(false);
                        }}
                    />
                </>
            ) : null}
            <div className="fixed bottom-0  z-50 flex w-full items-center justify-center bg-darkBG text-sm sm:hidden ">
                <a
                    onClick={() => {
                        setShowOverlay((showOverlay) => !showOverlay);
                        setShowContact(false);
                        setShowOpening(true);
                    }}
                    className="flex w-1/3 flex-col items-center justify-center border-r border-primaryColor-200 border-opacity-30 p-4 text-primaryColor-200 hover:text-primaryColor"
                >
                    <AiOutlineClockCircle size={16} />
                    <span className="font-base mt-1 text-xs">ZEITEN</span>
                </a>
                <a
                    onClick={() => {
                        setShowOverlay((showOverlay) => !showOverlay);
                        setShowContact(true);
                        setShowOpening(false);
                    }}
                    className="flex w-1/3 flex-col items-center justify-center border-r border-primaryColor-200  border-opacity-30 p-4 text-primaryColor hover:text-primaryColor"
                >
                    <FaEnvelope size={16} />
                    <span className="font-base mt-1 text-xs">EMAIL</span>
                </a>
                <a
                    href="tel:+436508011900"
                    className="flex w-1/3 flex-col items-center justify-center border-r border-primaryColor-200 border-opacity-30 p-4 text-primaryColor-200 hover:text-primaryColor "
                >
                    <FaPhone size={16} />
                    <span className="mt-1  text-xs">CALL</span>
                </a>
            </div>
        </>
    );
};

export default MobileBar;
