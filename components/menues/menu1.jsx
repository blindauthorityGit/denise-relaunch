import React, { useState, useEffect, useRef, forwardRef } from "react";
import Link from "next/link";
import { BiChevronDown } from "react-icons/bi/index.js";
import { useRouter } from "next/router";

// Overlay
import Overlay from "../modal/overlay";
// Modal
import Modal from "../modal/modal";
import { MainButton } from "../buttons";
import { Newsletter } from "../menues";

//Mobile Nav
import Mobile1 from "./mobile1";
//Framer Motion
import { motion, useScroll, useAnimation } from "framer-motion";

const Menu1 = (props) => {
    const router = useRouter();

    const [showOverlay, setShowOverlay] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navRef = useRef(null);
    const animate = useAnimation();

    const ref = useRef(null);

    // const { scrollYProgress } = useScroll();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navRef.current.offsetTop) {
                navRef.current.classList.add("fixed", "top-0");
                ref.current.classList.remove("hidden", "scale-out-ver-top");
                ref.current.classList.add("scale-up-ver-top", "block");
                setIsScrolled(true);
            } else {
                // navRef.current.classList.remove("fixed");
                ref.current.classList.remove("scale-up-ver-top", "block");
                ref.current.classList.add("scale-out-ver-top");
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Listen for changes in the route
        const handleRouteChange = () => {
            setShowOverlay(false);
        };
        router.events.on("routeChangeComplete", handleRouteChange);

        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    const onEnter = (e) => {
        console.log(e.target);
    };

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 0.85,
                type: "tween",
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
        hover: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
        end: {
            opacity: 0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    const pfeilMotion = {
        rest: {
            y: -5,
            ease: "easeOut",
            duration: 0.5,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },
        hover: {
            y: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    return (
        <>
            {showOverlay ? <Overlay onClick={(e) => setShowOverlay(false)}></Overlay> : null}
            {showOverlay ? (
                <Mobile1 socialMedia={props.socialMedia} onClick={(e) => setShowOverlay(false)}></Mobile1>
            ) : null}
            {/* <motion.div
                className="h-16 fixed top-0 left-0 right-0 origin-[0%] bg-white z-40"
                style={{ scaleX: scrollYProgress }}
            /> */}
            <nav ref={navRef} className={`fixed  z-30 w-full px-4 sm:px-12 lg:py-2 xl:px-12 xl:py-4  ${props.colspan}`}>
                {/* BG */}
                <div className=" containerXL relative z-30 m-auto grid grid-cols-12 items-center py-3 sm:py-4  lg:px-0 lg:py-0 2xl:mx-auto 2xl:px-8">
                    {/* Background Image */}
                    <div className="logo col-span-4 md:col-span-2 ">
                        <Link className="flex" href="/">
                            <img
                                src={isScrolled ? props.logoDark : props.logoDark}
                                className="fill-current-[#fff] max-h-[1.75rem] sm:max-h-[3.75rem] lg:max-h-[3.05rem]"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="col-span-7 md:col-span-6 ">
                        <ul className="list-style-none hidden items-center justify-end pr-8 font-barlow lg:flex">
                            {props.menuItems.map((e, i) => {
                                return (
                                    <motion.li
                                        initial="rest"
                                        whileHover="hover"
                                        animate="rest"
                                        key={`menuKey${i}`}
                                        className={`font-montserrat relative mx-8 py-4 font-semibold tracking-widest 
                                       
                                         ${
                                             isScrolled ? "text-darkText" : "text-darkText"
                                         }  hover:text-primaryColor-500`}
                                        onMouseEnter={(e) => {
                                            onEnter(e);
                                        }}
                                    >
                                        <Link
                                            className="flex items-end font-barlow text-base uppercase lg:text-xs xl:text-sm 2xl:text-lg"
                                            href={`/${e.slug}`}
                                        >
                                            {e.title}
                                            {e.subMenu ? (
                                                <motion.span variants={pfeilMotion}>
                                                    <BiChevronDown></BiChevronDown>
                                                </motion.span>
                                            ) : null}
                                        </Link>
                                        {e.subMenu ? (
                                            <motion.ul
                                                variants={boxMotion}
                                                className={`absolute left-[-4rem] z-50 mt-4 rounded-br-lg rounded-bl-lg bg-[#000] py-4 pl-16 pr-24 text-white ${props.subMenuKlasse}`}
                                            >
                                                {e.subMenuItems.map((e, i) => {
                                                    return (
                                                        <motion.li
                                                            variants={textMotion}
                                                            key={`submenuKey${i}`}
                                                            className="mb-3 min-w-max"
                                                        >
                                                            <Link
                                                                className="font-semibold hover:text-red-500"
                                                                href={`${e.external ? "" : "/"}${e.slug}`}
                                                            >
                                                                {e.title}
                                                            </Link>
                                                            <hr className="mt-1" />
                                                        </motion.li>
                                                    );
                                                })}
                                            </motion.ul>
                                        ) : null}
                                    </motion.li>
                                );
                            })}
                        </ul>
                        {/* <ul className="block md:flex lg:hidden lg:flex items-center list-style-none justify-end pr-12">
                            <Newsletter onClick={props.onClick}></Newsletter>
                        </ul> */}
                    </div>
                    <div className="social media col-span-1 flex justify-end text-xl md:text-4xl lg:col-span-4">
                        <div
                            className={`block cursor-pointer lg:hidden ${
                                isScrolled ? "text-darkText" : "text-darkText"
                            }`}
                            onClick={(e) => {
                                setShowOverlay(true);
                            }}
                        >
                            {props.burgerIcon}
                        </div>
                        <div className="hidden lg:flex ">
                            <Link href="https://shop.baeckerin.at">
                                <MainButton klasse="!mt-0 mb-2 !text-sm !min-w-[166px] border border-primaryColor">
                                    Shop
                                </MainButton>
                            </Link>
                            <Link href="https://shop.baeckerin.at/registration">
                                <MainButton klasse="!mt-0 mb-2  !text-sm !min-w-[166px] !bg-transparent !text-darkText border border-darkText">
                                    Wiederverkäufer
                                </MainButton>
                            </Link>
                            {/* {props.socialMedia.map((e, i) => {
                                return (
                                    <a
                                        className={`mr-4 text-lg ${
                                            !isScrolled ? "text-primaryColor-200" : "text-darkText"
                                        }`}
                                        key={`smKey${i}`}
                                        href={e.link}
                                        alt={e.title}
                                    >
                                        {e.icon}
                                    </a>
                                );
                            })} */}
                        </div>
                    </div>
                    {/* <div className="relative top-[1000%] w-full h-24 bg-red-500" ref={ref}></div> */}
                </div>
                <style jsx>{`
                    .hover-underline-animation {
                        display: inline-block;
                        position: relative;
                        color: #000;
                    }

                    .hover-underline-animation::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        transform: scaleX(0);
                        height: 1px;
                        bottom: 0;
                        left: 0;
                        background-color: #000;
                        transform-origin: bottom right;
                        transition: transform 0.25s ease-out;
                    }

                    .hover-underline-animation:hover::after {
                        transform: scaleX(1);
                        transform-origin: bottom left;
                    }
                `}</style>
                <motion.div
                    ref={ref}
                    className="absolute top-0 left-0 hidden h-full w-full bg-primaryColor-50"
                ></motion.div>
            </nav>
        </>
    );
};

export default Menu1;
