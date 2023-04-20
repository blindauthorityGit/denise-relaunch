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

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    return (
        <div
            className="col-span-6 sm:col-span-4 mb-6 sm:mb-6"
            style={{
                gridColumn: `span ${isMobile ? 6 : getColSpan(imageCount)} / span ${getColSpan(imageCount)}`,
            }}
        >
            <div className="image relative h-36 sm:h-96 md:h-64 lg:h-72">
                <Link href={props.link}>
                    <a>
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={urlFor(props.image).url()}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                            onLoad={() => {
                                console.log("LOADING");
                            }}
                        />
                    </a>
                </Link>
            </div>
            <div className="col-span-12 z-10 mt-2 sm:mt-4 pl-4 sm:pl-0 sm:px-8 font-freight tracking-wider">
                <Link href={props.link}>
                    <a>{props.linkText}</a>
                </Link>
            </div>
        </div>
    );
};

export default Element;
