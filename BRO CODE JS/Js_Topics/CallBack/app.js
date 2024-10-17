function sum(x, y, callback) {
  let result = x + y;
  callback(result);
}

function showResult(result) {
  console.log(`You'r result is ${result}`);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}

sum(10, 20, showResult);
sum(10, 20, displayPage);

// function hello(callback) {
//   console.log("Hello");
//   callback();
// }

// function goodBye() {
//   console.log("Good Bye");
// }
// function wait() {
//   console.log("wait");
// }

// hello(wait);
