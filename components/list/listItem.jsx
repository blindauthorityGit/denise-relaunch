import React from "react";

const ListItem = (props) => {
    return (
        <>
            <div className="col-span-6">
                <div className="item font-freight text-xl">{props.data.title}</div>
            </div>
            <div className="col-span-3">
                <div className="item font-freight text-xl">{props.data.gewicht}</div>
            </div>
            <div className="col-span-3">
                <div className="item font-freight text-xl">EUR {props.data.price},-</div>
            </div>
            <div className="col-span-4">
                <div className="item font-freight text-sm">{props.data.description},-</div>
            </div>
            <hr className="col-span-12 mb-3" />
        </>
    );
};

export default ListItem;
