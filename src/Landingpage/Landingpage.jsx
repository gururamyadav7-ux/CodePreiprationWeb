

const Landingpage = () => {
  return (
    <div className="w-full h-[60vh] px-10 mt-16 flex gap-10">
        <div className="w-full h-auto flex flex-col items-start gap-6">
            <h3 className="text-4xl font-bold text-gray-800">
                Welcome to CodePrepration, 
            </h3>
            <p>
                At CodePrepration, we understand the challenges of learning to code and preparing for technical interviews. That's why we offer a wide range of resources, including interactive coding exercises, video tutorials, and mock interview sessions. Our expert instructors are here to guide you every step of the way, providing personalized feedback and support to help you improve your coding skills and boost your confidence. Join our community of learners and start your coding journey with CodePrepration today!
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Book a free trial session
            </button>
        </div>
        <div className="mt-10">
            <img src="https://static.vecteezy.com/system/resources/previews/036/324/317/non_2x/web-developer-wiring-code-or-program-using-laptop-computer-programming-java-html-symbols-web-design-software-application-design-programming-languages-developing-website-vector.jpg" alt="Coding" className="w-full h-auto rounded-lg shadow-md" />
        </div>      
    </div>
  )
}

export default Landingpage
