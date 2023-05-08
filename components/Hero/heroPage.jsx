import React, { useState, useEffect } from "react";

//FUNCTIONS
import urlFor from "../functions/urlFor";

const HeroPage = (props) => {
    return (
        <>
            <div
                className={`hero container mx-auto containerXL 2xl:mx-auto relative mt-12 md:mt-20 lg:mt-20 h-[260px] lg:h-[350px] xl:h-[620px] ${props.colspan}`}
            >
                <div className="text absolute z-10 text-center w-[600px] top-[85%] md:top-[89%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <h1 className="text-white uppercase text-4xl lg:text-6xl xl:text-7xl">{props.data.hero.title}</h1>
                </div>
                <div className="h-full opacity-60 w-full absolute bg-gradient-to-b from-transparent to-[#493414]"></div>{" "}
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
                <h2 className="font-freight font-thin text-xl sm:text-2xl mx-2 sm:mx-6">{props.data.hero.subtTitle}</h2>
                <div className=" w-[18%]  lg:w-[35%] flex items-center">
                    <div className="strich border-t border-primaryColor-500 w-full "></div>
                </div>
            </div>
        </>
    );
};

export default HeroPage;
