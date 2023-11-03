import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Observer from "../../../utils/Observer";
const Price = () => {
  const observerRef = useRef(null);
  const [observer, setObserver] = useState(false);
  useEffect(() => {
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
      ref={observerRef}
      layout
      layoutId="underline"
      className="w-full h-fit flex justify-center flex-col items-center "
    >
      <div
        className="
        h-fit
        w-fit
        py-10
        px-5
        [&>h1]:text-7xl
      "
      >
        <span
          className={`
          block
                h-2
                w-0
                mb-6
                bg-orange-600
    ${observer ? "animate-[loader1_3s_ease-in-out_forwards]" : ""}
                `}
        ></span>
        <h1>Price List</h1>
      </div>

      <div
        className="
        grid
        grid-cols-3
        content-center
        h-fit

        [&>div]:border
        [&>div]:h-screen
        [&>div>h1]:text-5xl
      "
      >
        <div>
          <h1>Single Training</h1>
          <strong>$150</strong>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <button>Add to cart</button>
        </div>
        <div>
          <h1>Package of 8 workouts</h1>
          <strong>$150</strong>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <button>Add to cart</button>
        </div>
        <div>
          <h1>Package of 12 workouts</h1>
          <strong>$150</strong>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <button>Add to cart</button>
        </div>
      </div>
    </motion.div>
  );
};
export default Price;
