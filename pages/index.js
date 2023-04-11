import Head from "next/head";
import { useState, useEffect } from "react";

import Image from "next/image";
import styles from "../styles/Home.module.css";

// SANITY
import client from "../client";
import urlFor from "../functions/urlFor";

import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";

export default function Home({ dataHome }) {
    useEffect(() => {
        console.log(dataHome, urlFor(dataHome.videoFile));
    }, []);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <Hero
                fullHeight={true}
                data={dataHome}
                title={dataHome.title}
                colspan="col-span-12"
                bgVideo={dataHome.videoFile.asset.url}
            ></Hero>
            <h1 className="font-freight">Hallo ich bin ein Text</h1>
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

    return {
        props: {
            dataHome,
        },
        revalidate: 1, // 10 seconds
    };
};
