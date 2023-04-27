import React, { useState, useEffect } from "react";

// COMPS
import { MainButton } from "../buttons";

//FUNCTIONS
import urlFor from "../functions/urlFor";

const HeroSimple = (props) => {
    // }, [isMobile, isTablet, isDesktop]);

    return (
        <>
            <div className={`hero container mx-auto relative mt-12 md:mt-20 lg:mt-24  ${props.colspan}`}>
                {/* Background Image */}
                {/* Background Video */}
                <div className="text  z-10 text-center ">
                    <h1 className="text-darkText  text-5xl xl:text-7xl">{props.children}</h1>
                </div>
            </div>
        </>
    );
};

export default HeroSimple;
