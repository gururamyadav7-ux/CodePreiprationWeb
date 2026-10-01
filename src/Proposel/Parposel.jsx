const Parposel = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:flex-row items-center  gap-10 p-10">
      <div className="w-full lg:w-1/2 h-auto flex flex-col items-start gap-6">
        <h2 className="w-full text-3xl font-bold">Parposel</h2>
        <p>
          Description of the proposal goes here. This section can include
          details about the proposal, its objectives, and any relevant
          information that helps to understand the purpose and scope of the
          proposal.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Get your free proposal
        </button>
      </div>
      <div className="w-full lg:w-1/2 h-auto">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/036/289/728/small_2x/web-development-concept-flat-illustration-template-web-design-computer-programming-mobile-application-design-coding-software-programming-languages-website-vector.jpg"
          alt="Proposal Image"
        />
      </div>
    </div>
  );
};

export default Parposel;
