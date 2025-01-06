const botao = document.getElementById("enviarBtn");
botao.addEventListener("click", (ev) => {
  ev.preventDefault();
  validarInputs();
});

function validarInputs() {
  const nome = document.getElementById("nome");
  const erroNome = document.getElementById("erro-nome");

  let erro = false;

  if (!nome.value) {
    erro = true;
    erroNome.textContent = "Por favor, preencha o nome.";
  } else {
    erroNome.textContent = "";
  }

  const email = document.getElementById("email");
  const erroEmail = document.getElementById("erro-email");

  if (!email.value) {
    erro = true;
    erroEmail.textContent = "Por favor, preencha o e-mail.";
  } else {
    erroEmail.textContent = "";
  }

  const idade = document.getElementById("idade");
  const erroIdade = document.getElementById("erro-idade");

  if (!idade.value) {
    erro = true;
    erroIdade.textContent = "Por favor, preencha a idade.";
  } else {
    if (idade.value < 18) {
      erro = true;
      erroIdade.textContent = "Você deve ter pelo menos 18 anos.";
    } else {
      erroIdade.textContent = "";
    }
  }

  if (!erro) {
    window.location.href = "../tabela/table.html";
  }
}
