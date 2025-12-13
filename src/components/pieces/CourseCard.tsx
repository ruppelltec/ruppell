import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Course } from "../../types";
import SmartImage from "../SmartImage";

interface CourseCardProps {
  course: Course;
  // index: number;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="w-[280px] h-auto pb-3 mb-5 bg-white shadow-lg rounded-2xl flex-shrink-0 flex flex-col justify-center items-center mx-auto">
      <SmartImage
        src={course.image}
        alt={`Course: ${course.title}`}
        className="w-full h-[180px] object-cover rounded-t-xl"
      />
      <div className="pl-4 pt-4 w-full">
        <div className="min-h-[50px] flex items-center justify-center">
          <h3 className="text-sm text-deep-black-500 font-bold mb-2 text-center">
            {course.title}
          </h3>
        </div>
        <hr className="mb-3 text-muted-500 relative" />
        <div className="flex items-center justify-stretch space-x-2">
          <div className="flex items-center">
            <span className="text-orange-earth-500">
              <FontAwesomeIcon className="text-lg" icon={faStar} />
            </span>
            <span className="ml-1 text-orange-earth-500 font-medium text-sm">
              {course.popularity}
            </span>
          </div>
          <div className="flex-1 text-right">
            <span className="text-deep-black-500 text-xs mr-2">
              {course.expert}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;