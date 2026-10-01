import { HiArrowCircleUp } from "react-icons/hi";

const Team = () => {
  return (
    <div>
      <div className="items-center flex border-2 border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:border-blue-500 hover:scale-105">
        <div className="w-[50%] h-full flex flex-col items-start gap-4 p-2 bg-gray-950 text-medium text-white">
          <div>
            <h2>Service Box</h2>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <div className="w-full h-10 flex items-center justify-center gap-2 text-blue-500">
              <i>
                <HiArrowCircleUp className=" rotate-45" />
              </i>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center p-4">
          <img
            src="https://www.officialgates.com/assets/images/banner-images/og_javascript.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
