import { motion } from "motion/react";

const ruppellBird = "/assets/ruppell_bird_1.png";
const logoBird = "/assets/logo_bird.png";
const circleBackground = "/assets/cirlce-background.png";

export const AboutFragment = () => {
  return (
    <section id="about-fragment" className="h-full w-[100vw] bg-white text-black relative  md:max-h-[950px]">
      <div className="flex flex-col md:flex-row  w-full z-4">
        <div
          id="second-section-about"
          className="flex-1 py-5 min-h-[1100px] md:min-h-[950px] lg:min-h-[900px] md:h-[calc(100vh-100px)] relative md:static md:w-1/2"
        >
          <h1 className="md:absolute text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-deep-black-500 px-4 text-center w-full pt-10 z-4 leading-14">
            APRENDE SIN LIMITES
          </h1>

          <div
            id="circle-background"
            className="text-xl lg:text-2xl absolute md:w-[calc(800px)] z-1 top-60 lg:top-55 leading-10"
          >
            <img
              className="md:w-[450px] min-w-[400px]"
              src={circleBackground}
              alt=""
            />
          </div>

          <p
            id="text-section-1"
            className="text-lg lg:text-xl absolute max-w-[500px] md:max-w-full md:w-[580px] lg:w-[800px] margin-dicrease-1 px-5 z-4 top-85 lg:top-85 leading-10 md:pl-25"
          >
            Cada aprendizaje es un paso hacia nuevas oportunidades. Descubre
            cursos interactivos, conecta con una <b>comunidad vibrante</b> y
            desarrolla habilidades que marcarán la diferencia.{" "}
            <b>¡Empieza tu viaje hoy!</b>
          </p>

          <div className="flex md:flex-none justify-center md:justify-normal w-full">
            <p
              id="text-section-2"
              className="text-lg lg:text-xl absolute md:w-[450px] lg:w-[650px] max-w-[500px] md:max-w-full px-10 z-4 bottom-40 md:bottom-50 leading-10 md:pl-25"
            >
              Descubre cursos dinámicos, conecta con una comunidad y{" "}
              <b>crea tu propio camino.</b>
            </p>
          </div>

          <div className="flex justify-center mt-10 absolute w-full md:w-1/2 bottom-0 mb-20 ">
            <a className="bg-golden-yellow-600 text-white p-3 text-lg rounded-lg font-bold px-10 z-50 hover:bg-golden-yellow-500 transition-colors" href="/">
              Comienza ahora
            </a>
          </div>
        </div>
        <div className="flex-1 py-5 min-h-[700px] md:min-h-[950px] lg:min-h-[900px] md:h-[calc(100vh-100px)] relative md:static md:w-1/2 bg-custom-gray">
          <motion.div viewport={{ once: true }}>
            <img
              className="min-w-[1170px] absolute left-[calc(680px-(1400px-100vw))] top-[-80px] md:min-w-[1820px] md:left-[calc(750px-(1800px-100vw))] lg:left-[calc(600px-(1800px-100vw))] md:top-[-200px] z-5"
              src={ruppellBird}
              alt=""
            />
          </motion.div>

          <div
            id="logo-silver-section-2"
            className="flex justify-center absolute bottom-10 md:pr-40 md:mr-10 min-w-[600px] md:max-w-[800px]"
          >
            <motion.div
              id="logo-silver-animation"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity }}
            >
              <img src={logoBird} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFragment;
