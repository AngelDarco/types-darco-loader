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
      rootMargin: "600px",
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
      className="w-full h-fit flex justify-center flex-col items-center py-16"
    >
      <div
        className="
        h-fit
        w-fit
        py-10
        px-5
        [&>h1]:text-7xl
        [&>h1]:my-14
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
        gap-16
        grid-cols-3
        content-center
        h-fit
        p-4
        pb-36

        [&>div]:border
        [&>div]:px-4
        [&>div]:py-10
        [&>div]:text-center
        
        [&>div>h1]:text-3xl
        [&>div>h1]:min-h-[100px]
        [&>div>h1]:flex
        [&>div>h1]:items-center
        [&>div>h1]:justify-center

        [&>div>span]:block
        [&>div>span]:py-5
        [&>div>span]:text-5xl
        [&>div>p]:py-3
        [&>div>button]:my-6
        [&>div>button]:py-6
        [&>div>button]:px-12
        [&>div>button]:border
        [&>div>button]:border-orange-600

        [&>div:nth-child(2)]:border-orange-600
        [&>div:nth-child(2)]:scale-110
        [&>div:nth-child(2)>button]:bg-orange-600
      "
      >
        <div>
          <h1>Single Training</h1>
          <span>$150</span>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <button>Add to cart</button>
        </div>
        <div>
          <h1>Package of 8 workouts</h1>
          <span>$1050</span>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <p>Lorem ipsum dolor sit.</p>
          <button>Add to cart</button>
        </div>
        <div>
          <h1>Package of 12 workouts</h1>
          <span>$2050</span>
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
