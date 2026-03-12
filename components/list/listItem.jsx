// import React from "react";

// const ListItem = (props) => {
//     return (
//         <div className={`col-span-12 grid grid-cols-12 pt-2 pb-2 ${props.bgColor ? "bg-primaryColor-50" : ""}`}>
//             <div className="col-span-6 pr-2 pl-8 sm:col-span-6 sm:pr-0 lg:pl-36">
//                 <div className="item text-regular font-freight tracking-wider sm:text-xl">{props.data.title}</div>
//             </div>
//             <div className="col-span-2 sm:col-span-3">
//                 <div className="item text-regular font-freight tracking-wider sm:text-xl">{props.data.gewicht}</div>
//             </div>
//             <div className="col-span-4 pr-8 text-right sm:col-span-3 lg:pr-36">
//                 <div className="item text-regular font-freight tracking-wider sm:text-xl">EUR {props.data.price},-</div>
//             </div>
//             <div className="col-span-10 mt-2 pl-8 opacity-70 sm:col-span-4 sm:mt-0 lg:pl-36">
//                 <div className="item font-freight text-xs tracking-wider sm:text-sm">{props.data.description},-</div>
//             </div>
//             {/* <hr className="col-span-12 mb-3" /> */}
//         </div>
//     );
// };

// export default ListItem;

import React from "react";

const ListItem = (props) => {
    return (
        <div className={`col-span-12 py-4 text-center ${props.bgColor ? "bg-primaryColor-50" : ""}`}>
            <div className="d font-freight text-xl tracking-wider">{props.data.title}</div>

            <div className="mt-1 font-freight text-sm tracking-wider opacity-70">{props.data.description}</div>
        </div>
    );
};

export default ListItem;
