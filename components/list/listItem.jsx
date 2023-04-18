import React from "react";

const ListItem = (props) => {
    return (
        <>
            <div className="col-span-8">
                <div className="item">{props.data.title}</div>
            </div>
            <div className="col-span-2">
                <div className="item">{props.data.gewicht}</div>
            </div>
            <div className="col-span-2">
                <div className="item">EUR {props.data.price},-</div>
            </div>
            <div className="col-span-12">
                <div className="item">{props.data.description},-</div>
            </div>
            <hr className="col-span-12" />
        </>
    );
};

export default ListItem;
