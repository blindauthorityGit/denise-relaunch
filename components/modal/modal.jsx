import React from "react";

import { MdOutlineClose } from "react-icons/md/index.js";
const Modal = (props) => {
    return (
        <div className="fade-in fixed top-1/2 left-1/2 z-50 h-[80%] max-h-[100%] min-h-[80%] w-[90%] -translate-x-1/2 -translate-y-1/2 transform overflow-y-auto  bg-white p-8 lg:w-[80%] lg:p-12 xl:p-24">
            <div
                className="closer absolute top-6 right-6 z-50 cursor-pointer text-4xl transition hover:opacity-50"
                onClick={props.onClick}
            >
                <MdOutlineClose></MdOutlineClose>
            </div>
            {props.children}
        </div>
    );
};

export default Modal;
