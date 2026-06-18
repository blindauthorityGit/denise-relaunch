import React from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// COMPS
import { MainButton } from "../buttons";
import { FloaterContact, FloaterOpening } from "../floaters";

import BigHero from "../../assets/bigHero2.jpg";
import BGMobile from "../../assets/bgMobile.jpg";
import KinderKnaeckiHero from "../../assets/kinder-knaecki-hero-v2.png";

// FUNCTIONS
import useBreakpoints from "../functions/useBreakpoints";

const starterHeroSlides = [
    {
        kicker: "Kinder Knäcki",
        title: ["Knusprig.", "Natürlich.", "Kindgerecht."],
        text: "Knuspriger Genuss für kleine Entdecker - gemeinsam mit dem Kleinen Yogi entwickelt.",
        image: KinderKnaeckiHero,
        mobileImage: KinderKnaeckiHero,
        isLight: true,
        backgroundPosition: "26% 46%",
        mobileBackgroundPosition: "24% 50%",
        primaryButton: {
            label: "Jetzt entdecken",
            href: "/kinder-knaecki",
        },
        secondaryButton: {
            label: "Wiederverkäufer",
            href: "https://shop.baeckerin.at/registration",
        },
    },
    {
        kicker: "Denise Bäckerin",
        title: ["Genuss im", "neuen Gewand"],
        text: "Unser Weingebäck - die perfekte Kombination aus Tradition und modernem Design. Neu verpackt und ideal abgestimmt für Ihren Weingenuss.",
        image: BigHero,
        mobileImage: BGMobile,
        backgroundPosition: "center top",
        mobileBackgroundPosition: "center center",
        primaryButton: {
            label: "Jetzt bestellen",
            href: "https://shop.baeckerin.at/",
        },
        secondaryButton: {
            label: "Wiederverkäufer",
            href: "https://shop.baeckerin.at/registration",
        },
    },
];

