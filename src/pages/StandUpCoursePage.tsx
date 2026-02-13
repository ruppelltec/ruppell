import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPenToSquare,
  faMicrophone,
  faBrain,
  faMasksTheater,
  faStar,
  faTimes,
  faFaceLaughBeam,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useCallback } from "react";

const StandUpCoursePage = () => {
  const [showVideo, setShowVideo] = useState(false);

  const bioStages = [
    {
      id: "origin",
      years: "1981 - 1986",
      title: "El Origen",
      content:
        "Un pedacito de mi historia: soy hijo de padres pastusos y el mayor de cuatro hermanos. Nací en Pasto, donde viví mis primeros cinco años de vida. En 1986 llegué a Bogotá, ciudad en la que resido actualmente.",
    },
    {
      id: "vocation",
      years: "Vocación",
      title: "¿De qué piensa vivir?",
      content:
        "Un día, en mi casa, me preguntaron: “¿Usted de qué piensa vivir?”. Respondí: “De contar chistes”. Ese día se rieron tanto que confirmé que tenía aptitudes para el humor.",
    },
    {
      id: "persistence",
      years: "2001 - 2002",
      title: "La Persistencia",
      content:
        "En 2001 presenté mi primera audición para Sábados Felices. Aunque envié propuestas mes a mes, no lograba clasificar para grabar. Persistí durante un año y en 2002 tuve mi primera grabación con el personaje “El Dos Caras”.",
    },
    {
      id: "success",
      years: "2007 - Presente",
      title: "Consolidación",
      content:
        "De 45 participaciones en el concurso, gané 39, incluyendo el título de “Campeón Nacional de los Cuenta Chistes” en 2007. También he participado en montajes teatrales y en televisión como humorista y libretista, incluyendo Muy Buenos Días (RCN).",
    },
    {
      id: "present",
      years: "Actualidad",
      title: "Humor, Escritura y Creatividad",
      content:
        "Actualmente hago parte del elenco de Sábados Felices (Caracol), donde me desempeño como humorista, libretista y creativo, consolidando una trayectoria construida con disciplina, escenario y oficio.",
    },
    {
      id: "legacy",
      years: "El Legado",
      title: "Compartiendo el Camino",
      content:
        "Casi un cuarto de siglo de carrera me ha dado la experiencia y el criterio para dictar este seminario y compartir técnicas, aprendizajes y herramientas adquiridas en diferentes escenarios del mundo.",
    },
  ];

  const [currentStage, setCurrentStage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showDownArrowHint, setShowDownArrowHint] = useState(true);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // Función para navegar a una etapa específica con animación opcional
  const navigateToStage = useCallback(
    (targetIndex: number, animate: boolean = false) => {
      // Si ya estamos en el objetivo, no hacer nada
      if (targetIndex === currentStage) return;

      // Si hay una animación en progreso, ignorar
      if (isAnimating) return;

      const distance = Math.abs(targetIndex - currentStage);

      // Si la distancia es 1 o menos, o no queremos animate, cambio directo
      if (!animate || distance <= 1) {
        setCurrentStage(targetIndex);
        return;
      }

      // Iniciar animación secuencial
      setIsAnimating(true);
      const direction = targetIndex > currentStage ? 1 : -1;
      let current = currentStage;

      const stepAnimation = () => {
        current += direction;
        setCurrentStage(current);

        if (current === targetIndex) {
          // Fin de la animación
          setIsAnimating(false);
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
            animationTimeoutRef.current = null;
          }
          // Ocultar la pista de la flecha después de la primera interacción
          setShowDownArrowHint(false);
        } else {
          // Continuar al siguiente paso
          animationTimeoutRef.current = setTimeout(stepAnimation, 400);
        }
      };

      // Iniciar primera animación
      animationTimeoutRef.current = setTimeout(stepAnimation, 400);
    },
    [currentStage, isAnimating],
  );

  // Función para navegar al siguiente/anterior
  const navigateStage = useCallback(
    (direction: "next" | "prev") => {
      if (isAnimating) return;

      const newIndex =
        direction === "next"
          ? Math.min(currentStage + 1, bioStages.length - 1)
          : Math.max(currentStage - 1, 0);

      navigateToStage(newIndex, true);
    },
    [currentStage, isAnimating, navigateToStage],
  );

  return (
    <div className="relative z-0 bg-background-dark text-text-dark font-body antialiased selection:bg-primary selection:text-white pb-24 lg:pb-0 min-h-screen">
      {/* Dot Grid Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-40 -z-10">
        <div
          className="absolute left-0 top-0 h-full w-full bg-[length:100px_100px] lg:bg-[length:40px_40px]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(128, 128, 128, 0.8) 1px, transparent 0)",
          }}
          aria-hidden="true"
        ></div>
      </div>
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
        <section className="relative pt-[100px] pb-8 px-4 lg:pt-20 lg:pb-16 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              Nuevo Curso
            </div>
            <h1 className="font-display text-3xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white max-w-4xl mx-auto text-balance mb-4">
              EL NEGOCIO RENTABLE <br />
              <span className="gold-gradient-text">DEL HUMOR</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 lg:space-y-10 text-center lg:text-left">
              <div className="text-muted-dark text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 space-y-4 lg:space-y-6">
                <p>
                  Hablar en público no es un talento reservado para unos pocos.
                  Es una habilidad que se desarrolla.
                </p>
                <p>
                  El humor no es contar chistes al azar. Es una herramienta
                  poderosa para conectar, transmitir ideas y dejar huella.
                </p>
                <p>
                  El negocio rentable del humor es un seminario diseñado para
                  darte las bases de un gran humorista: estructura, claridad,
                  seguridad y el uso inteligente del humor para captar atención
                  y generar impacto.
                </p>
              </div>

              {/* Mantra Quote */}
              <div className="relative py-4 lg:py-6 px-6 lg:px-8 bg-surface-dark/50 border-l-4 border-primary rounded-r-2xl shadow-xl backdrop-blur-sm max-w-xl mx-auto lg:mx-0">
                <p className="text-white font-display text-base sm:text-xl leading-snug italic font-medium">
                  <span className="text-primary text-2xl lg:text-3xl mr-1 lg:mr-2">
                    “
                  </span>
                  Aquí no vienes a memorizar guiones. Vienes a aprender a
                  comunicar con intención.
                </p>
              </div>

              <div className="lg:hidden flex items-center gap-4 bg-surface-dark/50 py-4 px-8 rounded-xl border border-gray-800 shadow-sm w-fit mx-auto">
                <img
                  alt="Retrato del instructor riendo"
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  src="/assets/stand-up/profile.jpg"
                />
                <div className="text-left">
                  <p className="text-[14px] text-primary font-bold uppercase tracking-wider">
                    Instructor
                  </p>
                  <h3 className="font-display font-bold text-white text-md">
                    Dóriam Rosero
                  </h3>
                  <p className="text-[12px] text-muted-dark italic">
                    20 años de experiencia
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="space-y-6 lg:space-y-8">
                <div
                  className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-white/5 transition-transform hover:scale-[1.02]"
                  onClick={() => setShowVideo(true)}
                >
                  <img
                    alt="Escenario de comedia stand-up con micrófono e iluminación dramática"
                    className="w-full h-full object-cover object-[center_35%] transition-transform duration-700"
                    src="/assets/stand-up/video.PNG"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all">
                    <div className="w-20 h-20 bg-primary/90 rounded-full flex items-center justify-center pl-1 shadow-glow transform transition-transform group-hover:scale-110">
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="text-white text-4xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <div className="flex flex-col">
                      <span className="text-muted-dark line-through text-xs lg:text-sm font-medium">
                        Valor Regular US$ 100.00
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-2xl lg:text-4xl">
                          US$ 79.99
                        </span>
                        <span className="bg-primary/20 text-primary text-[12px] font-bold px-2 py-0.5 rounded-full border border-primary/30 uppercase tracking-tighter">
                          20% OFF
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="hidden lg:block bg-primary hover:bg-primary-hover text-white font-display font-bold text-lg sm:text-xl py-4 sm:py-5 px-8 rounded-2xl w-full shadow-lg shadow-primary/25 transition-all transform hover:-translate-y-1 active:scale-95 cursor-pointer relative overflow-hidden group/btn">
                      <span className="relative z-10">
                        Quiero dominar el escenario
                      </span>
                      <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
                    </button>
                    <p className="text-center text-xs text-muted-dark font-medium uppercase tracking-widest flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                      Inscripciones abiertas hoy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-4 lg:hidden"></div>

        <section className="px-4 py-8 lg:py-24 bg-surface-dark/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-12 text-center text-white text-balance">
              Lo que vas a lograr con este seminario
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              <div className="flex lg:flex-col items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-xl bg-surface-dark border border-gray-800 shadow-sm transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 lg:shadow-xl lg:items-center lg:text-center h-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="text-primary lg:text-3xl"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1 lg:text-xl lg:mb-3">
                    Hablar en público con seguridad
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-dark leading-relaxed">
                    Aprenderás a pararte frente a una audiencia con más
                    confianza, controlar los nervios y sostener la atención de
                    tus espectadores.
                  </p>
                </div>
              </div>
              <div className="flex lg:flex-col items-start gap-4 lg:gap-6 p-4 lg:p-8 rounded-xl bg-surface-dark border border-gray-800 shadow-sm transition-transform hover:-translate-y-1 lg:hover:-translate-y-2 lg:shadow-xl lg:items-center lg:text-center h-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-primary lg:text-3xl"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1 lg:text-xl lg:mb-3">
                    Estructurar tus ideas mensajes y guiones
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-dark leading-relaxed">
                    Sabrás cómo organizar lo que quieres expresar mediante un
                    inicio, un desarrollo y un cierre, usando el humor como
                    apoyo.
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
                    Conectar y generar impacto real
                  </h3>
                  <p className="text-xs lg:text-sm text-muted-dark leading-relaxed">
                    Aprenderas a usar el humor para romper el hielo, crear
                    cercanía y hacer que tu mensaje sea recordado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-16 lg:py-32 bg-background-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-stretch">
              {/* Left Column: Image */}
              <div className="flex flex-col space-y-6 order-2 lg:order-1">
                <div className="relative flex-grow lg:max-h-[750px] aspect-[4/5] lg:aspect-auto overflow-hidden rounded-2xl">
                  <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-3xl -z-10 animate-pulse"></div>
                  <img
                    alt="Retrato profesional del experto"
                    className="w-full h-full object-cover object-[center_10%] rounded-2xl shadow-2xl border border-gray-800"
                    src="/assets/stand-up/biografy.PNG"
                  />
                  <div className="absolute bottom-4 right-4 bg-surface-dark p-4 rounded-xl shadow-xl border border-gray-800 hidden lg:block">
                    <p className="text-primary font-bold text-3xl mb-0.5">
                      +20
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-muted-dark font-bold">
                      Años de Trayectoria
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Title + Timeline Slider + Stats */}
              <div className="flex flex-col justify-center order-1 lg:order-2">
                <div className="space-y-4 mb-8">
                  <div className="inline-flex items-center gap-2 text-primary">
                    <span className="h-px w-8 bg-primary"></span>
                    <span className="text-sm font-bold uppercase tracking-widest">
                      Sobre el Experto
                    </span>
                  </div>
                  <h2 className="font-display text-2xl lg:text-5xl font-bold text-white leading-tight">
                    Biografía
                  </h2>
                </div>
                <div className="relative mb-8 lg:mb-12 flex-grow flex flex-col justify-center min-h-[400px] lg:min-h-[300px]">
                  {/* Vertical Timeline Line */}
                  <div className="absolute left-4 top-10 bottom-2 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40"></div>

                  {/* Timeline Stage Indicators (dots) */}
                  <div
                    className="absolute left-0 top-10 bottom-2 flex flex-col justify-between z-10"
                    style={{ gap: "24px" }}
                  >
                    {bioStages.map((_, index) => (
                      <div
                        key={index}
                        className="relative"
                        style={{ width: "32px", height: "32px" }}
                      >
                        <button
                          onClick={() => {
                            navigateToStage(index, false);
                            setShowDownArrowHint(false);
                          }}
                          className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${index === currentStage ? "bg-primary/20 border-2 border-primary shadow-glow" : "bg-surface-dark/50 border border-gray-700 hover:border-primary/50"}`}
                        >
                          <style>
                            {`
                          @keyframes ripple-gota {
                            0% {
                              transform: scale(1);
                              opacity: 1;
                            }
                            100% {
                              transform: scale(2.5);
                              opacity: 0;
                            }
                          }
                          .animate-ripple-gota {
                            animation: ripple-gota 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                          }
                        `}
                          </style>
                          <div
                            className={`w-3 h-3 rounded-full bg-yellow-400 relative ${index === currentStage ? "" : "grayscale opacity-50"}`}
                          >
                            {index === currentStage && (
                              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ripple-gota"></div>
                            )}
                          </div>
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrow Buttons */}
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full sm:hidden z-20">
                    <button
                      onClick={() => navigateStage("next")}
                      disabled={
                        isAnimating || currentStage === bioStages.length - 1
                      }
                      className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      aria-label="Siguiente etapa"
                    >
                      <FontAwesomeIcon icon={faArrowDown} className="text-xs" />
                    </button>
                  </div>

                  {/* Timeline Stages */}
                  <div className="relative pl-10 sm:pl-14">
                    {bioStages.map((stage, index) => (
                      <div
                        key={stage.id}
                        className={`transition-all duration-500 ease-in-out ${
                          index === currentStage
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-12 absolute inset-0 pointer-events-none"
                        }`}
                      >
                        <div className="relative">
                          <div className="space-y-2 lg:space-y-4">
                            <p className="text-[10px] lg:text-xs font-bold text-primary uppercase tracking-widest">
                              {stage.years}
                            </p>
                            <h3 className="text-white font-bold text-lg lg:text-3xl">
                              {stage.title}
                            </h3>
                            <p className="text-muted-dark text-sm lg:text-xl leading-relaxed max-w-xl">
                              {stage.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Arrow buttons for mobile/desktop - Bottom */}
                    <div className="flex justify-center gap-3 lg:gap-4 mt-6 lg:mt-8">
                      <button
                        onClick={() => navigateStage("prev")}
                        disabled={isAnimating || currentStage === 0}
                        className="w-10 h-10 rounded-full bg-surface-dark/80 border border-gray-700 hover:border-primary/50 flex items-center justify-center text-muted-dark hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Etapa anterior"
                      >
                        <FontAwesomeIcon icon={faArrowUp} className="text-sm" />
                      </button>
                      <button
                        onClick={() => {
                          navigateStage("next");
                          setShowDownArrowHint(false);
                        }}
                        disabled={
                          isAnimating || currentStage === bioStages.length - 1
                        }
                        className={`w-10 h-10 rounded-full bg-surface-dark/80 border border-gray-700 hover:border-primary/50 flex items-center justify-center text-muted-dark hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed ${showDownArrowHint ? "animate-bounce bg-primary/20 border-primary/50 text-primary" : ""}`}
                        aria-label="Siguiente etapa"
                      >
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          className="text-sm"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-primary/50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon
                          icon={faMasksTheater}
                          className="text-primary text-lg"
                        />
                      </div>
                      <p className="font-display font-bold text-white text-xl lg:text-2xl tracking-tight">
                        1,000+
                      </p>
                      <p className="text-[10px] text-muted-dark font-bold uppercase tracking-widest mt-0.5">
                        Shows en vivo
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-surface-dark/50 border border-white/5 hover:border-primary/50 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <FontAwesomeIcon
                          icon={faFaceLaughBeam}
                          className="text-yellow-400 text-lg"
                        />
                      </div>
                      <p className="font-display font-bold text-white text-xl lg:text-2xl tracking-tight">
                        +1M
                      </p>
                      <p className="text-[10px] text-muted-dark font-bold uppercase tracking-widest mt-0.5">
                        De Risas
                      </p>
                    </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
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
                src="/assets/stand-up/banner.PNG"
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

        <section className="px-4 py-12 lg:py-24 bg-background-dark border-y border-gray-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface-dark/50 p-6 md:p-8 lg:p-12 rounded-3xl border border-red-500/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
              <h2 className="font-display text-xl md:text-2xl lg:text-4xl font-bold mb-6 md:mb-8 text-center text-white">
                Este seminario NO es para ti si:
              </h2>
              <ul className="space-y-3 md:space-y-4 text-base md:text-lg mb-6 md:mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p>
                    Crees que hablar bien en público es solo “tener carisma”
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p>
                    Buscas memorizar chistes en lugar de aprender estructura
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p>Quieres improvisar sin preparación ni método</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p>No te interesa mejorar tu forma de comunicar ideas</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">•</span>
                  <p>Esperas resultados sin practicar ni exponerte</p>
                </li>
              </ul>
              <div className="text-center space-y-3 md:space-y-4">
                <p className="text-white text-[13px] md:text-lg font-medium">
                  Este seminario no es para quien quiere hablar por hablar.
                </p>
                <p className="text-primary text-[14px] font-bold text-lg md:text-xl tracking-wide">
                  Es para quien quiere comunicar con intención, seguridad y
                  conexión.
                </p>
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
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-sm lg:text-base"
                      />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base italic text-gray-300 mb-3 lg:mb-6 leading-relaxed">
                    “Yo hacía simplemente contenido gracioso, pero este curso me
                    cambió la cabeza: ahora sé cómo usar el humor con intención
                    y ya empecé a monetizarlo.”
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-bold text-white">
                  — Laura Méndez
                </p>
              </div>
              <div className="bg-surface-dark p-6 lg:p-8 rounded-xl border border-gray-800 shadow-lg relative h-full flex flex-col justify-between">
                <div className="mt-4 lg:mt-6">
                  <div className="flex text-primary mb-2 lg:mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-sm lg:text-base"
                      />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base italic text-gray-300 mb-3 lg:mb-6 leading-relaxed">
                    “Lo que más me gustó es que me ayudó a ordenar mis ideas, a
                    confiar en mi humor y a usarlo de forma estratégica en
                    redes.”
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-bold text-white">
                  — Andrés Castillo
                </p>
              </div>
              <div className="bg-surface-dark p-6 lg:p-8 rounded-xl border border-gray-800 shadow-lg relative h-full flex flex-col justify-between">
                <div className="mt-4 lg:mt-6">
                  <div className="flex text-primary mb-2 lg:mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className="text-sm lg:text-base"
                      />
                    ))}
                  </div>
                  <p className="text-sm lg:text-base italic text-gray-300 mb-3 lg:mb-6 leading-relaxed">
                    “Pensé que era solo para comediantes, pero no. Aprendí a
                    usar el humor para conectar mejor con mis clientes y vender.
                    Vale totalmente la pena.”
                  </p>
                </div>
                <p className="text-xs lg:text-sm font-bold text-white">
                  — Camila Rojas
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 py-12 lg:py-20 bg-primary/5 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8 px-4 sm:px-8">
            <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Aprende técnicas para hablar en público con seguridad, <br />
              <span className="text-primary italic">
                estructura tus ideas y conecta con humor.
              </span>
            </h2>
            <div className="space-y-5 lg:space-y-6">
              <p className="text-base md:text-xl text-muted-dark text-balance ">
                Si solo quieres hacer reír por hobby, este espacio no es para
                ti. <br /><br />
                <span className="text-white font-bold">
                  Si quieres usar tu humor como herramienta de crecimiento y
                  negocio… sí lo es.
                </span>
              </p>
              <button className="bg-primary hover:bg-primary-hover text-white font-display font-bold text-base sm:text-lg md:text-xl lg:text-2xl py-3 sm:py-4 md:py-5 lg:py-6 px-6 sm:px-8 md:px-10 lg:px-12 rounded-xl sm:rounded-2xl shadow-2xl shadow-primary/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
                Quiero dominar el escenario
              </button>
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
          <button className="flex-1 bg-primary hover:bg-primary-hover text-white font-display font-bold text-base md:text-lg py-2.5 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 cursor-pointer">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandUpCoursePage;
