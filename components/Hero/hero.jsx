import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

// COMPS
import { MainButton } from "../buttons";
import { Spinner1 } from "../spinner";
import { FloaterContact, FloaterOpening } from "../floaters";

// FUNCTIONS
import useBreakpoints from "../functions/useBreakpoints";

const Hero = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const videoRef = useRef(null);

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {}, []);

    return (
        <div
            className={`hero-container  relative w-full ${
                props.fullHeight ? "h-calc-screen sm:h-full 2xl:h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            {/* Background Video */}
            <FloaterOpening data={props.dataSetting}></FloaterOpening>
            <FloaterContact data={props.dataSetting}></FloaterContact>
            <div className="text absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center sm:w-[600px]">
                <Parallax translateY={["-200px", "120px"]}>
                    <h1 className="text-white">{props.data.title}</h1>
                    <h3 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subtitle}</h3>
                    <h6 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subsubtitle}</h6>
                    <Link href="/denise">
                        <MainButton>Mehr</MainButton>
                    </Link>
                </Parallax>
            </div>
            <div className="absolute h-full w-full bg-[#3b3720] opacity-60 sm:h-full"></div>
            {/* {!loaded && <Spinner1></Spinner1>} */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover object-center sm:h-screen 2xl:h-full"
                style={{ objectFit: "cover" }}
                onLoadedData={() => setLoaded(true)}
                onCanPlayThrough={() => setLoaded(true)}
                ref={videoRef}
            >
                <source
                    src={props.videoFile}
                    // src={isMobile ? props.data.videoFileMobile.asset.url : props.data.videoFile.asset.url}
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

export default Hero;
