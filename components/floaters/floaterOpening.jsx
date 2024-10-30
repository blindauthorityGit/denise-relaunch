import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";
import { AiOutlineClockCircle } from "react-icons/ai/index.js";
import { PortableText } from "@portabletext/react";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterOpening = (props) => {
    useEffect(() => {
        console.log(props.data);
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater text-textBlack absolute bottom-12 left-6 z-10 hidden font-freight tracking-wider sm:bottom-24 sm:block lg:bottom-8 lg:left-8 xl:bottom-24 xl:left-24 xl:text-lg ${
                props.center ? "flex items-center" : ""
            } ${props.klasse}`}
        >
            <div className="tel flex ">
                {" "}
                <AiOutlineClockCircle className="pt-2 text-3xl text-primaryColor-300"></AiOutlineClockCircle>{" "}
                <a className="pl-4 text-primaryColor-100" href="tel:+43 650 944 4150">
                    <div className="text-primaryColor-300">Brunn an der Pitten</div>
                    <div className="noMargin" style={{ marginBottom: "0!important" }}>
                        {" "}
                        <PortableText className="mb-0" value={props.data.oeffnungszeiten.brunn} />
                    </div>
                </a>
                <a className="pl-4 text-primaryColor-100" href="tel:+43 650 944 4150">
                    <div className="text-primaryColor-300"> Bad Vöslau Schlosspark</div>
                    <div className="noMargin" style={{ marginBottom: "0!important" }}>
                        <PortableText value={props.data.oeffnungszeiten.voeslau} />
                    </div>
                </a>
            </div>

            {props.children}
        </div>
    );
};

export default FloaterOpening;
