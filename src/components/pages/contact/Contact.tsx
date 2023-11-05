import { motion } from "framer-motion";
import contact from "../../../assets/videos/contact.mp4";
import poster from "../../../assets/imgs/poster.jpg";
import { useEffect, useRef } from "react";
const Contact = () => {
  const videoRef = useRef<HTMLVideoElement | HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.5;
  }, [videoRef]);
  return (
    <motion.div
      layout
      layoutId="underline"
      className="
      h-screen
      relative
      -mt-[var(--header-height)]
      "
    >
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        poster={poster}
        className="
        w-full
        h-full
        object-cover        
        "
      >
        <source src={contact} type="video/mp4" />
      </video>
      <div
        className={`
      absolute
      top-0
      left-0
      z-10
      w-full h-full
      bg-gradient-radial
      from-[#b5bdc899]
       from-0%,
       via-[#2525251a]
       from-36%,
       to-[#000000]
       to-100%

      [&>h1]:text-4xl
      [&>*]:drop-shadow-[0_0_6px_var(--background-color)]
      [&>h1]:text-center
      [&>h1]:mt-[100px]
      
      [&>p]:text-2xl
      [&>p]:p-8
      [&>p]:text-center

        `}
      >
        <h1>Still hesitate ....</h1>
        <p>Sign up for the first FREE training</p>
        <form
          className="
          flex
          flex-col
          justify-center
          items-center

          [&>label]:flex
          [&>label]:flex-col
          [&>label]:text-lg
          [&>label]:font-bold

          [&>label>input]:w-[400px]
          [&>label>input]:p-5
          [&>label>input]:rounded
          [&>label>input]:bg-[var(--color)]
          [&>label>input]:text-[var(--background-color)]
          [&>label>input]:font-normal
          [&>label>input]:outline-0

          [&>button]:p-5
          [&>button]:rounded
          [&>button]:my-5
          [&>button]:bg-orange-600
          [&>button]:hover:bg-orange-500
        "
        >
          <label>
            Your email:
            <input type="email" placeholder="Your email" />
          </label>
          <label>
            Full name:
            <input type="text" placeholder="Full name" />
          </label>
          <button>Sign Up for a free training</button>
        </form>
      </div>
    </motion.div>
  );
};
export default Contact;
