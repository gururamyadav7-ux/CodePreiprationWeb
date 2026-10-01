

const ForgetP = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full border border-gray-300 lg:w-1/2 lg:h-4/5 rounded-xl gardiant flex flex-col justify-center items-center gap-4">
        <form action="submit" className="w-full flex flex-col lg:px-20 px-3 gap-4">
          <h1 className="text-2xl font-bold text-center">Forget-Password</h1>

          <div>
            <span className="text-xl text-black">Email / Phone</span>
            <input
              type="email/number"
              className="border bg-white border-gray-300 w-full rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email / Phone"
            />
          </div>

          <div>
            <p className="text-gray-600 text-sm">
              OTP resend?{" "}
              <a
                href="/send"
                className="text-blue-600 font-bold text-[1rem] hover:underline"
              >
                Send
              </a>
            </p>
          </div>

          <div>
            <span className="text-xl text-black">OTP email / phone</span>
            <input
              type="password"
              className="border bg-white border-gray-300 w-full   rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="OTP"
            />
          </div>
          <p className="text-black">
            Set password?
          </p>
          <div>
            <span className="text-xl text-black">Password</span>
            <input
              type="password"
              className="border bg-white border-gray-300 w-full   rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>

          <div>
            <span className="text-xl text-black">Conform Password</span>
            <input
              type="password"
              className="border bg-white border-gray-300 w-full   rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="conform Password"
            />
          </div>
         
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetP;
