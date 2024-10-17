function arr_Input() {
  let arr = [];
  let size = parseInt(window.prompt("Enter Size of Array:"), 10);

  // Validate the size input
  if (isNaN(size) || size <= 0) {
    alert("Please enter a valid number greater than 0.");
    return arr;
  }

  // Loop to collect elements
  for (let i = 0; i < size; i++) {
    let element = window.prompt(`Enter element ${i + 1} of the array:`).trim();
    arr.push(element); // Dynamically add elements
  }

  // Confirming completion to the user
  alert("Array input is complete!");

  return arr;
}

function rand_Arr(arr) {
  let b = [];
  if (arr.length % 2 === 0) {
    for (let i = 0; i < arr.length / 2; i++) {
      let random = Math.floor(Math.random() * arr.length);
      b.push(random);
    }
  } else if (arr.length % 2 !== 0) {
    for (let i = 0; i < arr.length / 2 + 1; i++) {
      let random = Math.floor(Math.random() * arr.length);
      b.push(random);
    }
  }
  alert(`Random selection has been done`);
  return b;
}

const a = arr_Input();

const c = rand_Arr(a);

console.log(`Random Numbers out of the array are :  ${c}`);
