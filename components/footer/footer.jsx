import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full bg-white py-8">
            <div className="container mx-auto grid grid-cols-12">
                <div className="col-span-12 sm:col-span-8">2023 @ Denise Bäckerin</div>
                <div className="col-span-12 sm:col-span-4 flex justify-between">
                    <Link href="/">
                        <a>Impressum</a>
                    </Link>
                    <Link href="/">
                        <a>Datenschutz</a>
                    </Link>
                    <Link href="/">
                        <a>Partner</a>
                    </Link>
                    <Link href="/">
                        <a>Kontakt</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
