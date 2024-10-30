import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs/index.js";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const ImageGrid1 = (props) => {
    const [numbers, setNumbers] = useState(null);

    return (
        <div
            className={`relative z-10 col-span-12 grid h-full min-h-[600px] w-full grid-cols-12 grid-rows-3 gap-2 sm:grid-rows-2 md:min-h-[30rem] lg:min-h-[40rem]  ${props.colspan}`}
        >
            <>
                <div className="group relative col-span-12 sm:col-span-4 sm:row-span-2">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[0]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="transition-all duration-500 group-hover:scale-110"
                        onClick={props.onClick}
                    />
                </div>
                <motion.div className="group relative  col-span-6 sm:col-span-3">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[1]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="transition-all duration-500 group-hover:scale-110"
                        onClick={props.onClick}
                    />
                </motion.div>
                <div className="group  relative col-span-6 sm:col-span-5 sm:row-span-1">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[2]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="transition-all duration-500 group-hover:scale-110"
                        onClick={props.onClick}
                    />
                </div>
                <div className="group relative col-span-12 sm:col-span-4 sm:row-span-2">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[3]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="transition-all duration-500 group-hover:scale-110"
                        onClick={props.onClick}
                    />
                </div>
                <div className="group relative col-span-4 row-span-1">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[4]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="transition-all duration-500 group-hover:scale-110"
                        onClick={props.onClick}
                    />
                </div>
            </>
        </div>
    );
};

export default ImageGrid1;
