import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center px-4 pt-20 overflow-hidden">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Upcoming
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">
          Stay tuned for exciting features coming soon!
        </p>
        <div className="space-y-3">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-base md:text-lg font-semibold mb-1">Member Login Portal</h3>
            <p className="text-sm text-gray-400">Access exclusive ACES member resources and content</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-base md:text-lg font-semibold mb-1">Event Management</h3>
            <p className="text-sm text-gray-400">Track your registrations and upcoming events</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-base md:text-lg font-semibold mb-1">Community Hub</h3>
            <p className="text-sm text-gray-400">Connect with fellow ACES members</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
