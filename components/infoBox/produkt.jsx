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
        <div data-aos="fade-right" className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="image relative h-96 lg:h-64 xl:h-96 ">
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
            <div className="topLine py-2 flex justify-center " style={{ background: props.data.topColor }}>
                <h4 className="font-freight font-thin text-xl xl:text-2xl tracking-wider text-white">
                    {props.data.topLine}
                </h4>
            </div>
            <div className="col-span-12 z-10 mt-4 px-8 font-freight text-center">
                {/* <h3 className="font-freight font-thin text-darkText text-3xl">{props.data.title}</h3> */}
                <div className="description mt-2 text-primaryColor-50 leading-relaxed tracking-wider">
                    <PortableText value={props.data.description} />
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default Produkt;
