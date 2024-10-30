import React, { useEffect, forwardRef } from "react";
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const FloaterBlackFull = (props, ref) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);
    return (
        <div
            className={`floater text-textBlack absolute bottom-0 left-6 right-12 hidden h-[100%] w-[10rem] opacity-40 sm:block lg:left-12 lg:h-[100%] lg:text-lg  lg:font-semibold ${
                props.center ? "flex items-center" : ""
            } ${props.klasse}`}
        >
            <div
                ref={ref}
                style={{ ...props.style, opacity: props.opacity }}
                className="animate-expand border-blackText-50 h-full w-[1px] border opacity-0 delay-1000"
            ></div>
            <div className="animate-expand2 border-blackText-50 absolute top-[0%] h-full w-[160px]  border-t-[1px] opacity-0 lg:top-[0%]"></div>
            <div className="animate-expand2 absolute top-[0%] left-[15%]  h-full w-[200px]  opacity-0   lg:top-[0%]">
                Find out more
            </div>
        </div>
    );
};

export default forwardRef(FloaterBlackFull);
