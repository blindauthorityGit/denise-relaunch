import React from "react";
import { CircleLoader } from "react-spinners";

const Spinner = ({ loading }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            <CircleLoader color={"#B1A269"} loading={loading} size={100} />
        </div>
    );
};

export default Spinner;
