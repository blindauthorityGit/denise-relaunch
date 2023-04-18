import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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
            className={`floater  bg-primaryColor-500 sm:block absolute py-2 px-8 sm:px-6 w-full sm:w-[34rem] right-0 top-12 lg:text-lg lg:font-semibold text-textBlack   ${
                props.center ? "items-center flex" : ""
            } ${props.klasse}`}
        >
            <div className="w-full relative">
                <div className="font-freight hidden sm:block text-primaryColor-50 font-thin tracking-wider">
                    Österreichische Produkte in Handarbeit gefertigt.
                </div>
                <div className="font-freight block sm:hidden text-primaryColor-50 font-thin tracking-wider">
                    Österreichische Produkte in <br /> Handarbeit gefertigt.
                </div>
                <img
                    className="top-[-0.7rem] sm:top-[-1rem] right-0 sm:right-8 absolute w-16"
                    src={AustriaLogo.src}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Austria;
