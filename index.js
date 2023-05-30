var currentPath = window.location.href.replace("index.html", "");

function sign_post(){
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    if(name == "uzeyir-yariz" && password == "aperture"){
        alert("giriş başarılı");
        window.location.href = currentPath + "public/panel.html";

        // file:///C:/Users/uzeyi/OneDrive/Masa%C3%BCst%C3%BC/projeler/projeler/Panel_upload/index.html
        // * file:///C:/Users/Dev12/Desktop/Panel-main/public/panel.html
        // * file:///C:/Users/uzeyi/OneDrive/Masa%C3%BCst%C3%BC/projeler/projeler/Panel_upload/public/panel.html

    } else{
        alert("İsim yada şifre yanlış");
    }
}

alert(currentPath);