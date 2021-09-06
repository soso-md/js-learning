const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const pHand = document.querySelector(".player-hand");
    const cHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //remove the animation
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options (randomly generated)
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const cNumber = Math.floor(Math.random() * 3);
        const cChoice = computerOptions[cNumber];

        //wait untill the animation is done
        setTimeout(() => {
          compareHands(option.textContent, cChoice);

          //update imgs
          pHand.src = `./assets/${this.textContent}.png`; // or option.textContent
          cHand.src = `./assets/${cChoice}.png`;
        }, 2000);

        pHand.style.animation = "shakePlayer 2s ease";
        cHand.style.animation = "shakeComputer 2s ease";
      });
    });

    //whos winning
    const winner = document.querySelector(".winner");
    const compareHands = (pChoice, cChoice) => {
      if (pChoice === cChoice) return (winner.textContent = "It is a tie.");
      if (pChoice === "rock") {
        if (cChoice === "scissors") {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();

          return;
        }
      }
      if (pChoice === "paper") {
        if (cChoice === "scissors") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();

          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();

          return;
        }
      }
      if (pChoice === "scissors") {
        if (cChoice === "rock") {
          winner.textContent = "Computer wins!";
          cScore++;
          updateScore();

          return;
        } else {
          winner.textContent = "Player wins!";
          pScore++;
          updateScore();
          return;
        }
      }
    };

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  };

  //call the inner functions
  startGame();
  playMatch();
};

//start the game
game();
