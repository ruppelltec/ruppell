import universityStudent from "./../../assets/university-student.png";
import circleModule from "./../../assets/circle-module.png";
import birdNest from "./../../assets/bird-nest.png";

export const OwnModule = () => {
  return (
    <section className="relative z-2 md:pb-10 bg-white">
      <div className=" bg-beige-sand-500 shadow-xl h-full">
        <div className="lg:hidden">
          <h1 className="text-4xl text-custom-size-1 md:text-6xl pt-40 md:pt-20 pb-5 font-bold text-deep-black-500 pl-5 w-full leading-12 md:leading-16">
            Crea tu propio <br /> módulo
          </h1>
          <div className="flex justify-end">
            <hr className="py-3 text-muted-500 max-w-[300px] min-w-[180px] w-1/3" />
          </div>
          <div className="flex justify-end">
            <hr className="py-3 text-muted-500 max-w-[400px] min-w-[220px] w-1/2" />
          </div>
        </div>
        <div className="md:flex justify-center items-center w-full">
          <div className="order-1 md:order-1 mr-10 z-4 relative md:w-[500px]">
            <img
              className="min-w-[200px] w-full max-w-[400px] md:hidden"
              src={universityStudent}
              alt=""
            />
          </div>

          <div className="flex md:order-2 justify-center w-full md:pl-20 md:pr-5">
            <div className="lg:max-w-[800px]">
              <div className="relative flex max-w-[1200px]">
                <div
                  id="bird-nest"
                  className="hidden absolute w-full xl:flex justify-end z-3 right-[-210px] top-[-80px]"
                >
                  <img
                    className="xl:min-w-[700px] object-cover"
                    src={birdNest}
                    alt=""
                  />
                </div>
              </div>

              <div className="hidden lg:block lg:max-w-[800px]">
                <h1 className="text-4xl text-custom-size-1 md:text-6xl xl:text-7xl pt-40 md:pt-20 pb-5 font-bold text-deep-black-500 pl-5 w-full leading-20 md:leading-16">
                  Crea tu propio <br /> módulo
                </h1>
                <div className="flex justify-end">
                  <hr className="py-3 text-muted-500 max-w-[300px] min-w-[180px] w-1/3" />
                </div>
                <div className="flex justify-end">
                  <hr className="py-3 text-muted-500 max-w-[400px] min-w-[220px] w-1/2" />
                </div>
              </div>

              <div className="flex justify-start md:justify-center lg:justify-start w-full">
                <p className="text-lg lg:text-xl text-deep-black-500 px-6 py-5 md:max-w-[500px] lg:max-w-[800px] md:leading-10">
                  Imagina tener la oportunidad de compartir tu experiencia y
                  conocimientos con una audiencia apasionada. Crear tu propio
                  seminario te permite establecer un espacio único para{" "}
                  <b>enseñar, inspirar y conectar</b> con personas que buscan
                  aprender de ti.
                </p>
              </div>

              <div
                id="circle-background-module"
                className="absolute md:w-[800px] bottom-100 right-[-100px] z-1 top hidden"
              >
                <img
                  className="md:w-[450px] min-w-[400px]"
                  src={circleModule}
                  alt=""
                />
              </div>

              <div className="flex justify-center lg:max-w-[800px]">
                <p className="text-lg lg:text-xl text-deep-black-500 text-center px-6 py-4 max-w-[500px] md:leading-10">
                  ¡Haz realidad tu idea y comienza a compartir tu sabiduría con
                  el mundo! <br /> <b>¿Cuál es tu legado?</b>
                </p>
              </div>

              <div className="flex justify-center py-5 w-full  lg:max-w-[800px]">
                <a className="bg-golden-yellow-600 text-white p-3 text-lg rounded-2xl font-bold px-10 hover:bg-golden-yellow-500 transition-colors" href="/">
                  Comienza ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        className="absolute hidden md:block min-w-[200px] w-2/5 md:max-w-[350px] lg:max-w-[450px] bottom-[-40px] shadow-lg"
        src={universityStudent}
        alt=""
      />
    </section>
  );
};

export default OwnModule;
