import React, { useEffect } from "react";
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterTop = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater text-textBlack absolute bottom-0 left-6 right-12 hidden h-[12%] w-[10rem] sm:block lg:left-12 lg:h-[33%] lg:text-lg  lg:font-semibold ${
                props.center ? "flex items-center" : ""
            } ${props.klasse}`}
        >
            <div className="kugel animate-scaleUp border-blackText  absolute  top-0 left-[-7%] z-10 h-6 w-6 rounded-full border-[6px] bg-primaryColor-300 opacity-0 delay-1000"></div>
            <div className="animate-expand border-blackText-200 h-full w-[1px] border opacity-0 delay-1000"></div>
            <div className="animate-expand2 border-blackText-200 absolute top-[69%] h-full w-[160px]  border-t-[1px] opacity-0 lg:top-[88%]"></div>
            <div className="animate-expand2 absolute top-[47%] left-[15%]  h-full w-[200px]  opacity-0   lg:top-[77%]">
                Find out more
            </div>
        </div>
    );
};

export default FloaterTop;
