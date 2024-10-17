const grades = [75, 50, 90, 65, 23, 100];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

console.log(maximum);
console.log(minimum);
