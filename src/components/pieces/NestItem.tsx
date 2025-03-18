import { Nest } from "../../types";

export const NestItem = ({ nest, sense }: { nest: Nest; sense: boolean }) => {
  return sense ? SenseLeftItem({ nest }) : SenseRightItem({ nest });
};

const SenseLeftItem = ({ nest }: { nest: Nest }) => (
  <div className="flex flex-col self-center relative z-10 p-4 ml-4 md:mr-100 md:ml-0 lg:mr-0 lg:ml-0 max-w-[400px] lg:w-1/4 md:max-w-[350px] lg:min-w-[350px] lg:max-w-[400px] bg-white shadow-lg rounded-2xl">
    <div className="absolute right-0 top-[30px] bg-golden-yellow-500 h-[10px] rounded-l-xl w-[20px] z-1"></div>

    <div className="flex items-center mb-2 space-x-5 w-full">
      <h2 className="text-lg w-full text-center font-semibold text-deep-black-500">
        {nest.title}
      </h2>
    </div>
    <p className="text-sm w-full text-center self-center text-deep-black-500">
      {nest.description}
    </p>
  </div>
);

const SenseRightItem = ({ nest }: { nest: Nest }) => (
  <div className="flex flex-col self-center relative z-10 p-4 mr-4 md:ml-100 md:mr-0 lg:mr-0 lg:ml-0 max-w-[400px] lg:w-1/4 md:max-w-[350px] lg:min-w-[350px] lg:max-w-[400px] bg-white shadow-lg rounded-2xl">
    <div className="absolute right-0 top-[30px] bg-orange-earth-500 h-[10px] rounded-l-xl w-[20px] z-1"></div>

    <div className="flex items-center mb-2 space-x-5 w-full">
      <h2 className="text-lg w-full text-center font-semibold text-deep-black-500">
        {nest.title}
      </h2>
    </div>
    <p className="text-sm w-full text-center self-center  text-deep-black-500">
      {nest.description}
    </p>
  </div>
);

export default NestItem;
