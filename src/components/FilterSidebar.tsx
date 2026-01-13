import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

interface FilterSidebarProps {
    selectedCategories: string[];
    toggleCategory: (category: string) => void;
    categories: { id: string; title: string }[];
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    minRating: number;
    setMinRating: (rating: number) => void;
    maxDuration: number;
    setMaxDuration: (duration: number) => void;
    expertSearch: string;
    setExpertSearch: (term: string) => void;
    selectedLevels: string[];
    toggleLevel: (level: string) => void;
}

const StarRating = ({ rating, setRating }: { rating: number, setRating: (r: number) => void }) => {
    const [hoverRating, setHoverRating] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
        const { left, width } = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - left) / width;
        const newRating = index + (percent > 0.5 ? 1 : 0.5);
        setHoverRating(newRating);
    };

    const handleClick = () => {
        setRating(hoverRating === rating ? 0 : hoverRating);
    };

    const displayRating = hoverRating || rating;

    return (
        <div className="flex cursor-pointer" onMouseLeave={() => setHoverRating(0)}>
            {[0, 1, 2, 3, 4].map((index) => {
                const fill = displayRating - index;
                let icon = faStarRegular;
                if (fill >= 1) icon = faStar;
                else if (fill >= 0.5) icon = faStarHalfAlt;

                return (
                    <div
                        key={index}
                        className="text-golden-yellow-500 text-2xl mr-1"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onClick={handleClick}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </div>
                );
            })}
            <span className="ml-2 text-deep-black-500 font-bold text-lg">{displayRating > 0 ? displayRating : ''}</span>
        </div>
    );
};


const FilterSidebar: React.FC<FilterSidebarProps> = ({
    selectedCategories,
    toggleCategory,
    categories,
    priceRange,
    setPriceRange,
    minRating,
    setMinRating,
    maxDuration,
    setMaxDuration,
    expertSearch,
    setExpertSearch,
    selectedLevels,
    toggleLevel
}) => {
    return (
        <div className="bg-white p-8 shadow-sm w-full md:w-[300px] h-fit sticky top-[120px] border-r border-gray-100 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
            <h3 className="text-xl font-extrabold text-gray-900 mb-8 border-b border-gray-100 pb-4">Filtros</h3>

            {/* Expert Search */}
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Experto</h4>
                <input
                    type="text"
                    placeholder="Buscar experto..."
                    value={expertSearch}
                    onChange={(e) => setExpertSearch(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-earth-500/50 text-sm text-gray-700 placeholder-gray-400"
                />
            </div>

            {/* Categories */}
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Nidos</h4>
                <div className="space-y-3 max-h-[100px] overflow-y-auto custom-scrollbar pr-2">
                    {categories.map((cat) => (
                        <label key={cat.id} className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(cat.id)}
                                    onChange={() => toggleCategory(cat.id)}
                                    className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-sm checked:bg-orange-earth-500 checked:border-orange-earth-500 transition-colors cursor-pointer"
                                />
                                <svg className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{cat.title}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Levels */}
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Nivel</h4>
                <div className="space-y-3">
                    {['Básico', 'Intermedio', 'Avanzado'].map((level) => (
                        <label key={level} className="flex items-center space-x-3 cursor-pointer group">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    checked={selectedLevels.includes(level)}
                                    onChange={() => toggleLevel(level)}
                                    className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-sm checked:bg-orange-earth-500 checked:border-orange-earth-500 transition-colors cursor-pointer"
                                />
                                <svg className="absolute w-3 h-3 text-white hidden peer-checked:block pointer-events-none left-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors font-medium">{level}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Precio Máximo</h4>
                <div className="flex items-center justify-between mb-2 font-bold text-gray-900 text-xs">
                    <span>$0</span>
                    <span className="text-orange-earth-500">
                        {priceRange[1] >= 2000000 ? 'Sin límite' : `$${new Intl.NumberFormat('es-CO').format(priceRange[1])}`}
                    </span>
                </div>
                <input
                    type="range"
                    min="0"
                    max="2000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-earth-500 hover:accent-orange-earth-400"
                />
            </div>

            {/* Rating */}
            <div className="mb-8">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Popularidad</h4>
                <div className="flex items-center">
                    <StarRating rating={minRating} setRating={setMinRating} />
                </div>
                <div className="text-xs text-gray-500 mt-2">Selecciona mínimo de estrellas</div>
            </div>

            {/* Duration */}
            <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Duración</h4>
                <input
                    type="range"
                    min="1"
                    max="160"
                    value={maxDuration}
                    onChange={(e) => setMaxDuration(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-earth-500 hover:accent-orange-earth-400"
                />
                <div className="flex justify-between mt-2 text-sm font-bold">
                    <span className="text-gray-500">0h</span>
                    <span className="text-orange-earth-500">{maxDuration >= 160 ? 'Sin límite' : `${maxDuration}h max`}</span>
                </div>
            </div>

        </div >
    );
};

export default FilterSidebar;
