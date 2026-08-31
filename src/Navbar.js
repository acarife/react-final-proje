import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function Navbar() {
  const { theme } = useContext(ThemeContext);

  const navStyle = {
    backgroundColor: theme === 'dark' ? '#333' : '#eee',
    color: theme === 'dark' ? '#fff' : '#000',
    padding: '10px',
  };

  return (
    <nav style={navStyle}>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/converter">Converter</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/product/1">Product</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
