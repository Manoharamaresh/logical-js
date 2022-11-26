//to convert letter of a given string in alphabetical order

// var str = "manohar";

// !area of a circle

// let area = 0;
// let r = prompt("enter radius");
// area += 3.14 * r * r;
// document.write(area);

//! area of a triangle

// let area = 0;
// let base = prompt("enter the base ");
// let height = prompt("enter the height");
// area += 0.5 * base * height;
// document.write("area of triangle is", area);

// ! Armstrong number

// let num = prompt("enter a number");
// let sum = 0;
// for (i = 0; i < num.length; i++) {
//   sum += num[i] ** num.length;
// }
// console.log(sum);
// if (sum == num) {
//   console.log("it is a armstrong number");
// } else {
//   console.log("it is not a armstrong number");
// }

//! empty an array
// let arr = [1, 2, 3, 4];
// arr == null ? console.log(arr) : console.log("");

// ! array into object

// var arr = [1, 2, 3, 4];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[i] = arr[i];
// }
// console.log(obj);

// ! ascending array

// let arr = [20, 10, 30, 5];
// for (let i = 1; i < arr.length; i++) {
//   for (j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       x = arr[i];
//       arr[i] = arr[j];
//       arr[j] = x;
//     }
//   }
// }
// console.log(arr);

// !average of n numbers

// let start = parseInt(prompt("enter starting number"));
// let end = parseInt(prompt("enter end number"));
// let count = (end - start) + 1;
// let total = 0;
// let avg = 0;
// for (i = start; i <= end; i++) {
//   total += i;
//   avg = total / count;
// }

// console.log(avg);

//! calculator

// const n1 = prompt("enter n1");
// const n2 = prompt("enter n2");
// const operator = "*";
// switch (operator) {
//   case "+": {
//     console.log(n1 + n2);
//     break;
//   }
//   case "-": {
//     console.log(n1 - n2);
//     break;
//   }
//   case "*": {
//     parseInt(console.log(n1 * n2));
//     break;
//   }
//   case "/": {
//     console.log(n1 / n2);
//     break;
//   }
//   default: {
//     console.log("enter valid number");
//   }
// }

// !celsius to fahrenheit

// let tempInCelsius = prompt("enter temperature in celcius");
// let tempInFahrenheit = tempInCelsius * (9 / 5) + 32;
// console.log(tempInFahrenheit);

// ! fibonacci series

var n1 = 0;
var n2 = 1;
var result = 0;
var number = 10;
result = n1 + n2;

while (result <= number) {
  n1 = n2;
  n2 = result;
  result = n1 + n2;
}
console.log(result);