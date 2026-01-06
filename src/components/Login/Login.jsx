import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Upcoming
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 mb-12">
          Stay tuned for exciting features coming soon!
        </p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Member Login Portal</h3>
            <p className="text-gray-400">Access exclusive ACES member resources and content</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Event Management</h3>
            <p className="text-gray-400">Track your registrations and upcoming events</p>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Community Hub</h3>
            <p className="text-gray-400">Connect with fellow ACES members</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="mt-12 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Login;
