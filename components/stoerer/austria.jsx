import React from "react";
import AustriaLogo from "../../assets/austriaLogo-8.png";

const Austria = () => {
    return (
        <div className="flex h-16 w-full justify-center bg-primaryColor p-4">
            <div className="absolute flex">
                <div className="inner font-freight text-xl tracking-wider text-white">
                    Österreichische Produkte in Handarbeit gefertigt.
                </div>
                <img className="top-[-1rem] w-16" src={AustriaLogo.src} alt="" />
            </div>
        </div>
    );
};

export default Austria;
