import React from "react";

export default function Container(props) {
const gorevListesi = [];

for (let j = 0; j < props.yapilacaklar.length; j++) {
const gorevItem = props.yapilacaklar[j];
const gorevDiv = (
<div
gorevv={j}
style={{backgroundColor: "white",padding: "23px",borderRadius: "5px",marginBottom: "10px",textDecoration: gorevItem.tamamlandiMi ? "line-through" : "",display: "flex",justifyContent: "space-between",
}}
>
<span>{gorevItem.gorev}</span>
<div>
{gorevItem.tamamlandiMi ? (
<button
onClick={() => {
const yeniGorevler = props.yapilacaklar.filter(
(item) => item.id !== gorevItem.id
);
props.setYapilacaklar(yeniGorevler);
}}
>
x
</button>
) : (
<>
<button
onClick={() => {
const yeniGorevler = [...props.yapilacaklar];
yeniGorevler[j].tamamlandiMi = true;
props.setYapilacaklar(yeniGorevler);
}}
>
Tamamla
</button>
<button
onClick={() => {
const yeniGorevler = props.yapilacaklar.filter(
(item) => item.id !== gorevItem.id
);
props.setYapilacaklar(yeniGorevler);
}}
>
x
</button>
</>
)}
</div>
</div>
);
gorevListesi.push(gorevDiv);
}
const tamamlananGorevSayisi = props.yapilacaklar.filter(
(item) => item.tamamlandiMi
).length;
const kalanGorevSayisi = props.yapilacaklar.length - tamamlananGorevSayisi;
return (
<div
style={{width: "500px",height: "300px",backgroundColor: "pink",padding: "20px",}}>
<h2>{props.title}</h2>
{gorevListesi}
<div>Kalan Görev Sayısı: {kalanGorevSayisi}</div>
</div>
);
}