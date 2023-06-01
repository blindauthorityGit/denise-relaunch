import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";
//COMPS
import { MainButton } from "../components/buttons";
import HeroSimple from "../components/Hero/heroSimple";
import BG from "../components/layout/bg";
import { Menu2 } from "../components/menues";
import { ShadowBox, ContainerStandard } from "../components/container";
import { StoererImg } from "../components/stoerer";
import { Austria } from "../components/floaters";
import { ImageGridBasic } from "../components/layout";
import { StartKachelLeft, Contact, IntroText, ContactImg } from "../components/sections";
import { BasicBox, Produkt, StoreBox } from "../components/infoBox";
import { NewsletterSub } from "../components/forms";
import { Divider1 } from "../components/divider";
import { ImgText1, BGText1, ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { ListItem } from "../components/list";
import Map from "../components/map";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import FirstBG from "../assets/firstBG.jpg";
import Newsletter from "../assets/newsletter.jpg";
//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Kontakt({ dataDenise, dataSetting, dataHome }) {
    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    useEffect(() => {
        console.log(dataDenise, dataSetting, dataHome);
    }, []);

    return (
        <>
            <Head>
                <title>Denise Bäckerin | Kontakt</title>
            </Head>

            <Menu2
                logoLight={LogoLight.src}
                logoDark={LogoDark.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
                onBurgerClick={(e) => {
                    console.log(e);
                }}
                onClick={() => {
                    console.log("IS CLICKED");
                    setIsOpen(true);
                }}
            ></Menu2>
            <BG />
            <div className="overflow-x-hidden">
                {/* <HeroSimple>Kontakt</HeroSimple> */}
                {/* <Divider1></Divider1> */}
                <div className="h-12 xl:h-16 "></div>

                <ContainerStandard>
                    <div className="col-span-12">
                        <ContactImg data={dataSetting}></ContactImg>
                    </div>
                </ContainerStandard>
                <div className="h-8 lg:h-24 "></div>
                <ContainerStandard klasse="containerXL 2xl:mx-auto">
                    <div className="col-span-12 h-[250px] md:h-[300px] xl:h-[450px]">
                        <Map></Map>
                    </div>
                </ContainerStandard>
                <div className="h-2 lg:h-8 "></div>
                <Divider1></Divider1>
                <div className="h-8 sm:h-24"></div>
                <div className="containerXL container mx-auto grid grid-cols-12 gap-4 2xl:mx-auto">
                    {quickLinkData.map((e, i) => {
                        return <Element link={e.buttonLink} linkText={e.title} image={e.image}></Element>;
                    })}
                </div>
                <div className="xl:h-24 "></div>
            </div>
        </>
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
