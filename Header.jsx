import React, { useState } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl">
        <FaBars onClick={() => setMenuOpen(!menuOpen)} />
      </div>
      <div className="text-xl font-bold">Blog</div>
      <div>
        <FaSearch size={20} />
      </div>
    </header>
  );
};

export default Header;
