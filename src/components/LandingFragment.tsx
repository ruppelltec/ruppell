import ruppellTitle from "./../assets/ruppell_title.png";
import logoSilver from "./../assets/logo_silver.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useMemo, useState } from "react";
import {
  // type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";

import { loadSlim } from "@tsparticles/slim";
import { motion } from "motion/react";
import { useCategories } from "../hooks/useCategories";
import AnimatedSearchInput from "./pieces/AnimatedSearchInput";

export const LandingFragment = () => {
  const { categories } = useCategories();
  const [init, setInit] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // ...existing code...

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById("about-fragment") ||
      document.querySelector("section:nth-child(2)");
    if (nextSection) {
      const navbarHeight = 80; // Compensar la altura del navbar
      const offsetTop = nextSection.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
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
          // particlesLoaded={particlesLoaded}
          options={options}
        />

        <div className="flex flex-col items-center justify-center relative pt-20 w-full min-h-[500px] md:min-h-[750px]">
          <div className="absolute z-50 mb-10">
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
            className="mt-32 md:mt-0 flex justify-center"
          >
            <img
              src={ruppellTitle}
              alt="Ruppell Title"
              className="relative z-40 px-5 w-full max-w-[400px] md:max-w-[700px] lg:max-w-[700px]"
            />
          </motion.div>
        </div>

        <div className="relative z-40 px-5">
          <AnimatedSearchInput categories={categories} />
        </div>

        <motion.div
          className="flex justify-center absolute bottom-0 mb-25 w-full cursor-pointer z-50"
          onClick={() => {
            scrollToNextSection();
            // Animación de pulso al hacer clic
            setClicked(true);
            setTimeout(() => setClicked(false), 300);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: clicked ? [1, 1.3, 1] : 1,
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
                ease: "easeInOut"
              }
            }}
          >
            <FontAwesomeIcon
              className="text-3xl text-white hover:text-golden-yellow-400 transition-colors"
              icon={faAngleDown}
            />
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return <></>;
};

export default LandingFragment;
