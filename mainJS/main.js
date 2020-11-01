const { multiply, divide, square, sum } = require("./math-module.js");
const { firstChar, compare, reverse } = require("./strings-module.js");

// sums = sum(10, 5);
// multiplys = multiply(2, 5);
// divides = divide(20, 10);
// squares = square(5);

console.log(sum(10, 5));
console.log(multiply(2, 5));
console.log(divide(20, 10));
console.log(square(5));

console.log(firstChar("cat"));
console.log(compare("cat", "dog"));
console.log(reverse("cat"));
