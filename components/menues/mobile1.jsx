import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../assets/logoDark.svg";
import { GrClose } from "react-icons/gr/index.js";
import { useRouter } from "next/router";

//ASSETS
import Brot from "../../assets/SVG/brot.svg";

const Mobile1 = (props) => {
    const [showMenu, setShowMenu] = useState(props.showMenu);
    const { asPath } = useRouter();

    const burgerRef = useRef();

    function clicker(e) {
        console.log("Clicked");
    }

    // useEffect(() => {
    //     props.showMenu(false);
    // }, [asPath]);

    const boxMotion = {
        rest: {
            opacity: 0,
            display: "none",
            ease: "easeOut",
            duration: 0.2,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },

        end: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 2.85,
                type: "tween",
                ease: "easeIn",
            },
        },
        end: {
            opacity: 1,
            x: 0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <motion.nav
                variants={boxMotion}
                className={`navbar slide-in-right ${props.klasse} 
                fixed right-0 top-0 z-50 h-full w-[90%] bg-white `}
            >
                <div className="brot absolute bottom-10 right-[-4rem] w-72 opacity-10">
                    <img src={Brot.src} alt="" />
                </div>
                <div onClick={props.onClick} className="closer absolute right-4 top-3 rounded-full p-1 text-xl">
                    <GrClose className=""></GrClose>
                </div>
                <div className="font-europa container h-screen px-8 pt-12 tracking-widest">
                    <div className="middle flex justify-start">
                        <Link href="/">
                            <img src={Logo.src} width="140" alt="Logo" />
                        </Link>
                    </div>
                    <div className="MenuItems pt-12 font-barlow text-xl sm:text-4xl">
                        <Link
                            href="/baeckerei"
                            className="text-text subNav relative my-3 mt-4 block cursor-pointer hover:text-primaryColor"
                        >
                            Bäckerei
                        </Link>
                        <motion.ul variants={boxMotion} className="">
                            <motion.li variants={textMotion} className="mb-4">
                                <div className="wrap dropdown text-primaryColor-900  ">
                                    <Link
                                        href="/denise"
                                        className="text-text subNav relative my-5 block cursor-pointer hover:text-primaryColor"
                                    >
                                        Denise
                                    </Link>

                                    {/* <ul className="pl-8 mt-4 mb-4 text-primaryColor-900">
                                        <Link href="/about">
                                            <li className="mb-3">Winterakademie</li>
                                        </Link>
                                        <Link href="/sammlungen">
                                            <li className="mb-3">Frühlingsakademie</li>
                                        </Link>
                                        <Link
                                            href="https://atelierbuchner.at/piz1000/Museumsleitbild.pdf"
                                            target="_blank"
                                        >
                                            <li className="mb-3">Sommerakademie</li>
                                        </Link>
                                        <Link href="/kontakt">
                                            <li className="mb-3">Herbstakadmie</li>
                                        </Link>
                                    </ul> */}
                                </div>
                            </motion.li>
                            <Link
                                href="/weingebaeck"
                                className="text-text subNav relative my-5 mt-4 block cursor-pointer hover:text-primaryColor"
                            >
                                Weingebäck
                            </Link>
                            <li className="mr-8 mb-4 text-primaryColor-900 hover:text-primaryColor hover:underline">
                                <Link href="/kontakt">Kontakt</Link>
                            </li>
                            <li className="mr-8 mb-4 font-bold text-primaryColor-600 hover:text-primaryColor hover:underline">
                                <Link href="https://shop.baeckerin.at">SHOP</Link>
                            </li>
                        </motion.ul>
                        <hr className="mt-8" />
                        <ul className="tracking-widest text-primaryColor-900">
                            <li className="mb-3 mt-8 text-xs">
                                <div className="wrap dropdown   ">
                                    <Link
                                        href="/impressum"
                                        className="text-text subNav relative my-4 block cursor-pointer hover:text-primaryColor"
                                    >
                                        Impressum
                                    </Link>

                                    <Link
                                        href="/datenschutz"
                                        className="text-text subNav relative my-4 mt-4 block cursor-pointer hover:text-primaryColor"
                                    >
                                        Datenschutzerklärung
                                    </Link>
                                </div>
                            </li>
                            <li className="mt-8">
                                <div className="flex sm:hidden ">
                                    {/* {props.socialMedia.map((e, i) => {
                                        return (
                                            <a className="mr-4 pt-2" key={`smKey${i}`} href={e.link} alt={e.title}>
                                                {e.icon}
                                            </a>
                                        );
                                    })} */}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="Kontakt flex mt-10">
                        <div className="left w-1/2">
                            <H4>Kontakt</H4>
                            <div className="content text-xs leading-relaxed">
                                <div> {props.strasse}</div>
                                <div> {props.ort}</div>
                                <div className="mt-4">{props.phone}</div>
                                <div>
                                    {" "}
                                    <a href="mailto:contacts@german-aesthetics.de"> {props.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2">
                            <H4>Praxiszeiten</H4>

                            <div className="wrapper flex  text-xs leading-relaxed">
                                <div className="left mr-6 text-left ">
                                    Mo
                                    <br />
                                    Di
                                    <br />
                                    Mi
                                    <br />
                                    Do
                                    <br />
                                    Fr
                                    <br />
                                </div>
                                <div className="right text-left">
                                    <PortableText value={props.value} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </motion.nav>
        </>
    );
};

export default Mobile1;
