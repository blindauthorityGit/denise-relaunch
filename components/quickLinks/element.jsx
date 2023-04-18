import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import urlFor from "../functions/urlFor";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Element = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div className="col-span-6 sm:col-span-4 mb-6 sm:mb-0">
            <div className="image relative h-36 sm:h-96">
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
            <div className="col-span-12 z-10 mt-2 sm:mt-4 pl-4 sm:pl-0 sm:px-8 font-freight">
                <Link href={props.link}>
                    <a>{props.linkText}</a>
                </Link>
            </div>
        </div>
    );
};

export default Element;
