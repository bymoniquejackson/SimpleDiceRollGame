
const firstRandomNum =
Math.floor(Math.random()
*6) + 1 

const firstDiceImage = "diceImages/dice" + firstRandomNum + ".png"

document.querySelectorAll
("img")[0].setAttribute ("src", firstDiceImage);



const secondRandomNum =
Math.floor(Math.random()
*6) + 1 

const secondDiceImage = "diceImages/dice" + secondRandomNum + ".png"

document.querySelectorAll
("img")[1].setAttribute ("src", secondDiceImage);










if(firstRandomNum > secondRandomNum)
{document.querySelector
("h1").innerHTML = "The Winner is Player Number One!";
} else if (firstRandomNum < secondRandomNum)
{document.querySelector
    ("h1").innerHTML = "The Winner is Player Number Two!";
} else {document.querySelector
    ("h1").innerHTML = "It's a draw! Roll again if need be!";

}