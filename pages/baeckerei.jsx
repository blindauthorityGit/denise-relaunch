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
import { ShadowBox, ContainerStandard } from "../components/container";
import { StoererImg } from "../components/stoerer";
import { Austria } from "../components/floaters";
import { ImageGridBasic } from "../components/layout";
import { StartKachelLeft, Contact, IntroText } from "../components/sections";
import { BasicBox, Produkt, StoreBox } from "../components/infoBox";
import { NewsletterSub } from "../components/forms";
import { Divider1 } from "../components/divider";
import { ImgText1, BGText1, ImgText2 } from "../components/imgText";
import { Element } from "../components/quickLinks";
import { ListItem } from "../components/list";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import FirstBG from "../assets/firstBG.jpg";
import Newsletter from "../assets/newsletter.jpg";
//FUNCTIONS
import showCurrentURL from "../components/functions/showCurrentURL";

export default function Baeckerei({ dataBaeckerei, dataSetting, dataHome }) {
    const currentUrl = showCurrentURL();
    const [quickLinkData, setQuickLinkData] = useState(dataHome.section.filter((e) => e.buttonLink !== currentUrl));

    useEffect(() => {
        console.log(dataBaeckerei, dataSetting, dataHome);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
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
                <HeroPage data={dataBaeckerei}>
                    <Austria></Austria>
                </HeroPage>
                <Divider1></Divider1>
                <IntroText data={dataBaeckerei.intro} klasse="mt-8" />
                <div className="h-8 lg:h-24 "></div>
                <ImageGridBasic klasse="lg:px-28" data={dataBaeckerei.baeckereiImages}></ImageGridBasic>
                <div className="h-8 lg:h-24 "></div>
                <ImgText2 data={dataBaeckerei}></ImgText2>
                <div className="h-8 lg:h-24 "></div>

                <ShadowBox>
                    <ImageGridBasic klasse="lg:px-28" data={dataBaeckerei.gebaeckImages}></ImageGridBasic>
                </ShadowBox>
                <ContainerStandard klasse="lg:px-36">
                    {dataBaeckerei.gebaeck.gebaeckList.map((e, i) => {
                        return <ListItem data={e}></ListItem>;
                    })}
                </ContainerStandard>

                {/* <StoererImg data={dataWeingebaeck.dekoImage}></StoererImg> */}
                {/* <div className="h-8 lg:h-24"></div> */}
                {/* <ImgText1 data={dataWeingebaeck}></ImgText1> */}
                {/* <div className="h-8 lg:h-24"></div> */}

                {/* <StoreBox data={dataWeingebaeck}>
                    <div className="flex justify-center col-span-12">
                        <Link href="./reseller">
                            <a>
                                <MainButton>Reseller</MainButton>
                            </a>
                        </Link>
                    </div>
                </StoreBox> */}
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
        </>
    );
}

export const getStaticProps = async (context) => {
    const resBaeckerei = await client.fetch(`
  *[_type == "baeckerei"][0]
`);
    const dataBaeckerei = await resBaeckerei;

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
        },
        revalidate: 1, // 10 seconds
    };
};
