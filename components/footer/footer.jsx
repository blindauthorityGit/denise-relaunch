import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="z-40 w-full bg-white py-8 px-8 pb-24 font-freight sm:pb-8">
            <div className="2xl:containerXL container mx-auto grid grid-cols-12 tracking-wider xl:text-xl">
                <div className="col-span-12 sm:col-span-8 md:col-span-8">2023 @ Denise Bäckerin</div>
                <div className="col-span-12 flex justify-between sm:col-span-4 md:col-span-4">
                    <Link href="/impressum">Impressum</Link>
                    <Link href="/datenschutz">Datenschutz</Link>
                    {/* <Link href="/">
                        <a>Partner</a>
                    </Link> */}
                    <Link href="/kontakt">Kontakt</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
