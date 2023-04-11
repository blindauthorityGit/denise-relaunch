import React from "react";

const MainButton = (props) => {
    return (
        <button className="px-12 py-4 mt-8 min-w-[300px] transition-all-ease hover:bg-darkText text-2xl uppercase tracking-wider text-primaryColor-50 font-freight bg-primaryColor-500">
            {props.children}
        </button>
    );
};

export default MainButton;
