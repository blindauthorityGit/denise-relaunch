import React from "react";

const ContainerStandard = (props) => {
    return (
        <div className={`w-full p-8 sm:p-12 lg:p-16 xl:p-24 ${props.klasse}`}>
            <div className="grid grid-cols-12 container mx-auto">{props.children}</div>
        </div>
    );
};

export default ContainerStandard;
