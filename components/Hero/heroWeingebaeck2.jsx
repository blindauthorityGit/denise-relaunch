import React from "react";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// COMPS
import { MainButton } from "../buttons";
import { FloaterContact, FloaterOpening } from "../floaters";

import BigHero from "../../assets/bigHero2.jpg";
import PopupCafeHero from "../../assets/popup-ladencafe-desktop.jpg";
import WeingebaeckMobile from "../../assets/weingebaeck-hero-mobile.png";
import KinderKnaeckiHero from "../../assets/kinder-knaecki-hero-v2.png";
import KinderKnaeckiMobile from "../../assets/kinder-knaecki-hero-mobile.png";

const starterHeroSlides = [
  {
    kicker: "Pop-up Ladencafé",
    title: ["Pop-up", "Ladencafé"],
    subTitle: "& Concept Store",
    text: "In unseren liebevoll renovierten, alten Gemäuern.",
    image: PopupCafeHero,
    isLight: true,
    featured: true,
    titleItalic: true,
    hideKicker: true,
    titleColor: "text-darkText",
    subTitleColor: "text-primaryColor-600",
    contentSide: "left",
    desktopSplit: true,
    backgroundPosition: "center center",
    hideMobileImage: true,
    mobilePlain: true,
    mobileBackgroundClass: "bg-[#F0EDE2]",
    showMobileText: true,
    badge: ["Neu", "ab 03.09.", "2026"],
    openingHours: [
      { label: "Donnerstag & Freitag", hours: "8 – 18 Uhr" },
      { label: "Samstag", hours: "8 – 13 Uhr" },
    ],
    note: "Eingang rechts von der Bäckerei im Hof",
    nightMarket: {
      title: ["Nacht", "flohmarkt"],
      schedule: "Jeden Freitag · 18–22 Uhr",
      detail: "Musik · Fingerfood · gemütliche Stimmung",
      adultFee: "€ 10,–",
      childFee: "€ 3,–",
      contact: "Anmeldung & Infos: 0650 / 80 11 900",
    },
  },
  {
    kicker: "Kinder Knäcki",
    title: ["Knusprig.", "Natürlich.", "Kindgerecht."],
    text: "Knuspriger Genuss für kleine Entdecker - gemeinsam mit dem Kleinen Yogi entwickelt.",
    image: KinderKnaeckiHero,
    mobileImage: KinderKnaeckiMobile,
    isLight: true,
    backgroundPosition: "26% 46%",
    mobileBackgroundPosition: "center top",
    mobileBackgroundSize: "cover",
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
    mobileImage: WeingebaeckMobile,
    backgroundPosition: "center top",
    mobileBackgroundPosition: "center top",
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
  const visibleHeroSlides = starterHeroSlides.slice(0, 1);

  return (
    <section
      className={`hero-container relative w-full bg-white md:mt-12 lg:px-6 lg:pb-6 lg:pt-2 xl:mt-16 xl:px-8 xl:pb-8 xl:pt-3 2xl:px-12 2xl:pb-10 2xl:pt-4 ${
        props.fullHeight
          ? "min-h-[calc(100svh-5rem)] lg:h-[560px] xl:h-[620px] 2xl:h-[680px]"
          : props.height
      } ${props.colspan}`}
    >
      <div className="lg:hidden">
        <FloaterOpening data={props.dataSetting}></FloaterOpening>
        <FloaterContact data={props.dataSetting}></FloaterContact>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={visibleHeroSlides.length > 1}
        speed={850}
        grabCursor
        autoplay={{
          delay: 6200,
          disableOnInteraction: false,
        }}
        pagination={
          visibleHeroSlides.length > 1
            ? {
                clickable: true,
                renderBullet: (index, className) =>
                  `<button class="${className}" type="button" aria-label="Hero Slide ${
                    index + 1
                  }"></button>`,
              }
            : false
        }
        className="hero-swiper h-auto min-h-[calc(100svh-5rem)] w-full overflow-hidden lg:h-full lg:min-h-0 lg:max-w-[1680px]"
      >
        {visibleHeroSlides.map((slide, index) => {
          const hasBackgroundImage = Boolean(slide.image || slide.mobileImage);
          const hasMobileBackgroundImage = Boolean(
            (slide.mobileImage || slide.image) && !slide.hideMobileImage
          );
          const textColor = slide.titleColor
            ? slide.titleColor
            : slide.accentColor
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
                  {hasMobileBackgroundImage ? (
                    <div
                      className="absolute inset-0 z-10 bg-cover bg-center lg:hidden"
                      style={{
                        backgroundImage: `url(${
                          (slide.mobileImage || slide.image).src
                        })`,
                        backgroundPosition:
                          slide.mobileBackgroundPosition || "center center",
                        backgroundSize: slide.mobileBackgroundSize || "cover",
                      }}
                    ></div>
                  ) : (
                    <div
                      className={`absolute inset-0 z-10 lg:hidden ${
                        slide.mobileBackgroundClass || "bg-[#FBFBF5]"
                      }`}
                    ></div>
                  )}
                  <div
                    className={`absolute z-10 hidden transition-transform duration-[7000ms] ease-out lg:block ${
                      slide.desktopSplit
                        ? "inset-y-0 right-0 w-1/2 bg-[#F0EDE2] bg-contain bg-center bg-no-repeat"
                        : "inset-0 bg-cover"
                    }`}
                    style={{
                      backgroundImage: `url(${slide.image.src})`,
                      backgroundPosition:
                        slide.backgroundPosition || "center top",
                    }}
                  ></div>
                  {slide.desktopSplit ? (
                    <div className="absolute inset-y-0 left-0 z-10 hidden w-1/2 bg-[#F0EDE2] lg:block"></div>
                  ) : null}
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
                    ? slide.hideMobileImage
                      ? slide.desktopSplit
                        ? "bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[#F0EDE2]/10"
                        : "bg-transparent lg:bg-gradient-to-r lg:from-[#FBFBF5]/10 lg:via-[#FBFBF5]/10 lg:to-[#FBFBF5]/75"
                      : "hero-mobile-overlay lg:bg-gradient-to-r lg:from-[#FBFBF5]/10 lg:via-[#FBFBF5]/10 lg:to-[#FBFBF5]/75"
                    : "lg:to-white/35 bg-gradient-to-t from-primaryColor-950/90 via-primaryColor-700/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/10"
                }`}
              ></div>

              {slide.nightMarket ? (
                <div className="absolute inset-y-0 right-0 z-20 hidden w-1/2 bg-[#303126] lg:block"></div>
              ) : null}

              {slide.badge ? (
                <div
                  className={`absolute right-5 top-20 z-30 flex -rotate-12 flex-col items-center justify-center rounded-full bg-primaryColor-600/95 text-center text-primaryColor-50 shadow-lg sm:right-8 sm:top-24 lg:left-[47%] lg:right-auto lg:top-10 ${
                    slide.featured
                      ? "h-28 w-28 lg:h-36 lg:w-36"
                      : "h-20 w-20 lg:h-28 lg:w-28"
                  }`}
                >
                  {slide.badge.map((line, badgeIndex) => (
                    <span
                      key={line}
                      className={`font-barlow uppercase leading-none ${
                        badgeIndex === 0
                          ? "text-lg tracking-[0.18em] lg:text-2xl"
                          : slide.featured
                          ? "mt-1 text-sm tracking-[0.13em] lg:text-base"
                          : "mt-1 text-[0.6rem] tracking-[0.13em] lg:text-sm"
                      }`}
                    >
                      {line}
                    </span>
                  ))}
                </div>
              ) : null}

              <div
                className={`inset-x-0 z-30 flex flex-col px-6 sm:px-8 lg:hidden ${
                  slide.featured
                    ? "relative min-h-[calc(100svh-5rem)] justify-start pb-28 pt-40"
                    : "absolute bottom-0 min-h-[56%] justify-end pb-10 pt-20 sm:pb-12"
                }`}
              >
                <div className="flex flex-col">
                  <p className="mb-3 hidden font-barlow text-xs uppercase tracking-[0.28em] text-white/80 lg:block">
                    {slide.kicker}
                  </p>
                  <div>
                    {slide.title.map((line, lineIndex) => (
                      <h1
                        key={line}
                        className={`!font-light !leading-[0.92] tracking-normal ${
                          slide.featured ? "!text-[3.2rem]" : "!text-[2.35rem]"
                        } ${
                          slide.mobilePlain
                            ? "text-darkText"
                            : "text-white drop-shadow-sm"
                        } ${slide.titleItalic ? "italic" : ""} ${
                          lineIndex === 1 && !slide.featured
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
                  {slide.subTitle ? (
                    <p
                      className={`mt-2 font-freight ${
                        slide.featured ? "text-2xl" : "text-xl"
                      } ${
                        slide.subTitleColor ||
                        (slide.mobilePlain
                          ? "text-primaryColor-700"
                          : "text-white/90")
                      }`}
                    >
                      {slide.subTitle}
                    </p>
                  ) : null}
                  <p
                    className={`mt-6 max-w-[34rem] font-freight ${
                      slide.featured
                        ? "text-[1.3rem] leading-snug"
                        : "text-[1.05rem] leading-snug"
                    } ${
                      slide.showMobileText
                        ? "text-darkText"
                        : "hidden text-white/95"
                    }`}
                  >
                    {slide.text}
                  </p>
                  <div
                    className={`flex flex-col ${
                      slide.featured ? "mt-5 gap-2" : "mt-6 gap-4"
                    }`}
                  >
                    {slide.openingHours ? (
                      <>
                        <div
                          className={`grid gap-2 ${
                            slide.mobilePlain ? "grid-cols-1" : "grid-cols-2"
                          }`}
                        >
                          {slide.openingHours.map((slot) => (
                            <div
                              key={slot.label}
                              className={`bg-[#262214]/90 text-center ${
                                slide.featured ? "px-4 py-4" : "px-2 py-2"
                              }`}
                            >
                              <p
                                className={`mb-2 font-freight leading-none text-white/80 ${
                                  slide.featured
                                    ? "text-base"
                                    : "text-[0.65rem]"
                                }`}
                              >
                                {slot.label}
                              </p>
                              <p
                                className={`mb-0 font-freight leading-none text-primaryColor-200 ${
                                  slide.featured ? "text-3xl" : "text-xl"
                                }`}
                              >
                                {slot.hours}
                              </p>
                            </div>
                          ))}
                        </div>
                        <p
                          className={`mb-0 py-3 text-center font-barlow uppercase tracking-[0.18em] ${
                            slide.featured ? "text-xs" : "text-[0.6rem]"
                          } ${
                            slide.mobilePlain
                              ? "bg-primaryColor-600 text-primaryColor-50"
                              : "text-white/75"
                          }`}
                        >
                          {slide.note}
                        </p>
                      </>
                    ) : slide.primaryButton ? (
                      <Link href={slide.primaryButton.href}>
                        <MainButton
                          klasse={`!m-0 !min-w-0 !w-full !max-w-none !py-3 !text-sm ${
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
                        className="inline-flex w-fit items-center font-freight text-sm uppercase tracking-widest text-white/90 transition-colors duration-300 hover:text-white"
                      >
                        <span className="mr-3 h-px w-8 bg-current"></span>
                        <span>{slide.secondaryButton.label}</span>
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>

              {slide.nightMarket ? (
                <section className="relative z-30 bg-[#303126] px-6 py-14 text-primaryColor-50 sm:px-8 lg:hidden">
                  <p className="mb-2 font-barlow text-xs uppercase tracking-[0.22em] text-primaryColor-100">
                    {slide.nightMarket.schedule}
                  </p>
                  <h2 className="pr-14 font-freight !text-5xl !font-light italic !leading-[0.84] tracking-normal">
                    {slide.nightMarket.title[0]}
                    <br />
                    {slide.nightMarket.title[1]}
                  </h2>
                  <div className="mt-6 h-px bg-primaryColor-500"></div>
                  <p className="mt-5 font-barlow text-xs uppercase tracking-[0.18em] text-primaryColor-100">
                    {slide.nightMarket.detail}
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    <div className="bg-primaryColor-500 px-3 py-4 text-center">
                      <p className="mb-2 font-freight text-sm">Erwachsene</p>
                      <p className="mb-0 font-freight text-3xl leading-none">
                        {slide.nightMarket.adultFee}
                      </p>
                    </div>
                    <div className="bg-primaryColor-500 px-3 py-4 text-center">
                      <p className="mb-2 font-freight text-sm">Kinder</p>
                      <p className="mb-0 font-freight text-3xl leading-none">
                        {slide.nightMarket.childFee}
                      </p>
                    </div>
                  </div>
                  <p className="mb-0 mt-7 font-barlow text-xs uppercase tracking-[0.17em] text-primaryColor-50">
                    {slide.nightMarket.contact}
                  </p>
                </section>
              ) : null}

              <div className="relative z-30 mx-auto hidden h-full max-w-[1680px] grid-cols-12 items-center px-4 sm:px-8 lg:grid lg:px-12 2xl:px-0">
                <div
                  className={`hidden lg:block ${
                    slide.contentSide === "left"
                      ? "lg:order-2 lg:col-span-6"
                      : "lg:order-1 lg:col-span-6"
                  }`}
                ></div>
                <div
                  className={`col-span-12 flex h-full flex-col justify-end pb-8 pt-24 lg:col-span-6 lg:justify-center lg:pb-0 lg:pt-0 ${
                    slide.contentSide === "left"
                      ? "lg:order-1 lg:pl-10 xl:pl-16 2xl:pl-20"
                      : "lg:order-2 lg:pl-10 xl:pl-16 2xl:pl-20"
                  }`}
                >
                  <div className="max-w-[620px] lg:-translate-y-12 xl:-translate-y-16">
                    {!slide.hideKicker ? (
                      <p
                        className={`mb-3 font-barlow text-sm uppercase tracking-[0.28em] ${kickerColor}`}
                      >
                        {slide.kicker}
                      </p>
                    ) : null}
                    <h1
                      className={`!leading-[0.92] tracking-normal ${
                        slide.featured
                          ? "!text-6xl lg:!text-6xl xl:!text-7xl 2xl:!text-8xl"
                          : "!text-5xl lg:!text-5xl xl:!text-6xl 2xl:!text-7xl"
                      } ${slide.titleItalic ? "italic" : ""} ${textColor}`}
                    >
                      {slide.title[0]}
                    </h1>
                    <h1
                      className={`mt-1 !font-light !leading-[0.92] tracking-normal ${
                        slide.featured
                          ? "!text-6xl lg:!text-6xl xl:!text-7xl 2xl:!text-8xl"
                          : "pl-8 !text-5xl lg:pl-12 lg:!text-5xl xl:!text-6xl 2xl:!text-7xl"
                      } ${slide.titleItalic ? "italic" : ""} ${textColor}`}
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
                    {slide.subTitle ? (
                      <p
                        className={`mt-3 font-freight !leading-none ${
                          slide.featured
                            ? "text-3xl xl:text-4xl"
                            : "text-2xl xl:text-3xl"
                        } ${slide.subTitleColor || textColor}`}
                      >
                        {slide.subTitle}
                      </p>
                    ) : null}
                    <h3
                      className={`mt-4 max-w-[620px] text-lg font-thin !leading-snug tracking-normal lg:mt-7 ${
                        slide.featured
                          ? "lg:!text-2xl xl:!text-3xl"
                          : "lg:pl-16 lg:!text-xl xl:!text-2xl"
                      } ${copyColor}`}
                    >
                      {slide.text}
                    </h3>
                    <div
                      className={`mt-4 flex w-full flex-col gap-3 lg:mt-8 ${
                        slide.featured
                          ? "lg:max-w-[560px]"
                          : "lg:max-w-[360px] lg:pl-16"
                      }`}
                    >
                      {slide.openingHours ? (
                        <>
                          <div
                            className={`grid grid-cols-2 gap-2 ${
                              slide.featured
                                ? "lg:w-[540px] lg:gap-3"
                                : "lg:w-[390px]"
                            }`}
                          >
                            {slide.openingHours.map((slot) => (
                              <div
                                key={slot.label}
                                className={`bg-[#262214]/90 text-center ${
                                  slide.featured ? "px-6 py-5" : "px-4 py-3"
                                }`}
                              >
                                <p
                                  className={`mb-2 font-freight leading-none text-white/70 ${
                                    slide.featured ? "text-lg" : "text-xs"
                                  }`}
                                >
                                  {slot.label}
                                </p>
                                <p
                                  className={`mb-0 font-freight leading-none text-primaryColor-200 ${
                                    slide.featured ? "text-4xl" : "text-2xl"
                                  }`}
                                >
                                  {slot.hours}
                                </p>
                              </div>
                            ))}
                          </div>
                          <p
                            className={`mb-0 font-barlow uppercase tracking-[0.19em] ${
                              slide.featured
                                ? "text-sm text-primaryColor-700"
                                : `text-[0.65rem] ${kickerColor}`
                            }`}
                          >
                            {slide.note}
                          </p>
                        </>
                      ) : slide.primaryButton ? (
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
              {slide.nightMarket ? (
                <div className="absolute inset-y-0 right-0 z-30 hidden w-1/2 flex-col justify-center px-10 py-10 text-primaryColor-50 lg:flex lg:-translate-y-12 xl:-translate-y-16 xl:px-16">
                  <h2 className="font-freight !text-6xl !font-light italic !leading-[0.92] tracking-normal lg:!text-6xl xl:!text-7xl 2xl:!text-8xl">
                    {slide.nightMarket.title[0]}
                    <br />
                    {slide.nightMarket.title[1]}
                  </h2>
                  <p className="mt-3 font-freight text-3xl !leading-none text-primaryColor-300 xl:text-4xl">
                    {slide.nightMarket.schedule}
                  </p>
                  <div className="mt-5 h-px w-full max-w-[540px] bg-primaryColor-500"></div>
                  <p className="mt-5 font-freight text-lg !leading-snug text-primaryColor-50 lg:text-2xl xl:text-3xl">
                    {slide.nightMarket.detail}
                  </p>
                  <div className="mt-7 grid max-w-[540px] grid-cols-2 gap-3">
                    <div className="bg-primaryColor-500 px-6 py-5 text-center">
                      <p className="mb-2 font-freight text-lg">Erwachsene</p>
                      <p className="mb-0 font-freight text-4xl leading-none">
                        {slide.nightMarket.adultFee}
                      </p>
                    </div>
                    <div className="bg-primaryColor-500 px-6 py-5 text-center">
                      <p className="mb-2 font-freight text-lg">Kinder</p>
                      <p className="mb-0 font-freight text-4xl leading-none">
                        {slide.nightMarket.childFee}
                      </p>
                    </div>
                  </div>
                  <p className="mb-0 mt-7 font-barlow text-sm uppercase tracking-[0.17em] text-primaryColor-50">
                    {slide.nightMarket.contact}
                  </p>
                </div>
              ) : null}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HeroWeingebaeck;
