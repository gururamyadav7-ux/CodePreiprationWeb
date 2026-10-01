import { useState } from "react";

const WorkQustion = () => {
  const [Queastion, setQueastion] = useState(false)
  const [Icontogell, setIcontogell] = useState(false)
  return (
    <div className="w-full h-auto flex flex-col items-start justify-start gap-5 hover:bg-amber-500 shadow-lg transition-all duration-300 p-4 rounded-3xl">
      <div className="relative flex w-full gap-1">
        <h3 className="text-xl font-bold">01</h3>
        <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
        <i
          onClick={() => {
            setIcontogell(!Icontogell)
            setQueastion(!Queastion)
          }}
          className=" absolute flex items-center justify-center -right-2 top-[50%] translate-y-[-50%] cursor-pointer bg-green-500 w-5 h-5 lg:w-10 lg:h-10 lg:text-2xl font-bold rounded-full text-white">
          {Icontogell ? "-" : "+"}
        </i>
      </div>

      <div className={`w-full h-auto ${Queastion ? "block" : "hidden"}`}>
        <p>
          This is a frequently asked questions section where you can provide
          answers to common questions that your clients may have about your
          services, products,
        </p>
      </div>
    </div>
  );
};

export default WorkQustion;
