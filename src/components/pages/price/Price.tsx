import {motion} from "framer-motion";
const Price = () => {
    return (
        <motion.div layout layoutId="underline"
        className="w-full flex justify-center"
        style={{height: "calc(100vh - var(--header-height))"}}
        >
            <h1>Price Working ...</h1>
        </motion.div>
    );
};
export default Price;