let campoIdade;
let campoViolência;
let campoTerror;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoViolência = createCheckbox("Gosta de violência?");
  campoTerror = createCheckbox("Gosta de terror?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeViolência = campoViolência.checked();
  let gostaDeTerror = campoTerror.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeViolência, gostaDeTerror);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeViolência, gostaDeTerror) {
  if (idade >= 16) {
    if (idade >= 18) {
      return "Annabelle";
    } else {
      if (idade >= 14) {
        if(gostaDeTerror || gostaDeViolência) {
          return "PÂNICO";          
        } else{
         return "Jogos Mortais 2";
        }
      } else {
        if (gostaDeTerror) {
          return "Halloween Kills: O Terror Continua";
        } else {
          return "It: A Coisa";
        }
      }
    }
  } else {
    if (gostaDeViolência) {
      return "Evil - Contatos Sobrenaturais";
    } else {
      return "Pânico 2022";
    }
  }
}