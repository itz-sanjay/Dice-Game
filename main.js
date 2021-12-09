// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}


// Result   
    const button = document.querySelector("#roll-btn");
    const result = document.querySelector("h1");

// Function to roll the dice
    function diceRoll () {

        const randomNumber1 = Math.floor( Math.random() * 6 ) + 1;
        const randomNumber2 = Math.floor( Math.random() * 6 ) + 1;

        var randomDiceImage1 = "dice" + randomNumber1 + ".png";
        var randomDiceImage2 = "dice" + randomNumber2 + ".png";

        document.querySelectorAll("#img1")[0].setAttribute("src", "images/"+ randomDiceImage1);
    
        document.querySelectorAll("#img2")[0].setAttribute("src", "images/"+ randomDiceImage2);

        if(randomNumber1 > randomNumber2){
             result.innerHTML= "🏁Player 1 Wins !";
        }
        else if(randomNumber1 < randomNumber2){
            result.innerHTML= "🏁Player 2 Wins !";
        }
        else{
             result.innerHTML= "✌️Draw !";
        }
    }

    button.addEventListener('click', diceRoll);
