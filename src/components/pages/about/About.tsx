import { motion } from "framer-motion";
import styles from "./about.module.css";
const About = () => {
  return (
    // <div className={`${styles.aboutContainer} w-full border flex  justify-center`}>
      <motion.div layout layoutId="underline"
      className={`${styles.aboutContainer} w-full flex justify-center`}>
      <h1>About us </h1>
      </motion.div>
    // </div>
  );
};

export default About;