import React from "react";
import { PortableText } from "@portabletext/react";

const BasicBox = (props) => {
    return (
        <div
            className="container mx-auto relative grid grid-cols-12 py-16 sm:py-24 px-8"
            style={{ backgroundImage: `url(${props.bgImage})` }}
        >
            <div className="col-span-12 z-10 text-center ">
                <h3 className="font-freight text-3xl font-thin text-primaryColor-300">{props.title}</h3>
                <div className="description ">
                    <PortableText value={props.text} />
                </div>
                {props.children}
            </div>

            <div className="h-full w-full bg-darkText opacity-60 absolute"></div>
        </div>
    );
};

export default BasicBox;
