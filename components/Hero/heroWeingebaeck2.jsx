import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";

// COMPS
import { MainButton } from "../buttons";
import { Spinner1 } from "../spinner";
import { FloaterContact, FloaterOpening } from "../floaters";

import BigHero from "../../assets/bigHero.jpg";
import BGMobile from "../../assets/bgMobile.jpg";
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
            className={`hero-container relative w-full bg-[#FBFBF5] md:mt-16 xl:mt-24  ${
                props.fullHeight ? "h-calc-screen lg:h-[92svh] xl:h-[93svh]  2xl:h-screen" : props.height
            } ${props.colspan}`}
        >
            {/* Background Image */}
            {/* Background Video */}
            <FloaterOpening data={props.dataSetting}></FloaterOpening>
            <FloaterContact data={props.dataSetting}></FloaterContact>
            {/* <div className="absolute top-[45%] left-1/3 z-30 -translate-x-1/2 -translate-y-1/2 transform lg:w-[48%]">
                <h1 className="!leading-tight tracking-tight text-primaryColor-600 xl:!text-9xl">"Genuss im</h1>
                <h1 className="mt-[-2rem] pl-36 !leading-tight tracking-tight text-primaryColor-600 xl:!text-9xl">
                    neuen Gewand"
                </h1>
                <h3 className="mt-2 text-darkText sm:mt-4 lg:mt-8 lg:w-[66%] lg:!text-2xl xl:mt-8">
                    Unser Weingebäck – die perfekte Kombination aus Tradition und modernem Design. Neu verpackt und
                    ideal portioniert für Ihren Weinmoment
                </h3>
                <h6 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subsubtitle}</h6>
            </div> */}

            <div className=" relative z-20 mx-auto grid h-full grid-cols-12 items-center">
                <div className="hidden lg:col-span-6 lg:block">
                    {/* <h1 className="!leading-tight tracking-tight text-white xl:!text-9xl">Genuss im </h1>
                    <h1 className="mt-[-2rem] !leading-tight tracking-tight text-white xl:!text-9xl">neuen Gewand</h1>
                    <h3 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subtitle}</h3>
                    <h6 className="mt-2 text-primaryColor-200 sm:mt-4 lg:mt-2 xl:mt-4">{props.data.subsubtitle}</h6> */}
                </div>
                <div className="relative col-span-12 flex h-full flex-col px-4 pt-[20%] lg:col-span-6 lg:justify-center lg:pt-0 lg:pl-36">
                    <h1 className="!text-5xl !leading-tight tracking-tight text-white lg:!text-6xl xl:!text-8xl">
                        "Genuss im
                    </h1>
                    <h1 className="!font-regular mt-[-1rem] pl-8 !text-5xl !leading-tight tracking-tight text-white lg:!text-6xl xl:!text-8xl">
                        neuen Gewand"
                    </h1>
                    <h3 className="mt-2 w-full text-lg !leading-tight text-darkText sm:mt-4 lg:mt-8 lg:w-[80%] lg:pl-16 lg:!text-xl xl:mt-8 xl:w-[66%] xl:!text-2xl">
                        Unser Weingebäck – die perfekte Kombination aus Tradition und modernem Design.{" "}
                        <span className="hidden lg:inline-block">
                            {" "}
                            Neu verpackt und ideal abgestimmt für Ihren Weingenuss
                        </span>
                    </h3>
                    <div className="absolute bottom-2 w-full lg:static lg:mt-8 ">
                        <Link href="https://shop.baeckerin.at/">
                            <MainButton klasse="lg:!max-w-[360px] !w-full !max-w-[90%] !text-lg">
                                Jetzt bestellen
                            </MainButton>
                        </Link>
                        <Link href="https://shop.baeckerin.at/registration">
                            <MainButton klasse="!mt-0 mb-2 !w-full !max-w-[90%] !text-lg !bg-white/70 lg:!bg-transparent !text-darkText border border-darkText">
                                Wiederverkäufer
                            </MainButton>
                        </Link>
                        {/* <p className="text-white">Reseller? Hier klicken</p> */}
                    </div>
                </div>
            </div>
            {/* <div
                className=" absolute z-10 h-auto "
                initial="hidden"
            >
                <CoverImage
                    src={WG.src}
                    mobileSrc={WG.src}
                    alt="Cover Background"
                    klasse={"relative"}
                    className="  absolute !aspect-[16/9] lg:!aspect-[9/12]"
                />
            </div> */}
            <div
                style={{ backgroundImage: `url(${isMobile ? BGMobile.src : BigHero.src})` }}
                className="absolute top-0 z-10 h-full w-full bg-cover sm:h-full  "
            ></div>

            <div className="text absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform text-center sm:w-[600px]">
                <Parallax translateY={["-200px", "120px"]}>
                    <Link href="/denise"></Link>
                </Parallax>
            </div>
            {/* {!loaded && <Spinner1></Spinner1>} */}
        </div>
    );
};

export default HeroWeingebaeck;
