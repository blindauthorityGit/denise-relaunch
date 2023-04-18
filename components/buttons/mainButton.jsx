import React from "react";
import Link from "next/link";

const MainButton = (props) => {
    return (
        <button
            type={props.type}
            className="px-12 py-4 mt-8 min-w-[250px] max-w-[300px] w-full transition-all-ease hover:bg-primaryColor-600 text-xl uppercase tracking-wider text-primaryColor-50 font-freight bg-primaryColor"
        >
            {props.children}
        </button>
    );
};

export default MainButton;
