import React from "react";

const ShadowBox = (props) => {
    return (
        <div className={`container bg-white shadow-xl relative m-auto grid grid-cols-12 p-4 sm:p-16 ${props.klasse}`}>
            {props.children}
        </div>
    );
};

export default ShadowBox;
