import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LineButton = (props) => {
    return (
        <Link href={`/${props.link}`}>
            <motion.button
                whileHover={{ scale: 1.05 }}
                className="transition-all-ease mt-8 min-w-[300px] border border-darkText px-12 py-4 font-freight  text-base uppercase  tracking-widest text-darkText 2xl:text-2xl"
            >
                {props.children}
            </motion.button>
        </Link>
    );
};

export default LineButton;
