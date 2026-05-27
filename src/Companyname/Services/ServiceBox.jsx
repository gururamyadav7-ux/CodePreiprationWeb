import { HiArrowCircleUp } from "react-icons/hi";

const ServiceBox = () => {
  return (
    <div className="w-80 h-auto flex border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:border-blue-500 hover:scale-105">
      <div className="w-[50%] h-full flex flex-col items-start gap-4 p-2 bg-gray-950 text-medium text-white">
        <div>
          <h2>Service Box</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <div className="w-full h-10 flex items-center justify-center gap-2 text-blue-500">
            <i>
              <HiArrowCircleUp className=" rotate-45"/>
            </i>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-full flex items-center justify-center p-4">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/049/871/615/small_2x/computer-programming-concept-java-html-symbols-web-design-software-application-design-programming-language-development-website-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ServiceBox;
