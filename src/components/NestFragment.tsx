import { motion } from "motion/react";
import NestItem from "./pieces/NestItem";

import logoSilver from "./../assets/logo_silver.png";
import birdNest from "./../assets/bird-nest.png";
import { useNests } from "../hooks/useNests";

export const NestFragment = () => {
  const { nests, loading } = useNests();

  return (
    <>
      {!loading && nests && nests.length > 0 && (
        <div className="relative w-full py-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-deep-black-500 px-2 md:px-10 pb-3 text-center w-full leading-12 md:leading-20 relative z-30">
            Conoce <br className="md:hidden" />
            nuestros nidos
          </h1>

          <div className="flex justify-end">
            <hr className="py-3 text-muted-500 max-w-[300px] min-w-[180px] w-1/3" />
          </div>
          <div className="flex justify-end">
            <hr className="py-3 text-muted-500 max-w-[400px] min-w-[220px] w-1/2" />
          </div>

          <div className="flex justify-center w-full">
            <div className="space-y-10 md:space-y-[-20px] lg:max-w-[1200px] lg:min-h-[500px] lg:space-0 lg:flex lg:flex-wrap lg:gap-15 lg:justify-center">
              {(() => {
                if (loading) {
                  return (
                    <div className="flex justify-center items-center h-40 w-full">
                      <span className="animate-spin inline-block w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full"></span>
                    </div>
                  );
                } else {
                  return nests.map((nest, index) => (
                    <NestItem
                      key={nest.id}
                      nest={nest}
                      variant={index % 2 === 0 ? 'left' : 'right'}
                    />
                  ));
                }
              })()}
            </div>

            <div className="relative flex max-w-[1200px]">
              <div
                id="bird-nest"
                className="absolute w-full flex justify-end z-3 bottom-[-280px] right-[-80px] lg:bottom-[-200px] xl:hidden"
              >
                <img
                  className="min-w-[400px] md:min-w-[500px] xl:min-w-[600px]"
                  src={birdNest}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="absolute z-1 lg:bottom-[-300px] w-full flex justify-center items-center inset-1 ">
            <motion.div
              id="logo-silver-animation"
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity }}
            >
              <img
                id="logo-silver"
                className="min-w-[500px] md:w-[800px] lg:w-[900px]"
                src={logoSilver}
                alt="Logo Silver"
              />
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default NestFragment;
