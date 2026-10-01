import ServiceBox from "./ServiceBox";

const Service = () => {
  return (
    <div className="w-full flex flex-col px-8 gap-10 mt-10">
      <div className=" flex flex-col items-center justify-center  lg:flex-row gap-6 ">
        <h2 className="text-xl w-40 h-12 font-bold flex items-center justify-center text-gray-800 bg-green-500 px-10  rounded-2xl ">
          Services
        </h2>
        <p className="text-gray-700 w-3/4">
          At CodePrepration, we offer a comprehensive range of services designed
          to help you succeed in your coding journey. Our services include
          interactive coding exercises that allow you to practice and improve
          your coding skills in a hands-on way.
        </p>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-3">
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
        <ServiceBox />
      </div>
    </div>
  );
};

export default Service;
