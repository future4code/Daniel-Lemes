validateEmail = ((field) => {
    user = field.value.substring(0, field.value.indexOf("@"));
    domain = field.value.substring(field.value.indexOf("@") + 1, field.value.length);
    if ((user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1) &&
        (domain.lastIndexOf(".") < domain.length - 1)) {
        alert("E-mail enviado com Sucesso! Muito Obrigado, entraremos em contato");
        let msg = document.querySelector("#email_transform");
        msg.innerHTML = "Be welcome " + field.value;
        event.preventDefault();
    
    }
    else if
        ((user.length == "") &&
        (domain.length == "")) {
        alert("preencha o campo de e-mail");
    } else {
        alert("E-mail invalido!");
    }
});

document.querySelector('.element').style.cursor = "pointer";
