console.log("**app.JS LOADED**");

const options = ["Rock", "Paper", "Scissors"];

const theGame = {
  userScore: 0,
  computerScore: 0,

  userChoice: null,
  computerChoice: null,

  randomChoice: function() {
    let randomChoice = Math.floor((Math.random() * 3))
    this.computerChoice = options[randomChoice];
  },

  gameOutcome: function() {

    // ROCK CRUSHES SCISSORS
    if (theGame.userChoice === "Rock" && theGame.computerChoice === "Scissors") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Rock Blunts Scissors")
    } else if (theGame.computerChoice === "Rock" && theGame.userChoice === "Scissors") {
      theGame.computerScore += 1
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Rock Blunts Scissors")
      // ROCK CRUSHES LIZARD
    } else if (theGame.userChoice === "Rock" && theGame.computerChoice === "Lizard") {
      theGame.userScore += 1
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Rock Crushes Lizard")
    } else if (theGame.computerChoice === "Rock" && theGame.userChoice === "Lizard") {
      theGame.computerScore += 1
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Rock Crushes Lizard")

      //SCISSORS CUTS PAPER
    } else if (theGame.userChoice === "Scissors" && theGame.computerChoice === "Paper") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Scissors Beats Paper")
    } else if (theGame.computerChoice === "Scissors" && theGame.userChoice === "Paper") {
      theGame.computerScore += 1
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("ComputerWins - Rock Beats Scissors")

      //PAPER COVERS ROCK
    } else if (theGame.userChoice === "Paper" && theGame.computerChoice === "Rock") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Paper Beats Rock")
    } else if (theGame.computerChoice === "Paper" && theGame.UserChoice === "Rock") {
      theGame.computerScore += 1
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Paper Beats Rock")

      // LIZARD POISONS SPOCK
    } else if (theGame.userChoice === "Lizard" && theGame.computerChoice === "Spock") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Lizard Poisons Spock")
    } else if (theGame.computerChoice === "Lizard" && theGame.userChoice === "Spock") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Lizard Poisons Spock")

      //SPOCK SMASHES SCISSORS
    } else if (theGame.userChoice === "Spock" && theGame.computerChoice === "Scissors") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Spock Smashes Scissors")
    } else if (theGame.computerChoice === "Spock" && theGame.userChoice === "Scissors") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Spock Smashes Scissors")

      // SCISSORS DECAPITATE LIZARD
    } else if (theGame.userChoice === "Scissors" && theGame.computerChoice === "Lizard") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Scissors Decapitates Lizard")
    } else if (theGame.computerChoice === "Scissors" && theGame.userChoice === "Lizard") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Scissors Decapitates Lizard")

      // LIZARD EATS PAPER
    } else if (theGame.userChoice === "Lizard" && theGame.computerChoice === "Paper") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Lizard Eats Paper")
    } else if (theGame.computerChoice === "Lizard" && theGame.userChoice === "Paper") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Lizard Eats Paper")

      // PAPER DISPROVES SPOCK
    } else if (theGame.userChoice === "Paper" && theGame.computerChoice === "Spock") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Paper Disproves Spock")
    } else if (theGame.computerChoice === "Paper" && theGame.userChoice === "Spock") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Paper Disproves Spock")

      // SPOCK VAPORISES ROCK
    } else if (theGame.userChoice === "Spock" && theGame.computerChoice === "Rock") {
      theGame.userScore += 1;
      $("#user-score").html(theGame.userScore);
      $("#resultMessage").html("User Wins - Spock Vaporises Rock")
    } else if (theGame.computerChoice === "Spock" && theGame.userChoice === "Rock") {
      theGame.computerScore += 1;
      $("#computer-score").html(theGame.computerScore);
      $("#resultMessage").html("Computer Wins - Spock Vaporises Rock")

    } else {
      console.log("DRAW");
      $("#resultMessage").html("DRAW! Go Again!")
    };
  },

};
