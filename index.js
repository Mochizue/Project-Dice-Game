


// Onload animation

window.onload = function(){

  document.querySelector(".main-content-container").classList.add("show");

}

function roller(){

  DiceRoller();

}

// Dice game code:

function DiceRoller(){

  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomNum2 = Math.floor(Math.random() * 6) + 1;
  let title = document.querySelector("h1");
  let RandomImgGenerator = document.querySelectorAll("img")[1].setAttribute("src","./images/dice-" + randomNum1 + ".png");
  let RandomImgGenerator2 = document.querySelectorAll("img")[2].setAttribute("src","./images/dice-" + randomNum2 + ".png");

  if(randomNum1 > randomNum2){

    title.textContent = " Player 1 wins!";

  }
  else if(randomNum2 > randomNum1){

    title.textContent = " Player 2 wins!";

  }
  else{

    title.textContent = " Draw!";

  }

}



