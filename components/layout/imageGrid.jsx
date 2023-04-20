import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";

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
            className={`w-full col-span-12 grid grid-cols-12 relative grid-rows-3 sm:grid-rows-2 z-10 min-h-[400px] md:min-h-[30rem] lg:min-h-[40rem] gap-2 h-full  ${props.colspan}`}
        >
            <>
                <div className="col-span-12 sm:col-span-4 relative group sm:row-span-2">
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
                <motion.div className="col-span-6 sm:col-span-3  relative group">
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
                </motion.div>
                <div className="col-span-6  sm:col-span-5 sm:row-span-1 relative group">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[2]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="group-hover:scale-110 transition-all duration-500"
                        onClick={props.onClick}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 sm:row-span-2 relative group">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[3]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="group-hover:scale-110 transition-all duration-500"
                        onClick={props.onClick}
                    />
                </div>
                <div className="col-span-4 row-span-1 relative group">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.images[4]).url()}
                        layout="fill"
                        loading="lazy"
                        objectFit="cover"
                        alt="hero"
                        className="group-hover:scale-110 transition-all duration-500"
                        onClick={props.onClick}
                    />
                </div>
            </>
        </div>
    );
};

export default ImageGrid1;
