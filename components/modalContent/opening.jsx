import React from "react";
//SANITY
import { PortableText } from "@portabletext/react";
import OpeningHours from "../openingHours";

//ASETS
import Sackerl from "../../assets/SVG/sackl.svg";

const Opening = (props) => {
  return (
    <div className="container mx-auto grid grid-cols-12 sm:gap-8">
      <div className="brot absolute bottom-10 right-[-2rem] w-72 opacity-[0.08]">
        <img src={Sackerl.src} alt="" />
      </div>
      <div className="col-span-12 sm:col-span-6">
        <h4
          data-aos="fade-left"
          className="mt-8 mb-8 font-freight text-3xl font-thin text-darkText  sm:text-4xl lg:mb-6 lg:text-4xl"
        >
          Öffnungszeiten
        </h4>
        <div className="grid grid-cols-12">
          <div className="col-span-6 pr-2 font-freight">
            <div className="mb-4 text-lg font-bold leading-relaxed text-primaryColor-500">
              Bäckerei<br></br> Brunn a.d. Pitten
            </div>
            <div className="font-freight text-base leading-relaxed text-darkText">
              <OpeningHours />
            </div>{" "}
          </div>
          {/* <div className="col-span-6 font-freight">
                        <div className="mb-4 text-lg font-bold leading-relaxed text-primaryColor-500">
                            Wr. Neustadt Marienmarkt
                        </div>
                        <div className="font-freight text-base leading-relaxed text-darkText">
                            <PortableText value={props.data.oeffnungszeiten.wrn} />
                        </div>
                    </div> */}
          <div className="relative col-span-12 mt-4 bg-primaryColor-50 p-4 font-freight">
            <div className="mb-4 text-lg font-bold leading-relaxed text-primaryColor-500">
              Bad Vöslau Schlosspark
            </div>
            <div className="font-freight text-base leading-relaxed text-darkText">
              <PortableText
                value={props.data.oeffnungszeiten.voeslau}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <span className="mr-2 whitespace-nowrap">{children}</span>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
