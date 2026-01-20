import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faPlay,
  faPenToSquare,
  faMicrophone,
  faBrain,
  faMasksTheater,
  faGraduationCap,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const StandUpCoursePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-background-dark text-text-dark font-body antialiased selection:bg-primary selection:text-white pb-24 lg:pb-0 min-h-screen">
      <Header />
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-10">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setShowVideo(false)}
          ></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10">
            <button
              className="absolute top-4 right-4 z-20 text-white hover:text-primary transition-colors bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm"
              onClick={() => setShowVideo(false)}
            >
              <FontAwesomeIcon icon={faTimes} className="text-xl" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/BkYstZESAZg?si=clmcWcjkyC3L36Nq&autoplay=1"
              title="Stand Up Comedy Course Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <main className="w-full overflow-hidden">
        <section className="relative pt-[100px] pb-8 px-4 lg:py-20 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Nuevo Curso
              </div>
              <h1 className="font-display text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                Domina el Arte del <br />
                <span className="gold-gradient-text">Stand-Up Comedy</span>
              </h1>
              <p className="text-muted-dark text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Aprende a escribir chistes, dominar el escenario y conectar con
                tu audiencia. Tu camino al estrellato comienza aquí.
              </p>
              <div className="hidden lg:flex items-center gap-4 bg-surface-dark p-4 rounded-xl border border-gray-800 shadow-sm w-fit">
                <img
                  alt="Retrato del instructor riendo"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  src="/assets/stand-up/profile.jpg"
                />
                <div>
                  <p className="text-xs text-primary font-bold uppercase tracking-wide">
                    Experto
                  </p>
                  <h3 className="font-display font-bold text-white text-base">
                    Dóriam Rosero
                  </h3>
                  <p className="text-xs font-medium text-ink mb-2">
                    Roserito Cuy
                  </p>
                  <p className="text-xs text-muted-dark">
                    20 años como Comediante
                  </p>
                </div>
              </div>
              <div className="pt-4 flex flex-col gap-3 items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 line-through font-medium text-lg">
                    US$ 100.00
                  </span>
                  <span className="text-white font-bold text-3xl">
                    US$ 79.99
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start w-full">
                  <button className="bg-primary hover:bg-primary-hover text-white font-display font-bold text-lg py-4 px-8 rounded-xl w-full lg:w-auto shadow-lg shadow-primary/25 transition-all transform active:scale-95 cursor-pointer">
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
            <div
              className="order-1 lg:order-2 relative w-full aspect-video bg-surface-dark rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-gray-800"
              onClick={() => setShowVideo(true)}
            >
              <img
                alt="Escenario de comedia stand-up con micrófono e iluminación dramática"
                className="w-full h-full object-cover object-[center_35%] opacity-60 transition-transform duration-700 group-hover:scale-105"
                src="/assets/stand-up/video.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                <div className="w-16 h-16 lg:w-24 lg:h-24 bg-primary/90 rounded-full flex items-center justify-center pl-1 shadow-glow transform transition-transform group-hover:scale-110">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="text-white text-3xl lg:text-5xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4 lg:hidden"></div>
        <section className="px-4 py-6 lg:hidden">
          <div className="flex items-center gap-4 bg-surface-dark p-4 rounded-xl border border-gray-800 shadow-sm">
            <img
              alt="Retrato del instructor riendo"
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              src="/assets/stand-up/profile.jpg"
            />
            <div>
              <p className="text-xs text-primary font-bold uppercase tracking-wide">
                Instructor
              </p>
              <h3 className="font-display font-bold text-white text-lg">
                Dóriam Rosero "Roserito Cuy"
              </h3>
              <p className="text-xs text-muted-dark">
                20 años de experiencia como comediante
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-8 lg:py-24 bg-surface-dark/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl lg:text-4xl font-bold mb-6 lg:mb-12 text-center text-white">
              Lo que vas a lograr
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="flex lg:flex-col items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-xl bg-surface-dark border border-gray-800 shadow-sm transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 lg:shadow-xl lg:items-center lg:text-center h-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-primary lg:text-3xl"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1 lg:text-xl lg:mb-3">
                    Escritura Creativa
                  </h3>
                  <p className="text-sm text-muted-dark leading-relaxed">
                    Estructura tus ideas y convierte anécdotas diarias en
                    remates explosivos.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-xl bg-surface-dark border border-gray-800 shadow-sm transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 lg:shadow-xl lg:items-center lg:text-center h-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="text-primary lg:text-3xl"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1 lg:text-xl lg:mb-3">
                    Dominio Escénico
                  </h3>
                  <p className="text-sm text-muted-dark leading-relaxed">
                    Aprende a usar el micrófono, tu cuerpo y los silencios para
                    amplificar la risa.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-xl bg-surface-dark border border-gray-800 shadow-sm transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 lg:shadow-xl lg:items-center lg:text-center h-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faBrain}
                    className="text-primary lg:text-3xl"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1 lg:text-xl lg:mb-3">
                    Psicología del Humor
                  </h3>
                  <p className="text-sm text-muted-dark leading-relaxed">
                    Entiende por qué la gente se ríe y cómo manejar situaciones
                    incómodas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 lg:py-32 bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl -z-10"></div>
                <img
                  alt="Retrato profesional del experto"
                  className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl border border-gray-800"
                  src="/assets/stand-up/biografy.jpg"
                />
                <div className="absolute bottom-6 -right-6 lg:-right-12 bg-surface-dark p-6 rounded-xl shadow-xl border border-gray-800 hidden lg:block">
                  <p className="text-primary font-bold text-4xl mb-1">+20</p>
                  <p className="text-xs uppercase tracking-widest text-muted-dark font-bold">
                    Años de Trayectoria
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary">
                  <span className="h-px w-8 bg-primary"></span>
                  <span className="text-sm font-bold uppercase tracking-widest">
                    Sobre el Experto
                  </span>
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold text-white leading-tight">
                  Dóriam Rosero "El Cómico"
                </h2>
                <div className="space-y-4 text-muted-dark text-lg leading-relaxed">
                  <p>
                    Considerado uno de los referentes más influyentes de la
                    comedia contemporánea. Con más de 20 años recorriendo los
                    escenarios más prestigiosos de Latinoamérica y
                    participaciones estelares en Comedy Central.
                  </p>
                  <p>
                    Su metodología única combina la técnica clásica de escritura
                    con la psicología moderna del comportamiento, permitiendo
                    que cualquier persona, sin importar su experiencia previa,
                    descubra su propia voz cómica y domine el arte de hacer
                    reír.
                  </p>
                </div>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-surface-dark/50 border border-gray-800">
                    <FontAwesomeIcon
                      icon={faMasksTheater}
                      className="text-primary mb-2"
                    />
                    <p className="font-bold text-white">1,500+ Shows</p>
                    <p className="text-xs text-muted-dark">En vivo</p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-dark/50 border border-gray-800">
                    <FontAwesomeIcon
                      icon={faGraduationCap}
                      className="text-primary mb-2"
                    />
                    <p className="font-bold text-white">5,000+ Alumnos</p>
                    <p className="text-xs text-muted-dark">En todo el mundo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 lg:py-32 bg-surface-dark/20 overflow-hidden">
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-white">
                Galería del Curso
              </h2>
              <p className="text-muted-dark max-w-2xl mx-auto">
                Un vistazo a la vida en los escenarios, desde teatros
                emblemáticos hasta la creación de personajes memorables.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-800 bg-surface-dark">
              <img
                alt="Expert in theater setting with neon signs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/assets/stand-up/portfolio_1.JPG"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-display font-bold">
                  Escenarios de Primera
                </p>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-800 bg-surface-dark">
              <img
                alt="Comedy characters and neon signs"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/assets/stand-up/portfolio_2.JPG"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-display font-bold">
                  Personajes &amp; Caracterización
                </p>
              </div>
            </div>
            <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg border border-gray-800 bg-surface-dark lg:col-span-1">
              <img
                alt="Neon lights and theater atmosphere"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="/assets/stand-up/portfolio_3.JPG"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-display font-bold">
                  La Magia del Vivo
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 max-w-7xl mx-auto hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-gray-800">
              <img
                alt="Theater interior with comedy vibes"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                src="/assets/stand-up/video.jpg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center space-y-4">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-primary text-6xl"
                  />
                  <h3 className="text-white font-display text-4xl font-bold italic">
                    "Donde nace la risa"
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-10 lg:py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 lg:w-[500px] lg:h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-2xl lg:text-4xl font-bold mb-8 lg:mb-16 text-center text-white">
              Lo que dicen los alumnos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-surface-dark p-6 lg:p-8 rounded-xl border border-gray-800 shadow-lg relative h-full flex flex-col justify-between">
                <div className="mt-4 lg:mt-6">
                  <div className="flex text-primary mb-2 lg:mb-4 gap-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                  </div>
                  <p className="text-sm lg:text-base italic text-gray-300 mb-3 lg:mb-6 leading-relaxed">
                    "Siempre quise hacer reír pero me daba pánico. Este curso me
                    dio la estructura que necesitaba. ¡Ya tuve mi primer show!"
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-bold text-white">
                  — Sofia Ramirez
                </p>
              </div>
              <div className="bg-surface-dark p-6 lg:p-8 rounded-xl border border-gray-800 shadow-lg relative h-full flex flex-col justify-between">
                <div className="mt-4 lg:mt-6">
                  <div className="flex text-primary mb-2 lg:mb-4 gap-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-sm lg:text-base"
                    />
                  </div>
                  <p className="text-sm lg:text-base italic text-gray-300 mb-3 lg:mb-6 leading-relaxed">
                    "La sección de 'hecklers' vale oro. Me siento mucho más
                    seguro en el escenario. Dóriam Rosero es un genio."
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-bold text-white">
                  — Mateo Lopez
                </p>
              </div>
              <div className="hidden lg:flex flex-col justify-between bg-surface-dark p-6 lg:p-8 rounded-xl border border-gray-800 shadow-lg relative h-full">
                <div className="mt-6">
                  <div className="flex text-primary mb-4 gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-base" />
                    <FontAwesomeIcon icon={faStar} className="text-base" />
                    <FontAwesomeIcon icon={faStar} className="text-base" />
                    <FontAwesomeIcon icon={faStar} className="text-base" />
                    <FontAwesomeIcon icon={faStar} className="text-base" />
                  </div>
                  <p className="text-base italic text-gray-300 mb-6 leading-relaxed">
                    "El contenido sobre cómo estructurar el set list cambió
                    completamente mi forma de ver el stand-up. 100%
                    recomendado."
                  </p>
                </div>
                <p className="text-sm font-bold text-white">— Juan Hernandex</p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
      <div className="fixed bottom-0 left-0 w-full bg-[#121212]/95 backdrop-blur-md border-t border-gray-800 p-4 pb-6 z-50 lg:hidden">
        <div className="max-w-md mx-auto flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-muted-dark font-medium line-through">
              US$ 100.00
            </span>
            <span className="text-xl font-bold text-white">US$ 79.99</span>
          </div>
          <button className="flex-1 bg-primary hover:bg-primary-hover text-white font-display font-bold text-lg py-3 px-6 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer">
            Comprar curso
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandUpCoursePage;
