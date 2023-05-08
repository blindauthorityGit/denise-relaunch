import React, { useEffect } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

import urlFor from "../functions/urlFor";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

const Aktuelles = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    return (
        <>
            <div className="col-span-12 md:col-span-6">
                <h2 className="font-freight text-2xl sm:text-4xl text-primaryColor-200 xl:text-6xl font-thin mt-8 tracking-widest mb-8 lg:mb-12">
                    {props.data.title}
                </h2>
                <div className="leading-relaxed  tracking-wider font-freight text-base  text-primaryColor-50">
                    <PortableText value={props.data.description} />
                </div>
            </div>
            <div className="col-span-12 md:col-span-6">
                {" "}
                <div data-aos="fade-right" className="w-full relative h-96 lg:h-[400px] md:pl-36">
                    <Image
                        // {...ImagePropsGallery(i)}
                        src={urlFor(props.data.images[0]).url()}
                        layout="responsive"
                        loading="lazy"
                        alt="hero"
                        width="100%"
                        height="100%"
                        onLoad={() => {
                            console.log("LOADING");
                        }}
                    />
                </div>
            </div>
        </>
    );
};

export default Aktuelles;
