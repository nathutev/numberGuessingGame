const ans = Math.floor(Math.random() * 100 + 1);
console.log("Answer is", ans)

let guesses = 0;
let guess = document.getElementById("guessField");

guess.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("submitButton").click();
  }
}); 

document.getElementById("submitButton").onclick = function(){

  let guessValue = guess.value
  guesses += 1;

  if(guesses == 1){
    document.getElementById("guessTracker").innerHTML = 
    "You guessed " + guesses + " time" 
  }
  
  else{
    document.getElementById("guessTracker").innerHTML = 
    "You guessed " + guesses + " times"
  }
  
  if (guessValue == ans){
    document.getElementById("winTracker").innerHTML = "Correct";
  }

  else if (guessValue < ans){
    document.getElementById("winTracker").innerHTML = "Too small";
  }

  else if (guessValue > ans){
    document.getElementById("winTracker").innerHTML = "Too big";
  }
}

