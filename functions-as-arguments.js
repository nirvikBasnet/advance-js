let Addition = (a, b) => {
  return a + b;
};

let Substraction = (a, b) => {
  return a - b;
};

let Multiplication = (a, b) => {
  return a * b;
};

let Division = (a, b) => {
  return a / b;
};

function Calculation(a, b, operator) {
  return operator(a, b);
}

let result = Calculation(5, 10, Multiplication);
console.log(result);
