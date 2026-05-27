const ContantUs = () => {
  return (
    <div className="w-full h-auto mt-16">
      <div className="w-full h-auto flex  items-center justify-evenly gap-5 mb-16 bg-gray-700 text-white p-4">
        <h3 className="text-xl font-bold">Contact Us</h3>
        <p className="w-[50%] h-auto">
          If you have any questions or would like to learn more about our
          services, please don't hesitate to contact us. You can reach us by
          phone, email,
        </p>
        <div>
          <h3>Phone</h3>
          <p>+91-788-723-4972</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>info@company.com</p>
        </div>
      </div>
      <div className=" w-full h-auto flex shadow-lg rounded-3xl items-center justify-evenly gap-5 p-10">
        <div className="w-[50%] h-auto flex items-center justify-center gap-5 flex-col">
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
          <div className="w-full  h-auto flex items-center justify-center gap-5 pt-4 flex-col">
            <div className="flex flex-col items-start w-full justify-center gap-2">
              <label htmlFor="name" className="font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="focus:ring-2 focus:ring-green-500 w-3/4 h-12 pl-2 border-2 outline-none border-gray-300 rounded"
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
                className="focus:ring-2 focus:ring-green-500 w-3/4 h-12 pl-2 border-2 outline-none border-gray-300 rounded"
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
              className="bg-green-500 font-medium text-white py-2 px-[30%] rounded hover:bg-green-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="w-[50%] h-auto flex items-center justify-center">
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
