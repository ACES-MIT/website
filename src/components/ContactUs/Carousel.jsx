import React, { useState } from "react";

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Varun Poojari",
      subtitle: "MIT Pass out Batch 2024",
      message: `"ACES has been an invaluable resource to our university, offering students an array of immersive activities that foster growth and development. Their unwavering commitment to student success is truly impressive and aligns perfectly with our academic objectives."`,
      img: "pathak.jpg",
    },
    {
      name: "Arya Shetty",
      subtitle: "CSE, Batch 2025",
      message: `"The support and opportunities provided by ACES have been pivotal in helping me explore my interests and develop new skills. The community is welcoming, inspiring, and filled with enthusiastic members."`,
      img: "pathak.jpg",
    },
    {
      name: "Rohit Rao",
      subtitle: "ECE, Batch 2023",
      message: `"Being a part of ACES has enriched my college experience immensely. From workshops to hands-on projects, they provide everything needed to advance in our careers."`,
      img: "pathak.jpg",
    },
  ];

  const changeTestimonial = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  return (
    <div className="relative max-w-3xl w-full text-center overflow-hidden py-10 mx-auto">
      <div className="relative h-64">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            style={{
              transform:
                index === currentIndex ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-28 h-28 rounded-full bg-gray-500 mb-4"
              />
              <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
              <p className="text-lg text-gray-300">{testimonial.subtitle}</p>
              <p className="text-lg italic max-w-2xl mx-auto text-gray-200 mt-2">
                {testimonial.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4">
        <span
          className="cursor-pointer text-3xl text-white"
          onClick={() => changeTestimonial(-1)}
        >
          &#10094;
        </span>
        <span
          className="cursor-pointer text-3xl text-white"
          onClick={() => changeTestimonial(1)}
        >
          &#10095;
        </span>
      </div>

      {/* Dots for navigation */}
      <div className="flex justify-center mt-5">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TestimonialCarousel;
