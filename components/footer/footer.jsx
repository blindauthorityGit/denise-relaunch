import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full bg-white py-8 px-8 pb-24 sm:pb-8 z-40 font-freight">
            <div className="container 2xl:containerXL mx-auto grid grid-cols-12 xl:text-xl tracking-wider">
                <div className="col-span-12 sm:col-span-8 md:col-span-8">2023 @ Denise Bäckerin</div>
                <div className="col-span-12 sm:col-span-4 md:col-span-4 flex justify-between">
                    <Link href="/impressum">
                        <a>Impressum</a>
                    </Link>
                    <Link href="/datenschutz">
                        <a>Datenschutz</a>
                    </Link>
                    {/* <Link href="/">
                        <a>Partner</a>
                    </Link> */}
                    <Link href="/kontakt">
                        <a>Kontakt</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
