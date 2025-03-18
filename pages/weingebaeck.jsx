import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";

// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";
//COMPS
import { MainButton, LineButtonWhite } from "../components/buttons";
import HeroPage from "../components/Hero/heroPage";
import BG from "../components/layout/bg";
import { Menu2, Menu1 } from "../components/menues";
import { ShadowBox } from "../components/container";
import { StoererImg } from "../components/stoerer";
import { Austria } from "../components/floaters";
import { ImageGrid1 } from "../components/layout";
import { StartKachelLeft, Contact, IntroText } from "../components/sections";
import { BasicBox, Produkt, StoreBox } from "../components/infoBox";
import { NewsletterSub } from "../components/forms";
import { Divider1 } from "../components/divider";
import { ImgText1, BGText1 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { Overlay, Modal } from "../components/modal";
import { Reseller } from "../components/modalContent";
import { PageChangeFX } from "../components/transitionFX";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx/index.js";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import BuildByNature from "../assets/Logo-Built-by-Nature3.png";
import Favicon from "../assets/favicon.svg";
import WGBG from "../assets/wgBg.jpg";
import WGBGMobile from "../assets/wbBgMobile.jpg";

//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";
import useBreakpoints from "../components/functions/useBreakpoints";

export default function Weingebaeck({ dataWeingebaeck, dataSetting, dataHome, dataReseller }) {
    const [showModal, setShowModal] = useState(false);

    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    useEffect(() => {
        console.log(dataWeingebaeck, dataSetting, dataHome, dataReseller);
    }, []);

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
    }, [isMobile, isTablet, isDesktop]);

    return (
        <PageChangeFX>
            <Head>
                <title>{dataWeingebaeck.seo.mainSEO.title}</title>
                <meta name="description" content={dataWeingebaeck.seo.mainSEO.description} />
                <meta name="keywords" content={dataWeingebaeck.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:title" content={dataWeingebaeck.seo.mainSEO.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.baeckerin.at/weingeabeck" />
                <meta
                    property="og:image"
                    content={
                        dataWeingebaeck.seo.advancedSEO.ogImage ? urlFor(dataWeingebaeck.seo.advancedSEO.ogImage) : null
                    }
                />
                <meta
                    property="og:description"
                    content={
                        dataWeingebaeck.seo.advancedSEO.ogDescription
                            ? dataWeingebaeck.seo.advancedSEO.ogDescription
                            : null
                    }
                />
                <meta property="og:site_name" content="Denise Bäckerin - Die Bäckerei" />
                <meta property="og:locale" content="de_DE" />
            </Head>

            <Menu1
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {}}
                onClick={() => {
                    setIsOpen(true);
                }}
            ></Menu1>

            {showModal && (
                <>
                    <Modal
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        <Reseller data={dataReseller}></Reseller>
                    </Modal>
                    <Overlay
                        onClick={() => {
                            setShowModal(false);
                        }}
                    />
                </>
            )}

            <BG />
            <div className="overflow-x-hidden">
                <HeroPage data={dataWeingebaeck} mobileImage={dataWeingebaeck.heroMobile.image} noSubline>
                    {/* <img
                        src={BuildByNature.src}
                        className="absolute top-[38%] right-6 w-20 md:top-8 md:left-8 md:w-24 lg:w-24 xl:w-48"
                        alt=""
                    /> */}
                    <Austria></Austria>
                </HeroPage>
                {/* <Divider1></Divider1>  */}
                <BGText1 isDesktop={isDesktop} data={dataWeingebaeck}></BGText1>
                {/* <IntroText data={dataWeingebaeck.intro} klasse="mt-8" /> */}
                <div className="h-8 lg:h-24 "></div>
                <div
                    className="relative bg-cover py-8"
                    style={{ backgroundImage: `url(${isMobile ? WGBGMobile.src : WGBG.src})` }}
                >
                    <div className=" grid grid-cols-12 gap-4 bg-top sm:p-16 xl:p-24 xl:px-36">
                        {/* <h2 className="z-10 col-span-12 mb-1 text-center font-freight text-3xl font-thin tracking-widest text-primaryColor-500 sm:mb-8  sm:text-4xl lg:mb-12 lg:text-6xl">
                            Die 3 Sorten
                        </h2> */}
                        <div className="absolute top-0 left-0 h-full w-full bg-[#1D1B1C] opacity-80 "></div>
                        {dataWeingebaeck.produkte.map((e, i) => {
                            if (i <= 1) {
                                return <Produkt data={e}></Produkt>;
                            }
                        })}{" "}
                        <div className="text-[#fff!important] z-10 col-span-12 space-x-4 text-center">
                            {" "}
                            <LineButtonWhite link="https://shop.baeckerin.at/produkt/weingebaeck/">
                                Jetzt bestellen
                            </LineButtonWhite>
                            <LineButtonWhite
                                klasse="border-primaryColor text-primaryColor "
                                link="https://shop.baeckerin.at/registration/"
                            >
                                für Wiederverkäufer
                            </LineButtonWhite>
                        </div>
                    </div>
                </div>
                {/* <div className="h-8 lg:h-24 "></div> */}
                {/* <ShadowBox>
                    <ImageGrid1 images={dataWeingebaeck.imgGallery}></ImageGrid1>
                </ShadowBox> */}
                {/* <div className="h-8 lg:h-24 "></div> */}
                <ShadowBox>
                    <ImageGrid1 images={dataWeingebaeck.imgGallery}></ImageGrid1>
                </ShadowBox>
                {/* <div id="sell" className="scroll-mt-24">
                    <StoreBox data={dataWeingebaeck}>
                        <div className="col-span-12 flex justify-center">
                            <MainButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowModal(true);
                                }}
                            >
                                Reseller
                            </MainButton>
                        </div>
                    </StoreBox>
                </div> */}
                <Divider1></Divider1>
                <div className="h-8 sm:h-24"></div>
                <div className="containerXL container mx-auto grid grid-cols-12 gap-4 2xl:mx-auto">
                    {quickLinkData.map((e, i) => {
                        return (
                            <Element
                                length={quickLinkData.length}
                                link={e.buttonLink}
                                linkText={e.title}
                                image={e.image}
                            ></Element>
                        );
                    })}
                </div>
                <div className="lg:h-24 "></div>
                <Contact data={dataSetting}></Contact>
            </div>
        </PageChangeFX>
    );
}

export const getStaticProps = async (context) => {
    const resWeingebaeck = await client.fetch(`
  *[_type == "weingebaeck"][0]
`);
    const dataWeingebaeck = await resWeingebaeck;

    const resSetting = await client.fetch(`
  *[_type == "setting"][0] 
`);
    const dataSetting = await resSetting;

    const resHome = await client.fetch(`
    *[_type == "home"][0]
  `);
    const dataHome = await resHome;

    const resReseller = await client.fetch(`
    *[_type == "reseller"][0]
  `);
    const dataReseller = await resReseller;

    return {
        props: {
            dataWeingebaeck,
            dataSetting,
            dataHome,
            dataReseller,
        },
        revalidate: 1, // 10 seconds
    };
};
