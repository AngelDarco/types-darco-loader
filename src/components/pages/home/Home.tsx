import fondo from "../../../assets/videos/girl.mp4";
import { motion } from "framer-motion";
import Offers from "../offers/Offers";
import poster from "../../../assets/imgs/poster.jpg";
import Gallery from "../gallery/Gallery";
import Price from "../price/Price";
import Contact from "../contact/Contact";
const Home = () => {
  return (
    <div className="h-fit flex flex-col -mt-[var(--header-height)]">
      <section className=" h-screen flex items-center justify-center relative">
        <motion.div layout layoutId="underline">
          <div className="w-full h-full absolute top-0 left-0 z-10">
            <video
              muted
              autoPlay
              loop
              poster={poster}
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src={fondo} type="video/mp4" />
            </video>
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-20 flex items-center justify-center flex-col dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.2)]">
            <h1 className="text-8xl px-10 drop-shadow-[0_0_6px_var(--color)]">
              Personal Trainer
            </h1>
            <h3 className="text-4xl bold shadow-lg my-9 text-center px-4">
              I will help you achieve the intended results{" "}
            </h3>
            <button className="px-10 py-4 bg-orange-600 text-3xl mt-6 hover:bg-orange-700">
              <motion.div
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                Free Training
              </motion.div>
            </button>
          </div>
        </motion.div>
      </section>

      <section
        className="
           h-screen 
           bg-[var(--background-color)]
            grid
             grid-cols-3
             content-center
             p-4

          [&>div>h1]:text-5xl 
          [&>div>h1]:py-6 
          [&>div]:text-center
          [&>div]:relative
          [&>div]:h-fit
          [&>div]:px-2
    
    [&>div>.svg]:m-auto
    [&>div>.svg]:after:absolute 
    [&>div>.svg]:after:top-7
    [&>div>.svg]:after:left-0
    [&>div>.svg]:after:border
  [&>div>.svg]:after:border-orange-500
    [&>div>.svg]:after:h-[2px]

    [&>div>.svg>svg]:relative
    [&>div>.svg>svg]:z-10

    "
      >
        <div>
          <div
            className="svg w-14 h-14 rounded-full bg-orange-500 p-2 after:!left-[50%]
          after:animate-loader1"
          >
            <svg
              fill="var(--color)"
              id="ww-search"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 14"
            >
              <path d="M9 6.5q0-1.445-1.027-2.473t-2.473-1.027-2.473 1.027-1.027 2.473 1.027 2.473 2.473 1.027 2.473-1.027 1.027-2.473zM13 13q0 0.406-0.297 0.703t-0.703 0.297q-0.422 0-0.703-0.297l-2.68-2.672q-1.398 0.969-3.117 0.969-1.117 0-2.137-0.434t-1.758-1.172-1.172-1.758-0.434-2.137 0.434-2.137 1.172-1.758 1.758-1.172 2.137-0.434 2.137 0.434 1.758 1.172 1.172 1.758 0.434 2.137q0 1.719-0.969 3.117l2.68 2.68q0.289 0.289 0.289 0.703z"></path>
            </svg>
          </div>

          <h1>Interview</h1>
          <p>
            Aenean ac elit tortor. Curabitur dictum suscipit odio non blandit.
          </p>
        </div>

        <div>
          <div
            className="svg w-14 h-14 rounded-full bg-orange-500 p-2 
          after:animate-loader2
          after:!left-[50%]
          "
          >
            <svg
              fill="var(--color)"
              id="ww-child"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 10 14"
            >
              <path d="M9.281 4.281l-2.281 2.281v6.437q0 0.359-0.258 0.617t-0.617 0.258-0.617-0.258-0.258-0.617v-3h-0.5v3q0 0.359-0.258 0.617t-0.617 0.258-0.617-0.258-0.258-0.617v-6.437l-2.281-2.281q-0.219-0.219-0.219-0.531t0.219-0.531 0.531-0.219 0.531 0.219l1.781 1.781h2.875l1.781-1.781q0.219-0.219 0.531-0.219t0.531 0.219 0.219 0.531-0.219 0.531zM6.75 3q0 0.727-0.512 1.238t-1.238 0.512-1.238-0.512-0.512-1.238 0.512-1.238 1.238-0.512 1.238 0.512 0.512 1.238z"></path>
            </svg>
          </div>

          <h1>Training</h1>
          <p>
            In dignissim, nisl in pulvinar vestibulum, tortor diam facilisis
            tellus, laoreet cursus augue erat in diam.
          </p>
        </div>
        <div className="effect">
          <div
            className="svg w-14 h-14 rounded-full bg-orange-500 p-2 
          after:!left-[-50%]
          "
          >
            <svg
              fill="var(--color)"
              id="ww-check-square-o"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 13 14"
            >
              <path d="M11 7.266v2.484q0 0.93-0.66 1.59t-1.59 0.66h-6.5q-0.93 0-1.59-0.66t-0.66-1.59v-6.5q0-0.93 0.66-1.59t1.59-0.66h6.5q0.492 0 0.914 0.195 0.117 0.055 0.141 0.18 0.023 0.133-0.070 0.227l-0.383 0.383q-0.078 0.078-0.18 0.078-0.023 0-0.070-0.016-0.18-0.047-0.352-0.047h-6.5q-0.516 0-0.883 0.367t-0.367 0.883v6.5q0 0.516 0.367 0.883t0.883 0.367h6.5q0.516 0 0.883-0.367t0.367-0.883v-1.984q0-0.102 0.070-0.172l0.5-0.5q0.078-0.078 0.18-0.078 0.047 0 0.094 0.023 0.156 0.062 0.156 0.227zM12.805 3.445l-6.359 6.359q-0.187 0.187-0.445 0.187t-0.445-0.187l-3.359-3.359q-0.187-0.187-0.187-0.445t0.187-0.445l0.859-0.859q0.187-0.187 0.445-0.187t0.445 0.187l2.055 2.055 5.055-5.055q0.187-0.187 0.445-0.187t0.445 0.187l0.859 0.859q0.187 0.187 0.187 0.445t-0.187 0.445z"></path>
            </svg>
          </div>

          <h1>Effect</h1>
          <p>
            Nullam sodales urna molestie, euismod lectus tempus, vehicula urna.
            Sed mattis risus in eros posuere ultrices.{" "}
          </p>
        </div>
      </section>
      <Offers />
      <Gallery />
      <Price />
      <Contact />
    </div>
  );
};
export default Home;
