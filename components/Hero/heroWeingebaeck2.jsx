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
import KinderKnaeckiMobile from "../../assets/kinder-knaecki-product-square.png";

const starterHeroSlides = [
  {
    kicker: "Kinder Knäcki",
    title: ["Knusprig.", "Natürlich.", "Kindgerecht."],
    text: "Knuspriger Genuss für kleine Entdecker - gemeinsam mit dem Kleinen Yogi entwickelt.",
    image: KinderKnaeckiHero,
    mobileImage: KinderKnaeckiMobile,
    isLight: true,
    backgroundPosition: "26% 46%",
    mobileBackgroundPosition: "28% 72%",
    mobileBackgroundSize: "145%",
    accentColor: "text-[#2FADE0]",
    accentHoverColor: "hover:text-[#168FC0]",
    primaryButtonClass: "!bg-[#2FADE0] hover:!bg-[#168FC0]",
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
    mobileBackgroundPosition: "center 62%",
    mobileBackgroundSize: "cover",
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
  return (
    <section
      className={`hero-container relative w-full bg-white md:mt-12 lg:px-6 lg:pb-6 lg:pt-2 xl:mt-16 xl:px-8 xl:pb-8 xl:pt-3 2xl:px-12 2xl:pb-10 2xl:pt-4 ${
        props.fullHeight
          ? "h-calc-screen lg:h-[calc(100svh-4rem)] xl:h-[calc(100svh-6rem)] 2xl:max-h-[900px]"
          : props.height
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
            `<button class="${className}" type="button" aria-label="Hero Slide ${
              index + 1
            }"></button>`,
        }}
        className="hero-swiper h-full w-full overflow-hidden lg:max-w-[1680px]"
      >
        {starterHeroSlides.map((slide, index) => {
          const hasBackgroundImage = Boolean(slide.image || slide.mobileImage);
          const textColor = slide.accentColor
            ? `${slide.accentColor} drop-shadow-none`
            : slide.isLight
            ? "text-primaryColor-700 drop-shadow-none"
            : "text-white drop-shadow-sm lg:text-primaryColor-700 lg:drop-shadow-none";
          const kickerColor = slide.accentColor
            ? slide.accentColor
            : slide.isLight
            ? "text-darkText/70"
            : "text-white/80 lg:text-darkText/70";
          const copyColor = slide.isLight
            ? "text-darkText"
            : "text-white lg:text-darkText";
          const ghostColor = slide.isLight
            ? `text-darkText ${
                slide.accentHoverColor || "hover:text-primaryColor-700"
              }`
            : "text-white hover:text-primaryColor-100 lg:text-darkText lg:hover:text-primaryColor-700";

          return (
            <SwiperSlide
              key={`${slide.kicker}-${index}`}
              className="relative h-full overflow-hidden"
            >
              {hasBackgroundImage ? (
                <>
                  <div
                    className="absolute inset-x-0 top-0 z-10 h-[44%] bg-cover bg-center lg:hidden"
                    style={{
                      backgroundImage: `url(${
                        (slide.mobileImage || slide.image).src
                      })`,
                      backgroundPosition:
                        slide.mobileBackgroundPosition || "center center",
                      backgroundSize: slide.mobileBackgroundSize || "cover",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 hidden bg-cover transition-transform duration-[7000ms] ease-out lg:block"
                    style={{
                      backgroundImage: `url(${slide.image.src})`,
                      backgroundPosition:
                        slide.backgroundPosition || "center top",
                    }}
                  ></div>
                </>
              ) : (
                <div
                  className={`absolute inset-0 z-10 ${
                    slide.backgroundClass || "bg-[#FBFBF5]"
                  }`}
                >
                  <div className="absolute right-0 top-0 hidden h-full w-[42%] bg-primaryColor-100 lg:block"></div>
                </div>
              )}
              <div
                className={`absolute inset-0 z-20 ${
                  hasBackgroundImage
                    ? "bg-gradient-to-b from-black/10 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#FBFBF5]/10 lg:via-[#FBFBF5]/10 lg:to-[#FBFBF5]/75"
                    : "to-white/35 bg-gradient-to-r from-transparent via-white/10"
                }`}
              ></div>

              <div className="absolute inset-x-0 bottom-0 top-[44%] z-20 bg-[#FBFBF5] lg:hidden"></div>

              <div className="absolute inset-x-0 bottom-0 top-[44%] z-30 flex flex-col px-5 py-5 sm:px-8 lg:hidden">
                <div className="flex min-h-0 flex-1 flex-col">
                  <p className="mb-2 font-barlow text-xs uppercase tracking-[0.24em] text-darkText/60">
                    {slide.kicker}
                  </p>
                  <div>
                    {slide.title.map((line, lineIndex) => (
                      <h1
                        key={line}
                        className={`!text-[2.15rem] !font-light !leading-[0.92] tracking-normal text-primaryColor-700 ${
                          lineIndex === 1
                            ? "pl-3"
                            : lineIndex === 2
                            ? "pl-6"
                            : ""
                        }`}
                      >
                        {line}
                      </h1>
                    ))}
                  </div>
                  <p className="mt-3 max-w-[34rem] font-freight text-base leading-snug text-darkText">
                    {slide.text}
                  </p>
                  <div className="mt-auto flex flex-col gap-3 pt-4">
                    {slide.primaryButton ? (
                      <Link href={slide.primaryButton.href}>
                        <MainButton klasse="!m-0 !min-w-0 !w-full !max-w-none !py-3 !text-sm">
                          {slide.primaryButton.label}
                        </MainButton>
                      </Link>
                    ) : null}
                    {slide.secondaryButton ? (
                      <Link
                        href={slide.secondaryButton.href}
                        className="inline-flex w-fit items-center font-freight text-sm uppercase tracking-widest text-darkText transition-colors duration-300 hover:text-primaryColor-700"
                      >
                        <span className="mr-3 h-px w-8 bg-current"></span>
                        <span>{slide.secondaryButton.label}</span>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="relative z-30 mx-auto hidden h-full max-w-[1680px] grid-cols-12 items-center px-4 sm:px-8 lg:grid lg:px-12 2xl:px-0">
                <div className="hidden lg:col-span-5 lg:block"></div>
                <div className="col-span-12 flex h-full flex-col justify-end pb-8 pt-24 lg:col-span-7 lg:justify-center lg:pb-0 lg:pl-4 lg:pt-0 xl:pl-10">
                  <div className="max-w-[680px] lg:-translate-y-12 xl:-translate-y-16">
                    <p
                      className={`mb-3 font-barlow text-sm uppercase tracking-[0.28em] ${kickerColor}`}
                    >
                      {slide.kicker}
                    </p>
                    <h1
                      className={`!text-5xl !leading-[0.92] tracking-normal lg:!text-5xl xl:!text-6xl 2xl:!text-7xl ${textColor}`}
                    >
                      {slide.title[0]}
                    </h1>
                    <h1
                      className={`mt-1 pl-8 !text-5xl !font-light !leading-[0.92] tracking-normal lg:pl-12 lg:!text-5xl xl:!text-6xl 2xl:!text-7xl ${textColor}`}
                    >
                      {slide.title[1]}
                    </h1>
                    {slide.title[2] ? (
                      <h1
                        className={`mt-1 pl-16 !text-5xl !font-light !leading-[0.92] tracking-normal lg:pl-24 lg:!text-5xl xl:!text-6xl 2xl:!text-7xl ${textColor}`}
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
                          <MainButton
                            klasse={`!m-0 !w-full !max-w-none !text-base ${
                              slide.primaryButtonClass || ""
                            }`}
                          >
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
                          <span>{slide.secondaryButton.label}</span>
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
