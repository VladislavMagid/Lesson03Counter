let buttonPlus = document.querySelector(".plus");
let buttonMinus = document.querySelector(".minus");
let result = document.querySelector(".resultCounter");

let counter = 0;
console.log(result.value);

let getPlus = () => {
  counter += 1;
  result.textContent = counter;
};