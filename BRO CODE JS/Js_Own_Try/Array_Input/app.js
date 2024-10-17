const arr = [];

function arr_Input() {
  let m = window.prompt("Enter Size of Array:");

  for (let i = 0; i < m; i++) {
    arr[i] = window.prompt("Enter elements of the array: ");
  }
  return arr;
}

const a = arr_Input();

console.log(a);
