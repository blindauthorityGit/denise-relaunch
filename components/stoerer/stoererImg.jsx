import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import urlFor from "../functions/urlFor";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const StoererImg = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div data-aos="fade-right" className="w-full relative h-96 lg:h-[1200px]">
            <Image
                // {...ImagePropsGallery(i)}
                src={urlFor(props.data).url()}
                layout="fill"
                loading="lazy"
                objectFit="cover"
                alt="hero"
                onLoad={() => {
                    console.log("LOADING");
                }}
            />
        </div>
    );
};

export default StoererImg;
