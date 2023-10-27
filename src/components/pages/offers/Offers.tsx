import { motion } from "framer-motion";
import Observer from "../../../utils/Observer";
import { useEffect, useRef, useState } from "react";

import personalTraining from "../../../assets/imgs/offer_personal-training.jpg";
import onlineTraining from "../../../assets/imgs/offers_online.jpg";
import diet from "../../../assets/imgs/offers_nutrition.jpg";

const Offers = () => {
  const observerRef = useRef(null);
  const [observer, setObserver] = useState(false);
  useEffect(() => {
    // observer to trigger animations
    if (!observerRef.current) return;
    const observer = new Observer(observerRef.current, {
      root: null,
      rootMargin: "300px",
      threshold: 1,
    });
    const res = (res: boolean) => setObserver(res);
    observer.getObserver(res);
  }, [observerRef.current, observer]);

  return (
    <motion.div
      layout
      layoutId="underline"
      className="h-screen
      grid 
      grid-cols-3
      grid-rows-1
       content-center
       m-auto
       p-4
       py-10

       [&>div]:text-center
       [&>div]:p-2
       [&>div]:h-fit
       [&>div]:h-min-[350px]
       
      [&>div>div>img]:w-full
      [&>div>div>img]:h-64
      [&>div>div>img]:object-cover
      [&>div>div>img]:rounded-2xl

      [&>div>h1]:text-3xl
      [&>div>h1]:text-center
      [&>div>h1]:py-4
      [&>div>p]:px-[2px]
      "
      ref={observerRef}
    >
      <div
        className="
      h-fit
      w-fit
      p-4
      m-auto
      flex
      flex-col
      justify-center
        col-start-1
        col-end-[-1]
        "
      >
        <span
          className={`
        bg-orange-600 w-0 h-2 block 
        ${observer ? "animate-[loader1_2s_linear_forwards]" : ""}
        `}
        ></span>
        <h1 className="!text-7xl">OFFER</h1>
      </div>

      <motion.div className="personal">
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1 },
            filter: "contrast(120%)",
          }}
        >
          <img src={personalTraining} alt="personal_training" />
        </motion.div>
        <h1>Personal Training</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
      <motion.div className="online">
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1 },
            filter: "contrast(120%)",
          }}
        >
          <img src={onlineTraining} alt="online_trainer" />
        </motion.div>
        <h1>Online Collaboration</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
      <motion.div className="diet">
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.1 },
            filter: "contrast(120%)",
          }}
        >
          <img src={diet} alt="nutrition_guide" />
        </motion.div>
        <h1>Dietary Consultation</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </motion.div>
    </motion.div>
  );
};
export default Offers;
