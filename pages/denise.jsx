import Head from "next/head";
import { useState, useEffect } from "react";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";

//COMPS
import HeroPage from "../components/Hero/heroPage";
import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { ContainerStandard } from "../components/container";
import { Austria } from "../components/floaters";
import { ImageGridBasic } from "../components/layout";
import { StartKachelLeft, Contact, IntroText } from "../components/sections";
import { Divider1 } from "../components/divider";
import { ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { PageChangeFX } from "../components/transitionFX";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import Favicon from "../assets/favicon.svg";

//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Denise({ dataDenise, dataSetting, dataHome }) {
    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    useEffect(() => {
        console.log(dataDenise, dataSetting, dataHome);
    }, []);

    return (
        <PageChangeFX>
            <Head>
                <title>{dataDenise.seo.mainSEO.title}</title>
                <meta name="description" content={dataDenise.seo.mainSEO.description} />
                <meta name="keywords" content={dataDenise.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.baeckerin.at/baeckerei" />
                <meta
                    property="og:image"
                    content={dataDenise.seo.advancedSEO.ogImage ? urlFor(dataDenise.seo.advancedSEO.ogImage) : null}
                />
                <meta
                    property="og:description"
                    content={dataDenise.seo.advancedSEO.ogDescription ? dataDenise.seo.advancedSEO.ogDescription : null}
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
                <HeroPage data={dataDenise}>
                    <Austria></Austria>
                </HeroPage>
                <Divider1></Divider1>
                <IntroText data={dataDenise.intro} klasse="mt-8" />
                <div className="h-8 lg:h-24 "></div>
                <ContainerStandard>
                    <video
                        controls
                        className="w-full col-span-12 object-cover object-center"
                        style={{ objectFit: "cover" }}
                    >
                        <source src={dataDenise.videoFile.asset.url} type="video/mp4" />
                    </video>
                </ContainerStandard>
                <div className="h-8 lg:h-24 "></div>
                <ImgText2 data={dataDenise}></ImgText2>
                <div className="h-8 lg:h-24 "></div>

                <ImageGridBasic klasse="lg:px-28" data={dataDenise.deniseImages}></ImageGridBasic>
                <Divider1></Divider1>
                <div className="h-8 sm:h-24"></div>
                <div className="grid grid-cols-12 gap-4 container mx-auto">
                    {quickLinkData.map((e, i) => {
                        return <Element link={e.buttonLink} linkText={e.title} image={e.image}></Element>;
                    })}
                </div>
                <div className="lg:h-24 "></div>
                <Contact data={dataSetting}></Contact>
            </div>
        </PageChangeFX>
    );
}

export const getStaticProps = async (context) => {
    const resDenise = await client.fetch(`
    *[_type == "denise"][0] {
        ...,
        videoFile {
          asset-> {
            url
          }
        }
      }
    `);
    const dataDenise = await resDenise;

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
            dataDenise,
            dataSetting,
            dataHome,
        },
        revalidate: 1, // 10 seconds
    };
};
