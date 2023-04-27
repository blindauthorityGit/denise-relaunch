import Head from "next/head";
import { useState, useEffect } from "react";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";
//COMPS
import HeroPage from "../components/Hero/heroPage";
import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { Austria } from "../components/floaters";
import { ImageGridBasic } from "../components/layout";
import { Contact, IntroText } from "../components/sections";
import { Divider1 } from "../components/divider";
import { ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { ListItem } from "../components/list";
import { PageChangeFX } from "../components/transitionFX";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import Favicon from "../assets/favicon.svg";
//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Baeckerei({ dataBaeckerei, dataSetting, dataHome, dataBaeckereiCats }) {
    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

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
            <BG />
            <div className="overflow-x-hidden">
                <HeroPage data={dataBaeckerei}>
                    {/* <div className="hidden sm:block">
                        <Austria></Austria>
                    </div> */}
                </HeroPage>
                <Divider1></Divider1>
                <IntroText data={dataBaeckerei.intro} klasse="mt-8" />
                <div className="h-8 lg:h-24 "></div>
                <ImageGridBasic klasse="lg:px-28" data={dataBaeckerei.baeckereiImages}></ImageGridBasic>
                <div className="h-8 lg:h-24 "></div>
                <ImgText2 showImgMobile data={dataBaeckerei}></ImgText2>
                <div className="h-8 lg:h-24 "></div>
                <h2
                    data-aos="fade-left"
                    className="font-freight text-center text-2xl sm:text-4xl text-darkText lg:text-6xl font-thin mt-8 tracking-widest mb-8 lg:mb-12"
                >
                    {dataBaeckerei.gebaeck.title}
                </h2>

                <ImageGridBasic klasse="lg:px-28" data={dataBaeckerei.gebaeckImages}></ImageGridBasic>

                <div className="h-8 lg:h-24 "></div>

                <div className="container mx-auto">
                    {dataBaeckerei.gebaeck.gebaeckList.map((e, i) => {
                        return <ListItem bgColor={i % 2 !== 0 ? true : false} data={e}></ListItem>;
                    })}
                </div>

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
