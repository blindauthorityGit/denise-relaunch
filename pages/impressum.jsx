import Head from "next/head";
import { useState, useEffect } from "react";

// SANITY
import client from "../client";
//COMPS

import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { ShadowBox, ContainerStandard } from "../components/container";

import { StartKachelLeft, Contact, IntroText, ContactImg } from "../components/sections";

import { Divider1 } from "../components/divider";
import { ImgText1, BGText1, ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import Map from "../components/map";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";

//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Impressum() {
    useEffect(() => {
        console.log();
    }, []);

    return (
        <>
            <Head>
                <title>Denise Bäckerin | Impressum</title>
            </Head>

            <Menu2
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
                onClick={() => {
                    console.log("IS CLICKED");
                    setIsOpen(true);
                }}
            ></Menu2>
            <BG />
            <div className="overflow-x-hidden">
                {/* <HeroSimple>Kontakt</HeroSimple> */}
                {/* <Divider1></Divider1> */}
                <div className="h-6 xl:h-16 "></div>

                <ContainerStandard>
                    <div className="col-span-12 my-8 px-8 lg:my-16 lg:px-32">
                        <h2 className="mt-8 mb-8 font-freight text-2xl font-thin tracking-widest text-darkText sm:text-4xl lg:mb-12 xl:text-6xl">
                            Impressum
                        </h2>
                        <ul className="font-freight xl:text-lg">
                            <li className="mb-2">
                                <span className="font-black ">Firmenname:</span>
                                <br /> Pölzelbauer Denise
                            </li>
                            <li className="mb-2">
                                <span className="font-black">Adresse:</span> Haupstraße 23
                                <br /> 2823 Brunn an der Pitten
                            </li>
                            <li className="mb-2">
                                <span className="font-black">Kontakt:</span>
                                <ul className="ml-4">
                                    {/* <li>Telefon: 02627/82 296</li> */}
                                    <li>Mobil: 0650 80 11 900</li>
                                    <li>E-Mail: office@baeckerin.at</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <span className="font-black">UID-Nummer:</span> 61318755
                            </li>
                            <li className="mb-2">
                                <span className="font-black">Mitglied der Wirtschaftskammer Niederösterreich</span>
                            </li>
                            <li className="mb-2">
                                <span className="font-black">Zuständige Behörden gem. ECG:</span>
                                <ul className="ml-4">
                                    <li>Bezirkshauptmannschaft Neunkirchen</li>
                                    <li>Bezirkshauptmannschaft Wiener Neustadt</li>
                                </ul>
                            </li>
                            {/* <li className="mb-2">
                                <span className="font-medium">AT-BIO-401 zertifiziert</span>
                            </li> */}
                            {/* <li className="mb-10">
                                <span className="font-black">Bankverbindung:</span>
                                <ul className="ml-4">
                                    <li>IBAN: AT41 3264 7000 0000 0281</li>
                                    <li>BIC: RLNWATW1647</li>
                                </ul>
                            </li> */}
                            <li className="mb-6 mt-10">
                                <span className="font-black">Webdesign & Programmierung:</span>
                                <ul className="ml-4">
                                    <li>
                                        {" "}
                                        <a
                                            className="text-primaryColor-500 underline"
                                            href="https://www.atelierbuchner.at"
                                        >
                                            Atelier Buchner
                                        </a>{" "}
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </ContainerStandard>
            </div>
        </>
    );
}
