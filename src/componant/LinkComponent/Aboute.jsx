
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboute = () => {
  const boxRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-auto bg-gray-950 p-5 ">
      <div className="w-full flex items-center justify-center">
        <figure>
          <img
            ref={boxRef}
            className="w-40 h-40 rounded-xl"
            src="src\assets\gururamphotu.jpg"
            alt=""
          />
          <h1 className="text-2xl font-bold text-orange-600">GURU RAM</h1>
          <h4 className="text-xl text-orange-600">Full Stack Developer</h4>
        </figure>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center mt-10">
        <div>
          <p className="text-white">
            I am a passionate web developer with a strong focus on creating
            dynamic and user-friendly web applications. With a solid foundation
            in front-end and back-end technologies, I strive to deliver seamless
            user experiences through clean and efficient code. My goal is to
            continuously learn and adapt to the ever-evolving landscape of web
            development, while contributing to innovative projects that make a
            positive impact.
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <h1 className="text-orange-600 text-2xl font-bold">Contact Me</h1>
            <p className="text-white">Email: gururam@example.com</p>
            <p className="text-white">Phone: +1 123 456-7890</p>
            <p className="text-white">LinkedIn: linkedin.com/in/gururam</p>
            <p className="text-white">GitHub: github.com/gururam</p>
          </div>
          <div className="mt-5">
            <h1 className="text-orange-600 text-2xl text-center font-bold">
              Skills
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-0 sm:px-10">
              <div>
                <h4 className="text-orange-600 text-lg font-semibold">
                  FRONTEND
                </h4>
                <ul className="text-white">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-orange-600 text-lg font-semibold">
                  BACKEND
                </h4>
                <ul className="text-white">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div>
                <h4 className="text-orange-600 text-lg font-semibold">
                  TOOLS & TECHNOLOGIES
                </h4>
                <ul className="text-white">
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
