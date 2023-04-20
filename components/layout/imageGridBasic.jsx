import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";

import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";
import getColSpan from "../functions/getColSpan";

const ImageGridBasic = (props) => {
    const [imageCount, setImageCount] = useState(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {
        setImageCount(props.data.length);
        console.log(props.data.length);
        console.log(getColSpan(props.data.length));
    }, []);

    return (
        <div
            className={`w-full container mx-auto col-span-12 grid grid-cols-12 relative  z-10 min-h-[15rem] md:min-h-[30rem] lg:min-h-[40rem] gap-1 sm_gap-2 h-full  ${props.klasse}`}
        >
            <>
                {props.data.map((e, i) => {
                    return (
                        <div
                            className="col-span-6 relative group min-h-[10rem]"
                            style={{
                                gridColumn: `span ${isMobile ? 6 : getColSpan(imageCount)} / span ${getColSpan(
                                    imageCount
                                )}`,
                            }}
                        >
                            <Image
                                // {...ImagePropsGallery(i)}
                                src={urlFor(e).url()}
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                alt="hero"
                                className="group-hover:scale-110 transition-all duration-500"
                                onClick={props.onClick}
                            />
                        </div>
                    );
                })}
                {/* <div className="col-span-6 relative group">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[0]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="group-hover:scale-110 transition-all duration-500"
                        onClick={props.onClick}
                    />
                </div>
                <motion.div className="col-span-6  relative group">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[1]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="group-hover:scale-110 transition-all duration-500"
                        onClick={props.onClick}
                    />
                </motion.div> */}
            </>
        </div>
    );
};

export default ImageGridBasic;
