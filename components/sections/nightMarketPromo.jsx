import React from "react";

import BakeryInterior from "../../assets/popup-ladencafe-desktop.jpg";

const NightMarketPromo = () => {
  return (
    <section className="bg-white px-0 pb-8 lg:px-6 lg:pb-12 xl:px-8 2xl:px-12">
      <div className="mx-auto grid max-w-[1680px] overflow-hidden bg-[#303126] lg:min-h-[620px] lg:grid-cols-2">
        <div
          className="min-h-[320px] bg-cover bg-center lg:min-h-0"
          style={{ backgroundImage: `url(${BakeryInterior.src})` }}
        ></div>
        <div className="relative flex flex-col px-7 py-14 text-[#FBFBF5] sm:px-10 lg:px-16 lg:py-16 xl:px-20">
          <div className="absolute right-7 top-8 flex h-28 w-28 -rotate-12 flex-col items-center justify-center rounded-full bg-primaryColor-500 text-center font-freight text-xl leading-tight text-primaryColor-50 sm:right-10 lg:right-16 lg:top-12 lg:h-36 lg:w-36 lg:text-2xl xl:right-20">
            <span className="font-bold uppercase">Jeden</span>
            <span className="font-bold uppercase">Freitag</span>
            <span className="mt-1">18–22 Uhr</span>
          </div>
          <h2 className="max-w-[620px] pr-20 font-freight !text-5xl !font-light italic !leading-[0.84] tracking-normal sm:!text-6xl lg:pr-28 lg:!text-7xl xl:!text-8xl">
            Nacht
            <br />
            flohmarkt
          </h2>
          <div className="mt-7 h-px w-full max-w-[620px] bg-primaryColor-500"></div>
          <p className="mt-6 font-barlow text-sm uppercase tracking-[0.22em] text-primaryColor-100 sm:text-base lg:text-lg">
            Musik · Fingerfood · gemütliche Stimmung
          </p>
          <div className="mt-9 grid max-w-[640px] gap-4 sm:grid-cols-2">
            <div className="border border-primaryColor-500 bg-primaryColor-500 px-5 py-5 text-center">
              <p className="mb-3 font-freight text-xl">
                Standgebühr Erwachsene
              </p>
              <div className="h-px bg-primaryColor-50/80"></div>
              <p className="mb-0 mt-4 font-freight text-5xl leading-none">
                € 10,–
              </p>
            </div>
            <div className="border border-primaryColor-500 bg-primaryColor-500 px-5 py-5 text-center">
              <p className="mb-3 font-freight text-xl">Standgebühr Kinder</p>
              <div className="h-px bg-primaryColor-50/80"></div>
              <p className="mb-0 mt-4 font-freight text-5xl leading-none">
                € 3,–
              </p>
            </div>
          </div>
          <p className="mb-0 mt-9 font-barlow text-base uppercase tracking-[0.2em] text-primaryColor-50 sm:text-lg lg:text-xl">
            Anmeldung & Infos: 0650 / 80 11 900
          </p>
        </div>
      </div>
    </section>
  );
};

export default NightMarketPromo;
