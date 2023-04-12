import React from "react";
import Image from "next/image";

//ImageBuilder
import myConfiguredSanityClient from "../../client";

import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

function urlFor(source) {
    return builder.image(source);
}

const ContainerStandard = (props) => {
    return <div className={`container relative m-auto grid grid-cols-12 ${props.klasse}`}>{props.children}</div>;
};

export default ContainerStandard;
