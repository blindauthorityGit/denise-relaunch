import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

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

const StartKachelLeft = (props) => {
    const ref = useRef(null);
    const imgRef = useRef(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    //STATES
    const [imgHeight, setImgHeight] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 600,
        });
        console.log(imgRef.current.clientWidth);
        setImgHeight(imgRef.current.clientWidth);
    }, [imgRef.current]);

    return (
        <div
            ref={ref}
            className={`containerXL m-auto grid  w-full grid-cols-12 sm:px-0 md:px-0  lg:px-0 2xl:mx-auto  ${props.colspan}`}
        >
            <motion.div
                style={{
                    height: isMobile
                        ? imgHeight / 1.5 + "px"
                        : isTablet
                        ? imgHeight / 1.3 + "px"
                        : isDesktop
                        ? imgHeight + "px"
                        : "auto",
                }}
                data-aos="fade-right"
                data-aos-once="true"
                ref={imgRef}
                className={`left group relative col-span-12 overflow-hidden sm:block lg:col-span-6 ${
                    props.data.left ? "" : "lg:order-last"
                }`}
            >
                <Link href={props.data.buttonLink}>
                    <div className="absolute z-20 h-full w-full bg-primaryColor-500 opacity-0 transition-all duration-500 group-hover:opacity-50"></div>
                    <Image
                        src={urlFor(props.data.image).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="z-10 transition-all duration-500 group-hover:scale-110"
                    />
                </Link>
            </motion.div>
            <div
                style={{ backgroundImage: `url(${props.bg.src})` }}
                className="right col-span-12 flex flex-col justify-center px-8 sm:px-16 md:mb-16 lg:col-span-6 lg:mb-0 2xl:px-48"
            >
                <h2
                    data-aos="fade-left"
                    data-aos-once="true"
                    className="mt-8 mb-8 font-freight text-4xl font-thin text-darkText  sm:text-4xl  lg:mb-12 lg:text-4xl xl:text-6xl"
                >
                    {props.data.title}
                </h2>
                <div className="text-regular text-regular mb-4 font-freight leading-relaxed tracking-wider sm:text-xl lg:text-base xl:text-xl xl:leading-relaxed">
                    <PortableText value={props.data.text} />
                </div>
                <LineButton link={props.data.buttonLink}>{props.data.buttonText}</LineButton>
                <div className="h-12 sm:h-0"></div>
            </div>
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

export default StartKachelLeft;
