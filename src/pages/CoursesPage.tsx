import { useState, useMemo, useEffect } from "react";
import { useCategories } from "../hooks/useCategories";
import { Course } from "../types";
import CleanCourseCard from "../components/pieces/CleanCourseCard";
import FilterSidebar from "../components/FilterSidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const CoursesPage = () => {
  const { categories, loading } = useCategories();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const urlSearchTerm = queryParams.get("search") || "";
  const urlCategory = queryParams.get("category") || "";

  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    urlCategory ? [urlCategory] : [],
  );
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [minRating, setMinRating] = useState(0);
  const [maxDuration, setMaxDuration] = useState(160);
  const [expertSearch, setExpertSearch] = useState("");

  useEffect(() => {
    if (urlCategory && !selectedCategories.includes(urlCategory)) {
      setSelectedCategories([urlCategory]);
    }
  }, [urlCategory, categories, selectedCategories]);

  const allCourses = useMemo(() => {
    if (!categories) return [];
    const courses: Course[] = [];
    categories.forEach((cat) => {
      if (cat.courses) {
        cat.courses.forEach((c) => {
          courses.push({ ...c, categoryId: cat.id, categoryTitle: cat.title });
        });
      }
    });
    return courses;
  }, [categories]);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      if (
        searchTerm &&
        !course.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }

      if (
        expertSearch &&
        !course.expert.toLowerCase().includes(expertSearch.toLowerCase())
      ) {
        return false;
      }

      if (
        selectedCategories.length > 0 &&
        course.categoryId &&
        !selectedCategories.includes(course.categoryId)
      ) {
        return false;
      }

      if (
        course.price !== undefined &&
        (course.price < priceRange[0] || course.price > priceRange[1])
      ) {
        return false;
      }

      if (course.popularity < minRating) {
        return false;
      }

      if (course.duration !== undefined && course.duration > maxDuration) {
        return false;
      }

      if (
        selectedLevels.length > 0 &&
        course.level &&
        !selectedLevels.includes(course.level)
      ) {
        return false;
      }

      return true;
    });
  }, [
    allCourses,
    searchTerm,
    expertSearch,
    expertSearch,
    selectedCategories,
    selectedLevels,
    priceRange,
    minRating,
    maxDuration,
  ]);

  const toggleCategory = (catId: string) => {
    if (selectedCategories.includes(catId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== catId));
    } else {
      setSelectedCategories([...selectedCategories, catId]);
    }
  };

  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      setSelectedLevels(selectedLevels.filter((l) => l !== level));
    } else {
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col font-sans">
      <Header />

      {/* Hero / Header Section */}
      <div className="bg-deep-black-500 pt-[120px] pb-10 px-4 mb-8 text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-golden-yellow-400 to-orange-earth-500 mb-4 tracking-tight">
            Descubre tu Próxima Habilidad
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Explora una selección curada de cursos impartidos por expertos de
            clase mundial.
          </p>

          {/* Centered Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-6">
            <input
              type="text"
              placeholder="¿Qué quieres aprender hoy? (e.g. Python, Diseño, Cocina...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full shadow-2xl border-none focus:ring-4 focus:ring-orange-earth-500/50 text-lg bg-white/95 backdrop-blur-sm text-deep-black-500 placeholder-muted-400 transition-all focus:scale-[1.01]"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 text-orange-earth-500 text-xl"
            />
          </div>

          {/* Active Tags (Hero) */}
          <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
            {selectedCategories.map((catId) => {
              const cat = categories.find((c) => c.id === catId);
              return cat ? (
                <button
                  key={catId}
                  onClick={() => toggleCategory(catId)}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
                >
                  Nido: {cat.title} <span className="opacity-70">×</span>
                </button>
              ) : null;
            })}
            {selectedLevels.map((level) => (
              <button
                key={level}
                onClick={() => toggleLevel(level)}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                Nivel: {level} <span className="opacity-70">×</span>
              </button>
            ))}
            {priceRange[1] < 2000000 && (
              <button
                onClick={() => setPriceRange([0, 2000000])}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                Max ${new Intl.NumberFormat("es-CO").format(priceRange[1])}{" "}
                <span className="opacity-70">×</span>
              </button>
            )}
            {maxDuration < 160 && (
              <button
                onClick={() => setMaxDuration(160)}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                Max {maxDuration}h <span className="opacity-70">×</span>
              </button>
            )}
            {minRating > 0 && (
              <button
                onClick={() => setMinRating(0)}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                &gt; {minRating} ★ <span className="opacity-70">×</span>
              </button>
            )}
            {expertSearch && (
              <button
                onClick={() => setExpertSearch("")}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-white/20 transition"
              >
                Experto: {expertSearch} <span className="opacity-70">×</span>
              </button>
            )}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-earth-500 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-golden-yellow-500 rounded-full blur-[80px]"></div>
        </div>
      </div>

      <div className="flex-1 container mx-auto px-4 pb-20">
        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Sidebar */}
          <aside className="w-full md:w-[280px] flex-shrink-0 relative z-30">
            <FilterSidebar
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              categories={categories.map((c) => ({ id: c.id, title: c.title }))}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minRating={minRating}
              setMinRating={setMinRating}
              maxDuration={maxDuration}
              setMaxDuration={setMaxDuration}
              expertSearch={expertSearch}
              setExpertSearch={setExpertSearch}
              selectedLevels={selectedLevels}
              toggleLevel={toggleLevel}
            />
          </aside>

          {/* Grid */}
          <main className="flex-1">
            <div className="mb-6 px-2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">
                  {filteredCourses.length}{" "}
                  {filteredCourses.length === 1
                    ? "Curso encontrado"
                    : "Cursos encontrados"}
                </h2>
              </div>
            </div>

            {/* Responsive Grid Layout */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-8">
                {filteredCourses.map((course, index) => {
                  // Apply margin to all items in second column (for 2-col layout)
                  const isSecondColumn = index % 2 === 1;
                  const columnClass = isSecondColumn ? "mt-[30px]" : "";

                  return (
                    <div key={course.id} className={columnClass}>
                      <CleanCourseCard course={course} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="col-span-full py-20 text-center w-full bg-white rounded-3xl shadow-sm p-10">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No encontramos resultados
                </h3>
                <p className="text-gray-500 mb-6">
                  Intenta ajustar tus filtros o busca algo diferente.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                    setPriceRange([0, 2000000]);
                    setMinRating(0);
                    setMaxDuration(160);
                    setExpertSearch("");
                  }}
                  className="bg-orange-earth-500 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-orange-earth-400 transition"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
