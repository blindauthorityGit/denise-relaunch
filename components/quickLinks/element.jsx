import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";
import getColSpan from "../functions/getColSpan";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Element = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
        setImageCount(props.length);
        console.log(props.length);
    }, []);
    const [imageCount, setImageCount] = useState(null);
    const [isDenise, setIsDenise] = useState(false);

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    return (
        <div
            className="col-span-6 mb-6 sm:col-span-4 sm:mb-6"
            style={{
                gridColumn: `span ${isMobile ? 6 : getColSpan(imageCount)} / span ${getColSpan(imageCount)}`,
            }}
        >
            <div className="image relative h-36 sm:h-96 md:h-64 lg:h-96">
                <Link href={props.link}>
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.image).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        objectPosition={`${isDenise ? "top" : "center"}`}
                        alt="hero"
                        onLoad={(e) => {
                            e.target.parentNode.parentNode.href.split("/")[
                                e.target.parentNode.parentNode.href.split("/").length - 1
                            ] == "denise"
                                ? setIsDenise(true)
                                : setIsDenise(false);
                        }}
                    />
                </Link>
            </div>
            <div className="z-10 col-span-12 mt-2 pl-4 font-freight text-xl font-bold tracking-wider sm:mt-4 sm:px-8 sm:pl-0">
                <Link href={props.link}>{props.linkText}</Link>
            </div>
        </div>
    );
};

export default Element;
