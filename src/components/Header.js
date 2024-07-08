import React, { useState } from 'react';
import './styles/Header.css';

const Header = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
        </ul>
      </nav>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
};

export default Header;
