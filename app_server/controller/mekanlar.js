const anaSayfa=function(req,res){
    res.render('anasayfa',{"title": "Ana Sayfa"});
 }
 const mekanBilgisi=function(req,res){
    res.render('mekanbilgisi',{"title": "Mekan Bilgisi"});
}
const yorumEkle=function(req,res){
    res.render('yorumekle',{"title": "Yorum Sayfası"});
}
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
s
}

