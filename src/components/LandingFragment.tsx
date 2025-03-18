import ruppellTitle from "./../assets/ruppell_title.png";
import logoSilver from "./../assets/logo_silver.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useMemo, useState } from "react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";

import { motion } from "motion/react";

export const LandingFragment = () => {
  const [init, setInit] = useState(false);

  const slides = Array.from({ length: 10 }).map((el, index) => {
    return (
      <div key={index} className="w-full h-full">
        <img
          src={`https://picsum.photos/400/200?random=${index}`}
          alt={`Slide ${index}`}
        />
      </div>
    );
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 75,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
      fullScreen: {
        enable: true,
        zIndex: 1,
      },
    }),
    []
  );

  if (init) {
    return (
      <section
        id="landing-fragment"
        className="relative z-5 w-[100vw] min-h-[800px] md:min-h-[1050px] md:h-[100vh] md:max-h-[1200px] bg-gradient"
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />

        <div className="flex items-center justify-center relative pt-20 w-full min-h-[500px] md:min-h-[750px] ">
          <div className="absolute z-50">
            <motion.div
              id="logo-silver-animation"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity }}
            >
              <img
                id="logo-silver"
                className="md:w-[600px] min-w-[100px]"
                src={logoSilver}
                alt="Logo Silver"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img
              src={ruppellTitle}
              alt="Ruppell Title"
              className="relative z-40 px-5 w-full max-w-[400px] md:max-w-[700px] lg:max-w-[840px] "
            />
          </motion.div>
        </div>

        <Swiper
          autoplay={{
            delay: 0,
          }}
          direction="horizontal"
          loop
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={16}
          speed={5000}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <a href="/" className="absolute z-50">
                {slideContent}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center absolute bottom-0 mb-10 mt-5 w-full">
          <FontAwesomeIcon className="text-3xl text-white" icon={faAngleDown} />
        </div>
      </section>
    );
  }

  return <></>;
};

export default LandingFragment;
