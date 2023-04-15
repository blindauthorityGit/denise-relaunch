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
            <div className={`hero container mx-auto relative mt-20 h-[620px] ${props.colspan}`}>
                {/* Background Image */}
                {/* Background Video */}

                <div className="text absolute z-10 text-center sm:w-[600px] top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-white uppercase text-7xl">{props.data.hero.title}</h1>
                </div>
                <div className="h-full w-full bg-darkText opacity-60 absolute"></div>
                {/* {!loaded && <Spinner1></Spinner1>} */}
                <div
                    className="w-full h-full bg-cover"
                    style={{ backgroundImage: `url(${urlFor(props.data.hero.image)})` }}
                ></div>
            </div>
            <div className="subtitle flex justify-center mt-6  ">
                <div className="border-t border-primaryColor-500 w-[35%] flex items-center"></div>
                <h2 className="font-freight font-thin">{props.data.hero.subtTitle}</h2>
                <div className="border-t border-primaryColor-500 w-[35%]"></div>
            </div>
        </>
    );
};

export default HeroPage;
