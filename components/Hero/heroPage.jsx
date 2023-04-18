import React, { useState, useEffect } from "react";

// COMPS
import { MainButton } from "../buttons";
import { Spinner1 } from "../spinner";
import { FloaterContact, FloaterOpening } from "../floaters";

//FUNCTIONS
import urlFor from "../functions/urlFor";

const HeroPage = (props) => {
    const [loaded, setLoaded] = useState(false);
    // const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(props.data.hero.subTitle);
    }, []);
    // useEffect(() => {
    //     console.log(isMobile, isTablet, isDesktop);
    // }, [isMobile, isTablet, isDesktop]);

    return (
        <>
            <div
                className={`hero container mx-auto relative mt-12 md:mt-20 lg:mt-20 h-[300px] lg:h-[620px] ${props.colspan}`}
            >
                {/* Background Image */}
                {/* Background Video */}
                <div className="text absolute z-10 text-center sm:w-[600px] top-[85%] md:top-[89%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-white uppercase text-5xl lg:text-7xl">{props.data.hero.title}</h1>
                </div>
                <div className="h-full opacity-60 w-full absolute bg-gradient-to-b from-transparent to-[#4C4D4F]"></div>{" "}
                {/* {!loaded && <Spinner1></Spinner1>} */}
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${urlFor(props.data.hero.image)})` }}
                ></div>
                {props.children}
            </div>
            <div className="subtitle flex justify-center mt-6  ">
                <div className="w-[18%] lg:w-[35%] flex items-center">
                    <div className="strich border-t border-primaryColor-500 w-full "></div>
                </div>
                <h2 className="font-freight font-thin text-2xl mx-2 sm:mx-6">{props.data.hero.subtTitle}</h2>
                <div className=" w-[18%]  lg:w-[35%] flex items-center">
                    <div className="strich border-t border-primaryColor-500 w-full "></div>
                </div>
            </div>
        </>
    );
};

export default HeroPage;
