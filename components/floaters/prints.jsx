import { RiPrinterLine } from "react-icons/ri/index.js";
import { motion } from "framer-motion";

export default function PrintAvailability() {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 2,
                type: "spring",
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className="absolute top-8 right-4 z-20 flex items-center gap-2 rounded-lg bg-white p-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.span className="text-xs font-medium">Drucke erhältlich</motion.span>
        </motion.div>
    );
}
