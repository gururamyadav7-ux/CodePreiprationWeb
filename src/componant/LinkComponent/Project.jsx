
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <div className="h-auto bg-gray-950 text-white p-10">
      <h1 className="text-3xl text-white font-bold mb-10">Project</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
        <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
        >

          <h2 className="text-xl text-orange-600 font-bold mb-2">instagram</h2>
          <p className="text-gray-400">
            A social media application for sharing photos and connecting with
            friends.
          </p>
          <h4 className="text-lg text-blue-700 font-semibold mb-2">
            Features:
          </h4>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">
              User authentication and profile management
            </li>
            <li className="text-gray-400">Feed and timeline functionality</li>
            <li className="text-gray-400">Comments and likes</li>
            <li className="text-gray-400">Direct messaging</li>
            <li className="text-gray-400">Hashtag and search functionality</li>
            <li className="text-gray-400">Story sharing</li>
            <li className="text-gray-400">Push notifications</li>
            <li className="text-gray-400">
              Responsive design for mobile and desktop
            </li>
            <li className="text-gray-400">
              Integration with third-party APIs for additional features
            </li>
            <li className="text-gray-400">
              Admin panel for managing users and content
            </li>
            <li className="text-gray-400">
              Analytics and reporting for user engagement and growth
            </li>
            <li className="text-gray-700">
              Security measures to protect user data and prevent unauthorized
              access
            </li>
            <li className="text-gray-400">Photo upload and sharing</li>
            <li className="text-gray-400">Video upload and sharing</li>
            <li className="text-gray-400">Live streaming</li>
            <li className="text-gray-400">
              Geolocation and location-based features
            </li>
            <li className="text-gray-400">
              Integration with social media platforms for sharing content
            </li>
            <li className="text-gray-400">
              Monetization options for content creators
            </li>
          </ul>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project
          </Link>

        </div>
        <div className=" scale-[1.05] text-white bg-black  group rounded-3xl border border-white/10 p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
        >
          <h2 className="text-xl text-orange-600 font-bold mb-2">flipkart</h2>
          <p className="text-gray-400">
            An e-commerce platform for buying and selling products online.
          </p>
          <h4 className="text-lg text-blue-700 font-semibold mb-2">
            Features:
          </h4>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">
              User authentication and profile management
            </li>
            <li className="text-gray-400">Product search and filtering</li>
            <li className="text-gray-400">
              Shopping cart and checkout functionality
            </li>
            <li className="text-gray-400">Payment gateway integration</li>
            <li className="text-gray-400">Order management and tracking</li>
            <li className="text-gray-400">Customer reviews and ratings</li>
            <li className="text-gray-400">Inventory management</li>
            <li className="text-gray-400">
              Responsive design for mobile and desktop
            </li>
            <li className="text-gray-400">
              Integration with third-party APIs for additional features
            </li>
            <li className="text-gray-400">
              Admin panel for managing products and orders
            </li>
            <li className="text-gray-400">
              Analytics and reporting for sales and customer behavior
            </li>
            <li className="text-gray-400">
              Security measures to protect user data and prevent unauthorized
              access
            </li>
          </ul>
          <Link
            to="https://www.flipkart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </Link>

        </div>
        <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.06]"
        >
          <h2 className="text-xl text-orange-600 font-bold mb-2">whatsapp</h2>
          <p className="text-gray-400">
            A messaging application for sending text, voice, and video messages.
          </p>
          <h4 className="text-lg text-blue-700 font-semibold mb-2">
            Features:
          </h4>
          <ul className="list-disc list-inside">
            <li className="text-gray-400">
              User authentication and profile management
            </li>
            <li className="text-gray-400">Real-time messaging</li>
            <li className="text-gray-400">Group chats</li>
            <li className="text-gray-400">File sharing</li>
            <li className="text-gray-400">Voice and video calls</li>
            <li className="text-gray-400">End-to-end encryption</li>
            <li className="text-gray-400">
              Responsive design for mobile and desktop
            </li>
            <li className="text-gray-400">
              Integration with third-party APIs for additional features
            </li>
            <li className="text-gray-400">
              Admin panel for managing users and content
            </li>
            <li className="text-gray-400">
              Analytics and reporting for user engagement and growth
            </li>
            <li className="text-gray-400">
              Security measures to protect user data and prevent unauthorized
              access
            </li>
          </ul>
          <Link
            to="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
