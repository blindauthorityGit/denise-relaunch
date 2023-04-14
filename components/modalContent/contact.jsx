import React from "react";
import { Form1 } from "../forms";
const Contact = () => {
    return (
        <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-12">
                <h4
                    data-aos="fade-left"
                    className="font-thin font-freight text-2xl sm:text-xl text-darkText lg:text-4xl  mt-4 mb-4 lg:mb-6"
                >
                    Schreiben Sie mir!
                </h4>
                <Form1 />
            </div>
        </div>
    );
};

export default Contact;
