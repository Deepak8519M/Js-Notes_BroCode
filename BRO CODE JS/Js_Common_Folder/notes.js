function combineString(...strings) {
  return strings.join(" ");
}

const fullName = combineString("Ajay", "Shukla", "Vas ", "Sharma");
console.log(fullName);
// function sum(...numbers) {
//   let result = 0;

//   for (number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(10, 20, 30, 405, 50, 60);
// console.log(`Your total is ${total} $`);

// function getAvg(...numbers) {
//   let result = 0;

//   for (number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const avg = getAvg(10, 20, 30, 405, 50, 60);
// console.log(`Your total avg is ${avg} $`);

// function openFridge(...food) {
//   console.log(...food);
// }

// function getFoods(...food) {
//   return food;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "burger";
// const food4 = "sushi";

// // openFridge(food1, food2, food3, food4);

// const a = getFoods(food1, food2, food3, food4);
// console.log(a);
