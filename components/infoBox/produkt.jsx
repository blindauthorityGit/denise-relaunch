import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import urlFor from "../functions/urlFor";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Produkt = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <div data-aos="fade-right" className="col-span-12 md:col-span-12 lg:col-span-6 lg:mb-12 lg:flex">
            <div className="image relative h-96 w-96 lg:h-64 xl:h-96 ">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={urlFor(props.data.image).url()}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    onLoad={() => {
                        console.log("LOADING");
                    }}
                />
            </div>
            {/* <div className="topLine flex justify-center py-2 " style={{ background: props.data.topColor }}>
                <h4 className="font-freight text-xl font-thin tracking-wider text-white xl:text-2xl">
                    {props.data.topLine}
                </h4>
            </div> */}
            <div className="z-10 col-span-12 mt-4 px-8  font-freight lg:col-span-6">
                {/* <h3 className="font-freight font-thin text-darkText text-3xl">{props.data.title}</h3> */}
                <div className="description mt-2 leading-relaxed tracking-wider text-primaryColor-50">
                    <div className="lg:text-3xl">{props.data.title} </div>
                    <PortableText value={props.data.description} />
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Produkt;
