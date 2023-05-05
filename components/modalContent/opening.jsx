import React from "react";
//SANITY
import { PortableText } from "@portabletext/react";

//ASETS
import Sackerl from "../../assets/SVG/sackl.svg";

const Opening = (props) => {
    return (
        <div className="container mx-auto grid grid-cols-12 gap-8">
            <div className="brot absolute bottom-10 right-[-2rem] w-72 opacity-[0.08]">
                <img src={Sackerl.src} alt="" />
            </div>
            <div className="col-span-12 sm:col-span-6">
                <h4
                    data-aos="fade-left"
                    className="font-thin font-freight text-3xl sm:text-4xl text-darkText lg:text-4xl  mt-8 mb-8 lg:mb-6"
                >
                    Öffnungszeiten
                </h4>
                <div className="grid grid-cols-12">
                    <div className="font-freight col-span-6 ">
                        <div className="text-primaryColor-500 mb-4 leading-relaxed text-lg font-bold">
                            Bäckerei<br></br> Brunn an der Pitten
                        </div>
                        <div className="font-freight leading-relaxed text-base text-darkText">
                            <PortableText value={props.data.oeffnungszeiten.brunn} />
                        </div>{" "}
                    </div>
                    <div className="font-freight col-span-6">
                        <div className="text-primaryColor-500 font-bold mb-4 leading-relaxed text-lg">
                            Wr. Neustadt Marienmarkt
                        </div>
                        <div className="font-freight leading-relaxed text-base text-darkText">
                            <PortableText value={props.data.oeffnungszeiten.wrn} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Opening;
