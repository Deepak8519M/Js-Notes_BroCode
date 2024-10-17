const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min) + min);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between our ${min} - ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("Please enter a valid number");
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("Too Low try again");
    } else if (guess > answer) {
      window.alert("Too High! try again");
    } else {
      window.alert(
        `Correct ! The answer is ${answer}, It took you ${attempts} attempts`
      );
      running = false;
    }
  }
}
