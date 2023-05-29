function create_new_result() {
    // Giriş bölümü
    var baslık = document.getElementById("baslık").value;
    var urun_ismi = document.getElementById("urun_ismi").value;
    var dosya_konum = document.getElementById("dosya_konum").files[0]; // Dosya nesnesini al
    var fiyat_tl = document.getElementById("fiyat_tl").value;
    var fiyat_krs = document.getElementById("fiyat_krs").value;

    // Çıkış bölümü
    var baslık_out = document.getElementById("baslık_out");
    var urun_ismi_out = document.getElementById("urun_ismi_out");
    var fiyat_tl_out = document.getElementById("fiyat_tl_out");
    var fiyat_krs_out = document.getElementById("fiyat_krs_out");
    var img_result_out = document.getElementById("img_result_out");

    // Boşlukları kontrol etmek için trim() komutu kullanılmıştır
    if (baslık.trim() === "" || urun_ismi.trim() === "" || dosya_konum === undefined || fiyat_tl.trim() === "" || fiyat_krs.trim() === "") {
        alert("Lütfen tüm alanları doldurunuz.");
    } else {
        baslık_out.textContent = baslık;
        urun_ismi_out.textContent = urun_ismi;
        fiyat_tl_out.textContent = fiyat_tl;
        fiyat_krs_out.textContent = fiyat_krs;

        // Seçilen dosyanın görüntüsünü göster
        var reader = new FileReader();
        reader.onload = function (event) {
            img_result_out.src = event.target.result;
        };
        reader.readAsDataURL(dosya_konum);
    }

    // Temizleme işlemi
    document.getElementById("baslık").value = "";
    document.getElementById("urun_ismi").value = "";
    document.getElementById("dosya_konum").value = "";
    document.getElementById("fiyat_tl").value = "";
    document.getElementById("fiyat_krs_out").textContent = " . " + fiyat_krs;
}
  
function sign_post(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name == "uzeyir-yariz" && password == "aperture"){
        alert("giriş başarılı");
        window.location.href = "/public/panel.html";
    } else{
        alert("İsim yada şifre yanlış");
    }
}

window.onload = function(){
    var bugun = new Date();
    var digerGun = new Date();
    digerGun.setDate(bugun.getDate() + 1);

    var bugununGunu = bugun.getDate();
    var bugununAyı = bugun.toLocaleString('default', { month: 'long' });
    
    var digerGununGunu = digerGun.getDate();
    var digerGununAyı = digerGun.toLocaleString('default', { month: 'long' });

    var tarih = bugununGunu + ' ' + bugununAyı + ' - ' + digerGununGunu + ' ' + digerGununAyı;
    var oto_date_out = document.getElementById("oto_date_out");
    oto_date_out.textContent = tarih;
}