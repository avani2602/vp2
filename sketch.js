var dog, dogImg, happyDogImg;
var database;
var food, foodStock;
var feed;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {

  database = firebase.database();

  createCanvas(1000, 500);
  
  dog = createSprite(900,250,20,40);
  dog.scale = 0.2;
  dog.addImage("normal", dogImg);

}


function draw() {  

  background("lightGreen");
  drawSprites();
  textSize(20);
  fill("black");
  stroke("green");
  text("Remaining Food: " + food, 170, 50);

  feed = createButton("Feed Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

}


function feedDog(){
  dog.addImage(happyDogImg);

  FoodC.updateFoodStock(food.getFoodStock()-1);
  database.ref("/").update({
    food: FoodC.getFoodStock()
  })
}


