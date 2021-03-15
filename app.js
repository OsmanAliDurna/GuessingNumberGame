confirm(
  "Hello! Let's play a game. Keep a number in your mind and I try to find it at most 7th step?\nThere will be some rules of course.\nIf I found your number please write just 'OK'.\nIf your number is bigger than mine only write 'UP' otw. write 'DOWN'\nRemember that: These commands are case sensitive"
);

let resultPrompt = prompt(
  "Keep a number in your mind between 1 - 100 \nIf you are ready, here is my first prediction : 50"
);

let myGuess = 50;
let lastNumb = 100;
let firstNumb = 1;

for (let i = 0; i < 7; i++) {
  if (resultPrompt == "OK") {
    alert("Is it really '" + myGuess + "'. HAH as I said I found it at " + i + "steps.");
    break;
  } else if (resultPrompt == "UP") {
    firstNumb = myGuess;
    myGuess = Math.floor((myGuess + lastNumb) / 2);
    resultPrompt = prompt("I think I need bigger one. What about " + myGuess);
  } else if (resultPrompt == "DOWN") {
    lastNumb = myGuess;
    myGuess = Math.floor((myGuess + firstNumb) / 2);
    resultPrompt = prompt("I think I need smaller one. What about " + myGuess);
  } else {
    alert(
      "C'mon you have to write only (OK, UP, DOWN).\nThat's a simple and an easy rule\nIf you don't follow the rule BB..."
    );
    break;
  }
}
