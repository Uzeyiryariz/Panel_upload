function sign_post(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name == "uzeyir-yariz" && password == "aperture"){
        alert("giriş başarılı");
        window.location.href = "file:///C:/Users/Dev12/Desktop/Panel-main/public/panel.html";
    } else{
        alert("İsim yada şifre yanlış");
    }
}