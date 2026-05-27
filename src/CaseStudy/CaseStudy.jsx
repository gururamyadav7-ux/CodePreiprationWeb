import Study from "./Study";

const CaseStudy = () => {
  return (
    <>
      <div className="w-full h-auto p-4  flex  gap-6 mt-16">
        <h2 className=" font-bold h-10 w-auto px-8 text-center text-2xl bg-green-500 rounded-xl ">Case Study</h2>
        <p className="w-[70%] h-auto ">
          This is a case study section where you can provide detailed
          information about a specific project, product, or service. You can
          include information about the challenges faced, the solutions
          implemented, and the results achieved. This section can also include
          testimonials, data, and any other relevant information that helps to
          illustrate the success of the case study.
        </p>
      </div>
      <Study />
    </>
  );
};

export default CaseStudy;
