import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

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
            className={`floater font-freight z-10 hidden sm:block absolute bottom-12 sm:bottom-24 md:bottom-36 lg:bottom-8 xl:bottom-24 xl:text-lg tracking-wider text-textBlack right-6 lg:right-24 ${
                props.center ? "items-center flex" : ""
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
