import "../styles/globals.css";
import { Footer } from "../components/footer";
import { MobileBar1 } from "../components/mobileBar";
import { useEffect } from "react";
// SANITY
import client from "../client";

function MyApp({ Component, pageProps }) {
    const { dataSetting } = pageProps;

    useEffect(() => {
        console.log(dataSetting);
    }, []);

    return (
        <>
            <MobileBar1
                data={dataSetting}
                onClick={() => {
                    console.log("IS CLICKED");
                }}
            ></MobileBar1>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;

export const getStaticProps = async (context) => {
    const resSetting = await client.fetch(`
*[_type == "setting"][0] 
`);
    const dataSetting = await resSetting;

    return {
        props: {
            dataSetting,
        },
        revalidate: 1, // 10 seconds
    };
};
