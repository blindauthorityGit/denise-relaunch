import React from "react";
import AustriaLogo from "../../assets/austriaLogo-8.png";

const Austria = () => {
    return (
        <div className="w-full bg-primaryColor flex justify-center p-4 h-16">
            <div className="absolute flex">
                <div className="inner font-freight text-primaryColor-50 text-xl tracking-wider">
                    Österreichische Produkte in Handarbeit gefertigt.
                </div>
                <img className="top-[-1rem] w-16" src={AustriaLogo.src} alt="" />
            </div>
        </div>
    );
};

export default Austria;
