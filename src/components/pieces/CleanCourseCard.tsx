import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock } from "@fortawesome/free-regular-svg-icons";
import { Course } from "../../types";
import SmartImage from "../SmartImage";
import CourseModal from "./CourseModal";

interface CleanCourseCardProps {
    course: Course;
}

export const CleanCourseCard = ({ course }: CleanCourseCardProps) => {
    const [showModal, setShowModal] = useState(false);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(price);
    };

    return (
        <>
            <div className="group relative w-full bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 mb-8 break-inside-avoid">
                {/* Image Section */}
                <div className="relative h-[220px] overflow-hidden">
                    <SmartImage
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-orange-earth-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        {formatPrice(course.price)}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col gap-3">

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-orange-earth-500 transition-colors">
                        {course.title}
                    </h3>

                    {/* Headline */}
                    {course.headline && (
                        <p className="text-xs text-gray-700 font-medium italic border-l-2 border-orange-earth-300 pl-2">
                            {course.headline}
                        </p>
                    )}

                    {/* Expert (No Icon) */}
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">
                        Por {course.expert}
                    </div>

                    {/* Tags: Nido & Level */}
                    <div className="flex flex-wrap gap-2 mt-1">
                        {course.categoryTitle && (
                            <span className="bg-orange-50 text-orange-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-100">
                                {course.categoryTitle}
                            </span>
                        )}
                        {course.level && (
                            <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100">
                                {course.level}
                            </span>
                        )}
                    </div>

                    {/* Metadata Row */}
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-1 border-t border-gray-100 pt-3">
                        <div className="flex items-center gap-1 font-bold">
                            <FontAwesomeIcon icon={faStar} className="text-golden-yellow-500" />
                            <span>{course.popularity}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} />
                            <span>{course.duration}h</span>
                        </div>
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={() => setShowModal(true)}
                        className="w-full mt-2 border border-gray-300 bg-transparent text-gray-600 text-xs font-semibold py-2.5 rounded hover:border-orange-earth-500 hover:text-orange-earth-500 hover:bg-orange-earth-50/10 transition-all duration-300"
                    >
                        Ver Curso
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

export default CleanCourseCard;
