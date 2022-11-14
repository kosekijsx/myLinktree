import React from "react";
import icon from "../assets/keyboard-regular.svg";
const Footer = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          🌎<span class="ml-3 text-xl">leandrobordon.com</span>
        </a>
        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 Leandro Bordon{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
