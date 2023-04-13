import Head from "next/head";
import { useState, useEffect } from "react";

import Image from "next/image";

// SANITY
import client from "../client";
import urlFor from "../functions/urlFor";

//COMPS
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { Menu1 } from "../components/menues";
import { ContainerStandard } from "../components/container";
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

export default function Home({ dataHome, dataSetting }) {
    useEffect(() => {
        console.log(dataHome, dataSetting);
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

            <Hero
                fullHeight={true}
                data={dataHome}
                dataSetting={dataSetting}
                colspan="col-span-12"
                bgVideo={dataHome.videoFile.asset.url}
            ></Hero>
            {dataHome.section.map((e, i) => {
                console.log(e);
                return <StartKachelLeft data={e} bg={FirstBG} key={`kachelKey${i}`}></StartKachelLeft>;
            })}
            <div className="h-24"></div>
            <BasicBox
                title={"Bleiben Sie am neuesten Stand"}
                text={
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
                }
                bgImage={Newsletter.src}
            >
                <NewsletterSub></NewsletterSub>
            </BasicBox>
            <Contact data={dataSetting}></Contact>
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
