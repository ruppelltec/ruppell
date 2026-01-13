import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
import { Course } from "../../types";

interface CourseModalProps {
    course: Course;
    isOpen: boolean;
    onClose: () => void;
}

export const CourseModal = ({ course, isOpen, onClose }: CourseModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/40 backdrop-blur-sm pt-24 md:pt-0 p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-gray-600 hover:text-orange-earth-500 transition-colors bg-white rounded-full p-2 shadow-lg"
                    aria-label="Cerrar modal"
                >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                </button>

                {/* Header */}
                <div className="bg-gradient-to-r from-orange-earth-500 to-orange-earth-400 text-white p-6 rounded-t-2xl">
                    <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <span className="text-sm">Por: {course.expert}</span>
                            <div className="flex items-center">
                                <FontAwesomeIcon icon={faStar} className="text-yellow-300 mr-1" />
                                <span className="font-semibold">{course.popularity}</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-sm opacity-90">Nivel: {course.level || 'N/A'}</div>
                            <div className="text-sm opacity-90">{course.duration}h de contenido</div>
                        </div>
                    </div>
                </div>

                {/* Body - Two Column Layout on Large Screens */}
                <div className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Left Column - Video (Takes 3/5 of space) */}
                        <div className="lg:col-span-3 space-y-4">
                            {course.introVideoUrl && (
                                <div>
                                    <h3 className="text-xl font-bold text-deep-black-500 mb-3">
                                        Video Introductorio
                                    </h3>
                                    <div className="relative pb-[75%] h-0 rounded-lg overflow-hidden shadow-lg">
                                        <iframe
                                            src={course.introVideoUrl}
                                            title={`Video de ${course.title}`}
                                            className="absolute top-0 left-0 w-full h-full"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            )}


                        </div>

                        {/* Right Column - Course Information (Takes 2/5 of space) */}
                        <div className="lg:col-span-2 space-y-4">
                            {/* Headline */}
                            {course.headline && (
                                <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-earth-500">
                                    <p className="text-base font-semibold text-deep-black-500 italic">
                                        {course.headline}
                                    </p>
                                </div>
                            )}

                            {/* Intro Text */}
                            {course.introText && (
                                <div>
                                    <h3 className="text-xl font-bold text-deep-black-500 mb-3">
                                        Acerca del Curso
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {course.introText}
                                    </p>
                                </div>
                            )}

                            {/* Course Details Grid - Desktop */}
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-1 gap-3 bg-gray-50 p-4 rounded-lg">
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Popularidad</span>
                                        <span className="text-lg font-bold text-orange-earth-500 flex items-center gap-1">
                                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                            {course.popularity}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                                        <span className="text-sm text-gray-600">Duración</span>
                                        <span className="text-lg font-bold text-deep-black-500">
                                            {course.duration}h
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Precio</span>
                                        <span className="text-2xl font-bold text-green-600">
                                            ${course.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Purchase Button */}
                            {course.paymentLink && (
                                <div className="flex justify-center">
                                    <a
                                        href={course.paymentLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-base px-8 py-3 rounded-full shadow-xl hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
                                    >
                                        Comprar Ahora
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Course Details Grid - Mobile Only */}
                    <div className="lg:hidden mt-6">
                        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                            <div className="text-center">
                                <div className="text-sm text-gray-600">Popularidad</div>
                                <div className="text-lg font-bold text-orange-earth-500 flex items-center justify-center gap-1">
                                    <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                    {course.popularity}
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-sm text-gray-600">Duración</div>
                                <div className="text-lg font-bold text-deep-black-500">
                                    {course.duration}h
                                </div>
                            </div>
                            <div className="text-center col-span-2">
                                <div className="text-sm text-gray-600">Precio</div>
                                <div className="text-2xl font-bold text-green-600">
                                    ${course.price.toLocaleString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;
