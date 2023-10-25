import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 font">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Context-smart Aware Search Engine</p>
        <p>All rights reserved. Designed By Wisdom Chinonso Matthew. </p>
      </div>
    </footer>
  );
};

export default Footer;
