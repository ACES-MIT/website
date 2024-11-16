import React from "react";

export const PageNotFound = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen h-screen">
      <div className="text-center text-white">
        <div
          className="mt-9 ml-1 text-base font-medium bg-[#1C1C1C] inline-block py-3 rounded-full border-t border-t-white border-opacity-25 
                 sm:w-[150px] md:w-[120px] lg:w-auto xl:w-auto md:px-6 sm:px-10"
        >
          404 Error
        </div>
        <h1 className="text-6xl font-bold mb-4">NOT FOUND</h1>
        <p className="text-lg mb-8">
          Oops! It seems the page you're looking for doesn't exist. Don't worry,
          let's get you back to the homepage where you can explore more.
        </p>
        <a
          href="/"
          className="text-white underline flex items-center justify-center"
        >
          Return to Homepage <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};
