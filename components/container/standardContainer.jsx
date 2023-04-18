import React from "react";

const ContainerStandard = (props) => {
    return <div className={`container relative m-auto grid grid-cols-12 ${props.klasse}`}>{props.children}</div>;
};

export default ContainerStandard;
