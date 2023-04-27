
console.log("loaded successfully!");


function rollTheDice() {
    setTimeout(function() {
        let player1 = prompt("player 1 name :")
        let player2 = prompt("player 2 name :")
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        console.log("dice1: " + randomNumber1 + " dice2 "+ randomNumber2); //debugging purpose.
        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "it's a Draw!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                = (player2 +"  WINS!");
        }

        else {
            document.querySelector("h1").innerHTML
                = ( player1 + " WINS!");
        }
    }, 1000);
}
rollTheDice();