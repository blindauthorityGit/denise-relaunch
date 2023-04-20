import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";

import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";
import getColSpan from "../functions/getColSpan";

const ShopGalerie = (props) => {
    const [imageCount, setImageCount] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const holderRef = useRef(null);
    const [mainImg, setMainImg] = useState(urlFor(props.data.images[0]).url());

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {
        setImageCount(props.data.images.length);
        console.log(props.data.length);
        console.log(getColSpan(props.data.length));
    }, []);

    return (
        <div
            className={`w-full container mx-auto col-span-12 grid grid-cols-12 relative  z-10  gap-2 h-full  ${props.klasse}`}
        >
            <div className="col-span-12 relative min-h-[10rem] md:min-h-[20rem] lg:h-[100%]">
                <Image
                    src={mainImg}
                    layout="fill"
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className=" group-hover:scale-110 transition-all duration-500"
                    onClick={props.onClick}
                    ref={holderRef}
                />
            </div>
            <>
                {props.data.images.map((e, i) => {
                    return (
                        <div
                            className={`col-span-6 relative group h-36 ${
                                activeIndex === i ? "opacity-100" : "opacity-50"
                            }`}
                            style={{
                                gridColumn: `span ${isMobile ? 6 : getColSpan(imageCount)} / span ${getColSpan(
                                    imageCount
                                )}`,
                            }}
                        >
                            <Image
                                // {...ImagePropsGallery(i)}
                                src={urlFor(e).url()}
                                layout="fill"
                                loading="lazy"
                                objectFit="cover"
                                alt="hero"
                                className="group-hover:scale-110 transition-all duration-500 cursor-pointer"
                                onClick={() => {
                                    setMainImg(urlFor(props.data.images[i]).url());
                                    setActiveIndex(i);
                                }}
                            />
                        </div>
                    );
                })}
            </>
        </div>
    );
};

export default ShopGalerie;
