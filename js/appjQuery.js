console.log("**appJquery.JS LOADED**");


$("#rock").on("click", function() {
  theGame.randomChoice();
  console.log("COMPUTER: " + theGame.computerChoice);
  theGame.userChoice = "Rock";
  console.log("USER: " + theGame.userChoice);
  theGame.gameOutcome();
});

$("#paper").on("click", function() {
  theGame.randomChoice();
  console.log("COMPUTER: " + theGame.computerChoice);
  theGame.userChoice = "Paper";
  console.log("USER: " + theGame.userChoice);
  theGame.gameOutcome();
});

$("#scissors").on("click", function() {
  theGame.randomChoice();
  console.log("COMPUTER: " + theGame.computerChoice);
  theGame.userChoice = "Scissors";
  console.log("USER: " + theGame.userChoice)
  theGame.gameOutcome();
});

$("#lizard").on("click", function() {
  theGame.randomChoice();
  console.log("COMPUTER: " + theGame.computerChoice);
  theGame.userChoice = "Lizard";
  console.log("USER: " + theGame.userChoice)
  theGame.gameOutcome();
});

$("#spock").on("click", function() {
  theGame.randomChoice();
  console.log("COMPUTER: " + theGame.computerChoice);
  theGame.userChoice = "Spock";
  console.log("USER: " + theGame.userChoice)
  theGame.gameOutcome();
});
