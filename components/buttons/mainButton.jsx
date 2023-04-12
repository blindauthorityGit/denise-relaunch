import React from "react";

const MainButton = (props) => {
    return (
        <button className="px-12 py-4 mt-8 min-w-[300px] transition-all-ease hover:bg-primaryColor-600 text-xl uppercase tracking-wider text-primaryColor-50 font-freight bg-primaryColor">
            {props.children}
        </button>
    );
};

export default MainButton;
