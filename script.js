function irPara(telaId) {
  document.querySelectorAll('.tela').forEach(tela => {
    tela.classList.remove('ativa');
  });
  document.getElementById(telaId).classList.add('ativa');
}

function cadastrarUsuario(event) {
  event.preventDefault();
  const nome = document.getElementById("cad-nome").value;
  const email = document.getElementById("cad-email").value;
  const senha = document.getElementById("cad-senha").value;

  const user = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(user));

  alert("Cadastro realizado com sucesso!");
  irPara('login');
}

function loginUsuario(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario && usuario.email === email && usuario.senha === senha) {
    irPara('chat');
  } else {
    alert("Email ou senha incorretos!");
  }
}

// Frases com animação de digitação
const frases = [
  "Sou o seu advogado virtual.",
  "Como posso ajudá-lo(a) hoje?",
  "Tem dúvidas sobre os seus direitos?",
  "Fale comigo, estou aqui para ajudar."
];

let indexFrase = 0;
let indexLetra = 0;
const texto = document.getElementById("texto-animado");

function digitarFrase() {
  if (!texto) return;
  if (indexLetra < frases[indexFrase].length) {
    texto.textContent += frases[indexFrase][indexLetra];
    indexLetra++;
    setTimeout(digitarFrase, 80);
  } else {
    setTimeout(() => {
      texto.textContent = "";
      indexFrase = (indexFrase + 1) % frases.length;
      indexLetra = 0;
      digitarFrase();
    }, 2500);
  }
}

digitarFrase();
