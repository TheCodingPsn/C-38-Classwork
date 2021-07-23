var database;
var position;

var game, player, form;
var car1, car2, car3, car4;
var cars;
var mygameState=0, myPlayerCount;


var allPlayersInfo;//this is an array to store players info


function setup(){

  database = firebase.database();
  console.log(database);


  createCanvas(displayWidth/2, displayHeight/2);

  
  game = new Game();
  game.start();

  
}

function draw(){
  
  background("white");

  if(myPlayerCount === 4){
    game.updateGameState(1);
  }

  if(mygameState === 1){
    clear();
    game.play();
  }
  
}

