import React, { useState,useEffect } from "react";
import "./App.css";
import Container from "./components/container";

function App() {
  const [yapilacaklar, setYapilacaklar] = useState([
    {
      id: 1,
      gorev: "Ödevi tamamla",
      tamamlandiMi: false,
    },
    {
      id: 2,
      gorev: "Ders Çalış",
      tamamlandiMi: false,
    },
    {
      id: 3,
      gorev: "Tekrar ders çalışmaya başlayana kadar sosyalleş",
      tamamlandiMi: false,
    },
  ]);

  
  const kalanGorevSayisi = yapilacaklar.filter((gorev) => !gorev.tamamlandiMi).length;

  return (
    <div className="app">
    <div className="header">
    </div>
    
    <Container title={`Kalan Görev Sayısı: ${kalanGorevSayisi}`}
    yapilacaklar={yapilacaklar}
    setYapilacaklar={setYapilacaklar}/>
    </div>
  );
}
export default App;