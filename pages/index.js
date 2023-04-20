import Head from "next/head";
import { useState, useEffect } from "react";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";

//COMPS
import Hero from "../components/Hero/hero";
import { Menu1 } from "../components/menues";
import { StartKachelLeft, Contact } from "../components/sections";
import { BasicBox } from "../components/infoBox";
import { NewsletterSub } from "../components/forms";

//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import FirstBG from "../assets/firstBG.jpg";
import Newsletter from "../assets/newsletter.jpg";
import Favicon from "../assets/favicon.svg";

// FUNCTIONS
import useBreakpoints from "../components/functions/useBreakpoints";

export default function Home({ dataHome, dataSetting }) {
    useEffect(() => {
        console.log(dataHome);
    }, []);

    const [isLoading, setIsLoading] = useState(true);

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    useEffect(() => {
        console.log(isMobile, isTablet, isDesktop);
        setIsLoading(false);
    }, [isMobile, isTablet, isDesktop]);

    return (
        <>
            <Head>
                <title>{dataHome.seo.mainSEO.title}</title>
                <meta name="description" content={dataHome.seo.mainSEO.description} />
                <meta name="keywords" content={dataHome.seo.mainSEO.keywords.map((e) => e)} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.baeckerin.at" />
                <meta
                    property="og:image"
                    content={dataHome.seo.advancedSEO.ogImage ? urlFor(dataHome.seo.advancedSEO.ogImage) : null}
                />
                <meta
                    property="og:description"
                    content={dataHome.seo.advancedSEO.ogDescription ? dataHome.seo.advancedSEO.ogDescription : null}
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
            <div className="overflow-x-hidden">
                {!isLoading ? (
                    <Hero
                        fullHeight={true}
                        data={dataHome}
                        dataSetting={dataSetting}
                        colspan="col-span-12"
                        videoFile={isMobile ? dataHome.videoFileMobile.asset.url : dataHome.videoFile.asset.url}
                    ></Hero>
                ) : (
                    <div className="h-screen bg-primaryColor"></div>
                )}
                {dataHome.section
                    .sort((a, b) => a.buttonLink.localeCompare(b.buttonLink))
                    .map((e, i) => {
                        return <StartKachelLeft data={e} bg={FirstBG} key={`kachelKey${i}`}></StartKachelLeft>;
                    })}
                <div className="lg:h-24 "></div>
                <BasicBox
                    title={"Im Newsletter eintragen"}
                    text={
                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                    }
                    bgImage={Newsletter.src}
                >
                    <NewsletterSub></NewsletterSub>
                </BasicBox>
                <div className="sm:h-24"></div>
                <Contact data={dataSetting}></Contact>
            </div>
        </>
    );
}

export const getStaticProps = async (context) => {
    const resHome = await client.fetch(`
  *[_type == "home"][0] {
    ...,
    videoFile {
      asset-> {
        url
      }
    },
    videoFileMobile {
        asset-> {
          url
        }
      }
  }
`);
    const dataHome = await resHome;

    const resSetting = await client.fetch(`
  *[_type == "setting"][0] 
`);
    const dataSetting = await resSetting;

    return {
        props: {
            dataHome,
            dataSetting,
        },
        revalidate: 1, // 10 seconds
    };
};
