import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Ana Sayfa - Tema: {theme}</h1>
      <button onClick={toggleTheme}>Tema Değiştir</button>
    </div>
  );
}

export default Home;
