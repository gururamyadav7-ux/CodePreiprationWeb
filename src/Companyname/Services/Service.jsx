import ServiceBox from "./ServiceBox";

const Service = () => {
  return (
    <div className="w-full h-auto px-10 mt-16 flex  flex-col items-start gap-6">
      <div className=" flex gap-6 ">
        <h2 className="text-2xl font-bold text-gray-800 bg-green-500 text-center px-10  rounded-2xl ">Services</h2>
        <p className="text-gray-700 w-3/4">
          At CodePrepration, we offer a comprehensive range of services designed
          to help you succeed in your coding journey. Our services include
          interactive coding exercises that allow you to practice and improve
          your coding skills in a hands-on way.
        </p>
      </div>
      <div className="w-full h-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
