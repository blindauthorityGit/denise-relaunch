import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

// COMPS
import { MainButton } from "../buttons";
import { Spinner1 } from "../spinner";
import { FloaterContact, FloaterOpening } from "../floaters";

import BGHero from "../../assets/bghero.png";
import WG from "../../assets/wg18.jpg";
import { CoverImage } from "../images";

// FUNCTIONS
import useBreakpoints from "../functions/useBreakpoints";

const HeroWeingebaeck = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const videoRef = useRef(null);

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {}, []);

    return (
        <div
            className={`hero-container relative mt-20 w-full bg-primaryColor ${
                props.fullHeight ? "h-calc-screen  2xl:h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            {/* Background Video */}
            <FloaterOpening data={props.dataSetting}></FloaterOpening>
            <FloaterContact data={props.dataSetting}></FloaterContact>

            <div className="container relative z-50 mx-auto grid h-full grid-cols-12 items-center">
                <div className="col-span-6">
                    <h1 className="!leading-tight tracking-tight text-white xl:!text-9xl">Genuss im </h1>
                    <h1 className="mt-[-2rem] !leading-tight tracking-tight text-white xl:!text-9xl">neuen Gewand</h1>
                    <h3 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subtitle}</h3>
                    <h6 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subsubtitle}</h6>
                </div>
                <div className="col-span-6">
                    <div
                        className=" relative z-10 h-auto "
                        initial="hidden"
                        // whileInView="visible"
                        // viewport={{ once: true }}
                    >
                        <CoverImage
                            src={WG.src}
                            mobileSrc={WG.src}
                            alt="Cover Background"
                            klasse={""}
                            // style={{ }}
                            className=" !aspect-[16/9] lg:!aspect-[4/3]"
                        />
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${BGHero.src})` }}
                className="absolute top-0 z-10 h-full w-full  opacity-60 sm:h-full"
            ></div>

            <div className="text absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center sm:w-[600px]">
                <Parallax translateY={["-200px", "120px"]}>
                    <Link href="/denise">
                        <a>{/* <MainButton>Mehr</MainButton> */}</a>
                    </Link>
                </Parallax>
            </div>
            {/* {!loaded && <Spinner1></Spinner1>} */}
        </div>
    );
};

export default HeroWeingebaeck;
