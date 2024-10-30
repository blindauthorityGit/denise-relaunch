import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";
import AustriaLogo from "../../assets/austria.svg";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Austria = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater  text-textBlack absolute right-0 top-12 w-full bg-primaryColor-500 py-2 px-8 sm:block sm:w-[34rem] sm:px-6 lg:text-lg lg:font-semibold   ${
                props.center ? "flex items-center" : ""
            } ${props.klasse}`}
        >
            <div className="relative w-full">
                <div className="hidden font-freight font-thin tracking-wider text-primaryColor-50 sm:block">
                    Österreichische Produkte in Handarbeit gefertigt.
                </div>
                <div className="block font-freight font-thin tracking-wider text-primaryColor-50 sm:hidden">
                    Österreichische Produkte in <br /> Handarbeit gefertigt.
                </div>
                <img
                    className="absolute top-[-0.7rem] right-0 w-16 sm:top-[-1rem] sm:right-8"
                    src={AustriaLogo.src}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Austria;
