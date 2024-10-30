import React from "react";
import { Form1 } from "../forms";
import { ShopGalerie } from "../galerie";

//ICONS
import { FaPhone } from "react-icons/fa/index.js";
import { HiOutlineMail } from "react-icons/hi/index.js";

const Reseller = (props) => {
    return (
        <div className="mb-16 grid grid-cols-12 gap-4 sm:mb-0">
            <div className="col-span-12 hidden sm:block lg:col-span-6">
                <ShopGalerie data={props.data} />
            </div>
            <div className="col-span-12 lg:col-span-6 lg:px-16">
                <h4
                    data-aos="fade-left"
                    className="mt-4 mb-4 font-freight text-2xl font-thin text-darkText sm:text-xl  lg:mb-6 lg:text-3xl xl:text-4xl"
                >
                    Sie würden gerne Weingebäck in Ihrem Shop verkaufen?
                </h4>
                <p className="font-freight leading-relaxed xl:text-lg">
                    Gerne stellen wir Ihnen weitere Informationen zur Verfügung. Fordern Sie das Info-Blatt gleich an!
                </p>
                <div className="phoner mt-8 mb-4 grid grid-cols-12 leading-relaxed">
                    <div className="col-span-2 flex items-center text-primaryColor">
                        <FaPhone />{" "}
                    </div>
                    <div className="col-span-10 font-freight font-bold xl:text-xl">+43 / 650 80 11 900</div>
                    <div className="col-span-2 flex items-center text-primaryColor">
                        <HiOutlineMail></HiOutlineMail>
                    </div>
                    <div className="col-span-10 font-freight tracking-wider xl:text-xl">
                        <a className="underline" href="mailto:office@baeckerin.at">
                            office@baeckerin.at
                        </a>
                    </div>
                </div>
                <Form1 />
            </div>
        </div>
    );
};

export default Reseller;
