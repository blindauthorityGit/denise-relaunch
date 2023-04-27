import React, { useState, useEffect } from "react";
import Link from "next/link";
// COMPS
import { MainButton } from "../buttons";
import { Spinner1 } from "../spinner";
import { FloaterContact, FloaterOpening } from "../floaters";

// FUNCTIONS
import useBreakpoints from "../functions/useBreakpoints";

const Hero = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    return (
        <div
            className={`hero-container w-full  ${props.fullHeight ? "h-screen sm:h-full" : props.height} ${
                props.colspan
            }`}
        >
            {/* Background Image */}
            {/* Background Video */}
            <FloaterOpening data={props.dataSetting}></FloaterOpening>
            <FloaterContact data={props.dataSetting}></FloaterContact>
            <div className="text absolute z-10 text-center sm:w-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white">{props.data.title}</h1>
                <h3 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subtitle}</h3>
                <h6 className="mt-2 sm:mt-4 lg:mt-2 xl:mt-4 text-primaryColor-200">{props.data.subsubtitle}</h6>
                <Link href="/denise">
                    <a>
                        <MainButton>Mehr</MainButton>
                    </a>
                </Link>
            </div>
            <div className="h-full w-full bg-darkText opacity-60 absolute"></div>
            {/* {!loaded && <Spinner1></Spinner1>} */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-screen object-cover object-center"
                style={{ objectFit: "cover" }}
                onLoadedData={() => setLoaded(true)}
                onCanPlayThrough={() => setLoaded(true)}
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
