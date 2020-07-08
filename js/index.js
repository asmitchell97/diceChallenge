/************************

Index script for random dice generation

*/

//Get two random numbers
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;

//Set the player 1 dice to the random number
var player1Dice = document.querySelector(".dice .img1");
player1Dice.setAttribute("src", "images/dice" + randomNumber1 + ".png");

//Set the player 2 dice to random nummber
var player2Dice = document.querySelector(".dice .img2");
player2Dice.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Change the title depending on winner
var title = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
  title.textContent = "🚩 Player 1 wins!";
}
else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 wins! 🚩";
}
else {
  title.textContent = "Draw!";
}
