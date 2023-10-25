import { motion } from "framer-motion";
const Offers = () => {
    return (
        <motion.div layout layoutId="underline"
        className="w-full flex justify-center"
        style={{height: "calc(100vh - var(--header-height))"}}
        >
            <h1>Offers Working ...</h1>
        </motion.div>
    );
};
export default Offers;