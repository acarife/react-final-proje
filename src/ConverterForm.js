import React, { useState } from 'react';

function ConverterForm({ onConvert }) {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');

  const handleSubmit = (e) => {
    e.preventDefault();
    onConvert(amount, fromCurrency, toCurrency);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
      <input
        type="number"
        placeholder="Miktar"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="TRY">TRY</option>
      </select>
      <button type="submit">Dönüştür</button>
    </form>
  );
}

export default ConverterForm;
