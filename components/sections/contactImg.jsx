import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

//Framer Motion
import { motion, useScroll, useAnimation } from "framer-motion";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

//FUNCTIONS
import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";

//SANITY
import { PortableText } from "@portabletext/react";

//COMPS
import { LineButton } from "../buttons";
import MapboxMap from "../map";
import { Form1 } from "../forms";

//ICONS
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

const ContactImg = (props) => {
    const ref = useRef(null);
    const floaterRef = useRef(null);
    const imgRef = useRef(null);

    //STATES
    const [imgHeight, setImgHeight] = useState(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        setImgHeight(imgRef.current.clientWidth);
    }, [imgRef.current]);

    return (
        <div
            ref={ref}
            className={`containerXL  m-auto grid w-full  grid-cols-12 sm:px-0  lg:px-0 2xl:mx-auto  ${props.colspan}`}
        >
            <div className="right col-span-12 flex flex-col justify-center px-8  sm:px-16 lg:col-span-8 xl:col-span-6 xl:px-24">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 sm:col-span-6">
                        <h4
                            data-aos="fade-left"
                            className="mt-6 mb-4 font-freight text-2xl font-thin text-darkText  sm:mt-8 sm:mb-8 lg:mb-6 lg:mb-6 lg:text-4xl xl:text-4xl"
                        >
                            Kontakt
                        </h4>
                        <div className="font-freight font-bold leading-relaxed text-darkText xl:text-xl">
                            {" "}
                            {props.data.contact.name}
                        </div>
                        <div className="font-freight leading-relaxed text-darkText xl:text-xl">
                            {" "}
                            {props.data.contact.street}
                        </div>
                        <div className="font-freight leading-relaxed text-darkText xl:text-xl">
                            {" "}
                            {props.data.contact.city}
                        </div>
                        <div className="phoner mt-4 grid grid-cols-12 leading-relaxed">
                            <div className="col-span-2 flex items-center text-primaryColor">
                                <FaPhone />{" "}
                            </div>
                            <div className="col-span-10 font-freight tracking-wider xl:text-xl">
                                {props.data.contact.phone}
                            </div>
                            <div className="col-span-2 flex items-center text-primaryColor">
                                <HiOutlineMail></HiOutlineMail>
                            </div>
                            <div className="col-span-10 font-freight tracking-wider xl:text-xl">
                                {props.data.contact.email}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <h4
                            data-aos="fade-left"
                            className="mt-6 mb-4 font-freight text-2xl font-thin text-darkText  sm:mt-8 sm:mb-8 lg:mb-6 lg:mb-6 lg:text-4xl xl:text-4xl"
                        >
                            Öffnungszeiten
                        </h4>
                        <div className="flex space-x-6">
                            <div className="font-freight ">
                                <div className="mb-4 leading-relaxed text-primaryColor-500 xl:text-xl">
                                    Brunn an der Pitten
                                </div>
                                <div className="font-freight leading-relaxed text-darkText xl:text-xl">
                                    <PortableText value={props.data.oeffnungszeiten.brunn} />
                                </div>{" "}
                            </div>
                            {/* <div className="font-freight ">
                                <div className="mb-4 leading-relaxed text-primaryColor-500 xl:text-xl">
                                    Wr. Neustadt Marienmarkt
                                </div>
                                <div className="font-freight leading-relaxed text-darkText xl:text-xl">
                                    <PortableText value={props.data.oeffnungszeiten.wrn} />
                                </div>
                            </div> */}
                        </div>
                        <div className="relative col-span-12 bg-primaryColor-50 p-4 font-freight">
                            <div className="absolute top-[-2rem] right-[-1rem] flex h-16 w-16 items-center justify-center rounded-full bg-primaryColor-500 font-bold text-white">
                                ab 27.05.
                            </div>
                            <div className="mb-4 leading-relaxed text-primaryColor-500 xl:text-xl">
                                Bad Vöslau Schlosspark
                            </div>
                            <div className="font-freight leading-relaxed text-darkText xl:text-xl">
                                <PortableText value={props.data.oeffnungszeiten.voeslau} />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 mt-2 sm:mt-8">
                        <h4
                            data-aos="fade-left"
                            className="mt-6 mb-4 font-freight text-2xl font-thin text-darkText  sm:mt-8 sm:mb-8 sm:text-4xl lg:mb-6 lg:mb-6 xl:text-4xl"
                        >
                            Schreiben Sie mir!
                        </h4>
                        <Form1 contact />
                    </div>
                </div>

                {/* <div className="text font-serif">{parse(config.text)}</div> */}
            </div>
            <motion.div
                data-aos="fade-right"
                ref={imgRef}
                className={`left relative col-span-12 hidden h-full justify-center pt-16 text-center sm:block  lg:col-span-4 xl:col-span-6`}
            >
                <img src={urlFor(props.data.contactImg).url()} alt="Konatkt Bäckerei" className="mx-auto" />
            </motion.div>
            <style jsx>{`
                .hover-underline-animation span {
                    display: inline-block;
                    position: relative;
                    color: #000;
                }

                .hover-underline-animation span::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    transform: scaleX(0);
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: black;
                    transform-origin: bottom right;
                    transition: transform 0.25s ease-out;
                }

                .hover-underline-animation:hover span::after {
                    transform: scaleX(1);
                    transform-origin: bottom left;
          
            `}</style>
        </div>
    );
};

export default ContactImg;
