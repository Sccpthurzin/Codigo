var database

var Fundo

var formulario1

var jogo1

var jogador1

function preload(){

  Fundo = loadImage ("./assets/planodefundo.png");

}



function setup(){

database=firebase.database();

createCanvas (windowWidth,windowHeight);

jogo1=new jogo();
jogo1.Start();
}
function draw(){
background(Fundo);


}
function windowResized(){
resizeCanvas(windowWidth, windowHeight); }





















