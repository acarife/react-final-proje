import React from 'react';

function ResultCard({ result }) {
  return (
    <div style={{ margin: '20px', fontSize: '18px' }}>
      {result ? <p>Sonuç: {result}</p> : <p>Henüz dönüşüm yapılmadı.</p>}
    </div>
  );
}

export default ResultCard;
