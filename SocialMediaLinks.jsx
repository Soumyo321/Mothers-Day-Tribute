import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800">
        <FaFacebook size={30} />
      </a>
      <a href="https://instagram.com" className="text-purple-600 hover:text-purple-800">
        <FaInstagram size={30} />
      </a>
      <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600">
        <FaTwitter size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
