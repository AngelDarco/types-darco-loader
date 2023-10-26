import { motion } from "framer-motion";
import Observer from "../../../utils/Observer";
import { useEffect, useRef, useState } from "react";
const Offers = () => {
    const observerRef = useRef(null);
    const [observer, setObserver] = useState(false);
    useEffect(() => {
      // observer to trigger animations
      if (!observerRef.current) return;
      const observer = new Observer(observerRef.current);
      const res = (res: boolean) => setObserver(res);
      observer.getObserver(res);
  
    }, [observerRef.current, observer]);
  
    return (
        <motion.div layout layoutId="underline"
        className="w-full flex justify-center"
        style={{height: "calc(100vh - var(--header-height))"}}
        >
                    <div className="w-fit col-start-1 col-end-4 place-self-center self-end 
        group">
          <span className="bg-orange-600 w-0 h-2 block 
          group-hover:w-full
          animate-[loader1_3s_ease-in-out_forwards] 
           "></span>
          <h1 className="!text-7xl">
            OFFER</h1>
        </div>
        </motion.div>
    );
};
export default Offers;