const musicas = document.querySelectorAll(".musica");
const tituloMusica = document.getElementById("titulo-musica");
const informacoesMusica = document.getElementById("informacoes-musica");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");

musicas.forEach(musica => {
  musica.onclick = () => {

    musicas.forEach(item => item.classList.remove("selecionada"));
    musica.classList.add("selecionada");

    document.getElementById("inicio").style.setProperty(
      "--imagem-fundo",
      `url("${musica.dataset.capa}")`
    );

    tituloMusica.textContent = musica.dataset.titulo;

    informacoesMusica.textContent =
      `${musica.dataset.artista} - ${musica.dataset.album} - ${musica.dataset.ano}`;

    like.classList.remove("ativo");
    dislike.classList.remove("ativo");
  };
});

like.onclick = () => {
  like.classList.toggle("ativo");
  dislike.classList.remove("ativo");
};

dislike.onclick = () => {
  dislike.classList.toggle("ativo");
  like.classList.remove("ativo");
};

const menuMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu");

menuMobile.onclick = () => {
  menu.classList.toggle("aberto");
};