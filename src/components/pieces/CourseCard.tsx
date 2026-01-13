import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { Course } from "../../types";
import SmartImage from "../SmartImage";
import CourseModal from "./CourseModal";

interface CourseCardProps {
  course: Course;
  // index: number;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-[280px] h-auto pb-3 mb-3 bg-white shadow-lg rounded-2xl flex-shrink-0 flex flex-col justify-between items-center mx-auto">
        <div className="w-full">
          <SmartImage
            src={course.image}
            alt={`Course: ${course.title}`}
            className="w-full h-[180px] object-cover rounded-t-xl"
          />
          <div className="pl-4 pt-4 w-full">
            <div className="min-h-[50px] flex items-center justify-start">
              <h3 className="text-sm text-deep-black-500 font-bold mb-2 text-left">
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
                <span className="text-deep-black-500 text-xs mr-2 truncate block max-w-[120px] ml-auto">
                  {course.expert}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-2 mr-4">
              <span className="text-xs text-muted-500 font-medium">
                {course.duration}h
              </span>
              <span className="text-sm text-green-600 font-bold">
                ${course.price}
              </span>
            </div>
          </div>
        </div>

        {/* Ver curso button */}
        <div className="w-full px-4 pb-2 mt-3">
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-orange-earth-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-earth-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-earth-500 focus:ring-opacity-50 shadow-md"
          >
            Ver curso
          </button>
        </div>
      </div>

      {/* Modal */}
      <CourseModal
        course={course}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default CourseCard;