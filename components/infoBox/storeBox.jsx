import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import urlFor from "../functions/urlFor";
import useBreakpoints from "../functions/useBreakpoints";

const StoreBox = (props) => {
    const [storeCount, setStoreCount] = useState(null);
    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    useEffect(() => {
        setStoreCount(props.data.stores.length);
    }, []);
    return (
        <div
            className=" relative mx-auto grid grid-cols-12 bg-cover py-16 px-8 sm:py-24"
            style={{ backgroundImage: `url(${urlFor(props.data.imageStore).url()})` }}
        >
            {" "}
            <h3 className="z-20 col-span-12 text-center font-freight text-4xl font-thin text-primaryColor-300 lg:mb-12 lg:text-6xl">
                Verkaufsstellen
            </h3>
            <div className="containerXL storeBox container z-10 col-span-12 mx-auto mt-9  grid grid-cols-12  sm:gap-4 2xl:mx-auto ">
                {props.data.stores.map((e, i) => {
                    return (
                        <div
                            // style={{
                            //     gridColumn: `span ${
                            //         isMobile ? 12 : storeCount <= 12 ? Math.floor(12 / storeCount) : 1
                            //     } / span ${storeCount <= 12 ? Math.floor(12 / storeCount) : 1}`,
                            // }}
                            className={`} col-span-12 mb-4 px-2   py-4 font-freight text-lg  text-primaryColor-50  sm:mb-0 sm:pl-4 md:col-span-6 
                            lg:col-span-3`}
                        >
                            <PortableText value={e.text} />
                        </div>
                    );
                })}
                <h3 className="z-20 col-span-12 mt-6 text-center font-freight font-thin text-primaryColor-300 sm:mt-12">
                    Wiederverkäufer?<br></br>Klicken Sie hier:
                </h3>

                {props.children}
            </div>
            <div className="absolute h-full w-full bg-[#1D1B1C] opacity-70"></div>
        </div>
    );
};

export default StoreBox;
