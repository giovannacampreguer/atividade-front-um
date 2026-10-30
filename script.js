const musicas = document.querySelectorAll(".musica");

const tituloMusica = document.getElementById("titulo-musica");

const informacoesMusica = document.getElementById("informacoes-musica");

musicas.forEach(musica => {
  musica.addEventListener("click", () => {

    musicas.forEach(item => {
      item.classList.remove("selecionada");
    });

    musica.classList.add("selecionada");

    const titulo = musica.dataset.titulo;
    const artista = musica.dataset.artista;
    const album = musica.dataset.album;
    const ano = musica.dataset.ano;

    tituloMusica.textContent = titulo;

    informacoesMusica.textContent = `${artista} - ${album} - ${ano}`;
  });
});
