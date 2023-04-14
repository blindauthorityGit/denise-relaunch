import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

// COMPS
import Overlay from "../modal/overlay";
import ModalMobile from "../modal/modalMobile";
import { Opening, Contact } from "../modalContent";

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
            <div className="fixed sm:hidden  z-50 bottom-0 w-full flex justify-center items-center bg-darkBG text-sm ">
                <a
                    href="tel:+436509444150"
                    className="w-1/3 p-4 border-r border-primaryColor-200 border-opacity-30 flex flex-col justify-center items-center text-primaryColor-200 hover:text-gray-800"
                >
                    <FaPhone size={16} />
                    <span className="text-xs  mt-1">CALL</span>
                </a>
                <a
                    onClick={() => {
                        setShowOverlay((showOverlay) => !showOverlay);
                        setShowContact(false);
                        setShowOpening(true);
                    }}
                    className="w-1/3 p-4 flex border-r border-opacity-30 border-primaryColor-200 flex-col justify-center items-center text-primaryColor-200 hover:text-gray-800"
                >
                    <FaEnvelope size={16} />
                    <span className="text-xs font-base mt-1">EMAIL</span>
                </a>
                <a
                    onClick={() => {
                        setShowOverlay((showOverlay) => !showOverlay);
                        setShowContact(true);
                        setShowOpening(false);
                    }}
                    className="w-1/3 p-4 flex flex-col justify-center items-center text-primaryColor hover:text-green-600"
                >
                    <FaWhatsapp size={16} />
                    <span className="text-xs font-base mt-1">WHATSAPP</span>
                </a>
            </div>
        </>
    );
};

export default MobileBar;
