import { Nest } from "../../types";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface NestItemProps {
  nest: Nest;
  isActive: boolean;
  onHover: () => void;
}

export const NestItem = ({ nest, isActive, onHover }: NestItemProps) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={`group cursor-pointer relative flex items-center justify-between p-5 rounded-xl transition-all duration-300 ${isActive
          ? "bg-white shadow-md border-l-4 border-golden-yellow-500"
          : "hover:bg-white/50 border-l-4 border-transparent"
        }`}
      whileHover={{ x: 5 }}
    >
      <div className="flex flex-col">
        <h3 className={`font-bold text-lg transition-colors duration-300 ${isActive ? "text-deep-black-500" : "text-gray-500 group-hover:text-deep-black-500"
          }`}>
          {nest.title}
        </h3>
      </div>

      <div className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`}>
        <FontAwesomeIcon icon={faChevronRight} className="text-golden-yellow-500" />
      </div>
    </motion.div>
  );
};

export default NestItem;
