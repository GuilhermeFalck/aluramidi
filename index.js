function tocarSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);

  if (elemento === null) {
    alert("Esse elemento não encontrado ou seletor inválido");
  } else {
    if (elemento.localName === "audio") {
      elemento.play();
    }
  }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;

//enquanto
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];
//   //template string
//   const idAudio = `#som_${instrumento}`;

//   console.log(idAudio);

//   tecla.onclick = function () {
//     tocarSom(idAudio);
//   };

//   contador = contador + 1;

//   console.log(contador);
// }

for (contador; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  //template string
  const idAudio = `#som_${instrumento}`;

  console.log(contador);
  console.log(idAudio);

  tecla.onclick = function () {
    tocarSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code == "Space" || evento.code == "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
