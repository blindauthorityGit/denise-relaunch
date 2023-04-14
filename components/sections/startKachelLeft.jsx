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

const StartKachelLeft = (props) => {
    const ref = useRef(null);
    const floaterRef = useRef(null);
    const imgRef = useRef(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    //STATES
    const [imgHeight, setImgHeight] = useState(null);

    // const { scrollYProgress } = useScroll();
    const { scrollY } = useScroll();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
        console.log(imgRef.current.clientWidth);
        setImgHeight(imgRef.current.clientWidth);
    }, [imgRef.current]);

    return (
        <div ref={ref} className={`w-full   sm:px-0 md:px-0 lg:px-0 m-auto  grid grid-cols-12  ${props.colspan}`}>
            <motion.div
                style={{
                    height: isMobile
                        ? imgHeight / 1.5 + "px"
                        : isTablet
                        ? imgHeight / 1.6 + "px"
                        : isDesktop
                        ? imgHeight + "px"
                        : "auto",
                }}
                data-aos="fade-right"
                ref={imgRef}
                className={`left sm:block col-span-12 lg:col-span-6 relative ${props.data.left ? "" : "lg:order-last"}`}
            >
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.data.image).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="z-10"
                />
            </motion.div>
            <div
                style={{ backgroundImage: `url(${props.bg.src})` }}
                className="right md:mb-16 lg:mb-0 px-8 sm:px-16 lg:px-48 col-span-12 lg:col-span-6 flex flex-col justify-center"
            >
                {/* <div
                    data-aos="fade-up"
                    className="font-montserrat  mt-4 lg:mt-0  tracking-wide leading-relaxed sm:leading-relaxed lg:leading-relaxed text-xs sm:text-sm lg:text-2xl text-primaryColor-100 mb-4"
                >
                    <h2>{props.data.title}</h2>
                </div> */}
                <h2
                    data-aos="fade-left"
                    className="font-thin font-freight text-4xl sm:text-4xl text-darkText lg:text-6xl  mt-8 mb-8 lg:mb-12"
                >
                    {props.data.title}
                </h2>
                <div className="text-regular leading-relaxed font-freight text-lg">
                    <PortableText value={props.data.text} />
                </div>
                {/* <div className="text font-serif">{parse(config.text)}</div> */}
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