const HeroWeingebaeck = (props) => {
    const { isMobile } = useBreakpoints();

    return (
        <section
            className={`hero-container relative w-full overflow-hidden bg-[#FBFBF5] md:mt-16 xl:mt-24 ${
                props.fullHeight ? "h-calc-screen lg:h-[92svh] xl:h-[93svh] 2xl:h-screen" : props.height
            } ${props.colspan}`}
        >
            <div className="lg:hidden">
                <FloaterOpening data={props.dataSetting}></FloaterOpening>
                <FloaterContact data={props.dataSetting}></FloaterContact>
            </div>

            <Swiper
                modules={[Autoplay, Pagination]}
                loop
                speed={850}
                grabCursor
                autoplay={{
                    delay: 6200,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) =>
                        `<button class="${className}" type="button" aria-label="Hero Slide ${index + 1}"></button>`,
                }}
                className="hero-swiper h-full w-full"
            >
                {starterHeroSlides.map((slide, index) => {
                    const backgroundImage = isMobile ? slide.mobileImage : slide.image;
                    const hasBackgroundImage = Boolean(backgroundImage);
                    const backgroundPosition = isMobile
                        ? slide.mobileBackgroundPosition || "center center"
                        : slide.backgroundPosition || "center top";
                    const textColor = slide.isLight
                        ? "text-primaryColor-700 drop-shadow-none"
                        : "text-white drop-shadow-sm lg:text-primaryColor-700 lg:drop-shadow-none";
                    const kickerColor = slide.isLight ? "text-darkText/70" : "text-white/80 lg:text-darkText/70";
                    const copyColor = slide.isLight ? "text-darkText" : "text-white lg:text-darkText";
                    const ghostColor = slide.isLight
                        ? "text-darkText hover:text-primaryColor-700"
                        : "text-white hover:text-primaryColor-100 lg:text-darkText lg:hover:text-primaryColor-700";

                    return (
                        <SwiperSlide key={`${slide.kicker}-${index}`} className="relative h-full overflow-hidden">
                            {hasBackgroundImage ? (
                                <div
                                    className="absolute inset-0 z-10 bg-cover transition-transform duration-[7000ms] ease-out"
                                    style={{
                                        backgroundImage: `url(${backgroundImage.src})`,
                                        backgroundPosition,
                                    }}
                                ></div>
                            ) : (
                                <div className={`absolute inset-0 z-10 ${slide.backgroundClass || "bg-[#FBFBF5]"}`}>
                                    <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-primaryColor-100 lg:block"></div>
                                </div>
                            )}
                            <div
                                className={`absolute inset-0 z-20 ${
                                    hasBackgroundImage
                                        ? "bg-gradient-to-b from-black/20 via-transparent to-black/35 lg:bg-gradient-to-r lg:from-[#FBFBF5]/10 lg:via-[#FBFBF5]/10 lg:to-[#FBFBF5]/75"
                                        : "bg-gradient-to-r from-transparent via-white/10 to-white/35"
                                }`}
                            ></div>

                            <div className="relative z-30 mx-auto grid h-full max-w-[1680px] grid-cols-12 items-center px-4 sm:px-8 lg:px-12 2xl:px-0">
                                <div className="hidden lg:col-span-5 lg:block"></div>
                                <div className="col-span-12 flex h-full flex-col justify-end pb-8 pt-24 lg:col-span-7 lg:justify-center lg:pb-0 lg:pt-0 lg:pl-16 xl:pl-28">
                                    <div className="max-w-[680px] lg:ml-auto lg:-translate-y-12 xl:-translate-y-16">
                                        <p
                                            className={`mb-3 font-barlow text-sm uppercase tracking-[0.28em] ${kickerColor}`}
                                        >
                                            {slide.kicker}
                                        </p>
                                        <h1
                                            className={`!text-5xl !leading-[0.9] tracking-normal lg:!text-6xl xl:!text-7xl 2xl:!text-8xl ${textColor}`}
                                        >
                                            {slide.title[0]}
                                        </h1>
                                        <h1
                                            className={`mt-1 pl-8 !text-5xl !font-light !leading-[0.9] tracking-normal lg:pl-16 lg:!text-6xl xl:!text-7xl 2xl:!text-8xl ${textColor}`}
                                        >
                                            {slide.title[1]}
                                        </h1>
                                        {slide.title[2] ? (
                                            <h1
                                                className={`mt-1 pl-16 !text-5xl !font-light !leading-[0.9] tracking-normal lg:pl-28 lg:!text-6xl xl:!text-7xl 2xl:!text-8xl ${textColor}`}
                                            >
                                                {slide.title[2]}
                                            </h1>
                                        ) : null}
                                        <h3
                                            className={`mt-4 max-w-[620px] text-lg font-thin !leading-snug tracking-normal lg:mt-7 lg:pl-16 lg:!text-xl xl:!text-2xl ${copyColor}`}
                                        >
                                            {slide.text}
                                        </h3>
                                        <div className="mt-4 flex w-full flex-col gap-3 lg:mt-8 lg:max-w-[360px] lg:pl-16">
                                            {slide.primaryButton ? (
                                                <Link href={slide.primaryButton.href}>
                                                    <MainButton klasse="!m-0 !w-full !max-w-none !text-base">
                                                        {slide.primaryButton.label}
                                                    </MainButton>
                                                </Link>
                                            ) : null}
                                            {slide.secondaryButton ? (
                                                <Link
                                                    href={slide.secondaryButton.href}
                                                    className={`inline-flex w-fit items-center font-freight text-base uppercase tracking-widest transition-colors duration-300 lg:ml-0 lg:pl-0 xl:text-xl ${ghostColor}`}
                                                >
                                                    <span className="mr-3 h-px w-10 bg-current"></span>
                                                    <span>
                                                        {slide.secondaryButton.label}
                                                    </span>
                                                </Link>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default HeroWeingebaeck;
