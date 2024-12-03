import Head from "next/head";
import { useState, useEffect } from "react";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";
//COMPS
import HeroPage from "../components/Hero/heroPage";
import BG from "../components/layout/bg";
import { Menu2, Menu1 } from "../components/menues";
import { Austria } from "../components/floaters";
import { ImageGridBasic } from "../components/layout";
import { Contact, IntroText } from "../components/sections";
import { Divider1 } from "../components/divider";
import { ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { ListItem } from "../components/list";
import { PageChangeFX } from "../components/transitionFX";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx/index.js";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import Favicon from "../assets/favicon.svg";
//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Baeckerei({ dataBaeckerei, dataSetting, dataHome, dataBaeckereiCats }) {
    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    const Dinkel = "cf7c260a-bf44-4071-8c82-077c20b7e9c8";
    const Roggen = "8abf184a-bd54-412b-b7f2-216b5a5dbd11";
    const Weizen = "aabd1bab-a7e3-4081-aa73-ab9e19b3cb11";

    useEffect(() => {
        console.log(dataBaeckerei, dataSetting, dataHome, dataBaeckereiCats);
    }, []);

    return (
        <PageChangeFX>
            <Head>
                <title>{dataBaeckerei.seo.mainSEO.title}</title>
                <meta name="description" content={dataBaeckerei.seo.mainSEO.description} />
                <meta name="keywords" content={dataBaeckerei.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:title" content={dataBaeckerei.seo.mainSEO.title} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.baeckerin.at/baeckerei" />
                <meta
                    property="og:image"
                    content={
                        dataBaeckerei.seo.advancedSEO.ogImage ? urlFor(dataBaeckerei.seo.advancedSEO.ogImage) : null
                    }
                />
                <meta
                    property="og:description"
                    content={
                        dataBaeckerei.seo.advancedSEO.ogDescription ? dataBaeckerei.seo.advancedSEO.ogDescription : null
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
            <BG />
            <div className="overflow-x-hidden">
                <HeroPage data={dataBaeckerei} mobileImage={dataBaeckerei.heroMobile.image}>
                    {/* <div className="hidden sm:block">
                        <Austria></Austria>
                    </div> */}
                </HeroPage>
                <Divider1></Divider1>
                <IntroText data={dataBaeckerei.intro} klasse="mt-8" />
                {/* <div className="h-8 lg:h-24 "></div>

                <ImageGridBasic
                    klasse="lg:px-28 containerXL 2xl:mx-auto"
                    data={dataBaeckerei.baeckereiImages}
                ></ImageGridBasic> */}
                <div className="h-8 lg:h-24 "></div>
                <div className="brote">
                    <h2
                        data-aos="fade-left"
                        className="mt-8 mb-8 text-center font-freight text-2xl font-thin tracking-widest text-darkText sm:text-4xl lg:mb-12 lg:text-6xl"
                    >
                        {dataBaeckerei.gebaeck.title}
                    </h2>

                    <ImageGridBasic klasse="lg:px-28" data={dataBaeckerei.gebaeckImages}></ImageGridBasic>

                    {/* <div className="h-8 lg:h-24 "></div> */}

                    <div className="containerXL container mx-auto 2xl:mx-auto">
                        <h2 className="aos-init aos-animate col-span-12 mt-8 mb-8 pl-8 text-center font-freight text-2xl font-thin tracking-widest text-darkText sm:text-3xl lg:mt-12 lg:mb-8 lg:pl-16 xl:text-5xl">
                            ROGGEN
                        </h2>
                        {dataBaeckerei.gebaeck.gebaeckList
                            .filter((e) => e.category._ref == Roggen)
                            .map((e, i) => {
                                console.log(e);
                                return <ListItem bgColor={i % 2 !== 0 ? true : false} data={e}></ListItem>;
                            })}
                        <h2 className="aos-init aos-animate col-span-12 mt-8 mb-8 pl-8 text-center font-freight text-2xl font-thin tracking-widest text-darkText sm:text-3xl lg:mt-12 lg:mb-8 lg:pl-16 xl:text-5xl">
                            DINKEL
                        </h2>
                        {dataBaeckerei.gebaeck.gebaeckList
                            .filter((e) => e.category._ref == Dinkel)
                            .map((e, i) => {
                                console.log(e);
                                return <ListItem bgColor={i % 2 !== 0 ? true : false} data={e}></ListItem>;
                            })}
                        <h2 className="aos-init aos-animate col-span-12 mt-8 mb-8 pl-8 text-center font-freight text-2xl font-thin tracking-widest text-darkText sm:text-3xl lg:mt-12 lg:mb-8 lg:pl-16 xl:text-5xl">
                            WEIZEN
                        </h2>
                        {dataBaeckerei.gebaeck.gebaeckList
                            .filter((e) => e.category._ref == Weizen)
                            .map((e, i) => {
                                console.log(e);
                                return <ListItem bgColor={i % 2 !== 0 ? true : false} data={e}></ListItem>;
                            })}
                    </div>

                    <Divider1></Divider1>
                </div>
                <div className="h-8 lg:h-24 "></div>

                <ImgText2 showImgMobile data={dataBaeckerei}></ImgText2>
                <div className="h-8 lg:h-24 "></div>

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
    const resBaeckerei = await client.fetch(`
  *[_type == "baeckerei"][0]
`);
    const dataBaeckerei = await resBaeckerei;

    const resBaeckereiCats = await client.fetch(`*[_type == "baeckerei"]{
        gebaeck {
          gebaeckList 
        }
      }`);
    const dataBaeckereiCats = await resBaeckereiCats;

    const resSetting = await client.fetch(`
  *[_type == "setting"][0] 
`);
    const dataSetting = await resSetting;

    const resHome = await client.fetch(`
    *[_type == "home"][0]
  `);
    const dataHome = await resHome;

    return {
        props: {
            dataBaeckerei,
            dataSetting,
            dataHome,
            dataBaeckereiCats,
        },
        revalidate: 1, // 10 seconds
    };
};
