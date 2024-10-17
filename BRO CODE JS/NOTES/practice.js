// allowedChars += includeLowerCase ? lowercaseChars : "";

// can we access the chars of string using index or not?

// -------------------------------------------------------------
// function a(callback) {
//   console.log("Hi Hello ");
//   callback();
// }

// function b() {
//   console.log("Bye");
// }

// a(b);
// -------------------------------------------------------------
// function a(cb) {
//   console.log("Hello");
// cb();
// }

// a(setTimeout(() => console.log("Bye"), 3000));
// -------------------------------------------------------------
// const a = [1, 2, 3, 4, 5];

// const square = a.map((element) => Math.pow(element, 2));

// console.log(square);

const obj1 = {
  firstName: "Ajay",
  lastName: "Shukla",
  age: 12,
  dob: "14-june-2016",
  address: {
    doorNo: "14/c-area",
    city: "NYC",
    country: "USA",
  },
  info: function () {
    console.log(
      `Your fullname is ${
        this.firstName + this.lastName
      } and your age and dob is ${age},${this.dob}`
    );
  },
  greet,
};

obj1.info();

greet = () => console.log(`Your name is ${this.firstName}`);

obj1.greet();

() => console.log("Hello");
