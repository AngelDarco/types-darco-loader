// import styles from "./home.module.css";
import fondo from "../../../assets/videos/girl.mp4";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section className="w-full h-full flex items-center justify-center relative">
      <motion.div layout layoutId="underline"
      // className={`${styles.homeContainer}`}
      >
        <div
          className="w-full h-full absolute top-0 left-0 z-10"
        >
          <video muted autoPlay loop preload="metadata" className="w-full h-full object-cover">
            <source src={fondo} type="video/mp4" />
          </video>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center flex-col dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)]">
          <h1 className="text-7xl drop-shadow-[0_0_6px_var(--background-color)]">Personal Trainer</h1>
          <h3 className="text-2xl bold shadow-md">I will help you achieve the intended results  </h3>
        </div>
      </motion.div>
    </section>
  );
};
export default Home;