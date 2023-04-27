import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";
//COMPS
import { MainButton } from "../components/buttons";
import HeroPage from "../components/Hero/heroPage";
import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
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
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import FirstBG from "../assets/firstBG.jpg";
import Newsletter from "../assets/newsletter.jpg";
import Favicon from "../assets/favicon.svg";

//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Weingebaeck({ dataWeingebaeck, dataSetting, dataHome, dataReseller }) {
    const [showModal, setShowModal] = useState(false);

    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    useEffect(() => {
        console.log(dataWeingebaeck, dataSetting, dataHome, dataReseller);
    }, []);

    return (
        <PageChangeFX>
            <Head>
                <title>{dataWeingebaeck.seo.mainSEO.title}</title>
                <meta name="description" content={dataWeingebaeck.seo.mainSEO.description} />
                <meta name="keywords" content={dataWeingebaeck.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.baeckerin.at/baeckerei" />
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

            <Menu2
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {}}
                onClick={() => {
                    setIsOpen(true);
                }}
            ></Menu2>

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
                <HeroPage data={dataWeingebaeck}>
                    <Austria></Austria>
                </HeroPage>
                <Divider1></Divider1>
                <IntroText data={dataWeingebaeck.intro} klasse="mt-8" />
                <div className="h-8 lg:h-24 "></div>
                <div className="grid grid-cols-12 container mx-auto gap-4 lg:px-36">
                    {dataWeingebaeck.produkte.map((e, i) => {
                        return <Produkt data={e}></Produkt>;
                    })}
                </div>
                <div className="h-8 lg:h-24 "></div>
                <ShadowBox>
                    <ImageGrid1 images={dataWeingebaeck.imgGallery}></ImageGrid1>
                </ShadowBox>

                <BGText1 data={dataWeingebaeck}></BGText1>

                <StoreBox data={dataWeingebaeck}>
                    <div className="flex justify-center col-span-12">
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
                <Divider1></Divider1>
                <div className="h-8 sm:h-24"></div>
                <div className="grid grid-cols-12 gap-4 container mx-auto">
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