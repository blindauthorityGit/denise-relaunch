import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,

        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
    exit: {
        opacity: 0,

        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
};

const PageChangeFX = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        // scroll to top of the page on route change
        window.scrollTo(0, 0);
    }, [router.asPath]);

    return (
        <motion.div key={router.route} initial="initial" animate="animate" exit="exit" variants={variants}>
            <div className="bg-white absolute top-0 bottom-0 w-full z-10" />
            <div className="relative z-20">{children}</div>
        </motion.div>
    );
};

export default PageChangeFX;
