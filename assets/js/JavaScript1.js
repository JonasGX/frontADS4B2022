function Enviar() {
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid")

    alert(nome)
    if(email.value == "" || nome.value == ""){
        alert('=========Campo E-mail ou Nome Vazio============')
    }
    else if (nome.value) {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
}

function Mostrar() { 
    var nome = document.getElementById("nomeid");
    document.getElementById("campo").innerHTML = nome;
    alert(nome)
}
