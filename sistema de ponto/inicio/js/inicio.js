// Define uma função para ser executada quando a página é carregada
window.onload = () => {
  // Verifica se existe uma preferência de tema salva no armazenamento local do navegador, caso contrário, define como "dark"
  const theme = window.localStorage.getItem("theme") ?? "dark";
  // Chama a função changeTheme() com o tema atual
  changeTheme(theme);
};

// Define uma função para ser executada quando o usuário altera o botão de alternância de tema
const onThemeChange = () => {
  // Obtém o estado atual do botão de alternância de tema
  const checkbox = document.getElementById("switch");
  // Define o tema com base no estado do botão de alternância ("dark" se estiver ativo, "light" caso contrário)
  const theme = checkbox.checked ? "dark" : "light";
  // Chama a função changeTheme() com o tema selecionado
  changeTheme(theme);
};

// Define uma função para alterar o tema da página
const changeTheme = (theme) => {
  // Obtém o elemento de ilustração da página e define sua imagem de fundo com base no tema selecionado
  const illustration = document.getElementById("illustration");
  const checkbox = document.getElementById("switch");
  checkbox.checked = theme === "dark";
  // Salva o tema selecionado no armazenamento local do navegador
  window.localStorage.setItem("theme", theme);
  // Define o atributo "data-theme" do elemento raiz HTML com base no tema selecionado
  document.documentElement.setAttribute("data-theme", theme);
  // Imprime o tema atual no console
  console.log(theme);

};

  