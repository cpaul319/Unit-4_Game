var total = 0;  
var wins =0;
var losses=0;
var randomNumber=0;
var greenJewel =0;
var redJewel =0;
var blueJewel =0;
var purpleJewel = 0;
var userClick=0;
function newGame(){
$("#random-number, #totalScore").empty();
$("#totalScore").text(0);
userClick=0;
randomNumber = Math.floor(Math.random()* 101) + 19; 
greenJewel =Math.floor(Math.random() * 12) + 1; 
redJewel = Math.floor(Math.random() * 12) + 1; 
 blueJewel = Math.floor(Math.random() * 12) + 1; 
 purpleJewel = Math.floor(Math.random() * 12) + 1; 

 $("#random-number").text(randomNumber);
}


$("#greenJewel").click(function()  {
    console.log("greenJewel was clicked.");
    getUserClick(greenJewel);
});
$("#redJewel").click(function()  {
    console.log("redJewel was clicked.");
    getUserClick(redJewel);
});
$("#blueJewel").click(function()  {
    console.log("blueJewel was clicked.");
    getUserClick(blueJewel);
});
$("#purpleJewel").click(function()  {
   console.log("purpleJewel was clicked.");
    getUserClick(purpleJewel);
});

newGame();

function getUserClick(userClick){
 total += userClick;
 
 $("#totalScore").text(total);
 if (total === randomNumber){
   
    alert("You win");
    wins++;
    userClick=0;
    total = 0;
    $("#wins").text("Wins " + wins);
    $("#random-number, #totalScore").empty();
    $("#random-number").text(randomNumber);
    console.log(randomNumber);
    newGame();
 } else if( total > randomNumber){
    alert("You lose");
    losses++;
    total = 0;
    userClick=0;
    $("#losses").text("Losses " + losses);
    newGame(); 
 }

}
