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
            className="container containerXL 2xl:mx-auto bg-cover mx-auto relative grid grid-cols-12 py-16 sm:py-24 px-8"
            style={{ backgroundImage: `url(${urlFor(props.data.imageStore).url()})` }}
        >
            {" "}
            <h3 className="font-freight font-thin text-primaryColor-300 z-20 col-span-12 text-center">
                Erhältlich hier:
            </h3>
            <div className="col-span-12 z-10  grid grid-cols-12 mt-9 gap-4 sm:gap-0">
                {props.data.stores.map((e, i) => {
                    return (
                        <div
                            style={{
                                gridColumn: `span ${
                                    isMobile ? 6 : storeCount <= 12 ? Math.floor(12 / storeCount) : 1
                                } / span ${storeCount <= 12 ? Math.floor(12 / storeCount) : 1}`,
                            }}
                            className={`text-primaryColor-50 font-freight sm:pl-4 lg:pl-16  text-lg mb-4 sm:mb-0 col-span-${
                                storeCount <= 12 ? Math.floor(12 / storeCount) : 1
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
            <div className="h-full w-full bg-darkText opacity-70 absolute"></div>
        </div>
    );
};

export default StoreBox;
