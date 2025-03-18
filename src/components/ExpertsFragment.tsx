import { Autoplay } from "swiper/modules";
import arrowUp from "./../assets/arrow-up.png";
import logoEarth from "./../assets/logo-earth.png";

import { Swiper, SwiperSlide } from "swiper/react";
import data from "./../data.json";

export const ExpertsFragment = () => {
  return (
    <section className="bg-deep-second-black-500 w-full">
      <div className="flex justify-center w-full">
        <img
          className="absolute mt-[-30px] z-50 w-[50px]"
          src={arrowUp}
          alt=""
        />
      </div>
      <div className="bg-deep-second-black-500 h-full py-10 relative z-50">
        <div className="relative md:ml-10 my-10 ">
          <div className="w-[5px] h-full ml-3 bg-golden-yellow-500 shadow-lg absolute z-1"></div>
          <p className="text-white my-4 pl-8 sm:pl-10 sm:px-5 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] sm:leading-12 text-xl sm:text-3xl md:text-4xl font-bold relative z-2">
            Conviértete en la máxima autoridad en tu área de especialización
          </p>
        </div>

        <Swiper
          autoplay={{
            delay: 0,
          }}
          className="h-full"
          direction="horizontal"
          loop
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          speed={8000}
        >
          {data.experts.map((expert, index) => (
            <SwiperSlide
              className="w-full h-full max-w-[260px] sm:max-w-[300px] bg-deep-black-500 shadow-2xl rounded-2xl relative"
              key={expert.id}
              virtualIndex={index}
            >
              <div className="relative z-50">
                <img
                  src={`https://picsum.photos/300/400?random=${index}}]`}
                  alt={`Card 1}`}
                  className="w-full h-[400px] object-cover shadow-2xl rounded-t-2xl"
                />
                <div className="h-[100px] flex flex-col justify-center items-start p-5 space-y-2">
                  <h2 className="text-xl text-golden-yellow-500 text-center font-bold">
                    {expert.name}
                  </h2>
                  <p className="text-white text-center text-sm sm:text-md">
                    {expert.proffesion}
                  </p>
                  <div className="w-[2px] h-[120px] bg-golden-yellow-500 shadow-lg absolute z-50 right-0 mr-5 bottom-[20px]"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center w-full pt-10">
          <hr className="w-[100px] text-golden-yellow-500 border-1" />
        </div>

        <img src={logoEarth} className="absolute right-[-230px] top-[50px] max-w-[400px] md:max-w-[600px] lg:max-w-[700px]" alt="" />
      </div>
    </section>
  );
};

export default ExpertsFragment;
