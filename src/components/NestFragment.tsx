import NestItem from "./pieces/NestItem";
import { motion, AnimatePresence } from "motion/react";
import { useNests } from "../hooks/useNests";
import { useCategories } from "../hooks/useCategories";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Category } from "../types";

export const NestFragment = () => {
  const navigate = useNavigate();
  const { nests, loading: nestsLoading } = useNests();
  const { categories, loading: categoriesLoading } = useCategories();
  const [activeNestId, setActiveNestId] = useState<string | null>(null);
  
  // Combine loading states
  const loading = nestsLoading || categoriesLoading;

  useEffect(() => {
    if (nests && nests.length > 0 && !activeNestId) {
      setActiveNestId(nests[0].id);
    }
  }, [nests, activeNestId]);

  const activeNest = nests.find((n) => n.id === activeNestId);

  return (
    <>
      {!loading && Array.isArray(nests) && nests.length > 0 && (
        <div className="relative w-full py-20 bg-gray-50/50">
          <div className="max-w-[1400px] md:max-h-[700px] mx-auto px-4 md:px-12">
            <div className="mb-16 relative z-30 pl-6 md:pl-0 ml-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-golden-yellow-500 font-bold tracking-[0.2em] text-md uppercase mb-3 block"
              >
                Explora el conocimiento
              </motion.span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-deep-black-500 mb-6 leading-tight">
                Nuestros <span className="text-golden-yellow-500">Nidos</span> de <br className="hidden md:block" /> Aprendizaje
              </h1>
              <div className="h-1.5 w-24 bg-golden-yellow-500 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start ml-10">
              {/* Left Column: List */}
              <div className="lg:col-span-4 space-y-4 max-h-[350px] md:max-h-[450px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                {nests.map((nest) => (
                  <NestItem
                    key={nest.id}
                    nest={nest}
                    isActive={activeNestId === nest.id}
                    onHover={() => setActiveNestId(nest.id)}
                  />
                ))}
              </div>

              {/* Right Column: Details */}
              <div className="lg:col-span-8 relative min-h-[400px] md:min-h-[600px]">
                <AnimatePresence mode="wait">
                  {activeNest && (
                    <motion.div
                      key={activeNest.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-3xl p-8 md:p-12 shadow-xl h-full flex flex-col justify-center relative overflow-hidden"
                    >
                      {/* Decorative Background Element */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-golden-yellow-500/10 rounded-bl-full pointer-events-none" />

                      <div className="relative z-10">
                        <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
                          Categoría Destacada
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-deep-black-500 mb-6">
                          {activeNest.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-loose mb-8">
                          {activeNest.description}
                        </p>

                        <button
                          onClick={() => {
                            // Find the corresponding category by matching titles
                            const correspondingCategory = categories.find(cat =>
                              cat.title.toLowerCase() === activeNest.title.toLowerCase()
                            );
                            if (correspondingCategory) {
                              navigate(`/courses?category=${encodeURIComponent(correspondingCategory.id)}`);
                            }
                          }}
                          className="flex items-center space-x-3 text-deep-black-500 font-bold hover:text-golden-yellow-600 transition-colors group w-fit cursor-pointer"
                        >
                          <span>EXPLORAR CURSOS</span>
                          <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      <div className="absolute -bottom-10 -right-10 opacity-10 rotate-12 pointer-events-none">
                        <FontAwesomeIcon icon={faLayerGroup} className="text-9xl text-deep-black-500" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NestFragment;
