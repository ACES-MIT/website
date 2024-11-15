import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ContactPost, BlogPost } from "../../service/API";

const ContactPage = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [CName, setCName] = useState("");
  const [CEmail, setCEmail] = useState("");
  const [CMessage, setCMessage] = useState("");

  const [BName, setBName] = useState("");
  const [BEmail, setBEmail] = useState("");
  const [BMessage, setBMessage] = useState("");

  const testimonials = [
    {
      name: "Varun Poojari",
      subtitle: "MIT Pass out Batch 2024",
      message: `"ACES has been an invaluable resource to our university, offering students an array of immersive activities that foster growth and development. Their unwavering commitment to student success is truly impressive and aligns perfectly with our academic objectives."`,
      image: "pathak.jpg",
    },
    {
      name: "Arya Shetty",
      subtitle: "CSE, Batch 2025",
      message: `"The support and opportunities provided by ACES have been pivotal in helping me explore my interests and develop new skills. The community is welcoming, inspiring, and filled with enthusiastic members."`,
      image: "pathak.jpg",
    },
    {
      name: "Rohit Rao",
      subtitle: "ECE, Batch 2023",
      message: `"Being a part of ACES has enriched my college experience immensely. From workshops to hands-on projects, they provide everything needed to advance in our careers."`,
      image: "pathak.jpg",
    },
  ];

  const showTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const changeTestimonial = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = testimonials.length - 1;
    if (newIndex >= testimonials.length) newIndex = 0;
    showTestimonial(newIndex);
  };

  const Submit = (Name, Email, Message) => {
    if (Name && Email && Message) {
      let data = { name: Name, email: Email, message: Message };
      ContactPost(data);
      setCName("");
      setCEmail("");
      setCMessage("");
    }
  };

  const Blog = (Name, Email, Message) => {
    if (Name && Email && Message) {
      let data = { author: Name, image: Email, content: Message };
      BlogPost(data);
      setBName("");
      setBEmail("");
      setBMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white p-5 md:p-10 lg:p-20 mt-36">
      <div className="text-center max-w-2xl w-full mb-8 md:mb-16">
        <p className="text-3xl md:text-5xl lg:text-7xl mb-3 font-bold">
          CONNECT WITH US
        </p>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 md:mb-10">
          Let's connect and bring your vision to life in the Computer Science
          and Engineering community. We're excited to collaborate with you and
          provide support to turn your ideas into reality.
        </p>

        {/* First Section - Let's Collaborate */}
        <div className="flex flex-col items-center gap-5 mt-5">
          <a
            href="mailto:parliamentofaces2018@gmail.com"
            className="bg-[#111111] text-white px-6 py-3 md:py-4 rounded-full font-bold transition duration-300 hover:bg-orchid w-fit"
          >
            Let's Collaborate
          </a>
          <form className="flex flex-col gap-3 w-full max-w-sm">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                setCName(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setCEmail(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full"
            />
            <textarea
              placeholder="Message"
              required
              onChange={(e) => {
                setCMessage(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full h-24 resize-none"
            ></textarea>
            <button
              type="submit"
              onClick={() => Submit(CName, CEmail, CMessage)}
              className="bg-white text-black px-4 py-2 md:py-3 rounded-full font-bold transition duration-300 hover:bg-orchid hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Second Section - Post a Blog */}
        <div className="flex flex-col items-center gap-5 mt-8 md:mt-10">
          <a
            href="mailto:parliamentofaces2018@gmail.com"
            className="bg-[#111111] text-white px-6 py-3 md:py-4 rounded-full font-bold transition duration-300 hover:bg-orchid w-fit"
          >
            Post a Blog
          </a>
          <form className="flex flex-col gap-3 w-full max-w-sm">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => {
                setBName(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setBEmail(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full"
            />
            <textarea
              placeholder="Message"
              required
              onChange={(e) => {
                setBMessage(e.target.value);
              }}
              className="bg-[#111111] text-white p-3 rounded-lg w-full h-24 resize-none"
            ></textarea>
            <button
              type="submit"
              onClick={() => Blog(BName, BEmail, BMessage)}
              className="bg-white text-black px-4 py-2 md:py-3 rounded-full font-bold transition duration-300 hover:bg-orchid hover:text-white"
            >
              Request a Blog
            </button>
          </form>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative max-w-2xl w-full text-center overflow-hidden py-5 md:py-10">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center text-center gap-3"
            >
              <img src={testimonial.image} alt={`Person ${index + 1}`} className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-400"/>
              <h3 className="text-lg md:text-xl">{testimonial.name}</h3>
              <p className="text-xs md:text-sm text-gray-300">{testimonial.subtitle}</p>
              <p className="text-sm md:text-lg italic max-w-xl mx-auto">{testimonial.message}</p>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
          <span
            onClick={() => changeTestimonial(-1)}
            className="cursor-pointer text-lg md:text-2xl text-white px-3 md:px-4 select-none"
          >
            &#10094;
          </span>
          <span
            onClick={() => changeTestimonial(1)}
            className="cursor-pointer text-lg md:text-2xl text-white px-3 md:px-4 select-none"
          >
            &#10095;
          </span>
        </div>

        <div className="flex justify-center mt-5">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => showTestimonial(index)}
              className={`h-2 w-2 md:h-2.5 md:w-2.5 mx-1 bg-gray-500 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
