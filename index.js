// working on random number so i can get one and complete the random procedure
 var randomNumber1 = Math.floor(Math.random()*6)+1;  // using math function for random number and multiplying it so we can get a random number between one to five and adding one so using floor
var randomDiceimage = "dice"+ randomNumber1 + ".jpeg"; //taking image and manipulating with random no.
var randomimagesource = "images/" + randomDiceimage; // our mage is in images folder so using this but we can do this in upper line but just doing for some clarity
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2 = Math.floor(Math.random()*6)+1;  // using math function for random number and multiplying it so we can get a random number between one to five and adding one so using floor
var randomimagesource2 = "images/dice"+ randomNumber2 + ".jpeg"; //taking image and manipulating with random no. // our mage is in images folder so using this but we can do this in upper line but just doing for some clarity
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);


 //using if else statement to print the result
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "__#😁player 1 wins";}
   
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "__##player 2 wins😁😁";}

        else{
        document.querySelector("h1").innerHTML = "__#😁DRAW😁";}
