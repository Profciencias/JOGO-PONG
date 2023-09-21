//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 2;
let velocidadeyBolinha = 2;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let alturaRaquete = 90;
let larguraRaquete = 10;

//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;
let colidiu;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(); 
  movimentaMinhaRaquete ();
  verificaColisaoRaquete ();
  mostraRaqueteOponente ();
  movimentaRaqueteOponente ();
  verificaColisaoOponente ();
  mostraPlacar ();
  marcaPontos ();
}

function mostraBolinha (){
  fill ("yellow")
  circle (xBolinha,yBolinha,diametro); 
}

function movimentaBolinha(){ xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;}
  
  function verificaColisaoBorda (){
      if (xBolinha + raio> width || xBolinha -raio <0){velocidadexBolinha *=-1;}
  if (yBolinha + raio> height || yBolinha - raio <0){velocidadeyBolinha *=-1;}
  
}
  
function mostraRaquete(){
  fill ("white")
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  
}
function mostraRaqueteOponente(){
  fill ("white")
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
  
}

function movimentaMinhaRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if  (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
}
}
function movimentaRaqueteOponente () {
 if (keyIsDown (87)){
    yRaqueteOponente -= 10;
  }
  if  (keyIsDown (83)){
    yRaqueteOponente += 10;
}
}
function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento &&
      yBolinha - raio < yRaquete + raqueteAltura &&
      yBolinha - raio > yRaquete){
      velocidadexBolinha *= -1;
  }
}

function verificaColisaoOponente (){
 colidiu = collideRectCircle (xRaqueteOponente, yRaqueteOponente, larguraRaquete,alturaRaquete, xBolinha, yBolinha, raio);
  
  if (colidiu ==true){
    velocidadexBolinha *= -1;
  }
}

function mostraPlacar (){
  fill("white")
  text(meusPontos,200,30);
  text(pontosDoOponente, 320,30);
}

function marcaPontos(){
  if (xBolinha > 580){
  meusPontos += 1;}

  if (xBolinha < 20){
    pontosDoOponente +=1;
  }
}