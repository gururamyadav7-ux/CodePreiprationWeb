import React from "react";
import FigmaImg from "./FigmaImg";
import { useState } from "react";

const CPLDitels = () => {
  return (
    <div className="container mt-5 mx-auto w-full p-5">
      <h1 className="text-3xl font-bold mb-4">CPLDitels</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-xl font-semibold mb-2">Make web applications</h4>
        <div className="text-gray-700">
          <h5 className="text-lg font-medium mb-2">Figma web template</h5>
          <div className="mb-4">
            <p className="text-gray-700">
              Figma web templates are pre-designed layouts or frameworks created
              using Figma, a popular design tool. They serve as a starting point
              for web designers and developers to create websites more
              efficiently. These templates typically include various UI
              components, such as headers, footers, buttons, forms, and
              navigation menus, which can be customized to fit the specific
              needs of a project.
            </p>
            <h5 className="text-lg font-medium mb-2">Features:</h5>
            <ul className="list-disc list-inside">
              <li className="text-gray-700">Responsive design</li>
              <li className="text-gray-700">Customizable components</li>
              <li className="text-gray-700">Easy to use</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-lg font-medium mb-2">Benefits:</h5>
            <ul className="list-disc list-inside">
              <li className="text-gray-700">Saves time and effort</li>
              <li className="text-gray-700">Consistent design language</li>
              <li className="text-gray-700">Improved user experience</li>
            </ul>
          </div>
          <div className="mb-4">
            <h5 className="text-lg font-medium mb-2">Use Cases:</h5>
            <ul className="list-disc list-inside">
              <li className="text-gray-700">Web design projects</li>
              <li className="text-gray-700">Prototyping and wireframing</li>
              <li className="text-gray-700">E-commerce websites</li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-2">Conclusion:</h5>
            <p>
              Figma web templates are valuable resources for web designers and
              developers, offering a solid foundation for creating modern and
              responsive websites.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-medium mb-2">View figma template:</h5>
            <div className="grid grid-cols-1 relative sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <FigmaImg
                alt="Figma Web Template 2"
                imgSrc="https://tse1.mm.bing.net/th/id/OIP.yQfitAgyYJwJLdS5RF0vtQHaE7?r=0&w=680&h=453&rs=1&pid=ImgDetMain&o=7&rm=3"
              />
              <FigmaImg
                alt="Figma Web Template 3"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709557833/catalog/1764636082901606400/xslkgogzbsr2tmjurbuu.jpg"
              />
              <FigmaImg
                alt="Figma Web Template 4"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705760735/catalog/1748711916884070400/ftq0tfv7ooeqqtjdfzqj.jpg"
              />

              <FigmaImg
                alt="Figma Web Template 2"
                imgSrc="https://tse1.mm.bing.net/th/id/OIP.yQfitAgyYJwJLdS5RF0vtQHaE7?r=0&w=680&h=453&rs=1&pid=ImgDetMain&o=7&rm=3"
              />
              <FigmaImg
                alt="Figma Web Template 3"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709557833/catalog/1764636082901606400/xslkgogzbsr2tmjurbuu.jpg"
              />
              <FigmaImg
                alt="Figma Web Template 4"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705760735/catalog/1748711916884070400/ftq0tfv7ooeqqtjdfzqj.jpg"
              />
              <FigmaImg
                alt="Figma Web Template 1"
                imgSrc="https://appsumo2-cdn.appsumo.com/media/selfsubmissions/images/d488f1b1-c8ea-4dd5-9590-d032b7604d29.png?width=850"
              />
              <FigmaImg
                alt="Figma Web Template 2"
                imgSrc="https://tse1.mm.bing.net/th/id/OIP.yQfitAgyYJwJLdS5RF0vtQHaE7?r=0&w=680&h=453&rs=1&pid=ImgDetMain&o=7&rm=3"
              />
              <FigmaImg
                alt="Figma Web Template 3"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1709557833/catalog/1764636082901606400/xslkgogzbsr2tmjurbuu.jpg"
              />
              <FigmaImg
                alt="Figma Web Template 4"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705760735/catalog/1748711916884070400/ftq0tfv7ooeqqtjdfzqj.jpg"
              />
              <FigmaImg
                alt="Figma Web Template 2"
                imgSrc="https://tse1.mm.bing.net/th/id/OIP.yQfitAgyYJwJLdS5RF0vtQHaE7?r=0&w=680&h=453&rs=1&pid=ImgDetMain&o=7&rm=3"
              />
              <FigmaImg
                alt="Figma Web Template 4"
                imgSrc="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705760735/catalog/1748711916884070400/ftq0tfv7ooeqqtjdfzqj.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPLDitels;
