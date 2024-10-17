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

const a = arr_Input();

console.log(a);
