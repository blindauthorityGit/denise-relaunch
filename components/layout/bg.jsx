import React from "react";
import BGImg from "../../assets/bg.jpg";

const BG = () => {
    return (
        <div
            className="w-full h-screen  top-0 left-0 fixed bg-cover z-[-1] opacity-50"
            style={{ backgroundImage: `url(${BGImg.src})` }}
        ></div>
    );
};

export default BG;
