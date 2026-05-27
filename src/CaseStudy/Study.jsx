import { HiArrowNarrowUp } from "react-icons/hi";

const Study = () => {
  return (
    <div className="w-full h-auto  flex  align-items-center justify-center mt-16">
      <div className="w-[90%]  h-auto p-4  flex justify-evenly items-center border-2 border-gray-300 rounded-3xl bg-blue-950">
        <div className="w-[30%] h-60 p-4  flex flex-col gap-6 border-l-2 border-amber-50 text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="flex w-[40%] justify-between">
            <a href="#" className="text-green-500 hover:text-green-300">
              Learn More
            </a>
            <i>
              <HiArrowNarrowUp className=" rotate-45 text-2xl text-green-500 hover:text-green-300 cursor-pointer" />
            </i>
          </div>
        </div>
        <div className="w-[30%] h-60 p-4  flex flex-col gap-6 border-l-2 border-amber-50 text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="flex w-[40%] justify-between">
            <a href="#" className="text-green-500 hover:text-green-300">
              Learn More
            </a>
            <i>
              <HiArrowNarrowUp className=" rotate-45 text-2xl text-green-500 hover:text-green-300 cursor-pointer" />
            </i>
          </div>
        </div>
        <div className="w-[30%] h-60 p-4  flex flex-col gap-6 border-l-2 border-amber-50 text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
          <div className="flex w-[40%] justify-between">
            <a href="#" className="text-green-500 hover:text-green-300">
              Learn More
            </a>
            <i>
              <HiArrowNarrowUp className=" rotate-45 text-2xl text-green-500 hover:text-green-300 cursor-pointer" />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
