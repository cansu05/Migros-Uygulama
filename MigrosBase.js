class MigrosBase {
    indirimOrani = 20;
    constructor(isim,soyisim,kartVarmi,urunler) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi = kartVarmi;
        this.urunler = urunler;
    }

    hesapla(){

        let odenecekTutar = 0;

        if(this.urunlerKontrolEt(this.urunler)){
            // sepet dolu
            if(this.kartVarmi){
                // money kart varsa
                this.urunler.forEach((urun) => {
                    odenecekTutar += (urun.fiyat*(100-this.indirimOrani)/100);
                });
            }else{
                // yoksa
                this.urunler.forEach((urun) => {
                    odenecekTutar += urun.fiyat;
                });
            }
        // boş   
        }else{
            alert("Sepetiniz boş..");
        }
        return odenecekTutar;
    }

    urunlerKontrolEt(urunler){
        if(urunler != null && urunler.length>0){
            return true;
        }else{
            return false;
        }
    }
}