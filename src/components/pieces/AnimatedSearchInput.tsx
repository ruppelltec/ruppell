import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Category } from "../../types";
import { useNavigate } from "react-router-dom";

interface AnimatedSearchInputProps {
  categories: Category[];
  // placeholder?: string;
}

export const AnimatedSearchInput = ({
  categories,
  // placeholder = "Busca tu curso ideal..."
}: AnimatedSearchInputProps) => {
  const navigate = useNavigate();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Extraer nombres de cursos únicos de las categorías
  const courseNames = useMemo(() => {
    // Validación defensiva: asegurar que categories es un array
    if (!Array.isArray(categories)) {
      console.warn('AnimatedSearchInput: categories prop is not an array', categories);
      return [];
    }
    
    const names = categories.flatMap(category => {
      // Validación adicional: asegurar que cada category tiene courses
      if (!category || !Array.isArray(category.courses)) {
        console.warn('AnimatedSearchInput: invalid category structure', category);
        return [];
      }
      return category.courses.map(course => {
        // Validación adicional: asegurar que course tiene title
        if (!course || !course.title) {
          console.warn('AnimatedSearchInput: invalid course structure', course);
          return '';
        }
        return course.title;
      }).filter(title => title !== ''); // Filtrar títulos vacíos
    });
    return [...new Set(names)]; // Eliminar duplicados
  }, [categories]);

  // Cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Animación de typing
  useEffect(() => {
    if (courseNames.length === 0 || isTyping) return;

    const currentWord = courseNames[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribir
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Borrar
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % courseNames.length);
        }
      }
    }, isDeleting ? 50 : 100); // Velocidad de escritura/borrado

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, courseNames, isTyping]);

  const handleClear = () => {
    setSearchValue("");
    setIsTyping(false); // Reactivar animación cuando se limpia
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      // Navegar a la página de cursos con el término de búsqueda como parámetro de consulta
      navigate(`/courses?search=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="w-full max-w-2xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FontAwesomeIcon 
              className="h-5 w-5 text-golden-yellow-500" 
              icon={faSearch} 
            />
          </div>
          
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setIsTyping(true);
              setCurrentText(""); // Limpiar texto animado cuando el usuario escribe
            }}
            onFocus={() => {
              setIsTyping(true);
              setCurrentText(""); // Limpiar texto animado cuando el usuario hace focus
            }}
            onBlur={() => {
              if (!searchValue) {
                setIsTyping(false);
              }
            }}
            placeholder=""
            className="w-full pl-12 pr-12 py-4 text-lg bg-gray-900/80 backdrop-blur-sm border-2 border-golden-yellow-500/40 rounded-full focus:outline-none focus:border-golden-yellow-500 focus:bg-gray-900/90 text-white placeholder-gray-300 transition-all duration-300 shadow-lg"
          />
          
          {/* Placeholder animado */}
          {!searchValue && (
            <div className="absolute inset-y-0 left-12 flex items-center pointer-events-none">
              <span className="text-gray-300 text-lg">
                {currentText}
                <motion.span
                  animate={{ opacity: cursorVisible ? 1 : 0 }}
                  transition={{ duration: 0.1 }}
                  className="text-golden-yellow-500 ml-1"
                >
                  |
                </motion.span>
              </span>
            </div>
          )}
          
          {/* Botón para limpiar */}
          <AnimatePresence>
            {searchValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="button"
                onClick={handleClear}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        
        {/* Botón de búsqueda */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-golden-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-golden-yellow-500 transition-colors duration-300 shadow-lg"
        >
          Buscar
        </motion.button>
      </form>
      
      {/* Sugerencias de cursos populares */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-4 flex flex-wrap justify-center gap-2"
      >
        <span className="text-white/70 text-sm">Cursos populares:</span>
        {courseNames.slice(0, 3).map((courseName, index) => (
          <motion.button
            key={courseName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 + index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 30, 30, 0.8)" }}
            onClick={() => {
              setSearchValue(courseName);
              navigate(`/courses?search=${encodeURIComponent(courseName)}`);
            }}
            className="px-3 py-1 bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-200 text-xs hover:bg-gray-700/80 transition-all duration-300 cursor-pointer border border-gray-600/30"
          >
            {courseName}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSearchInput;