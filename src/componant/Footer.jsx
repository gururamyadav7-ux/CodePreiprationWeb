import React from "react";

function Footer() {
  return (
    <div className="w-full h-auto bg-black flex flex-col lg:flex-row gap-10 ">
      <div className="flex flex-col items-start p-5  gap-5 text-white">
        <h2 className="text-2xl font-bold">CodePrepration</h2>
        <p className="text-center">
          Learn to code with structured courses, practice, and real-world
          projects.
        </p>
        <p className="text-center">
          Copyright © 2026 Sorting CodePrepration Technologies Pvt Ltd. All
          Rights Reserved.
        </p>
      </div>

      <div className="grid grid-cols-2 items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl font-bold text-white">cecials</h2>
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="https://www.facebook.com/CodePrepration"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="https://www.instagram.com/codeprepration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="https://www.linkedin.com/company/codeprepration/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="https://www.youtube.com/@codeprepration"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl font-bold text-white">Legal</h2>
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/cookie-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/refund-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl font-bold text-white">register</h2>
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <h2 className="text-2xl font-bold text-white">pages</h2>
          <ul className="flex flex-col justify-center items-center gap-5">
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/Home"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/Aboute"
                target="_blank"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/Course"
                target="_blank"
                rel="noopener noreferrer"
              >
                Course
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/CPL-Ditels"
                target="_blank"
                rel="noopener noreferrer"
              >
                CPL-Ditels
              </a>
            </li>
            <li>
              <a
                className="text-white hover:text-orange-500"
                href="/Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
