import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterContact = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater text-textBlack absolute bottom-12 right-6 z-10 hidden font-freight tracking-wider sm:bottom-24 sm:block md:bottom-36 lg:bottom-8 lg:right-24 xl:bottom-24 xl:text-lg ${
                props.center ? "flex items-center" : ""
            } ${props.klasse}`}
        >
            <div className="tel flex items-center">
                {" "}
                <FaPhone className="text-primaryColor-300"></FaPhone>{" "}
                <a className="pl-4 text-primaryColor-100" href="tel:+43 650 944 4150">
                    {props.data.contact.phone}
                </a>
            </div>
            <div className="email flex items-center">
                {" "}
                <HiOutlineMail className="text-primaryColor-300"></HiOutlineMail>{" "}
                <a className="pl-4 text-primaryColor-100" href="">
                    {" "}
                    {props.data.contact.email}
                </a>
            </div>
            {props.children}
        </div>
    );
};

export default FloaterContact;
