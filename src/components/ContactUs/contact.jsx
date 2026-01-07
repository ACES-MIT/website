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

  // Auto-switch testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

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
    <div className="flex flex-col items-center justify-center bg-black text-white px-5 md:px-10 lg:px-20 pt-32 pb-12">
      <div className="text-center max-w-6xl w-full mb-8">
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          CONNECT WITH US
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-6 max-w-3xl mx-auto">
          Let's connect and bring your vision to life in the Computer Science
          and Engineering community. We're excited to collaborate with you and
          provide support to turn your ideas into reality.
        </p>

        {/* Forms Section - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-6">
          {/* First Section - Let's Collaborate */}
          <div className="flex flex-col items-center gap-4 p-5 md:p-6 bg-gradient-to-br from-purple-900/10 to-pink-900/10 border border-purple-500/20 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-1">Let's Collaborate</h2>
            <a
              href="mailto:parliamentofaces2018@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 w-fit"
            >
              Email Us
            </a>
            <form className="flex flex-col gap-3 w-full">
              <input
                type="text"
                placeholder="Name"
                required
                value={CName}
                onChange={(e) => {
                  setCName(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={CEmail}
                onChange={(e) => {
                  setCEmail(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <textarea
                placeholder="Message"
                required
                value={CMessage}
                onChange={(e) => {
                  setCMessage(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full h-24 resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              ></textarea>
              <button
                type="submit"
                onClick={() => Submit(CName, CEmail, CMessage)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Second Section - Post a Blog */}
          <div className="flex flex-col items-center gap-4 p-5 md:p-6 bg-gradient-to-br from-pink-900/10 to-purple-900/10 border border-purple-500/20 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-1">Post a Blog</h2>
            <a
              href="mailto:parliamentofaces2018@gmail.com"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 w-fit"
            >
              Email Us
            </a>
            <form className="flex flex-col gap-3 w-full">
              <input
                type="text"
                placeholder="Name"
                required
                value={BName}
                onChange={(e) => {
                  setBName(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={BEmail}
                onChange={(e) => {
                  setBEmail(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <textarea
                placeholder="Message"
                required
                value={BMessage}
                onChange={(e) => {
                  setBMessage(e.target.value);
                }}
                className="bg-[#111111] border border-purple-500/30 text-white p-3 text-sm rounded-lg w-full h-24 resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              ></textarea>
              <button
                type="submit"
                onClick={() => Blog(BName, BEmail, BMessage)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2.5 text-sm rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
              >
                Request a Blog
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative max-w-4xl w-full text-center overflow-hidden py-12 md:py-16 mt-16 md:mt-20 pt-12 md:pt-16 border-t border-purple-500/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">What People Say</h2>
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full flex flex-col items-center text-center gap-4 px-4"
            >
              <img src={testimonial.image} alt={`Person ${index + 1}`} className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1"/>
              <h3 className="text-xl md:text-2xl font-bold">{testimonial.name}</h3>
              <p className="text-sm md:text-base text-purple-400">{testimonial.subtitle}</p>
              <p className="text-base md:text-lg italic text-gray-300 max-w-2xl mx-auto leading-relaxed">{testimonial.message}</p>
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-2">
          <button
            onClick={() => changeTestimonial(-1)}
            className="cursor-pointer text-2xl md:text-3xl text-white bg-purple-600/30 hover:bg-purple-600/50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            &#10094;
          </button>
          <button
            onClick={() => changeTestimonial(1)}
            className="cursor-pointer text-2xl md:text-3xl text-white bg-purple-600/30 hover:bg-purple-600/50 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            &#10095;
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => showTestimonial(index)}
              className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full cursor-pointer transition-all duration-300 ${index === currentIndex ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125' : 'bg-gray-600 hover:bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
