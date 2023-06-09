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

const ImgText1 = (props) => {
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
            className={`w-full container  sm:px-0 md:px-24 lg:px-36 m-auto lg:gap-24 grid grid-cols-12  ${props.colspan}`}
        >
            <motion.div
                data-aos="fade-right"
                className={`left hidden sm:block col-span-12 lg:col-span-6 relative h-64 lg:h-auto ${props.order}`}
            >
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.data.story.image).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="z-10"
                />
                <div className="bgOverlay absolute bg-primaryColor opacity-20 w-full h-full md:left-[1.85rem] lg:left-[-2rem] top-[-2rem]"></div>
            </motion.div>
            <div className="right px-8 sm:px-0 col-span-12 lg:col-span-6 flex flex-col justify-center ">
                <h2
                    data-aos="fade-left"
                    className="font-freight text-2xl sm:text-4xl text-darkText lg:text-6xl font-thin mt-8 tracking-widest mb-8 lg:mb-12"
                >
                    {props.data.story.title}
                </h2>
                <div className="leading-relaxed  tracking-wider">
                    <PortableText value={props.data.story.text} />
                </div>
            </div>
        </div>
    );
};

export default ImgText1;
