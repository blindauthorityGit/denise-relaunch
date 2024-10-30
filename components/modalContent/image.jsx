import React from "react";
import { Form1 } from "../forms";
import { ShopGalerie } from "../galerie";
import Image from "next/image";
//FUNCTIONS
import urlFor from "../functions/urlFor";
//ICONS
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

const LightBoxImage = (props) => {
    return (
        <div className="relative mb-16 grid h-full grid-cols-12 justify-center gap-4 sm:mb-0">
            <div
                className={`left relative  col-span-12 w-full justify-center sm:flex lg:col-span-12 lg:h-full ${props.order}`}
            >
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.image).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="contain"
                    alt="hero"
                    className="z-10"
                />
            </div>
        </div>
    );
};

export default LightBoxImage;
