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
            // style={{ backgroundImage: `url(${!props.isDesktop ? "" : urlFor(props.data.story.image).url()})` }}
            className={`container m-auto  grid w-full grid-cols-12 bg-contain bg-center bg-no-repeat sm:px-0 md:px-24 lg:bg-pos-x-small xl:gap-24 xl:py-6 xl:px-12 xl:bg-pos-x  ${props.colspan}`}
        >
            <div className="right col-span-12 flex flex-col justify-center px-8  sm:px-0 lg:col-span-6 ">
                <h2
                    data-aos="fade-left"
                    className="mt-8 mb-8 font-freight font-thin tracking-widest text-darkText sm:text-4xl lg:mb-12 xl:text-4xl 2xl:text-2xl"
                >
                    {props.data.story.title}
                </h2>
                <div className="font-freight leading-relaxed tracking-wider xl:text-xl xl:leading-8">
                    <PortableText value={props.data.story.text} />
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:pt-10">
                <img src={urlFor(props.data.story.image).url()} alt="" />
            </div>
        </div>
    );
};

export default BGText;
