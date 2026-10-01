
import CourseCord from "./CourseCord";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const Course = () => {
  return (
    <div className="lg:h-screen h-auto bg-slate-950 lg:px-10 lg:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 pb-3 lg:gap-5">
      <CourseCord
        icon={<FaHtml5 className="text-5xl text-red-600" />}
        title="HTML5"
        description="Learn the fundamentals of HTML5 and build modern web applications."
      />
      <CourseCord
        icon={<FaCss3Alt className="text-5xl text-blue-500" />}
        title="CSS3"
        description="Master the art of styling with CSS3 and create beautiful user interfaces."
      />
      <CourseCord
        icon={<FaJs className="text-5xl text-yellow-500" />}
        title="JavaScript"
        description=" Dive into the world of JavaScript and build interactive web applications."
      />
      <CourseCord
        icon={<FaReact className="text-5xl text-blue-500" />}
        title="React"
        description="Learn to build modern web applications with React and its ecosystem."
      />
      <CourseCord
        icon={<FaNodeJs className="text-5xl text-green-500" />}
        title="Node.js"
        description="Explore the power of Node.js for server-side development."
      />
      <CourseCord
        icon={<FaDatabase className="text-5xl text-purple-500" />}
        title="MongoDB"
        description="Understand the basics of MongoDB and build scalable database solutions."
      />
      <CourseCord
        icon={<FaPython className="text-5xl text-yellow-500" />}
        title="Python"
        description="Learn the fundamentals of Python and build powerful applications."
      />
      <CourseCord 
        icon={<SiNextdotjs className="text-5xl text-white" />}
        title="Next.js"
        description="Learn to build modern web applications with Next.js and its ecosystem."
      />
    </div>
  );
};

export default Course;
