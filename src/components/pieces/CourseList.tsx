import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "../../types";

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

    <div className="md:flex justify-center items-center h-full">
      <div className="mr-5 md:ml-10 md:max-w-[450px] lg:min-w-[500px]">
        <p className="text-md mb-4 text-deep-black-500 pt-5 leading-8">
          {category.description}
        </p>
        <div className="flex justify-center my-10 w-full">
          <a className="bg-orange-earth-500 text-white p-3 text-md rounded-full shadow-lg font-bold px-10" href="/">
            Conoce más
          </a>
        </div>
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
        spaceBetween={24}
        speed={8000}
      >
        {category.courses.map((course, index) => (
          <SwiperSlide
            className="max-w-[230px] md:max-w-[270px] lg:max-w-[300px] h-full pb-5 mb-5 bg-white shadow-lg rounded-2xl"
            key={course.id}
            virtualIndex={index}
          >
            <img
              src={`https://picsum.photos/200/185?random=${index}}]`}
              alt={`Card 1}`}
              className="w-full h-[185px] object-cover rounded-t-xl"
            />
            <div className="pl-4 pt-5 h-full">
              <div className="min-h-[60px] flex items-center">
                <h3 className="text-md text-deep-black-500 font-bold mb-2">
                  {course.title}
                </h3>
              </div>
              <hr className="mb-4 text-muted-500 relative" />
              <div className="flex items-center justify-stretch space-x-2">
                <div>
                  <span className="text-orange-earth-500">
                    <FontAwesomeIcon className="text-xl" icon={faStar} />
                  </span>
                  <span className="ml-1 text-orange-earth-500 font-medium">
                    {course.popularity}
                  </span>
                </div>
                <div>
                  <span className="text-deep-black-500 text-sm text-end">
                    {course.creator}
                  </span>
                </div>
              </div>
            </div>
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

    <div className="md:flex justify-center items-center h-full">
      <div className="mr-5 md:ml-10 md:max-w-[450px] lg:min-w-[500px] md:order-2">
        <p className="text-md mb-4 text-deep-black-500 pt-5 leading-8">
          {category.description}
        </p>
        <div className="flex justify-center my-10 w-full">
          <a className="bg-orange-earth-500 text-white p-3 text-md rounded-full shadow-lg font-bold px-10" href="/">
            Conoce más
          </a>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 0,
          reverseDirection: true,
        }}
        className="h-full"
        direction="horizontal"
        loop
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={24}
        speed={8000}
      >
        {category.courses.map((course, index) => (
          <SwiperSlide
            className="max-w-[230px] md:max-w-[270px] lg:max-w-[300px] h-full pb-5 mb-5 bg-white shadow-lg rounded-2xl"
            key={course.id}
            virtualIndex={index}
          >
            <img
              src={`https://picsum.photos/200/185?random=${index}}]`}
              alt={`Card 1}`}
              className="w-full h-[185px] object-cover rounded-t-xl"
            />
            <div className="pl-4 pt-5 h-full">
              <div className="min-h-[60px] flex items-center">
                <h3 className="text-md text-deep-black-500 font-bold mb-2">
                  {course.title}
                </h3>
              </div>
              <hr className="mb-4 text-muted-500 relative" />
              <div className="flex items-center justify-stretch space-x-2">
                <div>
                  <span className="text-orange-earth-500">
                    <FontAwesomeIcon className="text-xl" icon={faStar} />
                  </span>
                  <span className="ml-1 text-orange-earth-500 font-medium">
                    {course.popularity}
                  </span>
                </div>
                <div>
                  <span className="text-deep-black-500 text-sm text-end">
                    {course.creator}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default CourseList;
