import styles from "./home.module.css";
import fondo from "../../../assets/girl.mp4";
const Home = () => {
  // console.log(fondo);
  return (
    <div
      className={`${styles.homeContainer} w-full h-full flex items-center justify-center `}
    >
      <video muted autoPlay loop preload="metadata" className="w-full h-full object-cover">
        <source src={fondo} type="video/mp4" />
      </video>
    </div>
  );
};
export default Home;