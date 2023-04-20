import React from "react";
import Link from "next/link";

const MainButton = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className="px-12 py-4 mt-8 min-w-[250px] max-w-[300px] w-full transition-all duration-500 hover:bg-primaryColor-600 text-2xl uppercase tracking-widest text-primaryColor-50 font-freight bg-primaryColor"
        >
            {props.children}
        </button>
    );
};

export default MainButton;
