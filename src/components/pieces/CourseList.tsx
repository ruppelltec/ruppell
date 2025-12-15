import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types";
import CourseCard from "./CourseCard";

export const CourseList = ({
  category,
  sense,
}: {
  category: Category;
  sense: boolean;
}) => {
  return sense ? SenseLeftItem({ category }) : SenseRightItem({ category });
};

const SenseLeftItem = ({ category }: { category: Category }) => (
  <div className="pl-5 md:pl-0 ml-4 md:ml-10 bg-white shadow-lg rounded-l-2xl pt-10 relative z-2">
    <div className="w-[250px] h-[20px] rounded-l-full bg-orange-earth-500 shadow-lg absolute z-1 right-0 hidden md:block"></div>

    <div className="pr-4">
      <h2 className="text-xl sm:text-3xl md:ml-10 font-bold mb-2 text-orange-earth-500">
        {category.title}
      </h2>
      <hr className="mb-4 text-muted-500 relative" />
    </div>

    <div className="md:flex justify-center items-center min-h-[400px] pb-20 pt-5">
      <div className="mr-5 md:ml-10 md:max-w-[450px] lg:min-w-[500px]">
        <p className="text-md mb-4 text-deep-black-500 pt-5 leading-8">
          {category.description}
        </p>
        <div className="flex justify-center my-10 w-full">
          <a
            className="bg-orange-earth-500 text-white p-3 text-md rounded-full shadow-lg font-bold px-10 hover:bg-orange-earth-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-earth-500 focus:ring-opacity-50"
            href="/"
          >
            Conoce más
          </a>
        </div>
      </div>
      <Swiper
        className="swiper-course-cards w-[500px] md:w-[600px] lg:w-[1500px] h-[400px]"
        direction="horizontal"
        loop={false}
        slidesPerView={1}
        spaceBetween={60}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.isArray(category.courses) && category.courses.map((course, index) => (
          <SwiperSlide key={course.id} virtualIndex={index}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

const SenseRightItem = ({ category }: { category: Category }) => (
  <div className="pl-5 mr-4 md:mr-16 bg-white shadow-lg rounded-r-2xl pt-10 relative z-2">
    <div className="w-[250px] h-[20px] rounded-r-full bg-orange-earth-500 shadow-lg absolute z-1 left-0 hidden md:block"></div>

    <div className="pr-4">
      <h2 className="text-xl md:text-3xl text-end md:ml-10 font-bold mb-2 pr-8 text-orange-earth-500">
        {category.title}
      </h2>
      <hr className="mb-4 text-muted-500 relative left-4" />
    </div>

    <div className="md:flex justify-center items-center min-h-[400px] pb-20 pt-5">
      <div className="mr-5 md:ml-10 md:max-w-[450px] lg:min-w-[500px] md:order-2">
        <p className="text-md mb-4 text-deep-black-500 pt-5 leading-8">
          {category.description}
        </p>
        <div className="flex justify-center my-10 w-full">
          <a
            className="bg-orange-earth-500 text-white p-3 text-md rounded-full shadow-lg font-bold px-10 hover:bg-orange-earth-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-earth-500 focus:ring-opacity-50"
            href="/"
          >
            Conoce más
          </a>
        </div>
      </div>
      <Swiper
        className="swiper-course-cards w-[500px] md:w-[600px] lg:w-[1500px] h-[400px]"
        direction="horizontal"
        loop={false}
        slidesPerView={1}
        spaceBetween={60}
        scrollbar={{ draggable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.isArray(category.courses) && category.courses.map((course, index) => (
          <SwiperSlide key={course.id} virtualIndex={index}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default CourseList;

