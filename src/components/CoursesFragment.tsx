import CourseList from "./pieces/CourseList";
import NestFragment from "./NestFragment";
import OwnModule from "./pieces/OwnModule";
import RewardBand from "./pieces/RewardBand";
import { useCategories } from "../hooks/useCategories";

export const CoursesFragment = () => {
  const { categories, loading } = useCategories();

  return (
    <>
      {!loading && Array.isArray(categories) && categories.length > 0 && (
        <section className="bg-custom-gray">
          <div className="h-full relative z-50">
            <div className="w-[10px] sm:w-[20px] md:w-[30px] lg:w-[50px] md:ml-5 h-full ml-2 bg-golden-yellow-500 shadow-lg absolute z-1"></div>

            <div className="relative top-10 mb-20 w-flex flex-col space-y-15">
              {categories.map((category, index) => (
                <CourseList
                  key={category.id}
                  category={category}
                  sense={index % 2 == 0}
                />
              ))}
            </div>

            <NestFragment />
            <OwnModule />
            <RewardBand />
          </div>
        </section>
      )}
    </>
  );
};

export default CoursesFragment;
