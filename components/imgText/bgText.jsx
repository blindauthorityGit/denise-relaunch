import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//SANITY
import { PortableText } from "@portabletext/react";

//Framer Motion
import { motion, useScroll, useAnimation } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//Functions
import urlFor from "../functions/urlFor";

const BGText = (props) => {
    const ref = useRef(null);
    const floaterRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div
            ref={ref}
            style={{ backgroundImage: `url(${urlFor(props.data.story.image).url()})` }}
            className={`w-full container  sm:px-0 md:px-24 lg:px-48 m-auto bg-contain bg-no-repeat bg-center [background-position-x:400px] lg:gap-24 grid grid-cols-12  ${props.colspan}`}
        >
            <div className="right px-8 py-8 lg:py-24 sm:px-0 col-span-12 lg:col-span-8 flex flex-col justify-center ">
                <h2
                    data-aos="fade-left"
                    className="font-freight text-2xl sm:text-4xl text-darkText lg:text-6xl font-thin mt-8 tracking-widest mb-8 lg:mb-12"
                >
                    {props.data.story.title}
                </h2>
                <div className="font-freight text-lg">
                    <PortableText value={props.data.story.text} />
                </div>
            </div>
        </div>
    );
};

export default BGText;
