const WorkQustion = () => {
  return (
    <div className="w-full h-auto flex flex-col items-start justify-start gap-5 hover:bg-amber-500 shadow-lg transition-all duration-300 p-4 rounded-3xl">
      <div className="relative flex w-full gap-5">
        <h3 className="text-3xl font-bold">01</h3>
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <i className=" absolute right-5 top-[50%] translate-y-[-50%] text-3xl cursor-pointer bg-green-500 w-10 h-10 text-center rounded-full text-white">
          +
        </i>
      </div>

      <div className="w-full h-auto">
        <p>
          This is a frequently asked questions section where you can provide
          answers to common questions that your clients may have about your
          services, products, or company. This section can help to address any
          concerns or doubts that potential clients may have and can also help
          to build trust and credibility with your audience. You can include
          questions and answers about your pricing, process, timeline, and any
          other relevant information that can help to educate and inform your
          clients.
        </p>
      </div>
    </div>
  );
};

export default WorkQustion;
