import { useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  const pageStyle = {
    backgroundColor: theme === 'dark' ? '#111' : '#fff',
    color: theme === 'dark' ? '#eee' : '#000',
    minHeight: '100vh',
    padding: '20px',
  };

  return (
    <div style={pageStyle}>
      <h1>About Sayfası</h1>
      <p>Bu proje React Router, Context API ve Custom Hook kullanılarak geliştirilmiştir.</p>
    </div>
  );
}

export default About;
