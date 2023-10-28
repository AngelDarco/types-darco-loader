import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Observer from "../../../utils/Observer";

import img01 from "../../../assets/imgs/gallery_01.jpg";
import img02 from "../../../assets/imgs/gallery_02.jpg";
import img03 from "../../../assets/imgs/gallery_03.jpg";
import img04 from "../../../assets/imgs/gallery_04.jpg";
import img05 from "../../../assets/imgs/gallery_05.jpg";
import img06 from "../../../assets/imgs/gallery_06.jpg";
import img07 from "../../../assets/imgs/gallery_07.jpg";
import img08 from "../../../assets/imgs/gallery_08.jpg";
import img09 from "../../../assets/imgs/gallery_09.jpg";
import img10 from "../../../assets/imgs/gallery_10.jpg";
import img11 from "../../../assets/imgs/gallery_11.jpg";
import img12 from "../../../assets/imgs/gallery_12.jpg";

const Gallery = () => {
  const observerRef = useRef(null);
  const [observer, setObserver] = useState(false);

  useEffect(() => {
    if (!observerRef.current) return;
    const obsv = new Observer(observerRef.current, {
      root: null,
      rootMargin: "300px",
      threshold: 1,
    });
    const res = (res: boolean) => setObserver(res);
    obsv.getObserver(res);
  }, [observerRef, observer]);

  return (
    <motion.div
      ref={observerRef}
      className="
        h-fit
        w-full
        p-4
        flex flex-col items-center
    "
    >
      <div
        className="
      [&>h1]:text-7xl 
      [&>h1]:py-6
      my-10
      [&>h1]:text-center
      "
      >
        <span
          className={`
          block
            h-3 bg-orange-500
            ${observer ? "animate-[loader1_2s_linear_forwards]" : ""}
        `}
        ></span>
        <h1>Gallery</h1>
      </div>
      <div
        className="
      w-full h-fit
      grid gap-2
      [&>div>img]:w-[100%]
      [&>div>img]:h-[450px]
      [&>div>img]:object-cover
      grid-cols-3
      "
      >
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img01} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img02} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img03} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img04} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img05} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img06} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img07} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img08} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img09} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img10} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img11} alt="" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <img src={img12} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Gallery;
