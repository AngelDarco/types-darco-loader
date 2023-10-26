import { motion } from "framer-motion";

const AnimationHeader = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div className="[&>a]:h-full [&>a]:w-max [&>a]:px-2 [&>a]:flex [&>a]:items-center [&>a]:justify-around"
        initial={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
};
export default AnimationHeader;