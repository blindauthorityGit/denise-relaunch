import React from "react";
import { ContainerStandard } from "../container";
import { PortableText } from "@portabletext/react";

const IntroText = (props) => {
    return (
        <ContainerStandard klasse={props.klasse}>
            <div className="col-span-12 flex justify-center">
                <div className="px-8 lg:w-2/4 font-freight text-lg leading-relaxed tracking-wider">
                    <PortableText value={props.data} />
                </div>
            </div>
        </ContainerStandard>
    );
};

export default IntroText;
