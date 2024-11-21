
const imgbanner = document.getElementById("bannerimg");

function RunBanner(temp) {
  const images = ['./midias/academia2.png', './midias/academia3.png', './midias/academia4.png']; 
  let index = 0;

  setInterval(() => {
    imgbanner.src = images[index];
    index = (index + 1) % images.length;
  }, temp);
}

document.addEventListener("DOMContentLoaded", RunBanner(2500));


function validarTelefone(telefone) {
    let regex = /^\(?([0-9]{2})\)?[-. ]?([0-9]{4,5})[-. ]?([0-9]{4})$/;
    return regex.test(telefone);
}

function validarData(data) {
    let regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(data);
}

function validarSexo(sexo) {
    let opcoes = ['masculino', 'feminino'];
    return opcoes.includes(sexo);
}

function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let data = document.getElementById('data').value;
    let sexo = document.getElementById('sexo').value;

    if (nome == '' || nome == null) {
        alert('O nome é obrigatório');
        return false;
    }

    if (email == '' || email == null) {
        alert('O email é obrigatório');
        return false;
    }

    if (!validarTelefone(telefone)) {
        alert('O telefone precisa estar no formato (xx)xxxxx-xxxx');
        return false;
    }

    if (!validarData(data)) {
        alert('A data precisa estar no formato AAAA-MM-DD');
        return false;
    }

    if (!validarSexo(sexo)) {
        alert('O sexo precisa ser masculino ou feminino');
        return false;
    }

    return true;
}

document.getElementById('enviar').addEventListener('click', (e) => {
    e.preventDefault();
    if (validarFormulario()) {
        document.getElementById('formulario').submit();
    }
});

