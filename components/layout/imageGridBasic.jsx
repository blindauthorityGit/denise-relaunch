import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
//COMPS
import { Overlay, Modal } from "../modal";
import { LightBoxImage } from "../modalContent";

// animations
import { motion } from "framer-motion";

// icons
import { BsArrowRightShort } from "react-icons/bs";

import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";
import getColSpan from "../functions/getColSpan";

const ImageGridBasic = (props) => {
    const [imageCount, setImageCount] = useState(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const [showModal, setShowModal] = useState(false);
    const [lightBoxImg, setLightBoxImg] = useState(null);

    useEffect(() => {}, [isMobile, isTablet, isDesktop]);

    useEffect(() => {
        setImageCount(props.data.length);
    }, []);

    function handleClick(e, i) {
        setShowModal(true);
        setLightBoxImg(props.data[i]);
        console.log(props.data[i], e, i);
    }

    return (
        <>
            {showModal && (
                <>
                    <Modal
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        <LightBoxImage image={lightBoxImg}></LightBoxImage>
                    </Modal>
                    <Overlay
                        onClick={() => {
                            setShowModal(false);
                        }}
                    />
                </>
            )}
            <div
                className={`containerXL sm_gap-2 container relative z-10 col-span-12 mx-auto grid h-full  min-h-[15rem] w-full grid-cols-12 gap-1 md:min-h-[20rem] xl:min-h-[40rem] 2xl:mx-auto  ${props.klasse}`}
            >
                <>
                    {props.data.slice(0, isMobile ? 4 : props.data.length).map((e, i) => {
                        return (
                            <div
                                className="group relative col-span-6 min-h-[10rem] cursor-pointer"
                                style={{
                                    gridColumn: `span ${isMobile ? 6 : getColSpan(imageCount)} / span ${getColSpan(
                                        imageCount
                                    )}`,
                                }}
                                id={i}
                                onClick={(e) => {
                                    console.log(e.currentTarget.id);
                                    setShowModal(true);
                                    setLightBoxImg(props.data[e.currentTarget.id]);
                                }}
                            >
                                <Image
                                    // {...ImagePropsGallery(i)}
                                    src={urlFor(e).url()}
                                    id={i}
                                    layout="fill"
                                    loading="lazy"
                                    objectFit="cover"
                                    objectPosition={isMobile ? "top" : "center"}
                                    alt="hero"
                                    className="transition-all duration-500 group-hover:scale-110"
                                />
                            </div>
                        );
                    })}
                    {/* <div className="col-span-6 relative group">
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
                <motion.div className="col-span-6  relative group">
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
                </motion.div> */}
                </>
            </div>
        </>
    );
};

export default ImageGridBasic;
