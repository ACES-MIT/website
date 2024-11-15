import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NodeMailer } from "../service/API";

function EventRegistrationForm() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Entroll, setEntroll] = useState("");
  const [Div, setDiv] = useState("");

  const Submit = (Name, Email, Phone, Entroll, Div) => {
    if (Name && Email && Phone && Entroll) {
      let data = { name: Name, email: Email, number: Phone };
      NodeMailer(data);
      // console.log(response);
      // alert("sub");
      setName("");
      setEmail("");
      setPhone("");
      setEntroll("");
      setDiv("");
    }
  };

  return (
    <div className="text-left min-h-screen flex items-center justify-center bg-black text-white p-4 ">
      <div className="w-full max-w-2xl md:p-8 p-4 space-y-6 mt-24">
        <button className="bg-[#111111] rounded-full p-3 no-underline text-purple-500 hover:text-purple-300 mb-4 text-base">
          &lt; Back to home
        </button>
        <p className="text-sm font-semibold mb-4 flex items-center">
          <span className="animate-pulse text-purple-500 mr-1">•</span>
          <span className="text-purple-500">Closes on 25 October</span>
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          Registration for Dil Chahta Hai
        </h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.8)] hover:ring-2 hover:ring-purple-500 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Mail Id"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.8)] hover:ring-2 hover:ring-purple-500 transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.8)] hover:ring-2 hover:ring-purple-500 transition duration-200"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">
                Enrollment Number
              </label>
              <input
                type="text"
                placeholder="Enrollment Number"
                onChange={(e) => {
                  setEntroll(e.target.value);
                }}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.8)] hover:ring-2 hover:ring-purple-500 transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Division</label>
              <input
                type="text"
                placeholder="Division"
                onChange={(e) => {
                  setDiv(e.target.value);
                }}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:shadow-[0_0_10px_2px_rgba(128,0,128,0.8)] hover:ring-2 hover:ring-purple-500 transition duration-200"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={Submit(Name, Email, Phone, Entroll, Div)}
            className="w-full py-2 mt-6 bg-white text-black font-bold rounded-full text-base hover:bg-purple-500 hover:text-white transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventRegistrationForm;
