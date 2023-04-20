import React from "react";

const ListItem = (props) => {
    return (
        <div className={`col-span-12 grid grid-cols-12 pt-2 pb-2 ${props.bgColor ? "bg-primaryColor-50" : ""}`}>
            <div className="col-span-6 sm:col-span-6 pr-2 sm:pr-0 pl-8 lg:pl-36">
                <div className="item font-freight text-regular sm:text-xl tracking-wider">{props.data.title}</div>
            </div>
            <div className="col-span-2 sm:col-span-3">
                <div className="item font-freight text-regular sm:text-xl tracking-wider">{props.data.gewicht}</div>
            </div>
            <div className="col-span-4 sm:col-span-3 text-right pr-8 lg:pr-36">
                <div className="item font-freight text-regular sm:text-xl tracking-wider">EUR {props.data.price},-</div>
            </div>
            <div className="col-span-10 opacity-70 sm:col-span-4 mt-2 sm:mt-0 pl-8 lg:pl-36">
                <div className="item font-freight text-xs sm:text-sm tracking-wider">{props.data.description},-</div>
            </div>
            {/* <hr className="col-span-12 mb-3" /> */}
        </div>
    );
};

export default ListItem;
