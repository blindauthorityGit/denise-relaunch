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
            className=" bg-cover mx-auto relative grid grid-cols-12 py-16 sm:py-24 px-8"
            style={{ backgroundImage: `url(${urlFor(props.data.imageStore).url()})` }}
        >
            {" "}
            <h3 className="font-freight font-thin text-4xl lg:text-6xl lg:mb-12 text-primaryColor-300 z-20 col-span-12 text-center">
                Verkaufsstellen
            </h3>
            <div className="col-span-12 z-10 container containerXL 2xl:mx-auto mx-auto  grid grid-cols-12 mt-9 gap-4 sm:gap-4 ">
                {props.data.stores.map((e, i) => {
                    return (
                        <div
                            // style={{
                            //     gridColumn: `span ${
                            //         isMobile ? 12 : storeCount <= 12 ? Math.floor(12 / storeCount) : 1
                            //     } / span ${storeCount <= 12 ? Math.floor(12 / storeCount) : 1}`,
                            // }}
                            className={`text-primaryColor-50 col-span-12 md:col-span-6 lg:col-span-3 border-2 border-primaryColor-200  font-freight sm:pl-4 px-8  py-8  text-lg mb-4 sm:mb-0 
                            }`}
                        >
                            <PortableText value={e.text} />
                        </div>
                    );
                })}
                <h3 className="font-freight font-thin mt-6 sm:mt-12 text-primaryColor-300 z-20 col-span-12 text-center">
                    Wiederverkäufer?<br></br>Klicken Sie hier:
                </h3>

                {props.children}
            </div>
            <div className="h-full w-full bg-[#1D1B1C] opacity-70 absolute"></div>
        </div>
    );
};

export default StoreBox;
