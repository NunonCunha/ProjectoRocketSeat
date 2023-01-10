function toggleMode() {
  const body = document.body;

  //   if (body.classList.contains("light")) {
  //     body.classList.remove("light");
  //   } else {
  //     body.classList.add("light");
  //   }

  body.classList.toggle("light");

  //aceder a tag img
  const image = document.querySelector(".profile-image");

  if (body.classList.contains("light")) {
    image.setAttribute("src", "assets/images/FotoDoCidadao2.png");
    image.setAttribute("alt", "O Nuno de ocúlos escuros");
  } else {
    image.setAttribute("src", "assets/images/FotoDoCidadao.png");
    image.setAttribute("alt", "O Nuno sem ocúlos");
  }

  //Alterar a imagem em função do modo
}
