const ContantUs = () => {
  return (
    <div className="w-full py-5 h-auto flx flex-col">
      <div className="w-full py-3 flex flex-col lg:flex-row lg:px-3 items-center justify-evenly gap-2 bg-gray-700 text-white">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p className="px-3 lg:w-[50%] ">
          If you have any questions or would like to learn more about our
          services, please don't hesitate to contact us. You can reach us by
          phone, email,
        </p>
        <div className="flex gap-2">
          <h3>Phone</h3>
          <p>+91-788-723-4972</p>
        </div>
        <div className="flex gap-2">
          <h3>Email</h3>
          <p>info@company.com</p>
        </div>
      </div>
      <div className=" w-full h-auto flex flex-col lg:flex-row shadow-lg rounded-3xl items-center">
        <div className="w-full lg:w-1/2 mt-5 pl-5 h-auto flex items-center justify-center gap-5 flex-col">
          <div className="w-full h-auto flex  gap-5">
            <div className="flex items-center justify-center gap-2">
              <input type="radio" id="phone" name="contact" />
              <label htmlFor="phone" className="font-medium">
                Phone
              </label>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input type="radio" id="email" name="contact" />
              <label htmlFor="email" className="font-medium">
                Email
              </label>
            </div>
          </div>
          <div className=" pb-3 w-full h-auto flex items-center justify-center gap-5 pt-4 flex-col">
            <div className=" h-full flex flex-col items-start w-full justify-center gap-2">
              <label htmlFor="name" className="font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:ring-2 focus:ring-green-500 w-[90%] h-10 pl-2 border-2 outline-none border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col items-start w-full justify-center gap-2">
              <label htmlFor="email" className="font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="focus:ring-2 focus:ring-green-500 w-[90%] h-10 pl-2 border-2 outline-none border-gray-300 rounded"
              />
            </div>
            <div className=" w-full ">
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className="focus:ring-2 focus:ring-green-500 w-3/4 h-50 pl-2 pt-2 border-2 outline-none border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              className="bg-green-500 text-xl font-medium text-white py-2 px-[30%] rounded hover:bg-green-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 w-full h-auto flex items-center justify-center">
          <img
            className="w-[80%] h-auto"
            src="https://img.magnific.com/premium-vector/colorful-coding-logo-designs-template-modern-code-logo-programmer_316493-876.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ContantUs;
