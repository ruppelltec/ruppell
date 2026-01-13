import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faTag } from "@fortawesome/free-solid-svg-icons";
import { Course } from "../../types";
import SmartImage from "../SmartImage";

interface ElegantCourseCardProps {
    course: Course;
}

export const ElegantCourseCard = ({ course }: ElegantCourseCardProps) => {
    return (
        <div className="group relative w-full sm:w-[300px] h-[420px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer bg-white">

            {/* Background Image Container */}
            <div className="absolute inset-0 h-full w-full">
                <SmartImage
                    src={course.image}
                    alt={`Course: ${course.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
            </div>

            {/* Floating Price Badge */}
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 z-10 transition-transform duration-300 group-hover:scale-105">
                <FontAwesomeIcon icon={faTag} className="text-xs" />
                <span>${course.price}</span>
            </div>

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end h-full z-10">

                {/* Expert Info */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <span className="inline-block px-3 py-1 bg-orange-earth-500/90 text-white text-xs font-bold uppercase tracking-wider rounded-md mb-3 shadow-sm">
                        {course.expert}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md group-hover:text-golden-yellow-500 transition-colors duration-300 line-clamp-2">
                    {course.title}
                </h3>

                {/* Metas: Rating & Duration */}
                <div className="flex items-center justify-between text-white/90 text-sm font-medium mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faStar} className="text-golden-yellow-400" />
                        <span>{course.popularity}</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faClock} />
                        <span>{course.duration}h</span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    <button className="w-full bg-orange-earth-500 hover:bg-orange-earth-400 text-white font-bold py-3 rounded-xl shadow-lg transition-colors border border-transparent hover:border-white/20">
                        Ver Curso
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ElegantCourseCard;
