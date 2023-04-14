import "../styles/globals.css";
import { Footer } from "../components/footer";
import { MobileBar1 } from "../components/mobileBar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <MobileBar1
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
