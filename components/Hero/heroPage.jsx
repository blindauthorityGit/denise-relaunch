import React, { useState, useEffect } from "react";

//FUNCTIONS
import urlFor from "../functions/urlFor";

const HeroPage = (props) => {
    return (
        <>
            <div
                className={`hero containerXL container relative mx-auto mt-12 h-[83svh] md:mt-24 md:h-[350px] lg:mt-24 lg:h-[350px] xl:h-[620px] 2xl:mx-auto ${props.colspan}`}
            >
                <div className="text absolute top-[85%] left-8 z-10 -translate-y-1/2 transform  text-center md:top-[89%] lg:left-auto lg:w-[600px]">
                    <h1 className="text-4xl uppercase text-white lg:text-6xl xl:text-7xl">{props.data.hero.title}</h1>
                </div>
                <div className="absolute h-full w-full bg-gradient-to-b from-transparent to-[#493414] opacity-60 lg:top-6"></div>{" "}
                {/* <div
                    className={`h-full w-full ${props.contain ? "bg-contain" : "bg-cover"}  bg-right`}
                    style={{ backgroundImage: `url(${urlFor(props.data.hero.image)})` }}
                ></div> */}
                ´´
                <div
                    className={`h-full w-full lg:hidden ${props.contain ? "bg-contain" : "bg-cover"}  bg-right`}
                    style={{ backgroundImage: `url(${urlFor(props.data.heroMobile.image)})` }}
                ></div>
                <div
                    className={`hidden h-full w-full bg-cover bg-right  lg:block`}
                    style={{ backgroundImage: `url(${urlFor(props.data.hero.image)})` }}
                ></div>
                {props.children}
            </div>
            <div className={`subtitle mt-6 flex justify-center ${props.noSubline ? "hidden" : null}`}>
                <div className="flex w-[18%] items-center lg:w-[35%]">
                    <div className="strich w-full border-t border-primaryColor-500 "></div>
                </div>
                <h2 className="mx-2 font-freight text-base font-thin  italic sm:mx-6 sm:text-2xl">
                    {props.data.hero.subtTitle}
                </h2>
                <div className=" flex  w-[18%] items-center lg:w-[35%]">
                    <div className="strich w-full border-t border-primaryColor-500 "></div>
                </div>
            </div>
        </>
    );
};

export default HeroPage;
