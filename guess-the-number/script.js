const guessedNumber = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-btn");
const startButton = document.querySelector(".start-btn");

const result = document.createElement("h3");
const guessHistory = document.querySelector(".guess-history");

const answer = Math.round(Math.random() * 100);

console.log(Math.round(answer));

submitButton.addEventListener("click", () => {
  const guess = Number(guessedNumber.value);
  if (guess > answer) {
    result.innerHTML = "You are high on number";
  } else if (guess < answer) {
    result.innerHTML = "You are low on number";
  } else {
    result.innerHTML = "Congratulations! You have guessed the right number";
    startButton.style.disabled = "false";
    startButton.style.cursor = "pointer";
    startButton.style.color = "white";
    submitButton.style.disabled;
    submitButton.style.cursor = "not-allowed";
    submitButton.style.color = "none";
  }
  document.querySelector(".result").append(result);
  guessHistory.append(guess + " ,");
});

startButton.addEventListener("click", () => {
  result.innerHTML = "";
  guessHistory.innerHTML = "";
    guessedNumber.value = "";
    
  answer = Math.round(Math.random() * 100);

  startButton.style.disabled = "true";
  startButton.style.cursor = "not-allowed";
  startButton.style.color = "default";
  submitButton.style.disabled = "false";
  submitButton.style.cursor = "pointer";
  submitButton.style.color = "white";
});

guessedNumber.addEventListener("change", () => {
  const guess = guessedNumber.valueAsNumber;
  if (Number.isNaN(guess)) {
    guessedNumber.value = 1;
  }
});
