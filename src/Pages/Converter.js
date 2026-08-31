import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Converter() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");
  const [result, setResult] = useState(null);

  // API'den veri çekiyoruz
  const { data, loading, error } = useFetch("https://open.er-api.com/v6/latest/USD");

  // Form validasyonu + dönüşüm
  const handleConvert = () => {
    if (!amount) {
      alert("Lütfen miktar girin.");
      return;
    }
    if (amount <= 0) {
      alert("Miktar 0 veya negatif olamaz.");
      return;
    }
    if (!data || !data.rates) {
      alert("Veri alınamadı, tekrar deneyin.");
      return;
    }
    const converted = (amount * data.rates[to]) / data.rates[from];
    setResult(converted);
  };

  // Loading & Error UI
  if (loading) {
    return (
      <div style={{ padding: "20px", color: "blue" }}>
        <h2>⏳ Veriler yükleniyor...</h2>
        <p>Lütfen birkaç saniye bekleyin.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", color: "red" }}>
        <h2>❌ Bir hata oluştu</h2>
        <p>Detay: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Döviz Dönüştürücü</h1>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Miktar"
        style={{ marginRight: "10px" }}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(data?.rates || {}).map((code) => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>

      <span style={{ margin: "0 10px" }}>→</span>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(data?.rates || {}).map((code) => (
          <option key={code} value={code}>{code}</option>
        ))}
      </select>

      <button onClick={handleConvert} style={{ marginLeft: "10px" }}>
        Dönüştür
      </button>

      {result && (
        <p style={{ marginTop: "20px" }}>
          Sonuç: {amount} {from} = {result.toFixed(2)} {to}
        </p>
      )}
    </div>
  );
}

export default Converter;
