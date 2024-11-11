import React, { useState } from "react";
import TestimonialCarousel from "./Carousel";
import Footer from "../footer";
import Community from "../JoinCommunity";

const ContactAndTestimonials = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-black text-white p-5">
      {/* Contact Section */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-7xl font-bold mb-8 mt-2">CONNECT WITH US</h1>
        <p className="text-lg text-gray-300 mb-12">
          Let's connect and bring your vision to life in the Computer Science
          and Engineering community. We're excited to collaborate with you and
          provide support to turn your ideas into reality.
        </p>
        <div className="flex justify-between items-start gap-5 mb-10">
          <a
            href="mailto:parliamentofaces2018@gmail.com"
            className="bg-white text-black py-3 px-5 rounded-full font-bold transition-colors duration-300 hover:bg-pink-400 hover:text-white"
          >
            Let's Collaborate
          </a>
          <form className="flex flex-col gap-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-white text-black p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white text-black p-3 rounded-md"
            />
            <textarea
              placeholder="Message"
              required
              className="bg-white text-black p-4 rounded-md h-24 resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black py-3 rounded-full font-bold transition-colors duration-300 hover:bg-pink-400 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-between items-start gap-5">
          <form className="flex flex-col gap-4 w-full max-w-sm">
            <input
              type="text"
              placeholder="Name"
              required
              className="bg-white text-black p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white text-black p-3 rounded-md"
            />
            <textarea
              placeholder="Message"
              required
              className="bg-white text-black p-4 rounded-md h-24 resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black py-3 rounded-full font-bold transition-colors duration-300 hover:bg-pink-400 hover:text-white"
            >
              Request a Blog
            </button>
          </form>
          <a
            href="mailto:parliamentofaces2018@gmail.com"
            className="bg-white text-black py-3 px-5 rounded-full font-bold transition-colors duration-300 hover:bg-pink-400 hover:text-white"
          >
            Post a Blog
          </a>
        </div>
      </div>

      {/* Testimonial Section */}
      <TestimonialCarousel />
      <Community />
      <Footer />

      
    </div>
  );
};

export default ContactAndTestimonials;
