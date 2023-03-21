let mesaj = 
`
Migros'a hoşgeldiniz.
Money kartınız var mı?
1-Evet
2-Hayır
`;

const urunler = [
    {
        urunIsmi : "süt",
        fiyat : 15
    },
    {
        urunIsmi : "bebek bezi",
        fiyat : 100
    },

    {
        urunIsmi : "kuşbaşı",
        fiyat : 220
    }
]

// true veya false
let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    // money kartı var
    let isim = prompt("Adınızı giriniz :");
    let soyisim = prompt("Soyisminizi giriniz :");
    
    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
     odenecekTutar = musteri.hesapla();

    alert(
        `Müşteri bilgileri : ${isim} ${soyisim}
        Ödenecek tutar : ${odenecekTutar}
        `);
}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(
        `
        Ödenecek tutar : ${odenecekTutar}
        `);
}