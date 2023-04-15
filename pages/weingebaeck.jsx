import Head from "next/head";
import { useState, useEffect } from "react";

import Image from "next/image";

// SANITY
import client from "../client";
import urlFor from "../components/functions/urlFor";

//COMPS
import MainContainer from "../components/layout/mainContainer";
import HeroPage from "../components/Hero/heroPage";
import { Menu1 } from "../components/menues";
import { ContainerStandard } from "../components/container";
import { StartKachelLeft, Contact } from "../components/sections";
import { BasicBox } from "../components/infoBox";
import { NewsletterSub } from "../components/forms";
import { Divider1 } from "../components/divider";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import LogoLight from "../assets/logoLight.svg";
import LogoDark from "../assets/logoDark.svg";
import FirstBG from "../assets/firstBG.jpg";
import Newsletter from "../assets/newsletter.jpg";

export default function Weingebaeck({ dataWeingebaeck, dataSetting }) {
    useEffect(() => {
        console.log(dataWeingebaeck, dataSetting);
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>

            <Menu1
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
            ></Menu1>
            <div className="overflow-x-hidden">
                <HeroPage data={dataWeingebaeck}></HeroPage>
                <Divider1></Divider1>
                <div className="lg:h-24 "></div>
                <BasicBox
                    title={"Bleiben Sie am neuesten Stand"}
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
    const resWeingebaeck = await client.fetch(`
  *[_type == "weingebaeck"][0]
`);
    const dataWeingebaeck = await resWeingebaeck;

    const resSetting = await client.fetch(`
  *[_type == "setting"][0] 
`);
    const dataSetting = await resSetting;

    return {
        props: {
            dataWeingebaeck,
            dataSetting,
        },
        revalidate: 1, // 10 seconds
    };
};
