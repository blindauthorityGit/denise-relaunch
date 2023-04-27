import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { PortableText } from "@portabletext/react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterOpening = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater font-freight z-10 hidden sm:block absolute bottom-12 sm:bottom-24 lg:bottom-12 xl:bottom-24 xl:text-lg tracking-wider text-textBlack left-6 lg:left-24 ${
                props.center ? "items-center flex" : ""
            } ${props.klasse}`}
        >
            <div className="tel flex ">
                {" "}
                <AiOutlineClockCircle className="text-primaryColor-300 pt-2 text-3xl"></AiOutlineClockCircle>{" "}
                <a className="pl-4 text-primaryColor-100" href="tel:+43 650 944 4150">
                    <div className="text-primaryColor-300">Brunn an der Pitten</div>
                    <PortableText value={props.data.oeffnungszeiten.brunn} />
                </a>
                <a className="pl-4 text-primaryColor-100" href="tel:+43 650 944 4150">
                    <div className="text-primaryColor-300"> Marienmarkt Wr. Neustadt</div>
                    <PortableText value={props.data.oeffnungszeiten.wrn} />
                </a>
            </div>

            {props.children}
        </div>
    );
};

export default FloaterOpening;
